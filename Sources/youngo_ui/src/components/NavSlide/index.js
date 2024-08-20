import classNames from 'classnames/bind';

import style from './NavSlide.module.scss';
import { useEffect, useRef, useState } from 'react';

const cs = classNames.bind(style);

function NavSlide({ navList = [], className }) {
    const navItemRefs = useRef([]);
    const navTopRef = useRef();

    const [active, setActive] = useState(() => 0);

    const classes = cs('wrapper', {
        [className]: className,
    });

    useEffect(() => {
        navTopRef.current.style.left = navItemRefs.current[0].offsetLeft + 'px';
        navTopRef.current.style.width = navItemRefs.current[0].offsetWidth + 'px';
    }, []);

    useEffect(() => {
        navItemRefs.current.forEach((ref) => {
            ref.onclick = () => {
                navTopRef.current.style.left = ref.offsetLeft + 'px';
                navTopRef.current.style.width = ref.offsetWidth + 'px';
            };
        });
    }, []);

    return (
        <div className={classes}>
            <div ref={navTopRef} className={cs('nav-top')}></div>
            <div className={cs('nav-list')}>
                {navList.map((nav, index) => (
                    <div
                        ref={(el) => {
                            navItemRefs.current[index] = el;
                        }}
                        key={index}
                        className={cs('nav-item', {
                            active: active === index,
                        })}
                        onClick={() => {
                            setActive(index);
                        }}
                    >
                        <div className={cs('nav-title')}>{nav.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NavSlide;
