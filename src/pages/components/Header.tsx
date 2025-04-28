import Navigation from "./Navigation"
import TopHeader from "./TopHeader"

const Header = () => {
  return (
    <header className="border-b border-gray-300">
      <TopHeader />
      <Navigation />
    </header>
  )
}

export default Header