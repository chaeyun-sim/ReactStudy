import Link from "next/dist/client/link";
import classess from './Button.module.css';

function Button(props) {
    if (props.link) {
        return (
            <Link href={props.link}>
                <a className={classess.btn}>
                    {props.children}
                </a>
            </Link>
        )
    }

    return <button className={classess.btn} onClick={props.onClick}>{props.children}</button>
}

export default Button;