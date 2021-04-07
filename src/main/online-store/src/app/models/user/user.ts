import { Address } from "./address";
import { Payment } from "./card";

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: string;
  privileges: string[];
  expiresIn: number;
  token: string;
  addresses: Array<Address>;
  paymentDetails: Array<Payment>;


}
