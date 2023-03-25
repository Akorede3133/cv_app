import React from 'react';

const Description = ({personal}) => {
    return (
        <article className='description'>
            <h2>description</h2>
            <p className='line'></p>
            <p className='desc-text'>
                {personal.description}
            </p>
        </article>
    )
}
export default Description;