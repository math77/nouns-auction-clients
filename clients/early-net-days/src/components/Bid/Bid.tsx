import styles from './Bid.module.css'

const Bid = () => {
  return (
    <div>
      <p>current bid: Ξ 0.03</p>
      <input typee="text" placeholder="Ξ 0.01 or more" required />
      <button className={styles.placeBid}>place bid</button>
    </div>
  )
}

export default Bid