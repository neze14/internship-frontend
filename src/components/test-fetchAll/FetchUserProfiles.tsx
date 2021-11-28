import React, { useState, useEffect } from 'react';
import { UserProfile, UserProfilesService } from '../../services/openapi';
import { View, StyleSheet } from 'react-native';


const FetchUserProfiles: React.FC = () => {
    const [userProfiles, setUserProfiles] = useState<UserProfile[] | string>([]);

    const fetchUserProfiles = async () => {
        const [ userProfiles, count ] = await UserProfilesService.userProfilesControllerFindAll();
        setUserProfiles(userProfiles);
    }

    useEffect(() => {
        try {
            fetchUserProfiles();
        } catch (error:any) {
            setUserProfiles(`Error getting user-profiles: ${error.message}`);
        }
    })

    return (
        <View>
            <View style={styles.container}>
                No of user-profiles found: {userProfiles.length}
            </View>
            {JSON.stringify(userProfiles)}
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

export default FetchUserProfiles;