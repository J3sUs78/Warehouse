import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import DashboardCard from '../common/DashBoardCard';

// Datos de las tarjetas
const cardData = [
    { title: 'PRODUCTOS', icon: BsFillArchiveFill, value: 300 },
    { title: 'CATEGORIAS', icon: BsFillGrid3X3GapFill, value: 12 },
    { title: 'DEPARTAMENTOS', icon: BsPeopleFill, value: 33 },
    { title: 'ALERTAS', icon: BsFillBellFill, value: 42 },
];

const Cards = () => {
    return (
        <div className='main-cards'>
            {cardData.map((card, index) => (
                <DashboardCard
                    key={index}
                    title={card.title}
                    icon={card.icon}
                    value={card.value}
                />
            ))}
        </div>
    );
};

export default Cards;