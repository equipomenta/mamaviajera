import { UserResponseInterface } from "./user-response.interface";
import { UserInterface } from "./user.interface";

export class UserModel implements UserInterface {
  id: number;
  address: string;
  city: string;
  code: string;
  created: Date;
  dni: string;
  name: string;
  email: string;
  phone: string;
  state: string;
  terms: boolean;
  privacy: boolean;
  updated: Date;
  status: number;

  constructor(user: UserResponseInterface) {
    this.id = user.id;
    this.address = user.address;
    this.city = user.city;
    this.code = user.code;
    this.created = new Date(user.created);
    this.dni = user.dni;
    this.email = user.email;
    this.name = user.name;
    this.phone = user.phone;
    this.privacy = user.privacy === 1;
    this.state = user.state;
    this.status = user.status;
    this.terms = user.terms === 1;
    this.updated = new Date(user.updated);
  }
}
