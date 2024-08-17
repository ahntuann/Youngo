import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import { Content, Navbar } from '~/components/Layout/components';

const cs = classNames.bind(style);

function DefaultLayout({ children, pageTitle }) {
    return (
        <div className={cs('default-layout')}>
            <Navbar />
            <Content pageTitle={pageTitle}>{children}</Content>
        </div>
    );
}

export default DefaultLayout;
