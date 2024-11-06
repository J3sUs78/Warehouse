import React from 'react';
import Cards from '../dashboard/Cards';
import BarChartComponent from '../dashboard/BarChartComponent';
import LineChartComponent from '../dashboard/LineChartComponent';

function Home() {
    // Datos para los gráficos - Podrían venir de una API o props
    const chartData = [
        { name: 'Ene', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Abr', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>Panel de Control</h3>
            </div>

            {/* Sección de tarjetas informativas */}
            <Cards />

            {/* Sección de gráficos */}
            <div className='charts'>
                <BarChartComponent data={chartData} />
                <LineChartComponent data={chartData} />
            </div>
        </main>
    );
}

export default Home;