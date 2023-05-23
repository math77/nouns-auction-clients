import Image from 'next/image'

const Noun = () => {
  return (
    <div>
      <h3 style={{ marginTop: '10px', textAlign: 'center' }}>noun #789</h3>
      <Image
        src="/noun.png"
        alt="noun test"
        width={350}
        height={350}
        priority
      />
    </div>
  )
}

export default Noun