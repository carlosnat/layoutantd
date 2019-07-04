import React from 'react';
import routes from '../routes/routes';
import { Breadcrumb, Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
const { Content } = Layout;

const BaseContent = () => {

    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                            <Route
                                key={idx}
                                path={`${route.path}`}
                                exact={route.exact}
                                render={props => (
                                    <route.component />
                                )} />
                            ) : (null);
                        })}
                        <Redirect from="/" to="/dashboard" />
                    </Switch>
            </div>
        </Content>
    )
}

export default BaseContent;