import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import axios from 'axios';

const Content = () => {
    const [data, setData] = useState([]);
    const [newStudent, setNewStudent] = useState('');
    const [newImg, setNewImg] = useState('');
    const [editId, setEditId] = useState(null); 

    const apiStudent = import.meta.env.VITE_STUDENT_API;

    useEffect(() => {
        axios.get(apiStudent)
            .then(res => {
                console.log("API Response:", res.data);
                setData(Array.isArray(res.data) ? res.data : []);
            })
            .catch(error => console.log("Ошибка загрузки:", error));
    }, [apiStudent]);

    // Добавление нового студента
    const handlePostDataToApi = (e) => {
        e.preventDefault();
        if (!newStudent.trim() || !newImg.trim()) return;

        axios.post(apiStudent, { task: newStudent, urlimg: newImg })
            .then(res => {
                setData(prevData => [...prevData, res.data]);
                setNewStudent('');
                setNewImg('');
            })
            .catch(error => console.log("Ошибка при добавлении:", error));
    };


    const handleDeleteDataToApi = (id) => {
        axios.delete(`${apiStudent}/${id}`)
            .then(() => {
                setData(prevData => prevData.filter(student => student.id !== id));
            })
            .catch(error => console.log("Ошибка при удалении:", error));
    };

    const handleEditDataToApi = (e) => {
        e.preventDefault();
        if (!newStudent.trim() || !newImg.trim()) return;

        axios.put(`${apiStudent}/${editId}`, { task: newStudent, urlimg: newImg })
            .then(res => {
                setData(prevData =>
                    prevData.map(student =>
                        student.id === editId ? res.data : student
                    )
                );
                setNewStudent('');
                setNewImg('');
                setEditId(null); 
            })
            .catch(error => console.log("Ошибка при редактировании:", error));
    };

    const editData = (student) => {
        setEditId(student.id);
        setNewImg(student.urlimg);
        setNewStudent(student.task);
    };

    return (
        <div className='mx-auto max-w-[900px] mt-10'>
            <div>
                <form onSubmit={editId ? handleEditDataToApi : handlePostDataToApi} className="flex gap-2">
                    <input
                        type="text"
                        placeholder='Enter student name'
                        value={newStudent}
                        onChange={(e) => setNewStudent(e.target.value)}
                        className="border rounded p-2"
                    />
                    <input
                        type="text"
                        placeholder='Enter image URL'
                        value={newImg}
                        onChange={(e) => setNewImg(e.target.value)}
                        className="border rounded p-2"
                    />
                    <Button text={editId ? "Update Student" : "Add Student"} className={'bg-green-400'} />
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
                    <p className="text-gray-500 mt-4">Нет студентов</p>
                )}
            </div>
        </div>
    );
};

export default Content;
