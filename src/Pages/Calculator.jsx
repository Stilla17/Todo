import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { textButton } from '../redux/calcFunctions/sliceCalc';

const Calculator = () => {

    const result = useSelector(state => state.calculator.value)

    const dispatch = useDispatch()

    const buttons = [
        ['AC', '+/-', '%', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', ',', '='],
    ];

    return (
        <div className="w-64 bg-black rounded-xl overflow-hidden shadow-lg p-2">
            <div className="text-right text-white text-5xl px-4 py-6 bg-gray-800">{result}</div>

            <div className="grid grid-cols-4 gap-2 p-2">
                {/* First row */}
                {buttons.slice(0, 1).map((row, i) =>
                    row.map((btn) => (
                        <button button onClick={() => dispatch(textButton(btn))}
                            key={btn}
                            className="bg-gray-400 text-black text-xl rounded-full py-4"
                        >
                            {btn}
                        </button>
                    ))
                )}

                {/* Next rows */}
                {buttons.slice(1, 4).map((row, i) =>
                    row.map((btn) => (
                        <button onClick={() => dispatch(textButton(btn))}
                            key={btn}
                            className={`${['÷', '×', '-', '+'].includes(btn)
                                ? 'bg-orange-500 text-white'
                                : 'bg-gray-700 text-white'
                                } text-xl rounded-full py-4`}
                        >
                            {btn}
                        </button>
                    ))
                )}

                {/* Last row (0, , =) */}
                <button className="col-span-2 bg-gray-700 text-white text-xl rounded-full py-4">0</button>
                <button className="bg-gray-700 text-white text-xl rounded-full py-4">,</button>
                <button className="bg-orange-500 text-white text-xl rounded-full py-4">=</button>
            </div>
        </div >
    )
}

export default Calculator