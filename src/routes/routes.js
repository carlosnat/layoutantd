import DashboardPage from '../features/dashboard/index';
import OrdersPage from '../features/orders/index';

const routes = [
    { path: '/dashboard', exact: true, name: 'Dashboard', component: DashboardPage },
    { path: '/orders', exact: true, name: 'Dashboard', component: OrdersPage },
];

export default routes;
