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
  id: number;
  name: string;
  phone: string;
  address: string;
}
export interface VaccinationInfoVM {
  id: number;
  vaccination_name: string;
  date: string;
  remarks: string;
}
export interface VaccinationInfoListVM {
  id: number;
  vaccination_name: string;
  date: string;
  remarks: string;
}
