import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import menuItems from '../routes/_nav';

const BaseSideBarMenu = () => {

    const [navActive, setNavActive] = useState('/dashboard');

    return (
        <Menu 
            theme="dark" 
            mode="inline"
            selectedKeys={[navActive]}
            onSelect={({ key }) => setNavActive(key)}
            defaultSelectedKeys={['/dashboard']}
        >
            {
                menuItems.map( (item) => (
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            <Icon type={item.icon} />
                            <span>{item.label }</span>
                        </Link>
                    </Menu.Item>
                ))
            }
        </Menu>
    )
}

export default BaseSideBarMenu;
