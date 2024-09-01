import classNames from 'classnames/bind';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './Navbar.module.scss';
import { publicRoutes } from '~/routes';
import { useState } from 'react';

const cs = classNames.bind(style);

function Navbar() {
    const location = useLocation().pathname;

    const [active, setActive] = useState(location);

    function isActive(route) {
        return active === route.path || (route.path === '/:nickname' && location.startsWith('/@'));
    }

    return (
        <div className={cs('wrapper')}>
            <div className={cs('logo')}></div>

            <div className={cs('nav-container')}>
                <div className={cs('nav-list')}>
                    {publicRoutes.map((route, index) => {
                        return (
                            <Link
                                to={route.path}
                                key={index}
                                className={cs('nav-item', {
                                    active: isActive(route),
                                    moving: route.path === '/search' && location === route.path,
                                })}
                                onClick={() => {
                                    setActive(route.path);
                                }}
                            >
                                <FontAwesomeIcon icon={route?.iconName} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
