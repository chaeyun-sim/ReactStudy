// import DisplayNumber from '../components/DisplayNumber';
// import store from '../store';
// import {Component} from "react";

// export default class b extends Component {
//     state = {
//         number:store.getState().number
//     }
//     constructor(props) {
//         super(props)
//         store.subscribe(function(){
//             this.setState({
//                 number:store.getState().number
//             });
//         }.bind(this));
//     }
//     render(){
//         return(
//             <DisplayNumber number={this.state.number} unit="kg"></DisplayNumber>
//         )
//     }
// }

import DisplayNumber from "../components/DisplayNumber";
import {connect} from "react-redux";
// import store from "../store";

function mapStateToProps(state){
    return {
        number: state.number
    }
}

export default connect(mapStateToProps)(DisplayNumber);