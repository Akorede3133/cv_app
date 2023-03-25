import React from 'react';

const TemplateHeader = ({personal}) => {
    const {firstName, lastName, title} = personal
    return (
        <article className='header'>
            <h1>{firstName} {lastName}</h1>
            <p className='job'>{title}</p>
        </article>
    )
}
export default TemplateHeader