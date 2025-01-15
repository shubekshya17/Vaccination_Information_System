export interface UserCreateVM {
  id: number;
  name: string;
  phone: string;
  address: string;
  wardNo: number;
  age: number;
  maritalStatus: boolean;
  noOfChild: number;
  childName: string[];
  childAge: number[];
}
export interface UserListVM {
    name: string;
    phone: string;
    address: string;
  }
  