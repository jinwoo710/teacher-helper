import { Student } from "../types";
import StudentNameTag from "./StudentNameTag";

interface StudentListProps {
    loading: boolean;
    error: string | null;
    students: Student[];
}

export default function StudentList  ({loading,error, students}: StudentListProps)  {
    if(loading) return <div>loading</div>
    if(error) return <div> error</div>
    if(!students) return <div>no students</div>
    return (
        
            students.map((student:Student)=> <StudentNameTag key={student.id} student={student} />)
        
                           
    )
}