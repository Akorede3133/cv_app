import React from 'react';
const SingleEducation = ({educations, index, id, formData, handleChange, handleDeleteSpecific}) => {
    const {university, degree, subject, from, to} = formData;
    return (
        <article>
                <p>
                    <input 
                        type='text' 
                        placeholder='University name' 
                        name='university'
                        onChange={handleChange}
                        id={id}
                        value={university}
                    />
                </p>
                <p>
                    <input 
                        type='text' 
                        placeholder='Degree' 
                        name='degree'
                        onChange={handleChange}
                        id={id}
                        value={degree}
                    />
                </p>
                <p>
                    <input 
                        type='text' 
                        placeholder='Subject' 
                        name='subject'
                        onChange={handleChange}
                        id={id}
                        value={subject}
                    />
                </p>
                <p>
                    <input 
                        type='text' 
                        placeholder='From' 
                        name='from'
                        onChange={handleChange}
                        id={id}
                        value={from}
                    />
                </p>
                <p>
                    <input 
                        type='text' 
                        placeholder='To' 
                        name='to'
                        onChange={handleChange}
                        id={id}
                        value={to}
                    />
                </p>
                <section className='btn-container'>
                {educations.length - 1 !== index &&  <button className='btn delete-btn' onClick={()=>handleDeleteSpecific(id)}>delete</button>}
            </section>
            </article>
    )
}
export default SingleEducation;