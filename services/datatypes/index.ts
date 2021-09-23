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

export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  username: string;
  email: string;
  name: string;
  avatar: string;
}

export interface JwtPayloadTypes {
  player: UserTypes;
  iat: number;
}
