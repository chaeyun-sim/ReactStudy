import { Collapse, Checkbox } from "antd";
import React, { Fragment } from "react";
import datas from "./Data"

const CheckBox = (props) => {
    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
            <Fragment key={index}>
                <Checkbox>
                    <span>{value.name}</span>
                </Checkbox>
            </Fragment>
        )
    );

    return (
        <div>
            <Collapse defaultActiveKey={['1']}>
                <Collapse.Panel header="This is panel header">
                {renderCheckboxLists()}
                
                </Collapse.Panel>
            </Collapse>
        </div>    
    )
};

export default CheckBox;