import React from 'react';
const SingleWorkExperience = ({works, index, id, formData, handleChange, handleDeleteSpecific}) => {
    const {position, company, from, to} = formData;
    return (
        <article>
                <p>
                    <input 
                        type='text' 
                        placeholder='Position' 
                        name='position'
                        onChange={handleChange}
                        id={id}
                        value={position}
                    />
                </p>
                <p>
                    <input 
                        type='text' 
                        placeholder='Company' 
                        name='company'
                        onChange={handleChange}
                        id={id}
                        value={company}
                    />
                </p>   <p>
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
                {works.length - 1 !== index && <button className='btn delete-btn' onClick={()=>handleDeleteSpecific(id)}>delete</button>}
            </section>
            </article>
    )
}
export default SingleWorkExperience;