import React, {useEffect, useInsertionEffect, useState} from 'react'
import { sampleStudent, PageEnum, Student } from './Student'
import StudentList from './StudentList'
import './Home.css'
import AddStudent from './AddStudent'
import EditStudent from './EditStudent'


const Home = () => {

    const [studentList, setStudentlist] = useState(sampleStudent as Student[])
    const [showStudentPage, setShowStudentPage] = useState(PageEnum.list);
    const [editStudentRecord, setStudentRecord] = useState({} as Student);

    useEffect(() => {
        const holdStudentList = window.localStorage.getItem("StudentList")
        if (holdStudentList) {
            setStudentList(JSON.parse(holdStudentList))
        }
    }, [])

    const handleAddStudent = () => {
        setShowStudentPage(PageEnum.add) 
    }
    
    const showMainPage = () => {
        setShowStudentPage(PageEnum.list)
    }

    const setStudentList = (list: Student[]) => {
        setStudentlist(list)
        window.localStorage.setItem("StudentList", JSON.stringify(list))
    }

    const addNewStudent = (data: Student) => {
        setStudentList([...studentList, data])
    }

    const deleteStudent = (data: Student) => {
        const deleteStudent = studentList.indexOf(data)
        const tempListStudent = [...studentList]
        tempListStudent.splice(deleteStudent, 1)
        setStudentlist(tempListStudent)
    }

    const editStudent = (data:Student) => {
        setShowStudentPage(PageEnum.edit)
        setStudentRecord(data)
    }

    const updateStudentRecord = (data:Student) => {
        const filterStudentData = studentList.filter(x => x.id === data.id)[0]
        const indexOfRecord = studentList.indexOf(filterStudentData)
        const tempStudentData = [...studentList]
        tempStudentData[indexOfRecord] = data
        setStudentlist(tempStudentData)
    }

  return (
    <>
        <article>
            <header className="article-header">
                <h1>Student Database</h1>
            </header>
        </article>

        <section className='section'>
            {showStudentPage === PageEnum.list && (
                <>
                    <button type="button" value="Add Employee" className='button' onClick={handleAddStudent}>Add Student</button>
                    <StudentList 
                        list={studentList}
                        handleDeleteStudent={deleteStudent}
                        handleEditStudent={editStudent}
                    />
                </>
            )}
            {/* Pass handleBackButton prop to AddStudent Component */} 
            {showStudentPage === PageEnum.add && 
            <AddStudent 
                 handleBackButton={showMainPage} 
                 addNewStudentHandler={addNewStudent}
            /> }
            {showStudentPage === PageEnum.edit && 
            <EditStudent 
                data={editStudentRecord}
                handleBackButton={showMainPage}
                editNewStudentHandler={updateStudentRecord}

            />
            }
        </section>
    </>
  )
}

export default Home;