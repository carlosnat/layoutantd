import React from 'react';
import { Breadcrumb, Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
const { Content } = Layout;


const Test = () => {
    return (
      <span>este es un test</span>
    )
  }

const BaseContent = ({match}) => {

    const routes = [
        { path:"/test", name: 'Test', component: Test, exact: true},
      ]

    return (
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                { match.path }
                <Switch>
                    {routes.map((route, idx) => {
                        return route.component ? (
                        <Route
                            key={idx}
                            path={`${match.path}${route.path}`}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                            <route.component {...props} />
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