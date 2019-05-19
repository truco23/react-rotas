import React, { lazy } from 'react';

const Info = lazy(() => import('./Info'));

const infoRoutes = [
    {
        exact: false,
        path: '/info',
        component: Info
    }
];

export default infoRoutes;