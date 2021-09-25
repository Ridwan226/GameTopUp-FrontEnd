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
  phoneNumber: string;
  avatar: string;
}

export interface JwtPayloadTypes {
  player: UserTypes;
  iat: number;
}

export interface CheckoutTypes {
  voucher: string;
  nominal: string;
  payment: string;
  bank: string;
  name: string;
  accountUser: string;
}

export interface HistoryVoucherTopUpTypes {
  gameName: string;
  category: string;
  thumbnail: string;
  coinName: string;
  coinQuantity: string;
  price: number;
}
export interface HistoryhistoryPaymentTypes {
  type: string;
  bankName: string;
  name: string;
  noRekening: string;
}
export interface HistoryTransitionTypes {
  historyVoucherTopup: HistoryVoucherTopUpTypes;
  historyPayment: HistoryhistoryPaymentTypes;
  _id: string;
  tax: number;
  value: number;
  status: string;
  user: string;
  name: string;
  accountUser: string;
}

export interface TopUpCategoriesTypes {
  _id: string;
  value: number;
  name: string;
}
