import {IBrandDAL, IBrandFDAL, BrandDAL, ITimestampsDAL} from "./models/brands/brand_dal";
// import {ITimestampsDAL} from './interfaces/itimestamp';

function hello(name = "Wilson4") {
  return `Hello, ${name}`;
}

export { hello, IBrandDAL, IBrandFDAL, BrandDAL, ITimestampsDAL };