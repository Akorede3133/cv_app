import React from 'react';
const ExperienceTemplate = ({id, works}) => {
    const data = works.find(work => work.id === id);
    const {formData} = data;
    const {position, company, from, to, description} = formData
    return (
        <article id={id} className='single-experience'>
            <section className='date'>
                <p>{from} - {to}</p>
            </section>
            <section className='info'>
                <p className='position'>{position}</p>
                <p className='company'>{company}</p>
            </section>
        </article>
    )
}
export default ExperienceTemplate;