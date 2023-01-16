import React, { Fragment, useState } from "react";
import { Collapse, Radio } from "antd";
import RadioGroup from "antd/lib/radio/group";

function RadioBox(props){
    const [valueState, setValue] = useState(0);

    const renderRadioBox = () => props.list && props.list.map((value) => (
        <Fragment key={value._id}>
            <Radio value={value._id}>{value.name}</Radio>
        </Fragment>
        )
    );

    const handleChange = (event) => {
        setValue(event.target.value);
        props.handleFilters(event.target.value)
        // const values = event.target.value;
        // setValue(values);
        // props.handleFilters(values);
    };

    return (
        <div>
            <Collapse defaultActiveKey={['1']}>
                <Collapse.Panel header="💰 Choose your Budget">
                    <RadioGroup onChange={handleChange} value={valueState}>
                        {renderRadioBox()}
                    </RadioGroup>
                </Collapse.Panel>
            </Collapse>
        </div>    
    )
};

export default RadioBox;