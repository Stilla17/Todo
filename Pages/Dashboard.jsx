import React from 'react';
import Content from '../src/Components/Content/Content.jsx';
import PlansNav from '../src/Components/PlansNav/PlansNav.jsx';
import PlansDay from '../src/Components/PlansDay/PlansDay.jsx';
import PlansDiv from '../src/Components/PlansDiv/PlansDiv.jsx';
import Book from '../src/Components/Book/Book.jsx';

function Dashboard() {
    return (
        <main>
            <section>
                <PlansDay />
                <PlansDiv />
            </section>
        </main>
    );
}

export default Dashboard;
