// import { Component } from "react";
// import AddNumber from "../components/AddNumber";
// import store from "../store";

// export default class a extends Component {
//     render(){
//         return (
//             <AddNumber onClick={function(size){
//                 store.dispatch({
//                     type: 'INCREMENT',
//                     size: size
//                   });
//             }}></AddNumber>
//         )
//     }
// }

import AddNumber from "../components/AddNumber";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch){
    return {
        onClick: function(size){
            dispatch({type: 'INCREMENT', size: size})
        }
    }
};

export default connect(null, mapDispatchToProps)(AddNumber);  //두번째 인자만 있을때 첫번째 인자에 null 넣어야함