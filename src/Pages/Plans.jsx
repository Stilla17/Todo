import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './Button.jsx';

const apiStudent = import.meta.env.VITE_PLAN_API;

const Plans = () => {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({ task: '', urlimg: '' });
    const [editId, setEditId] = useState(null);
    const [search, setSearch] = useState('');
    const [isSearching, setIsSearching] = useState(false);

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

    const handleSearchChange = e => {
        setSearch(e.target.value);

        if (data.length > 0) {
            setIsSearching(true);
            setTimeout(() => setIsSearching(false), 500);
        }
    };

    const filtered = data.filter(i => i.task.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="relative max-w-[900px] mx-auto mt-10">
            {isSearching && data.length > 0 && (
                <div className="mt-[200px] absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-white/70 p-6 rounded-xl shadow-lg">
                    <div className="flex items-center justify-center gap-2">
                        <span className="loading loading-bars loading-xs"></span>
                        <span className="loading loading-bars loading-sm"></span>
                        <span className="loading loading-bars loading-md"></span>
                        <span className="loading loading-bars loading-lg"></span>
                        <span className="loading loading-bars loading-xl"></span>
                    </div>
                    <span className="mt-2 text-gray-600 text-lg font-semibold">Searching...</span>
                </div>
            )}

            {search && !filtered.length && !isSearching && (
                <div className="mt-[200px] absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="loading loading-bars loading-sm text-red-600"></span>
                        <span className="loading loading-bars loading-md text-red-600"></span>
                        <span className="loading loading-bars loading-lg text-red-600"></span>
                    </div>
                    <p className="text-red-600 text-2xl font-bold uppercase tracking-widest animate-pulse">
                        No Results Found
                    </p>
                </div>
            )}

            <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap items-center">
                <input
                    placeholder="Name"
                    value={form.task}
                    onChange={e => setForm({ ...form, task: e.target.value })}
                    className="border p-2 rounded"
                />
                <input
                    placeholder="Image URL"
                    value={form.urlimg}
                    onChange={e => setForm({ ...form, urlimg: e.target.value })}
                    className="border p-2 rounded"
                />
                <Button text={editId ? 'Update' : 'Add Student'} className="bg-green-400" />
                <input
                    placeholder="Search"
                    value={search}
                    onChange={handleSearchChange}
                    className="border p-2 rounded ml-[140px]"
                />
            </form>

            {/* Task List */}
            {filtered.map(i => (
                <div key={i.id} className="flex items-center justify-between gap-2 p-2 mt-4 border rounded">
                    <div className="flex items-center gap-5">
                        <img src={i.urlimg} alt={i.task} className="w-[100px] h-[100px] rounded-full" />
                        <p>{i.task}</p>
                    </div>
                    <div className="flex gap-2">
                        <Button onClick={() => handleDelete(i.id)} text="Delete" className="bg-red-400" />
                        <Button onClick={() => {
                            setForm({ task: i.task, urlimg: i.urlimg });
                            setEditId(i.id);
                        }} text="Edit" className="bg-orange-400" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Plans;
 