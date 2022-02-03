import React from "react";
import { View } from "react-native";
import { Department } from "../../../services/openapi";

type Props = {
    department: Department
    handleDeleteDepartment: Function
    handleEditDepartment: Function
}

const Department: React.FC<Props> = (props) => {
    const onDelete = () => {
        props.handleDeleteDepartment(props.department.id);
    }

    const onEdit = () => {
        props.handleEditDepartment(props.department.id); // notice here that we are calling invoking the handleEditItem() passed down through props
    }; 
    
    return (
        <View>
            <tr>
                <td>{props.department.name}</td>
                <td>{props.department.description}</td>
                <td>{props.department.location}</td>
                <td>{props.department.employees}</td>

                <td><button className="button is-small is-info is-outlined" onClick={onEdit}>Edit</button></td>
                <td>
                    <button  className="button is-small is-danger is-outlined is-rounded" onClick={onDelete}>
                        <span>Delete</span>
                        <span className="icon is-small">
                            <i className="fas fa-times"></i>
                        </span>
                    </button>
                </td>
            </tr>
        </View>
    )
}

export default Department;