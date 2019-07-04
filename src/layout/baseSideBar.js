import React from 'react';
import { Layout } from 'antd';
import BaseSideBarMenu from './baseSideBarMenu';
const { Sider } = Layout;

const BaseSideBar = ({collapsed, onCollapse, match}) => {
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} className="base-sidebar">
            <div className="logo" />
            <BaseSideBarMenu match={match} />
        </Sider>
    )
}

export default BaseSideBar;
