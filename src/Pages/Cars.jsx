import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const Cars = () => {

    const [text, setText] = useState('')

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        setText(data.example)
        reset('')
    }

    // const inputValue = watch("example", "")

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("example", { required: true })} className='border-2' />

                <button className='border-2'>Submit</button>
            </form>
            <h1>{text}</h1>
        </div>
    )
}

export default Cars