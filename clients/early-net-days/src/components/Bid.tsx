export default function Bid({ props }) {
  return (
    <div style={{ padding: '2rem' }}>
      <p>Bidder {props.bidder}</p>
      <p>Tx {props.txLink}</p>
      <p>Ξ {props.bidValue}</p>
      <p>{props.bidDate}</p>
    </div>
  );
}