import React, { lazy } from 'react';
const Home = lazy(() => import('./Home'));

const homeRoutes = [
    {
        exact: true,
        path: '/',
        component: Home
    }
];

export default homeRoutes;