import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './Navbar.module.scss';
import { publicRoutes } from '~/routes';

const cs = classNames.bind(style);

function Navbar() {
    return (
        <div className={cs('wrapper')}>
            <div className={cs('logo')}></div>

            <div className={cs('nav-container')}>
                <div className={cs('nav-list')}>
                    {publicRoutes.map((route, index) => {
                        return (
                            <Link to={route.path} key={index} className={cs('nav-item')}>
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
