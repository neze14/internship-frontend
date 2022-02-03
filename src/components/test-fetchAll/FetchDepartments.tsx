import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Department, DepartmentsService } from '../../services/openapi';

const FetchDepartments: React.FC = () => {
    const [departments, setDepartments] = useState<Department[] | string>([]);

    const fetchDepartment = async () => {
        const [ departments, count ] = await DepartmentsService.departmentsControllerFindAll();
        setDepartments(departments);
    }

    useEffect(() => {
        try {
            fetchDepartment();
        } catch (error:any) {
            setDepartments(`Error getting departments: ${error.message}`);
        }
    })

    return (
        <View style={styles.container}>
            {departments.length}

            {/*<View style={styles.container}>
                No of departments found: {departments.length}
            </View>*/}
            {/*JSON.stringify(departments)*/}
            
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

export default FetchDepartments;