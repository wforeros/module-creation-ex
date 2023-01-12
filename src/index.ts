import {IBrandDAL, IBrandFDAL, BrandDAL} from "./models/brands/brand_dal";

function hello(name = "Wilson4") {
  return `Hello, ${name}`;
}

export { hello, IBrandDAL, IBrandFDAL, BrandDAL };