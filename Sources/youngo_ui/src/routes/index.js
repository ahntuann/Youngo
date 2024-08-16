import { DefaultLayout, MapLayout } from '~/components/Layout';
import { Home, Search, Profile, Activity, Messenger, Map } from '~/pages';

export const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout, namePage: 'Home' },
    { path: '/search', component: Search, layout: DefaultLayout, namePage: 'Search' },
    { path: '/profile', component: Profile, layout: DefaultLayout, namePage: 'Profile' },
    { path: '/activity', component: Activity, layout: DefaultLayout, namePage: 'Activity' },
    { path: '/messenger', component: Messenger, layout: DefaultLayout, namePage: 'Messenger' },
    { path: '/map', component: Map, layout: MapLayout, namePage: 'Map' },
];
