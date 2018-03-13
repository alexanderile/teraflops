import React from 'react';
import './Button.sass';

export const Button = (props) => {
    const className = ([props.className || '']).concat('Button');
    const {
        theme
    } = props;

    if (theme === 'accent') {
        className.push('Button--accent');
    }
    return (
        <button className={className.join(' ')}>
            {props.children}
        </button>
    )
};