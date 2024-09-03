import classNames from 'classnames/bind';

import style from './DefaultLayout.module.scss';
import { Content, Navbar } from '~/components/Layout/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(style);

function DefaultLayout({ children, pageTitle }) {
    return (
        <div className={cs('default-layout')}>
            <Navbar />
            <FontAwesomeIcon className={cs('add-post-btn')} icon={faPlus} />
            <Content pageTitle={pageTitle}>{children}</Content>
        </div>
    );
}

export default DefaultLayout;
