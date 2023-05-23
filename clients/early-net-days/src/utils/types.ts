export interface Bid {
  nounId: BigInt;
  sender: string;
  value: BigInt;
  extended: boolean;
  transactionHash: string;
  timestamp: BigInt;
}