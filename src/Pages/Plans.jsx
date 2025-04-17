import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './Button.jsx';

const apiStudent = import.meta.env.VITE_PLAN_API;

const Plans = () => {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({ task: '', urlimg: '' });
    const [editId, setEditId] = useState(null);
    const [search, setSearch] = useState('');
    const [checkboxes, setCheckboxes] = useState({});

    useEffect(() => {
        const local = localStorage.getItem('students');
        if (local) setData(JSON.parse(local));
        else axios.get(apiStudent).then(res => {
            setData(res.data || []);
            localStorage.setItem('students', JSON.stringify(res.data || []));
        });
    }, []);

    useEffect(() => localStorage.setItem('students', JSON.stringify(data)), [data]);

    const handleSubmit = e => {
        e.preventDefault();
        if (!form.task.trim() || !form.urlimg.trim()) return;
        const req = editId
            ? axios.put(`${apiStudent}/${editId}`, form)
            : axios.post(apiStudent, form);

        req.then(res => {
            setData(prev => editId
                ? prev.map(i => i.id === editId ? res.data : i)
                : [...prev, res.data]);
            setForm({ task: '', urlimg: '' });
            setEditId(null);
        });
    };

    const handleDelete = id =>
        axios.delete(`${apiStudent}/${id}`).then(() =>
            setData(prev => prev.filter(i => i.id !== id))
        );

    const toggleCheck = id =>
        setCheckboxes(prev => ({ ...prev, [id]: !prev[id] }));

    const filtered = data.filter(i => i.task.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="max-w-[900px] mx-auto mt-10">
            <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap items-center">
                <input placeholder="Name" value={form.task} onChange={e => setForm({ ...form, task: e.target.value })} className="border p-2 rounded" />
                <input placeholder="Image URL" value={form.urlimg} onChange={e => setForm({ ...form, urlimg: e.target.value })} className="border p-2 rounded" />
                <Button text={editId ? 'Update' : 'Add Student'} className="bg-green-400" />
                <input placeholder="Search" value={search} onChange={e => setSearch(e.target.value)} className="border p-2 rounded ml-[140px]" />
            </form>

            {filtered.length ? filtered.map(i => (
                <div key={i.id} className="flex items-center justify-between gap-2 p-2 mt-4 border rounded">
                    <div className="flex items-center gap-5">
                        <label className="w-[30px] h-[30px] cursor-pointer" onClick={() => toggleCheck(i.id)}>
                            <input type="checkbox" hidden checked={checkboxes[i.id] || false} readOnly />
                            <div className={`w-full h-full flex items-center justify-center border-2 rounded ${checkboxes[i.id] ? 'bg-green-500 border-green-500' : 'bg-red-500 border-red-500'}`}>
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path d={checkboxes[i.id] ? "M5 13l4 4L19 7" : "M6 6L18 18M6 18L18 6"} />
                                </svg>
                            </div>
                        </label>
                        <img src={i.urlimg} alt={i.task} className="w-[100px] h-[100px] rounded-full" />
                        <p>{i.task}</p>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={() => handleDelete(i.id)} text="Delete" className="bg-red-400" />
                        <Button onClick={() => { setForm({ task: i.task, urlimg: i.urlimg }); setEditId(i.id); }} text="Edit" className="bg-orange-400" />
                    </div>
                </div>
            )) : <p className="mt-4 text-gray-500">No results</p>}
        </div>
    );
};

export default Plans;
