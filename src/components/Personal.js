import React from 'react';
const Personal = ({handlePersonalChange, personal, handlePicture}) => {
    const fileRef = React.useRef('');
    const {firstName, lastName, title, address, phoneNumber, email, description } = personal
    return (
        <section className='personal'>
            <h3>personal details</h3>
            <p>
                <input 
                    type='text' 
                    placeholder='First name' 
                    name='firstName'
                    onChange={handlePersonalChange}
                    value={firstName}
                />
            </p>
            <p>
                <input 
                    type='text' 
                    placeholder='Last name' 
                    name='lastName'
                    onChange={handlePersonalChange}
                    value={lastName}
                />
            </p>
            <p>
                <input 
                    type='text' 
                    placeholder='title' 
                    name='title'
                    onChange={handlePersonalChange}
                    value={title}
                />
            </p>
            <p>
                <input 
                    type='text' 
                    placeholder='Address' 
                    name='address'
                    onChange={handlePersonalChange}
                    value={address}
                />
            </p>   <p>
                <input 
                    type='tel' 
                    placeholder='Phone number' 
                    name='phoneNumber'
                    onChange={handlePersonalChange}
                    value={phoneNumber}
                />
            </p>
            <p>
                <input 
                    type='email' 
                    placeholder='Email' 
                    name='email'
                    onChange={handlePersonalChange}
                    value={email}
                />
            </p>
            <p>
                <textarea name='description' value={description} placeholder='Description' onChange={handlePersonalChange}></textarea>
            </p>
            <p>
            <input 
                type='file'
                ref={fileRef}
                onChange={handlePicture}
                hidden
                />
            </p>
            <button onClick={()=> fileRef.current.click()} className='upload'>uplaod a picture</button>
        </section>
    )
}
export default Personal