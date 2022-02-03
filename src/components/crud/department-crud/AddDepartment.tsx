import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input } from 'react-native-elements';

type Props = {
    handleCreateDepartment: Function,
    handleCancelCreate: Function
}

type IState = {
    id?: number;
    name?: string;
    description?: string;
    location?: string;
    employees?: number;
}


const AddDepartment: React.FC<Props> = (prop) => {
    const [state, setState] = useState<IState>({
        name: '',
        description: '',
        location: '',
        employees: 0, 
    })
    
    return (
        <View style={styles.container}>
            <Input 
                label="Name of department"
                placeholder="Enter name"
                multiline
                inputContainerStyle={styles.inputContainer}
                leftIcon={{ type: 'font-awesome', name: 'user'}}
                onChangeText={name => setState({...state, name})}
            />

            <Input 
                label="Description of department"
                placeholder="Enter description"
                multiline
                inputContainerStyle={styles.inputContainer}
                leftIcon={{ type: 'font-awesome', name: 'user'}}
                onChangeText={description => setState({...state, description})}
            />
            
            <Input 
                label="Name of department"
                placeholder="Enter name"
                multiline
                inputContainerStyle={styles.inputContainer}
                leftIcon={{ type: 'font-awesome', name: 'user'}}
                onChangeText={name => setState({...state, name})}
            />

            <Input 
                label="Number of employees"
                placeholder="Enter value"
                multiline
                inputContainerStyle={styles.inputContainer}
                leftIcon={{ type: 'font-awesome', name: 'user'}}
                onChangeText={employees => setState({...state, employees: +employees})}
            />

            <View style={{ flexDirection: 'row' }}
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 30
    },

    inputContainer: {
        width: '100%',
        padding: 10,
        backgroundColor: 'white'
    }
})

export default AddDepartment;