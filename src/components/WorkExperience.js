import React from 'react';
import {nanoid} from 'nanoid';
import SingleWorkExperience from './SingleWorkExperience';
const WorkExperience = ({setWorks, setWorkField, workField,  works}) => {
    function createWork() {
        const formData = {
          position: '',
          company: '',
          from: '',
          to: '',
        }
        const id = nanoid();
        const newWork = {id, formData};
        const newField = {id};
        setWorks([...works, newWork]);
        setWorkField([...workField, newField])
      }
      function deleteWork() {
        const newWork = [...works];
        const newExperience = [...workField];
        newExperience.pop();
        newWork.pop();
        setWorks(newWork);
        setWorkField(newExperience);
      }
      function deleteSpecificWork(id) {
        const newWork = works.filter(item => {
          return item.id !== id;
        })
        const newExperience = workField.filter(item => {
          return item.id !== id;
        })
        setWorkField(newExperience);
        setWorks(newWork);
      }
      function handleChange(e) {
        const {name, value, id} = e.target;
        const field = works.find(work => work.id === id);
        const formData = field.formData;
        const newFormdata = {
          ...formData,
          [name]: value
        }
        const newWork = works.map(work => {
          if (work.id === id) {
            return {...work, formData: newFormdata}
          }
          return work;
        })
        setWorks(newWork);
      }
    const workElement = works.map((item ,index) => {
        return (
            <SingleWorkExperience key={item.id} 
                id={item.id}
                formData={item.formData}
                index={index} works={works} 
                handleDeleteSpecific={deleteSpecificWork}
                handleChange={handleChange}
            />
        )
    })
    return (
        <section className='work-expericence'>
            <h3>work experience</h3>
            {workElement}
            <section className='btn-container'>
                {works.length > 0 && <button className='btn delete-btn' onClick={deleteWork}>delete</button>}
                <button className='btn add-btn' onClick={createWork}>add</button>
            </section>
        </section>
    )
}
export default WorkExperience;