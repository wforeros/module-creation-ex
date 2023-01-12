export interface ITimestampsDAL {
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
}
export interface IBrandDAL {
    _id: string;
    name: string;
    code: string;
    website: string;
    logo: any;
    description: string;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
}
export interface IBrandFDAL {
    [index: string]: any;
    name?: string | RegExp;
    code?: string;
    deleted_at?: Date | null;
    search?: string[];
}
export declare class BrandDAL implements IBrandDAL, ITimestampsDAL {
    _id: string;
    name: string;
    code: string;
    website: string;
    logo: any;
    description: string;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;
    constructor(item: IBrandDAL);
}
