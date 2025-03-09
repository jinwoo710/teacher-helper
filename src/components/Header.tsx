import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="hidden lg:block">
      <nav>
        <Link to="/">home</Link>
        <Link to="/record">생활기록부</Link>
      </nav>
    </header>
  )
}
