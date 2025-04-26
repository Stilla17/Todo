import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Book() {
    const [formData, setFormData] = useState({
        bookName: '',
        author: '',
        imageUrl: '',
        description: ''
    });
    const [data, setData] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const apiStudent = import.meta.env.VITE_STUDENT_API;

    // Fetch data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(apiStudent);
                setData(Array.isArray(res.data) ? res.data : []);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [apiStudent]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { bookName, author, imageUrl, description } = formData;
        if (!bookName.trim() || !author.trim() || !imageUrl.trim() || !description.trim()) return;
        try {
            const res = await axios.post(apiStudent, {
                task: bookName,
                author: author,
                urlimg: imageUrl,
                description: description
            });
            setData(prevData => [...prevData, res.data]);
            setFormData({
                bookName: '',
                author: '',
                imageUrl: '',
                description: ''
            });
            setIsFormVisible(false); // Hide form after submission
        } catch (error) {
            console.error("Error adding book:", error);
        }
    };

    // Toggle form visibility
    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div className='mx-auto max-w-[900px] mt-10'>
            <h1 className='text-6xl font-bold mb-4'>MY Books</h1>
            <button
                onClick={toggleFormVisibility}
                className='px-[20px] py-[10px] rounded-md bg-blue-600 text-white mb-4'
            >
                Add book +
            </button>

            {isFormVisible && (
                <div className="w-[500px] border-2 border-blue-500 mx-auto p-4 mb-4">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="bookName"
                            placeholder='Enter book name'
                            value={formData.bookName}
                            onChange={handleChange}
                            className="border rounded p-2"
                        />
                        <input
                            type="text"
                            name="author"
                            placeholder='Enter author name'
                            value={formData.author}
                            onChange={handleChange}
                            className="border rounded p-2"
                        />
                        <input
                            type="text"
                            name="imageUrl"
                            placeholder='Enter image URL'
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className="border rounded p-2"
                        />
                        <textarea
                            name="description"
                            placeholder='Enter book description'
                            value={formData.description}
                            onChange={handleChange}
                            className="border rounded p-2 h-[85px]"
                        />
                        <button type="submit" className='bg-green-400 p-2 rounded'>
                            Add Book
                        </button>
                    </form>
                </div>
            )}

            {data.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                    {data.map((item) => (
                        <div key={item.id} className='w-[566px] border-2 rounded-md p-4'>
                            <div className='flex flex-col items-start gap-2'>
                                <h1 className='text-xl font-bold'>{item.task}</h1>
                                <h2 className='text-lg'>{item.author}</h2>
                                <img className='w-[100px] h-[100px]' src={item.urlimg} alt={item.task} />
                                <p>{item.description}</p>
                                <button className='bg-blue-600 px-[30px] py-[10px] text-white font-bold'>
                                    Add Book
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 mt-4">No books available</p>
            )}
        </div>
    );
}

export default Book;
