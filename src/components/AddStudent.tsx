import React, {useState} from 'react'
import './AddStudent.css'
import { Student } from './Student'

// create type for the prop: handleBackButton
type Props = {
    handleBackButton : () => void
    addNewStudentHandler : (data: Student) => void
}

// const AddStudent = (prop: Props) => {
//     const {handleBackButton, addNewStudentHandler } = props
// }

const AddStudent : React.FC<Props>  = ({handleBackButton, addNewStudentHandler}) => {
    

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");      
    const [email, setEmail] = useState("");
    
    const firstNameHandler = (e: any) => {
        setFirstName(e.target.value)
    }

    const lastNameHandler = (e: any) => {
        setLastName(e.target.value)
    }

    const emailHandler = (e: any) => {
        setEmail(e.target.value)
    }

    const addNewStudentBtnHandler = (e: any) => {
        e.preventDefault();
        const data:Student = {
            id: 'id 1',
            firstName: firstName,
            lastName: lastName,
            email: email,
        }
        addNewStudentHandler(data);
        handleBackButton();
    }

  return (
    <div className='student-form'>
        <div><h1>Add a new student</h1></div>
          <form onSubmit={addNewStudentBtnHandler}>
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
                    onChange={emailHandler}
                /> 
            </div>
            <div>
            <button type="button" onClick={handleBackButton}>Back</button>
            <button type="submit">Add Student</button>
            </div>
              
          </form>
    </div>
  )
}

export default AddStudent;

function addNewStudentHandler(data: Student) {
    throw new Error('Function not implemented.')
}
