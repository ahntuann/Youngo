import classNames from 'classnames/bind';

import style from './Model.module.scss';

const cs = classNames.bind(style);

function Model({ titleModelFollow, hide, hanldeHideFollow }) {
    const classes = cs('wrapper', {
        hide,
    });

    function handleModel(e) {
        e.stopPropagation();
    }

    return (
        <div className={classes} onClick={() => hanldeHideFollow()}>
            <div className={cs('content')} onClick={(e) => handleModel(e)}>
                {titleModelFollow.map((title, index) => (
                    <div key={index} className={cs('model-item')}>
                        {title.title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Model;
