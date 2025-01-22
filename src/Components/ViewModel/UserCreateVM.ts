export interface UserCreateVM {
  id: number;
  name: string;
  phone: string;
  address: string;
  wardno: number;
  age: number;
  maritalstatus: boolean;
  noofchild: number;
  childname: string[];
  childage: number[];
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
