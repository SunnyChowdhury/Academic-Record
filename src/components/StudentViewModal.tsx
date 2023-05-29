import React from 'react'
import "./StudentViewModal.css";
import { Student, sampleStudent } from "./Student";

type Props = {
    onclose: () => void
    data: Student
}

// const StudentList : React.FC<Props> = ({list, handleDeleteStudent}) => {
const StudentViewModal: React.FC<Props> = ({onclose, data}) => {
  return (
        <div id="myModal" className="modal">
            <div className='modal-content'>
                <span className="close" onClick={onclose}>&times;</span>
                <div>
                    <div>
                        <h3>Student Detail</h3>
                        <div>First Name: {data.firstName}</div>
                        <div>Last Name: {data.firstName}</div>
                        <div>Email: {data.email}</div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default StudentViewModal