import { Address } from './address.model';

export class Student {
  name: string;
  message: string;
  address: Address;
  comments: string;

  constructor(
    name: string,
    message: string,
    address: Address,
    comments: string
  ) {
    this.name = name;
    this.message = message;
    this.address = address;
    this.comments = comments;
  }
}
