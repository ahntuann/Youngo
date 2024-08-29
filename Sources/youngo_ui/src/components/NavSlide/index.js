import classNames from 'classnames/bind';

import style from './NavSlide.module.scss';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

const cs = classNames.bind(style);

const NavSlide = forwardRef(({ navList = [], className, handleClickNav }, ref) => {
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

    useImperativeHandle(
        ref,
        () => ({
            navTopRef,
            navItemRefs: navItemRefs.current,
            csNavSlide: cs,
        }),
        [active, navTopRef.current],
    );

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
                            handleClickNav(index);
                        }}
                    >
                        <div className={cs('nav-title')}>{nav.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default NavSlide;
