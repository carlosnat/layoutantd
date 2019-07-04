import React from 'react';
import { Menu, Icon } from 'antd';

const BaseSideBarMenu = () => {

    const menuItems = [
        { icon: 'user', label: 'nav 1'},
        { icon: 'video-camera', label: 'nav 2'},
    ]

    return (
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
                menuItems.map( (item, idx) => (
                    <Menu.Item key={idx}>
                        <Icon type={item.icon} />
                        <span>{item.label}</span>
                    </Menu.Item>
                ))
            }
          </Menu>
    )
}

export default BaseSideBarMenu;