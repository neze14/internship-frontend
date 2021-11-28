import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { EmployeesService } from '../../services/openapi';
import { Employee } from '../../services/openapi/models/Employee';

const FetchEmployess: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[] | string>([]);

    const fetchEmployee = async () => {
        const [ employees, count ] = await EmployeesService.employeesControllerFindAll();
        setEmployees(employees);
    }

    useEffect(() => {
        try {
            fetchEmployee();
        } catch (error:any) {
            setEmployees(`Error getting departments: ${error.message}`);
        }
    })

    return (
        <View>
            <View style={styles.container}>
                No of departments found: {employees.length}
            </View>
            {/*JSON.stringify(employees)*/}
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

export default FetchEmployess;