import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cs = classNames.bind(style);

function Button({ className, title, large, outline, solid, to, href }) {
    const classes = cs('wrapper', {
        [className]: className,
        large,
        outline,
        solid,
    });
    const props = {
        to,
        href,
    };

    let But = 'button';
    if (to) {
        But = Link;
    } else if (href) {
        But = 'a';
    }

    return (
        <But className={classes} {...props}>
            {title}
        </But>
    );
}

export default Button;
