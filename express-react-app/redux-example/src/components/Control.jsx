import React, {Component} from "react";
import PropTypes from 'prop-types';


const createWarning = (funcName) => {
    return () => {
        console.warn(funcName + ' is not defined');
    }
}

class Control extends Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomColor}>Randomize Color</button>
            </div>
        );
    }
}

Control.propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomColor: PropTypes.func,
};
Control.defaultProps = {
    onPlus : createWarning('onPlus'),
    onSubtract : createWarning('onSubtract'),
    onRandomColor : createWarning('onRandomColor'),
};

export default Control;