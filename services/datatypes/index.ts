export interface CategoryTypes {
  _id: string;
  name: string;
  __v: number;
}

export interface GameItemTypes {
  _id: string;
  name: string;
  status: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface PaymentTypes {
  _id: string;
  type: string;
  status: string;
  banks: BankTypes[];
}

export interface BankTypes {
  _id: string;
  name: string;
  noRekening: string;
  bankName: string;
}

export interface NominalTypes {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
}
