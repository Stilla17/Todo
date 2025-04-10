import React from 'react';
import Content from '../Components/Content/Content.jsx';
import PlansNav from '../Components/PlansNav/PlansNav.jsx';
import PlansDay from '../Components/PlansDay/PlansDay.jsx';
import PlansDiv from '../Components/PlansDiv/PlansDiv.jsx';
import Book from '../Components/Book/Book.jsx';

function Dashboard() {
    return (
        <main>
            <section>
                <Content />
                <PlansDay />
                <PlansDiv />
            </section>
        </main>
    );
}

export default Dashboard;
