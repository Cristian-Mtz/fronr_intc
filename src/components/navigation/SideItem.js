import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SideItem = ({ items }) => {
    const { title, path, icon, cName, open, subMenu } = items;
    const [isOpen, setOpen] = useState(open);

    const openSubMenu = () => {
        setOpen(!isOpen)
    }
    return (
        <li className={cName} onClick={() => openSubMenu()}>
            <Link to={path}>
                {icon}
                <span className="icon">{title}</span>
            </Link>
            {isOpen && subMenu.map((item, index) => {
                return (
                    <ul key={index}>
                        <li className={item.cName} onClick={() => openSubMenu()}>
                            <Link to={item.path}>
                                {item.icon}
                                <span className="icon">{item.title}</span>
                            </Link>
                        </li>
                    </ul>
                );
            })}
        </li>
    )
}

export default SideItem;