import React from 'react';
import TemplateHeader from './TemplateHeader';
import ExperienceTemplate from './ExperienceTemplate';
import EducationTemplate from './EducationTemplate';
import Description from './Description';
import img from './logo192.png';
const Template = ({workField, imgUrl, works, educationField, educations, personal}) => {
    const experienceTemplate = workField.map(item=> {
        return <ExperienceTemplate key={item.id} id={item.id} works={works}/>
    })
    const eduTemplate = educationField.map(item => {
        return <EducationTemplate key={item.id} id={item.id} educations={educations}/>
    })

    return (
        <section className='template'>
            <TemplateHeader personal={personal} />
            <div className='sub-template'>
                <section className='aside-left'>
                    <Description personal={personal} />
                    <article className='experience'>
                        <h2>experience</h2>
                        <p className='line'></p>
                        {experienceTemplate}
                    </article>
                    <article className='education'>
                        <h2>education</h2>
                        <p className='line'></p>
                        {eduTemplate}
                    </article>
                </section>
                <section className='aside-right'>
                    <article className='img'>
                        <img src={imgUrl} alt='' />
                    </article>
                    <article className='details'>
                        <h4>personal details</h4>
                        <p className='line'></p>
                        <section className='address'>
                            <p>Addresss</p>
                            <p>{personal.address}</p>
                        </section>
                        <section className='number'>
                            <p>phone number</p>
                            <p>{personal.phoneNumber}</p>
                        </section>
                        <section className='email'>
                            <p>Email</p>
                            <p>{personal.email}</p>
                        </section>
                    </article>
                </section>
            </div>
        </section>
    )
}
export default Template