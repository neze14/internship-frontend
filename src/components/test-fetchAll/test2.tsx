import React, { useEffect, useState } from "react";
import { User, UsersService } from "../../services/openapi";

type INotification = {
    type: 'is-danger' | 'is-success' | 'is-warning' | 'is-info' | '',
    message: string,
    show: boolean
}

const Test: React.FC = () => {

    const [users, setUsers] = useState <User[] | null> [](null);

    // const [refetchUsers, setRefetchUsers] = useState<boolean>(false);

    const [notification, setNotification] = useState<INotification>({
        type: '',
        message: '',
        show: false
    })
    
    const fetchUsers = async () => {
        try {
            const response = await UsersService.usersControllerFindAll();
            setUsers(response[0])
            setNotification({
                type: 'is-success',
                message: "user successfully retrieved",
                show: true
            })
        } catch (error) {
            setNotification({
                type: 'is-danger',
                message: "user fetch failed",
                show: true
            })
        }
    }

    // useEffect = {
    //     ()=>{
    //         fetchUsers();
    //     }, []
    // }
    

    return (
        <div>
            {notification.show && <div className={`notification ${notification.type}`}>
                <button className="delete"></button>
                {notification.message}
            </div>}

        </div>
    );
}

export default Test;