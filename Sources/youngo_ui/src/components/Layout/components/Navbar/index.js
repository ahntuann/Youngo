import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './Navbar.module.scss';
import { publicRoutes } from '~/routes';
import { useState } from 'react';

const cs = classNames.bind(style);

function Navbar() {
    const [active, setActive] = useState(() => 0);
    const [moving, setMoving] = useState(() => false);

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
                                    active: index === active,
                                    moving: moving && route.path === '/search',
                                })}
                                onClick={() => {
                                    setActive(index);
                                    if (route.path === '/search') setMoving(true);
                                    else setMoving(false);
                                }}
                            >
                                <FontAwesomeIcon icon={route.iconName} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
