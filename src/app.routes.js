import homeRoutes from './pages/home/home.routes';
import infoRoutes from './pages/info/info.routes';

const appRoutes = [
    ...homeRoutes, 
    ...infoRoutes
];

export default appRoutes;