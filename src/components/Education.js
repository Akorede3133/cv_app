import React from 'react';
import {nanoid} from 'nanoid';
import SingleEducation from './SingleEducation';
const Education = ({educations, educationField, setEducations, setEducationField}) => {
    function createEducation() {
        const formData = {
          university: '',
          degree: '',
          subject: '',
          from: '',
          to: '',
        }
        const id = nanoid();
        const newEdu = {id, formData};
        const newField = {id};
        setEducations([...educations, newEdu]);
        setEducationField([...educationField, newField])
      }
      function deleteEducation() {
        const newEdu = [...educations];
        const newField = [...educationField];
        newField.pop();
        newEdu.pop();
        setEducations(newEdu);
        setEducationField(newField);
      }
      function deleteSpecificEdu(id) {
        const newEdu = educations.filter(item => {
          return item.id !== id;
        })
        const newField = educationField.filter(item => {
          return item.id !== id;
        })
        setEducationField(newField);
        setEducations(newEdu);
      }
      function handleEduChange(e) {
        const {name, value, id} = e.target;
        console.log(name, value, id);
        const field = educations.find(edu => edu.id === id);
        const formData = field.formData;
        const newFormdata = {
          ...formData,
          [name]: value
        }
        const newField = {...field, formData: newFormdata};
        const newEdu = educations.map(edu => {
          if (edu.id === id) {
            return {...edu, formData: newFormdata}
          }
          return edu;
        })
        setEducations(newEdu);
      }
      const eduElement = educations.map((item ,index) => {
        return (
            <SingleEducation key={item.id} 
                id={item.id}
                formData={item.formData}
                index={index}
                educations={educations} 
                handleDeleteSpecific={deleteSpecificEdu}
                handleChange={handleEduChange}
            />
        )
    })
    return (
        <section className='eduaction'>
            <h3>Education</h3>
            {eduElement}
            <section className='btn-container'>
                {educations.length > 0 && <button className='btn delete-btn' onClick={deleteEducation}>delete</button>}
                <button className='btn add-btn' onClick={createEducation}>add</button>
            </section>
        </section>
    )
}
export default Education