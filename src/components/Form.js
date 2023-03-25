import React from 'react';
import Personal from './Personal';
import WorkExperience from './WorkExperience';
import Education from './Education';
const Form = ({works, setWorks, workField, handlePicture, personal, handlePersonalChange, setWorkField, educations, setEducations, educationField, setEducationField}) => {
    return (
        <form onSubmit={(e)=> e.preventDefault()}>
            <Personal personal={personal} handlePicture={handlePicture} handlePersonalChange={handlePersonalChange} />
            <WorkExperience 
                works={works}
                setWorks={setWorks}
                workField={workField}
                setWorkField={setWorkField}
            />
            <Education
                educations={educations}
                educationField={educationField}
                setEducations={setEducations}
                setEducationField={setEducationField}
            />
        </form>
    )
}
export default Form