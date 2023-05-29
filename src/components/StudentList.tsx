import React, { useState } from "react";
import "./StudentList.css";
import { Student, sampleStudent } from "./Student";
import StudentViewModal from "./StudentViewModal";

type Props = {
  list: Student[];
  // callback function
  handleDeleteStudent: (data: Student) => void
  handleEditStudent: (data: Student) => void
};



const StudentList : React.FC<Props> = ({list, handleDeleteStudent, handleEditStudent}) => {
    // const { list } = props;
    const [viewStudentModal, setViewStudentModal] = useState(false)
    const [viewStudentData, setViewStudentData] = useState(null as Student | null);
    
    const viewStudentModalHandler = (data: Student) => {
      setViewStudentData(data)
      setViewStudentModal(true)
    }
    const closeStudentViewModal = () => {
      setViewStudentModal(false)
    }
  return (
    <div>
      <article>
        <h2 className="list-header">Student List</h2>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th className="operation-box">Operations</th>
        </tr>
        {list.map((student: any) => {
          // console.log(student);
          return (
            <tr key={student.id}>
              <td>{`${student.firstName} ${student.lastName}`}</td>
              <td>{student.email}</td>
              <td>
                <div className="action-buttons">
                    <button type='button' onClick={() => viewStudentModalHandler(student)}>View</button>
                    <button type='button' onClick={() => handleEditStudent(student)}>Edit</button>
                    <button type='button' onClick={() => handleDeleteStudent(student)}>Delete</button>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {viewStudentModal && viewStudentData !== null && 
        <StudentViewModal onclose={closeStudentViewModal} data={viewStudentData}/>}
    </div>
    
  );
}

// const EmployeeList = (props: Props) => {
//   const { list } = props;
//   return (
//     <div>
//       EmployeeList
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Operations</th>
//         </tr>
//         {list.map((employee) => {
//           console.log(employee);
//           return (
//             <tr key={employee.id}>
//               <td>{`${employee.firstName} ${employee.lastName}`}</td>
//               <td>{employee.email}</td>
//               <td>
//                 <div className="action-buttons">
//                     <button type='button'>View</button>
//                     <button type='button'>Edit</button>
//                     <button type='button'>Delete</button>
//                 </div>
//               </td>
//             </tr>
//           );
//         })}
//       </table>
//     </div>
//   );
//};

export default StudentList;