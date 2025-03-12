import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'
import { Student, StudentFormData } from "../routes/pages/students/types"

const fetchStudentsApi = async ():Promise<Student[]> => {
    const response = await fetch('/api/students')
    if(!response.ok){
        throw new Error("Failed to fetch students")
    }
    return response.json();
}

const createStudentApi =  async(student:StudentFormData): Promise<Student> =>{
    const response = await fetch('/api/students',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    })
    if(!response.ok){
        throw new Error("Failed to create student")
    }
    return response.json();
}

export function useStudents() {
    const queryClient = useQueryClient();
    const {data:students=[], isLoading: loading, error:queryError} = useQuery({
        queryKey:['students'],
        queryFn: fetchStudentsApi
    })

    const {mutateAsync: createStudent, isPending: isCreating} = useMutation({
        mutationFn: createStudentApi,
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['students']})
        }
    })

    const error = queryError ? (queryError instanceof Error ? queryError.message : 'Unknown error'): null

    return {
        students,
        loading: loading || isCreating,
        error,
        createStudent
    }
}

    