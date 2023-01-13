import { Component } from "react";
import classes from './ErrorBoundary.module.css';

class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state = { hasError : false }
    }

    componentDidCatch(error){
        // 하위컴포넌트 중 하나가 오류를 만들어가 오류를 전달할때 호출
        this.setState({ hasError: true})
    }

    render(){
        if (this.state.hasError){
            return <div className={classes.errorContainer}><p className={classes.error}>Something went wrong!!</p></div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;