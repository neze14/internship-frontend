// import { clear } from 'console';
import React, { useState, useEffect } from 'react';
import { User, UsersService } from '../../services/openapi';
import { View, StyleSheet } from 'react-native';

const FetchUsers: React.FC = () => {
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
        <View style={styles.container}>
            {users.length}

            {/*<View style={styles.container}>
                No of users found: {users.length}
            </View>*/}
            {/*JSON.stringify(users)*/}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 30
    }
})

export default FetchUsers;