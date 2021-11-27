import React, { useEffect, useState } from 'react';
import { Department, DepartmentsService } from '../services/openapi';

const FetchDepartments: React.FC = () => {
    const [departments, setDepartments] = useState<Department[] | string>([]);

    // const fetchDepartment = async () => {
    //     const [ departments, count ] = await DepartmentsService.departmentsControllerFindAll();
    //     setDepartments(departments);
    // }

    // useEffect(() => {
    //     try {
    //         fetchDepartment();
    //     } catch (error:any) {
    //         setDepartments(`Error getting departments: ${error.message}`);
    //     }
    // })

    return (
        <div>
            hi
        </div>
    )
}

export default FetchDepartments;