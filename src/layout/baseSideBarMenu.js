import React, { useState, useEffect } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import menuItems from '../routes/_nav';

const BaseSideBarMenu = ({match}) => {

    const [navActive, setNavActive] = useState('');

    useEffect(() => {
        setNavActive(match.url)
      }, [match]);

    return (
        <Menu 
            theme="dark" 
            mode="inline"
            selectedKeys={[navActive]}
            onSelect={({ key }) => setNavActive(key)}
        >
            {
                menuItems.map( (item) => (
                    <Menu.Item key={item.path}>
                        <Link to={item.path}>
                            <Icon type={item.icon} />
                            <span>{item.label}</span>
                        </Link>
                    </Menu.Item>
                ))
            }
        </Menu>
    )
}

export default BaseSideBarMenu;
