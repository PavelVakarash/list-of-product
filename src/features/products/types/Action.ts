import Product from "./Product";

type Action =
  | { type: 'products/add'; payload: Product }
  | { type: 'products/remove'; payload: string }
  ;
export default Action;