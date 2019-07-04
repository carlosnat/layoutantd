import React from 'react';
import { Layout } from 'antd';
import BaseSideBarMenu from './baseSideBarMenu';
const { Sider } = Layout;

const BaseSideBar = ({collapsed, onCollapse}: any) => {
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className="base-sidebar">
            <div className="logo" />
            <BaseSideBarMenu />
        </Sider>
    )
}

export default BaseSideBar;
