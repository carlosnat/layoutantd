import React, { useState } from 'react';

import { Layout } from 'antd';
import BaseSideBar from './baseSideBar';
import BaseHeader from './baseHeader';
import BaseContent from './baseContent';

const { Footer } = Layout;

const BaseLayout = ({match}) => {

    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = (iscollapsed ) => {
        setCollapsed(iscollapsed);
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <BaseSideBar onCollapse={onCollapse} collapsed={collapsed}/>
            <Layout>
                <BaseHeader toggle={onCollapse} collapsed={collapsed}/>
                <BaseContent match={match} />
                <Footer style={{ textAlign: 'right' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

export default BaseLayout;
