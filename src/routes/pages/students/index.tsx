import { useState } from "react";
import AddStudentModal from "./components/AddStudentModal";
import StudentNameTag from "./components/StudentNameTag";
import { Student } from "./types";

export default function Students() {
    let [isAddModalopen, setIsAddModalOpen] = useState(false)
    let students: Student = {name: "홍길동", id: 2, gender: "남"}
    const createStudent = async () =>{
        try{
            const response = await fetch('/api/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(students),
            });

            console.log(response)
            
        } catch (error) {
            console.error('Error creating student:', error);
        }
    }
    return (
        <div 
        className="w-full min-h-[600px] bg-white p-6 rounded-lg shadow-md flex space-x-4"
        style={{
          backgroundImage: "linear-gradient(#eee 1px, transparent 1px)",
          backgroundSize: "100% 25px"
        }}
      >
            <div className="flex flex-col">
                <div className="h-10">
                    학생 목록 2023 (test)
                </div>
                <div className="flex w-[200px] flex-col space-y-2 rounded-lg border p-3 h-[80vh] overflow-y-scroll">
                    {/* {students.map((student)=>{
                        return(
                            <StudentNameTag key={student.id} student={student} />
                        )
                    })} */}
                    <StudentNameTag key="1" student={{id:1,name:"짱구",gender:"남"}} />
                </div>
                <button className="cursor-pointer hover:bg-gray-100 mt-3 w-full rounded-2xl border p-2" onClick={createStudent}>추가하기</button>
            <AddStudentModal isOpen={isAddModalopen} onClose={() => {setIsAddModalOpen(false)}} />
            </div>
            <div className="flex flex-col w-full mt-10 space-y-4">
                <div className="container min-h-[25%] border flex flex-col overflow-y-scroll rounded-lg p-4">
                    <span>출결</span>
                </div>
                <div className="container min-h-[25%] border flex flex-col overflow-y-scroll rounded-lg p-4">
                    <span>과제</span>
                </div>
                <div className="container h-full border flex flex-col overflow-y-scroll rounded-lg p-4">
                    <span>상담</span>
                </div>
            </div>
            </div>
            
    )
}
