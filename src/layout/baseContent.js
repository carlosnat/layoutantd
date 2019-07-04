import React, { Suspense } from 'react';
import routes from '../routes/routes';
import { Breadcrumb, Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
const { Content } = Layout;

const BaseContent = ({match}) => {

    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Suspense>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                            <Route
                                key={idx}
                                path={`${route.path}`}
                                exact={route.exact}
                                name={route.name}
                                render={props => (
                                <route.component {...props} />
                                )} />
                            ) : (null);
                        })}
                        <Redirect from="/" to="/dashboard" />
                    </Switch>
                </Suspense>
            </div>
        </Content>
    )
}

export default BaseContent;