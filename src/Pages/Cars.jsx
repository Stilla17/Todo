import { useForm } from "react-hook-form"
import React, { useState, useEffect } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios';

const Cars = () => {
    const apiCars = import.meta.env.VITE_BOKS_API
    const [data, setData] = useState([]);
    const [imgCar, setimgCar] = useState('');


    const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm();
    const selectedCar = watch("carM");

    const carImages = {
        Kobalt: "https://chevrolet.uz/assets/images/cobalt/colours/new/9.png",
        Spark: "https://asacar.uz/uploads/main_car/KK/KK/Kh/Spark-1.png",
        Damas: "https://chevrolet.uz/assets/images/damas/colours/01.png",
        Matiz: "https://e7.pngegg.com/pngimages/285/475/png-clipart-chevrolet-spark-daewoo-tico-car-daewoo-matiz-car-compact-car-car-thumbnail.png",
        Nexiya: "https://png.klev.club/uploads/posts/2024-05/png-klev-club-axox-p-neksiya-png-2.png",
        Malibu: "https://w7.pngwing.com/pngs/868/136/png-transparent-2016-chevrolet-malibu-car-general-motors-2018-chevrolet-malibu-sedan-chevrolet-compact-car-sedan-car-thumbnail.png",
        Treker: "https://chevrolet-aktobe.kz/wp-content/uploads/2020/10/chevrolet-tracker-white.png "
    };


    useEffect(() => {
        if (selectedCar && carImages[selectedCar]){
            setimgCar(carImages[selectedCar])
            setValue("urlImg", carImages[selectedCar])
        }
    }, [selectedCar])

    useEffect(() => {
        axios
            .get(apiCars)
            .then((res) => {
                setData(res.data)
                console.log(res);
            })
            .catch((error) => console.error(error));
    }, []);

    const onSubmit = (formData) => {
        axios
            .post(apiCars, {
                name: formData.name,
                surname: formData.surname,
                carM: formData.carM,
                telNumber: formData.tel,
                urlImg: formData.urlImg,
                PynetMthod: formData.PynetMthod
            })
            .then((response) => {
                setData((prevData) => [...prevData, response.data]);
                const car = formData.carM;
                reset({ carM: car });
                setimgCar(carImages[car]); 
              })
            .catch((error) => console.error(error));
    }

    const handleDelete = (id) => {
        axios
            .delete(`${apiCars}/${id}`)
            .then(() => {
                setData((prevData) => prevData.filter((item) => item.id !== id));
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <details className="mb-[10px]">
                <summary className="w-[90px] py-[3px] text-center bg-teal-500 text-white rounded-md ">Add Car</summary>

                <div className="bg-teal-600 w-[250px] flex justify-center flex-wrap rounded-[10px] absolute z-[10] mt-[20px] px-[10px] py-[20px]">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">

                        <input className="border-1 border-white w-[200px] px-[5px] mb-[10px] focus:outline-none text-white " placeholder="Enter your name"  {...register("name", { required: true })} />
                        {errors.name && <p className="text-red-500">Name is required</p>}
                        <input className="border-1 border-white w-[200px] px-[5px] mb-[10px] focus:outline-none text-white " placeholder="Enter your surname" {...register("surname", { required: true })} />
                        {errors.surname && <p className="text-red-500">Surname is required</p>}
                        <input className="border-1 border-white w-[200px] px-[5px] mb-[10px] focus:outline-none text-white " placeholder="Enter your tel number" {...register("tel", { required: true })} />
                        {errors.telNUmber && (
                            <p className="text-red-500">Phone number is required</p>
                        )}
                        <select className="border-1 border-white w-[200px] px-[5px] mb-[10px] focus:outline-none text-white font-bold bg-teal-800" {...register("carM", { required: true })}>
                            <option value="Kobalt">Kobalt</option>
                            <option value="Spark">Spark</option>
                            <option value="Damas">Damas</option>
                            <option value="Matiz">Matiz</option>
                            <option value="Nexiya">Nexiya</option>
                            <option value="Malibu">Malibu</option>
                            <option value="Treker">Treker</option>
                        </select>
                        {errors.carM && <p className="text-red-500">Car model is required</p>}
                        <div className="w-[200px] text-white font-bold mb-[10px]">
                            <label>
                                <input type="radio" {...register('PynetMthod')} value="Karta" />
                                Karta</label><br />
                            <label>
                                <input type="radio" {...register('PynetMthod')} value="Naxt" />
                                Naxt
                            </label><br />
                            <label>
                                <input type="radio" {...register('PynetMthod')} value="Nasiya" />
                                Nasiya
                            </label>
                            {errors.PynetMthod && (
                                <p className="text-red-500">Phone number is required</p>
                            )}
                        </div>
                        {imgCar && (
                         <img src={imgCar} alt="Предпросмотр машины" className="w-[200px] rounded-md mb-[10px]" />
                        )}
                        <div className="w-[200px]">
                            <button type="submit" className="text-teal-600 bg-white font-bold rounded-md px-[10px] py-[2px]">submit</button>
                        </div>
                    </form>
                </div>
            </details>
            <div className="flex flex-wrap gap-[20px]">

                {
                    data.map((item, index) => (
                        <div key={index}>
                            <div className="w-[290px] h-[390px] border-2 bg-teal-700 rounded-[20px] flex flex-col items-center justify-center text-white relative overflow-hidden transition duration-200 ease-in-out hover:scale-105 hover:-rotate-1 group">

                              <br />
                                <div className="flex flex-col items-center justify-center gap-3 z-[2] transition duration-200 ease-in-out">
                                    <img src={item.urlImg} alt="" className="w-full rounded-md mb-[10px]" />
                                    <span className="text-[12px] font-bold text-white">{item.name} {item.surname}</span>
                                    <span className="text-[12px] font-bold text-white">tel: {item.telNumber}</span>
                                    <p className="font-bold text-[20px]">{item.PynetMthod}</p>
                                    <div className="flex justify-end items-end w-[270px]">
                                        <button className="text-cente rounded-md px-[7px] py-[7px] text-red-500" onClick={() => handleDelete(item.id)}><FaTrashAlt /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default Cars