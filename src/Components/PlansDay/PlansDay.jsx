import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import axios from 'axios';

const PlansDay = () => {
    const [data, setData] = useState([]);
    const [newPlan, setNewPlan] = useState('');
    const [newImg, setNewImg] = useState('');
    const [editId, setEditId] = useState(null);

    const apiPlan = import.meta.env.VITE_PLAN_API;

    useEffect(() => {
        axios.get(apiPlan)
            .then(res => {
                setData(Array.isArray(res.data) ? res.data : []);
            })
            .catch(error => console.log("Ошибка загрузки:", error));
    }, [apiPlan]);

    const handlePostDataToApi = (e) => {
        e.preventDefault();
        if (!newPlan.trim() || !newImg.trim()) return;

        axios.post(apiPlan, { task: newPlan, urlimg: newImg })
            .then(res => {
                setData(prevData => [...prevData, res.data]);
                setNewPlan('');
                setNewImg('');
            })
            .catch(error => console.log("Ошибка при добавлении:", error));
    };

    const handleDeleteDataToApi = (id) => {
        axios.delete(`${apiPlan}/${id}`)
            .then(() => {
                setData(prevData => prevData.filter(plan => plan.id !== id));
            })
            .catch(error => console.log("Ошибка при удалении:", error));
    };

    const handleEditDataToApi = (e) => {
        e.preventDefault();
        if (!newPlan.trim() || !newImg.trim()) return;

        axios.put(`${apiPlan}/${editId}`, { task: newPlan, urlimg: newImg })
            .then(res => {
                setData(prevData =>
                    prevData.map(plan =>
                        plan.id === editId ? res.data : plan
                    )
                );
                setNewPlan('');
                setNewImg('');
                setEditId(null);
            })
            .catch(error => console.log("Ошибка при редактировании:", error));
    };

    const editData = (plan) => {
        setEditId(plan.id);
        setNewImg(plan.urlimg);
        setNewPlan(plan.task);
    };

    return (
        <div className='mx-auto max-w-[900px] mt-10'>
            <div>
                <form onSubmit={editId ? handleEditDataToApi : handlePostDataToApi} className="flex gap-2">
                    <input
                        type="text"
                        placeholder='Enter plan name'
                        value={newPlan}
                        onChange={(e) => setNewPlan(e.target.value)}
                        className="border rounded p-2"
                    />
                    <input
                        type="text"
                        placeholder='Enter image URL'
                        value={newImg}
                        onChange={(e) => setNewImg(e.target.value)}
                        className="border rounded p-2"
                    />
                    <Button text={editId ? "Update Plan" : "Add Plan +"} className={'bg-green-400'} />
                </form>

                {data.length > 0 ? (
                    data.map((item) => (
                        <div key={item.id} className='flex items-center gap-2 border border-gray-400 rounded-md justify-between p-2 mt-4'>
                            <div className='flex gap-5 items-center'>
                                <img className='w-[100px] h-[100px] rounded-full' src={item.urlimg} alt={item.task} />
                                <p>{item.task}</p>
                            </div>
                            <div className='flex gap-4'>
                                <Button onClick={() => handleDeleteDataToApi(item.id)} text={"Delete"} className={'bg-red-400'} />
                                <Button onClick={() => editData(item)} text={"Edit"} className={'bg-orange-400'} />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 mt-4">Нет планов</p>
                )}
            </div>
        </div>
    );
};

export default PlansDay;
