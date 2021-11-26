import { clear } from 'console';
import React, { useState, useEffect } from 'react';
import { User, UsersService } from '../services/openapi';

const TestOpenApi: React.FC = () => {
    const [users, setUsers] = useState<User[] | string>([]);

    const fetchUsers = async () => {
        const [ users, count ] = await UsersService.usersControllerFindAll();
        setUsers(users);
    }

    useEffect(() => {
        try {
            fetchUsers();
        } catch (error:any) {
            setUsers(`Error getting users: ${error.message}`);
        }
    })

    return (
        <div>
            <div>
                No of users found: {users.length}
            </div>
            {JSON.stringify(users)}
        </div>
    )
}

export default TestOpenApi;