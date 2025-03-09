import { Link } from 'react-router-dom'

const menuItems = [
  { title: '출석부', path: '/attendance', color: 'bg-yellow-200' },
  { title: '상담', path: '/counseling', color: 'bg-green-200' },
  { title: '과제 관리', path: '/homework', color: 'bg-pink-200' },
  { title: '학생 관리', path: '/students', color: 'bg-blue-200' },
  { title: '시간표', path: '/timetable', color: 'bg-purple-200' },
  { title: '일정', path: '/schedule', color: 'bg-orange-200' }
]

export default function Home() {
  let currentTime = new Date()
  return (
    <div className="relative min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 mx-auto bg-green-900 rounded-lg shadow-lg border-8 border-brown-800"></div>
      <div className="absolute left-6 top-4 font-white text-lg flex flex-col items-center">
        <span>
          {`${currentTime.getFullYear()}년 ${currentTime.getMonth() + 1}월 ${currentTime.getDate()}일`}
        </span>
        <span>떠드는 사람</span>
        <span>짱구 II</span>
        <span>맹구 I</span>
      </div>

      <div className="relative flex flex-wrap justify-center items-center gap-4 p-8 lg:px-20 py-40">
        {menuItems.map(item => (
          <Link
            key={item.path}
            to={item.path}
            className={`${item.color} transform hover:-translate-y-1 transition-transform
              w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-lg shadow-lg
              flex flex-col items-center justify-center `}>
            <span className="text-xl lg:text-2xl font-semibold text-gray-800">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
