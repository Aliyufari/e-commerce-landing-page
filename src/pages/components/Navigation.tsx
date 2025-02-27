import { Heart, MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react"

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-32 pt-8 pb-4">
        <h2 className="font-bold text-xl">Exclusive</h2>

        <ul className="flex items-center gap-8">
            <li className="border-b border-gray-300">Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
        </ul>

        <section className="flex items-center gap-5">
            <form className="flex items-center gap-1 bg-gray-200 px-4 py-2 rounded">
                <input type="text" id="search" className="bg-inherit outline-none text-xs" placeholder="What are you looking for?" />
                <label htmlFor="search"><MagnifyingGlass size={22} /></label>
            </form>
            
            <Heart size={22} />

            <span className="relative">
                <ShoppingCart size={22} />
                <span className="flex items-center justify-center text-white w-4 h-4 rounded-full bg-[#DB4444] text-xs absolute -top-1 -right-2">2</span>
            </span>

            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DB4444]">
                <User className="text-white" size={18} />
            </span>
        </section>
    </nav>
  )
}

export default Navigation