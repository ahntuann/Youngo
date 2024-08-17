import {
    faHouse,
    faMagnifyingGlass,
    faUser,
    faHeart,
    faComment,
    faEarthAmerica,
} from '@fortawesome/free-solid-svg-icons';

import { DefaultLayout, MapLayout } from '~/components/Layout';
import { Home, Search, Profile, Activity, Messenger, Map } from '~/pages';

export const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout, pageTitle: 'Khám phá', iconName: faHouse },
    {
        path: '/search',
        component: Search,
        layout: DefaultLayout,
        pageTitle: 'Tìm kiếm',
        iconName: faMagnifyingGlass,
    },
    {
        path: '/profile',
        component: Profile,
        layout: DefaultLayout,
        pageTitle: 'Trang cá nhân',
        iconName: faUser,
    },
    {
        path: '/activity',
        component: Activity,
        layout: DefaultLayout,
        pageTitle: 'Thông báo',
        iconName: faHeart,
    },
    {
        path: '/messenger',
        component: Messenger,
        layout: DefaultLayout,
        pageTitle: 'Tin nhắn',
        iconName: faComment,
    },
    { path: '/map', component: Map, layout: MapLayout, pageTitle: 'Bản đồ', iconName: faEarthAmerica },
];
