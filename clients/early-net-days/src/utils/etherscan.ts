export const buildEtherscanTxLink = (txHash: string): string => {
  const path = `tx/${txHash}`;
  return new URL(path, 'https://etherscan.io/').toString();
};