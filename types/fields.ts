export enum E_FieldType {
    TEXT, RICHTEXT, NUMBER
}

export interface ILocalFieldValue {
    Culture: string;
    Value: string | number;
}

export interface IField {
    Id: string;
    DisplayName: string;
    CmsId: string;
    Type: E_FieldType;
    MasterLocalCulture: string;
    LocalValue: Array<ILocalFieldValue>
}

