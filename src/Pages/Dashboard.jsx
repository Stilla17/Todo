import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const querySnapshot = await getDocs(collection(db, 'users'));
            const usersData = querySnapshot.docs.map(doc => doc.data());
            setUsers(usersData);
        };
        console.log(users);

        fetchUsers();
    }, []);

    return (
        <>
            {users.map((user, idx) => (
                <div key={idx} style={{ marginBottom: '1rem' }}>
                    {user.photoURL && <img src={user.photoURL} width="80" alt="avatar" />}
                    <p>{user.displayName || user.email}</p>
                </div>
            ))}
        </>
    )
}

export default Dashboard
