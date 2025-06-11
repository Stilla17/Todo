import React, { useEffect, useState } from 'react'
// import Rulette from '../Components/Wheel/Rulette';

const Casino = () => {
    const numbers = [
        ['0'],
        ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36',
            '2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35',
            '1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34']
    ];

    const [selectedId, setSelectedId] = useState(null);

    const blocks = [
        { id: '1st', label: '1st 12', className: 'col-span-4 active:bg-amber-200 border w-[160px] border-white p-2 rounded' },
        { id: '2nd', label: '2nd 12', className: 'col-span-4 active:bg-amber-200 border w-[160px] border-white text-white p-2 rounded' },
        { id: '3rd', label: '3rd 12', className: 'col-span-4 active:bg-amber-200 border w-[160px] border-white text-white p-2 rounded' },
        { id: '1-18', label: '1 to 18', className: 'col-span-2 border border-white p-1 rounded' },
        { id: 'even', label: 'Even', className: 'col-span-2 border border-white p-1 rounded' },
        { id: 'red', label: '🟥', className: 'col-span-2 bg-red-600 text-white p-1 rounded' },
        { id: 'black', label: '⬛️', className: 'col-span-2 bg-black text-white p-1 rounded' },
        { id: 'odd', label: 'Odd', className: 'col-span-2 border border-white p-1 rounded' },
        { id: '19-36', label: '19 to 36', className: 'col-span-2 border border-white p-1 rounded' },
    ];

    const [color, setColor] = useState('')
    const [oddNumbers, setOddNumbers] = useState([]);
    const [result, setResult] = useState('');

    const hundleSelectColor = (event) => {
        setColor(event.target.textContent)
    }

    // bu yerda resultat qabul qilinvotti
    const handleResult = (val) => {
        console.log("javob: ", val);
        setResult(val)
    }

    // bu yerda toq son topilvotti
    const handleOddNumbers = (odds) => {
        setOddNumbers(odds)
        console.log("Toq sonlar: " + odds);
    }

    return (
        <>
            <h1>{result}</h1>
            <div className='flex p-4 bg-green-700 h-[100%] items-center gap-4 text-white rounded-xl'>
                {/* <Rulette onOddsNumbers={handleOddNumbers} onResult={handleResult} /> */}
                <div className="">
                    <div className="grid grid-cols-[60px_repeat(12,40px)] gap-[2px]">
                        {numbers.map((row, rowIndex) => (
                            <React.Fragment key={rowIndex}>
                                {rowIndex === 0 ? (
                                    <div className="row-span-3 bg-green-600 flex items-center justify-center text-lg font-bold rounded">
                                        0
                                    </div>
                                ) : null}
                                {row.map((num, id) =>
                                    rowIndex > 0 ? (
                                        <div
                                            key={id}
                                            className={`h-10 w-10 flex items-center justify-center rounded text-sm font-semibold 
                                        ${num % 2 == 0 ? "bg-red-500" : "bg-black"}`}
                                        >
                                            {num}
                                        </div>
                                    ) : null
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Bottom betting options */}
                    <div className="ml-16 mt-2 w-full grid grid-cols-13 text-sm text-white  font-semibold text-center">
                        {blocks.map((block) => (
                            <div
                                key={block.id}
                                onClick={() => setSelectedId(block.id)}
                                className={block.className + ' text-center cursor-pointer'}
                            >
                                {block.label}
                                {selectedId === block.id && (
                                    <div className='w-[10px] h-[10px] bg-white rounded-full mx-auto mt-1'></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Casino;