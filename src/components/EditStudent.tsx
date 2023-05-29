import React, { useState } from 'react'
import { Student } from './Student'
import './AddStudent.css'

type Props = {
    data: Student
    handleBackButton: () => void
    editNewStudentHandler: (data: Student) => void
}


const EditStudent: React.FC<Props> = ({data, handleBackButton, editNewStudentHandler}) => {

    const [firstName, setFirstName] = useState(data.firstName);
    const [lastName, setLastName] = useState(data.lastName);      
    const [email, setEmail] = useState(data.email);

        
    const firstNameHandler = (e: any) => {
        setFirstName(e.target.value)
    }

    const lastNameHandler = (e: any) => {
        setLastName(e.target.value)
    }

    // const emailHandler = (Email: String) => {
    //     setEmail(Email)
    // }

    const editNewStudentBtnHandler = (e: any) => {
        e.preventDefault();
        const updateData:Student = {
            id: data.id,
            firstName: firstName,
            lastName: lastName,
            email: email,
        }
        editNewStudentHandler(updateData);
        handleBackButton();
    }

    return (
        <div className='student-form'>
            <div><h1>Edit the student</h1></div>
            <form onSubmit={editNewStudentBtnHandler}>
                <div>
                    <label>First Name: </label> 
                    <input 
                        type="text" 
                        value={firstName} 
                        onChange={firstNameHandler}
                    /> 
                </div>
                <div>
                    <label>Last Name: </label>
                    <input 
                        type="text" 
                        value={lastName} 
                        onChange={lastNameHandler}
                    /> 
                </div>
                <div>
                    <label>Add Email: </label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(e:any) => setEmail(e.target.value)}
                    /> 
                </div>
                <div>
                    <button type="button" onClick={handleBackButton}>Back</button>
                    <button type="submit">Update Student</button>
                </div>
                
            </form>
        </div>
    )
}

export default EditStudent