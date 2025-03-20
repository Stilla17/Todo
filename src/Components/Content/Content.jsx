import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import axios from 'axios'

const Content = () => {

    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [newStudent, setNewStudent] = useState('')
    const apiStudent = import.meta.env.VITE_STUDENT_API


    const hundlePostDataToApi = (e) => {
        e.preventDefault()
        setData(newStudent)

        axios.post(apiStudent, data)
            .then(res => {
                setData([...data, res.data])
                setNewStudent("")
            }).catch((error) => console.log(error)
            )
    }

    useEffect(() => {
        axios.get(apiStudent).then(res => {
            console.log(res.data);
            setData(res.data)
        }).catch((error) => console.log(error)
        )
    }, [])




    return (
        <div className='mx-auto max-w-[900px] mt-10'>

            <button onClick={() => setOpen(!open)} className='bg-green-400'>click</button>

            <div>
                <form onSubmit={hundlePostDataToApi}>
                    <input
                        type="text"
                        placeholder='add new student'
                        value={newStudent}
                        onChange={(e) => setNewStudent(e.target.value)} />
                    <Button text={"Add Student"} className={'bg-green-400'} />
                </form>

                {
                    data.map((item, index) => (
                        <div key={index} className='flex items-center gap-2 border border-gray-400 rounded-md justify-between p-2 mt-4'>
                            <p>{item.task}</p>
                            <div className='flex gap-4'>
                                <Button text={"Delete"} className={'bg-red-400'} />
                                <Button text={"Edit"} className={'bg-orange-400'} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Content