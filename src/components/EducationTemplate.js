import React from 'react';
const EducationTemplate = ({id, educations}) => {
    const data = educations.find(edu => edu.id === id);
    const {formData} = data;
    const {university, degree, subject, from, to} = formData
    return (
        <article id={id} className='single-education'>
            <section className='date'>
                <p>{from} - {to}</p>
            </section>
            <section className='info'>
                <p className='university'>{university}</p>
                <p className='degree'>degree: {degree}</p>
                <p className='subject'>subject: {subject}</p>
            </section>
        </article>
    )
}
export default EducationTemplate;