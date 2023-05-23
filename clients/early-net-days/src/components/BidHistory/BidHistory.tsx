import { Bid } from "../../utils/types";
import dayjs from 'dayjs';
import { buildEtherscanTxLink } from '@/utils/etherscan';


const BidItem = (bid: Bid, index: number) => {
  const date = `${dayjs(bid.timestamp.toNumber() * 1000).format('MMM DD')} at ${dayjs(
    bid.timestamp.toNumber() * 1000,
  ).format('hh:mm a')}`;

  const txLink = buildEtherscanTxLink(bid.transactionHash);

  return (
    <div>
      <h2>Bid history</h2>
      <li key={index}>
        
      </li>
    </div>
  )
}


const BidHistory = (nounId: number) => {
  return (
    <div>
      <p></p>
      <p></p>
    </div>
  )
}

export default BidHistory