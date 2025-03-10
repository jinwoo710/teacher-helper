interface AddStudentModalProps {
    isOpen: boolean;
    onClose: ()=> void;
}

export default function AddStudentModal( {isOpen, onClose}: AddStudentModalProps) {
    if(!isOpen) return null
    const inputContainerClass = 'flex items-center gap-4'
    const labelClass= 'w-10'
    const inputClass = 'rounded-md border flex-1 px-2'
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black/30" onClick={onClose}/>
            <div className="relative bg-white p-6 rounded-xl border flex flex-col gap-4 min-w-[400px] shadow-lg">
            <div className={inputContainerClass}>
                <span className={labelClass}>학번</span> <input className={inputClass}/>
            </div>
            <div className={inputContainerClass}>
                <span className={labelClass}>이름</span> <input className={inputClass}/>
            </div>
            <div className={inputContainerClass}>
                <span className={labelClass}>성별</span> 
               <div className="flex gap-4">
                <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="gender" value="남"/>
                    남자
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                    <input type="radio" name="gender" value="여"/>
                    여자
                </label>
               </div>
            </div>
            <button className='rounded-xl border p-2 hover:bg-gray-100'>추가하기</button>
            </div>
        </div>
    )
    
}