import React from "react";
import styles from "./UserList.module.css"
import Card from "../UI/Card";

const UserList = (props) => {
    let userslist = '';
    if (props.users) {
        userslist = props.users.map(user => (
            <li key={user.id}>{user.name} ({user.age} years old)</li>
        ))
    }

    return (
        <Card className={styles.users}>
            <ul>
                {userslist}
            </ul>
        </Card>
    )
};

export default UserList;