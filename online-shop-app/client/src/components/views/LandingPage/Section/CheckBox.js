import { Collapse, Checkbox } from "antd";
import React, { Fragment, useState } from "react";

const CheckBox = (props) => {
    const [checked, setChecked] = useState([]);

    const toggleHandler = (id) => {
        const currentIndex = checked.indexOf(id)
        const newChecked = [...checked]

        if(currentIndex === -1){
            newChecked.push(id)
        } else {
            newChecked.splice(currentIndex, 1)
        };

        setChecked(newChecked);
        props.handleFilters(newChecked);
        // console.log(newChecked)
    };

    const renderCheckboxLists = () => props.list && props.list.map((continent, index) => (
            <Fragment key={continent._id}>
                <Checkbox checked={checked.indexOf(continent._id) === -1 ? false : true} onChange={() => toggleHandler(continent._id)}>
                    <span>{continent.name}</span>
                </Checkbox>
            </Fragment>
        )
    );

    return (
        <div>
            <Collapse defaultActiveKey={['1']}>
                <Collapse.Panel header="This is checkbox">
                    {renderCheckboxLists()}
                </Collapse.Panel>
            </Collapse>
        </div>    
    )
};

export default CheckBox;