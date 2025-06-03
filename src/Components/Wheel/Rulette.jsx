import React, { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const Rulette = ({ onOddsNumbers, onResult }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const numbers = [
    '0', '3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36',
    '2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35',
    '1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34'
  ];

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);
    console.log(newPrizeNumber);
    setMustSpin(true);
  };

  useEffect(() => {
    const oddNumbers = numbers.filter((item) => Number(item) % 2 !== 0)
    onOddsNumbers(oddNumbers)
  }, [])

  const data = numbers.map((item) => ({
    option: item,
    style: {
      backgroundColor: item == "0" ? "green" : (Number(item) % 2 === 0 ? '#ff0000' : '#000000'),
      textColor: '#ffffff'
    }
  }))

  // numbers[prizeNumber] 

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor="#ffffff"
        fontSize={18}
        onStopSpinning={() => {
          setMustSpin(false);
          onResult(numbers[prizeNumber])
        }}
      />
      <h1>{ }</h1>
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}

export default Rulette