import { Student } from "../types";
import boyIcon from '@/assets/images/icons/boy.png'
import girlIcon from '@/assets/images/icons/girl.png'

interface StudentNameTag {
    student: Student
}
export default function StudentNameTag({student}:StudentNameTag) {
return (
    <div className={`flex w-full rounded-lg p-4 space-x-2 border cursor-pointer h-fit ${student.gender == '남' ? 'bg-blue-100' : 'bg-pink-100'}`}>
        <img src={student.gender == '남' ? boyIcon : girlIcon} alt={student.gender == '남' ? "남자" : "여자"} className="w-6 h-6"/><span>{student.studentId} . {student.name}</span> 
    </div>
)
}