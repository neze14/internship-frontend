/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreateUserProfileDto } from './CreateUserProfileDto';

export type UpdateUserDto = {
    /**
     * This is the first name of the user, Shoukd not be more than 20 characters
     */
    firstName?: string;
    middleName?: string;
    lastName?: string;
    commonName?: string;
    homeAddress?: string;
    gender?: UpdateUserDto.gender;
    dateOfBirth?: string;
    nationality?: UpdateUserDto.nationality;
    state?: string;
    city?: string;
    county?: string;
    zip?: string;
    photo?: string;
    photoMimeType?: string;
    isActive?: boolean;
    isSoftDeleted?: boolean;
    primaryEmailAddress?: string;
    backupEmailAddress?: string;
    phone: {
mobile?: Array<string>;
office?: Array<string>;
home?: Array<string>;
};
    isPrimaryEmailAddressVerified?: boolean;
    isBackupEmailAddressVerified?: boolean;
    passwordHash?: string;
    isPasswordChangeRequired?: boolean;
    resetPasswordToken?: string;
    resetPasswordExpiration?: string;
    primaryEmailVerificationToken?: string;
    backupEmailVerificationToken?: string;
    emailVerificationTokenExpiration?: string;
    otpEnabled?: boolean;
    otpSecret?: string;
    userProfile?: CreateUserProfileDto;
    departmentId?: number;
}

