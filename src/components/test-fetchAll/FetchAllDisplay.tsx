import React from 'react';
// import { Table, Columns, } from 'react-bulma-components';

import FetchUsers from './FetchUsers';
import FetchUserProfiles from './FetchUserProfiles';
import FetchRoles from './FetchRoles';
import FetchDepartments from './FetchDepartments';
import FetchEmployess from './FetchEmployees';
import { View } from 'react-native';

const FetchAllDisplay: React.FC = () => {
    return (
        <View>

            <tr> Number of users found: {FetchUsers} </tr>
            <tr> Number of user-profiles found: {FetchUserProfiles} </tr>
            <tr> Number of roles found: {FetchRoles} </tr>
            <tr> Number of employees found: {FetchEmployess} </tr>
            <tr> Number of departments found: {FetchDepartments} </tr>

        </View>
    )
};



export default FetchAllDisplay;