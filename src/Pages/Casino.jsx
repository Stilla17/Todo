import React from 'react'

const Casino = () => {
    const numbers = [
        ['0'],
        ['3', '6', '9', '12', '15', '18', '21', '24', '27', '30', '33', '36'],
        ['2', '5', '8', '11', '14', '17', '20', '23', '26', '29', '32', '35'],
        ['1', '4', '7', '10', '13', '16', '19', '22', '25', '28', '31', '34']
    ];

    return (
        <div className="p-4 bg-green-700 h-[100%] text-white rounded-xl">
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
                                        ${(rowIndex + id) % 2 !== 0 ? "bg-red-500" : "bg-black"}`}
                                >
                                    {num}
                                </div>
                            ) : null
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Bottom betting options */}
            <div className="ml-16 mt-2 w-1/2 grid grid-cols-13 text-sm text-white  font-semibold">
                <div className="col-span-4 border w-[160px] border-white p-2 rounded text-center">1st 12</div>
                <div className="col-span-4 border w-[160px] border-white text-white p-2 rounded text-center">2nd 12</div>
                <div className="col-span-4 border w-[160px] border-white text-white p-2 rounded text-center">3rd 12</div>

                <div className="col-span-2 border border-white p-1 rounded text-center">1 to 18</div>
                <div className="col-span-2 border border-white p-1 rounded text-center">Even</div>
                <div className="col-span-2 bg-red-600 text-white p-1 rounded text-center">🟥</div>
                <div className="col-span-2 bg-black text-white p-1 rounded text-center">⬛️</div>
                <div className="col-span-2 border border-white p-1 rounded text-center">Odd</div>
                <div className="col-span-2 border border-white p-1 rounded text-center">19 to 36</div>
            </div>
        </div>
    )
}

export default Casino;