export namespace UpdateUserDto {

    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
    }

    export enum nationality {
        AFGHANISTAN = 'Afghanistan',
        ALAND_ISLANDS = 'AlandIslands',
        ALBANIA = 'Albania',
        ALGERIA = 'Algeria',
        AMERICAN_SAMOA = 'American Samoa',
        ANDORRA = 'Andorra',
        ANGOLA = 'Angola',
        ANGUILLA = 'Anguilla',
        ANTARCTICA = 'Antarctica',
        ANTIGUA_AND_BARBUDA = 'Antigua and Barbuda',
        ARGENTINA = 'Argentina',
        ARMENIA = 'Armenia',
        ARUBA = 'Aruba',
        AUSTRALIA = 'Australia',
        AUSTRIA = 'Austria',
        AZERBAIJAN = 'Azerbaijan',
        BAHAMAS = 'Bahamas',
        BAHRAIN = 'Bahrain',
        BANGLADESH = 'Bangladesh',
        BARBADOS = 'Barbados',
        BELARUS = 'Belarus',
        BELGIUM = 'Belgium',
        BELIZE = 'Belize',
        BENIN = 'Benin',
        BERMUDA = 'Bermuda',
        BHUTAN = 'Bhutan',
        BOLIVIA = 'Bolivia',
        BOSNIA_AND_HERZEGOVINA = 'Bosnia and Herzegovina',
        BOTSWANA = 'Botswana',
        BOUVET_ISLAND = 'Bouvet Island',
        BRAZIL = 'Brazil',
        BRITISH_INDIAN_OCEAN_TERRITORY = 'British Indian Ocean Territory',
        BRUNEI_DARUSSALAM = 'Brunei Darussalam',
        BULGARIA = 'Bulgaria',
        BURKINA_FASO = 'Burkina Faso',
        BURUNDI = 'Burundi',
        CAMBODIA = 'Cambodia',
        CAMEROON = 'Cameroon',
        CANADA = 'Canada',
        CAPE_VERDE = 'Cape Verde',
        CAYMAN_ISLANDS = 'Cayman Islands',
        CENTRAL_AFRICAN_REPUBLIC = 'Central African Republic',
        CHAD = 'Chad',
        CHILE = 'Chile',
        CHINA = 'China',
        CHRISTMAS_ISLAND = 'Christmas Island',
        COCOS_KEELING_ISLANDS = 'Cocos Keeling Islands',
        COLOMBIA = 'Colombia',
        COMOROS = 'Comoros',
        CONGO = 'Congo',
        CONGO_DEMOCRATIC_REPUBLIC = 'Congo Democratic Republic',
        COOK_ISLANDS = 'Cook Islands',
        COSTA_RICA = 'Costa Rica',
        COTE_DIVOIRE = 'CoteDIvoire',
        CROATIA = 'Croatia',
        CUBA = 'Cuba',
        CURA_AO = 'Curaçao',
        CYPRUS = 'Cyprus',
        CZECH_REPUBLIC = 'Czech Republic',
        DENMARK = 'Denmark',
        DJIBOUTI = 'Djibouti',
        DOMINICA = 'Dominica',
        DOMINICAN_REPUBLIC = 'Dominican Republic',
        ECUADOR = 'Ecuador',
        EGYPT = 'Egypt',
        EL_SALVADOR = 'El Salvador',
        EQUATORIAL_GUINEA = 'Equatorial Guinea',
        ERITREA = 'Eritrea',
        ESTONIA = 'Estonia',
        ETHIOPIA = 'Ethiopia',
        FALKLAND_ISLANDS = 'Falkland Islands',
        FAROE_ISLANDS = 'Faroe Islands',
        FIJI = 'Fiji',
        FINLAND = 'Finland',
        FRANCE = 'France',
        FRENCH_GUIANA = 'French Guiana',
        FRENCH_POLYNESIA = 'French Polynesia',
        FRENCH_SOUTHERN_TERRITORIES = 'French Southern Territories',
        GABON = 'Gabon',
        GAMBIA = 'Gambia',
        GEORGIA = 'Georgia',
        GERMANY = 'Germany',
        GHANA = 'Ghana',
        GIBRALTAR = 'Gibraltar',
        GREECE = 'Greece',
        GREENLAND = 'Greenland',
        GRENADA = 'Grenada',
        GUADELOUPE = 'Guadeloupe',
        GUAM = 'Guam',
        GUATEMALA = 'Guatemala',
        GUERNSEY = 'Guernsey',
        GUINEA = 'Guinea',
        GUINEA_BISSAU = 'Guinea Bissau',
        GUYANA = 'Guyana',
        HAITI = 'Haiti',
        HEARD_ISLAND_MCDONALD_ISLANDS = 'Heard Island Mcdonald Islands',
        HOLY_SEE_VATICAN_CITY_STATE = 'Holy See Vatican City State',
        HONDURAS = 'Honduras',
        HONG_KONG = 'HongKong',
        HUNGARY = 'Hungary',
        ICELAND = 'Iceland',
        INDIA = 'India',
        INDONESIA = 'Indonesia',
        IRAN = 'Iran',
        IRAQ = 'Iraq',
        IRELAND = 'Ireland',
        ISLE_OF_MAN = 'Isle Of Man',
        ISRAEL = 'Israel',
        ITALY = 'Italy',
        JAMAICA = 'Jamaica',
        JAPAN = 'Japan',
        JERSEY = 'Jersey',
        JORDAN = 'Jordan',
        KAZAKHSTAN = 'Kazakhstan',
        KENYA = 'Kenya',
        KIRIBATI = 'Kiribati',
        KOREA_REPUBLIC_OF = 'Korea, Republic of',
        KOREA_DEMOCRATIC_PEOPLE_S_REPUBLIC_OF = 'Korea, Democratic People's Republic of',
        KUWAIT = 'Kuwait',
        KYRGYZSTAN = 'Kyrgyzstan',
        LAO_PEOPLES_DEMOCRATIC_REPUBLIC = 'Lao Peoples Democratic Republic',
        LATVI = 'Latvi',
        LEBANON = 'Lebanon',
        LESOTHO = 'Lesotho',
        LIBERIA = 'Liberia',
        LIBYAN_ARAB_JAMAHIRIYA = 'Libyan Arab Jamahiriya',
        LIECHTENSTEIN = 'Liechtenstein',
        LITHUANIA = 'Lithuania',
        LUXEMBOURG = 'Luxembourg',
        MACAO = 'Macao',
        MADAGASCAR = 'Madagascar',
        MALAWI = 'Malawi',
        MALAYSIA = 'Malaysia',
        MALDIVES = 'Maldives',
        MALI = 'Mali',
        MALTA = 'Malta',
        MARSHALL_ISLANDS = 'Marshall Islands',
        MARTINIQUE = 'Martinique',
        MAURITANIA = 'Mauritania',
        MAURITIUS = 'Mauritius',
        MAYOTTE = 'Mayotte',
        MEXICO = 'Mexico',
        MICRONESIA = 'Micronesia',
        MOLDOVA = 'Moldova',
        MONACO = 'Monaco',
        MONGOLIA = 'Mongolia',
        MONTENEGRO = 'Montenegro',
        MONTSERRAT = 'Montserrat',
        MOROCCO = 'Morocco',
        MOZAMBIQUE = 'Mozambique',
        MYANMAR = 'Myanmar',
        NAMIBIA = 'Namibia',
        NAURU = 'Nauru',
        NEPAL = 'Nepal',
        NETHERLANDS = 'Netherlands',
        NEW_CALEDONIA = 'New Caledonia',
        NEW_ZEALAND = 'New Zealand',
        NICARAGUA = 'Nicaragua',
        NIGER = 'Niger',
        NIGERIA = 'Nigeria',
        NIUE = 'Niue',
        NORFOLK_ISLAND = 'Norfolk Island',
        NORTHERN_MARIANA_ISLANDS = 'Northern Mariana Islands',
        NORWAY = 'Norway',
        OMAN = 'Oman',
        PAKISTAN = 'Pakistan',
        PALAU = 'Palau',
        PALESTINIAN_TERRITORY = 'Palestinian Territory',
        PANAMA = 'Panama',
        PAPUA_NEW_GUINEA = 'Papua New Guinea',
        PARAGUAY = 'Paraguay',
        PERU = 'Peru',
        PHILIPPINES = 'Philippines',
        PITCAIRN = 'Pitcairn',
        POLAND = 'Poland',
        PORTUGAL = 'Portugal',
        PUERTO_RICO = 'Puerto Rico',
        QATAR = 'Qatar',
        REUNION = 'Reunion',
        REPUBLIC_OF_NORTH_MACEDONIA = 'Republic of North Macedonia',
        ROMANIA = 'Romania',
        RUSSIAN_FEDERATION = 'Russian Federation',
        RWANDA = 'Rwanda',
        SAINT_BARTHELEMY = 'Saint Barthelemy',
        SAINT_HELENA = 'Saint Helena',
        SAINT_KITTS_AND_NEVIS = 'Saint Kitts And Nevis',
        SAINT_LUCIA = 'Saint Lucia',
        SAINT_MARTIN = 'Saint Martin',
        SAINT_PIERRE_AND_MIQUELON = 'Saint Pierre And Miquelon',
        SAINT_VINCENT_AND_GRENADINES = 'Saint Vincent And Grenadines',
        SAMOA = 'Samoa',
        SAN_MARINO = 'San Marino',
        SAO_TOME_AND_PRINCIPE = 'Sao Tome And Principe',
        SAUDI_ARABIA = 'Saudi Arabia',
        SENEGAL = 'Senegal',
        SERBIA = 'Serbia',
        SEYCHELLES = 'Seychelles',
        SIERRA_LEONE = 'Sierra Leone',
        SINGAPORE = 'Singapore',
        SLOVAKIA = 'Slovakia',
        SLOVENIA = 'Slovenia',
        SOLOMON_ISLANDS = 'Solomon Islands',
        SOMALIA = 'Somalia',
        SOUTH_AFRICA = 'South Africa',
        SPAIN = 'Spain',
        SRI_LANKA = 'Sri Lanka',
        SUDAN = 'Sudan',
        SOUTH_SUDAN = 'South Sudan',
        SURINAME = 'Suriname',
        SVALBARD_AND_JAN_MAYEN = 'Svalbard And Jan Mayen',
        SWAZILAND = 'Swaziland',
        SWEDEN = 'Sweden',
        SWITZERLAND = 'Switzerland',
        SINT_MAARTEN_DUTCH_PART_ = 'Sint Maarten (Dutch part)',
        SYRIAN_ARAB_REPUBLIC = 'Syrian Arab Republic',
        TAIWAN = 'Taiwan',
        TAJIKISTAN = 'Tajikistan',
        TANZANIA = 'Tanzania',
        THAILAND = 'Thailand',
        TIMOR_LESTE = 'TimorLeste',
        TOGO = 'Togo',
        TOKELAU = 'Tokelau',
        TONGA = 'Tonga',
        TRINIDAD_AND_TOBAGO = 'Trinidad And Tobago',
        TUNISIA = 'Tunisia',
        TURKEY = 'Turkey',
        TURKMENISTAN = 'Turkmenistan',
        TURKS_AND_CAICOS_ISLANDS = 'Turks And Caicos Islands',
        TUVALU = 'Tuvalu',
        UGANDA = 'Uganda',
        UKRAINE = 'Ukraine',
        UNITED_ARAB_EMIRATES = 'United Arab Emirates',
        UNITED_KINGDOM = 'United Kingdom',
        UNITED_STATES = 'United States',
        UNITED_STATES_OUTLYING_ISLANDS = 'United States Outlying Islands',
        URUGUAY = 'Uruguay',
        UZBEKISTAN = 'Uzbekistan',
        VANUATU = 'Vanuatu',
        VENEZUELA = 'Venezuela',
        VIETNAM = 'Vietnam',
        VIRGIN_ISLANDS_BRITISH = 'Virgin Islands British',
        VIRGIN_ISLANDS_US = 'Virgin Islands US',
        WALLIS_AND_FUTUNA = 'Wallis And Futuna',
        WESTERN_SAHARA = 'Western Sahara',
        YEMEN = 'Yemen',
        ZAMBIA = 'Zambia',
        ZIMBABWE = 'Zimbabwe',
    }


}