import React from 'react';
import { Link } from 'react-router-dom';
import {
    BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsPersonCircle
} from 'react-icons/bs';
import { FaWarehouse } from 'react-icons/fa';

import { TbReportSearch } from "react-icons/tb";



function Sidebar({ openSidebarToggle, OpenSidebar, setOpenSidebar }) {

    const handleLinkClick = () => {
        setOpenSidebar(false); // Cierra el sidebar al hacer clic en un enlace
    };

    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <FaWarehouse className='icon_header' /> Gestión de Bodega Municipal
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item' onClick={handleLinkClick}>
                    <Link to="/">
                        <BsGrid1X2Fill className='icon' /> Panel de Control
                    </Link>
                </li>
                <li className='sidebar-list-item' onClick={handleLinkClick}>
                    <Link to="/products">
                        <BsFillArchiveFill className='icon' /> Productos
                    </Link>
                </li>
                <li className='sidebar-list-item' onClick={handleLinkClick}>
                    <Link to="/categories">
                        <BsFillGrid3X3GapFill className='icon' /> Categorías
                    </Link>
                </li>
                <li className='sidebar-list-item' onClick={handleLinkClick}>
                    <Link to="/departments">
                        <BsPeopleFill className='icon' /> Departamentos
                    </Link>
                </li>
                <li className='sidebar-list-item' onClick={handleLinkClick}>
                    <Link to="/orders">
                        <BsListCheck className='icon' /> Pedidos
                    </Link>
                </li>
                <li className='sidebar-list-item' onClick={handleLinkClick}>
                    <Link to="/process">
                        <BsMenuButtonWideFill className='icon' /> Procesos
                    </Link>
                </li>

                <li className='sidebar-list-item' onClick={handleLinkClick}>
                    <Link to="/reports">
                        <TbReportSearch className='icon' /> Reportes
                    </Link>
                </li>

                <li className='sidebar-list-item' onClick={handleLinkClick}>
                    <Link to="/settings">
                        <BsFillGearFill className='icon' /> Configuración
                    </Link>
                </li>
                <li className='sidebar-list-item' onClick={handleLinkClick}>
                    <Link to="/login">
                        <BsPersonCircle className='icon' /> Iniciar Sesión
                    </Link>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;