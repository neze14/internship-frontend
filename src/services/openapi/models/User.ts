/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Employee } from './Employee';
import type { Role } from './Role';
import type { UserProfile } from './UserProfile';

export type User = {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    commonName: string;
    homeAddress: string;
    gender: User.gender;
    dateOfBirth: string;
    nationality: string;
    state: string;
    city: string;
    county: string;
    zip: string;
    photo: string;
    photoMimeType: string;
    isActive: boolean;
    isSoftDeleted: boolean;
    primaryEmailAddress: string;
    backupEmailAddress: string;
    phone: {
mobile?: Array<string>;
office?: Array<string>;
home?: Array<string>;
};
    isPrimaryEmailAddressVerified: boolean;
    isBackupEmailAddressVerified: boolean;
    passwordHash: string;
    isPasswordChangeRequired: boolean;
    resetPasswordToken: string;
    resetPasswordExpiration: string;
    primaryEmailVerificationToken: string;
    backupEmailVerificationToken: string;
    emailVerificationTokenExpiration: string;
    otpEnabled: boolean;
    otpSecret: string;
    userProfile: UserProfile;
    roles: Array<Role>;
    employee: Employee;
}

export namespace User {

    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
    }


}