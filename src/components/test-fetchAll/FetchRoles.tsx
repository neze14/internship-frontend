import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Role } from '../../services/openapi';
import { RolesService } from '../../services/openapi/services/RolesService';

const FetchRoles: React.FC = () => {
    const [roles, setRoles] = useState<Role[] | string>([]);

    const fetchDepartment = async () => {
        const [ roles, count ] = await RolesService.rolesControllerFindAll();
        setRoles(roles);
    }

    useEffect(() => {
        try {
            fetchDepartment();
        } catch (error:any) {
            setRoles(`Error getting roles: ${error.message}`);
        }
    })

    return (
        <View style={styles.container}>
            {roles.length}

            {/*<View style={styles.container}>
                No of roles found: {roles.length}
            </View>*/}
            {/*JSON.stringify(roles)*/}
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

export default FetchRoles;