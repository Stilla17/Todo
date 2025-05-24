import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const Rulette = () => {
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
    setMustSpin(true);
  };

  const data = numbers.map(item => ({ option: item }))

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={['#ff0000', '#000000']}
        textColors={['#ffffff']}
        outerBorderColor="#ffffff"
        fontSize={18}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}

export default Rulette