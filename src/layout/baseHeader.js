import React from 'react';
import { Icon, Layout } from 'antd';
const { Header } = Layout;

const BaseHeader = ({collapsed, toggle}) => {

    const trigger = {
        fontSize: "18px",
        lineHeight: "64px",
        padding: "0 16px",
        cursor: "pointer",
        transition: "color 0.3s"
    };

    return (
        <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
                style={trigger}
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={() => toggle(!collapsed)}
            />
        </Header>
    )
}

export default BaseHeader;
