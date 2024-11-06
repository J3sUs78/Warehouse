import React from 'react';

// Componente reutilizable para las tarjetas del dashboard
const DashboardCard = ({ title, icon: Icon, value }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <h3>{title}</h3>
                <Icon className='card_icon' />
            </div>
            <h1>{value}</h1>
        </div>
    );
};

export default DashboardCard;