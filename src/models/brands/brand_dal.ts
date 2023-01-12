// import { ITimestampsDAL } from '../../interfaces/itimestamp';

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

export class BrandDAL implements IBrandDAL, ITimestampsDAL {
    _id: string;
    name: string;
    code: string;
    website: string;
    logo: any;
    description: string;
    created_at: Date | null;
    updated_at: Date | null;
    deleted_at: Date | null;

    constructor(item: IBrandDAL) {
        this._id = item._id;
        this.name = item.name;
        this.code = item.code;
        this.website = item.website;
        this.description = item.description;
        this.created_at = item.created_at;
        this.updated_at = item.updated_at;
        this.deleted_at = item.deleted_at;
    }
}

