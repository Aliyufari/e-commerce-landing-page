import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-center">
        <div className="container flex items-center justify-between pt-8 pb-4">
            <h2 className="font-bold text-xl">Exclusive</h2>

            <ul className="hidden items-center gap-10 md:flex text-3sm">
                <li className="border-b border-gray-300">Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>

            <section className="flex items-center gap-6">
                <form className="hidden items-center bg-gray-200 px-3 py-2 rounded lg:flex">
                    <input 
                        type="text" 
                        id="search" 
                        className="bg-inherit outline-none text-sm focus:bg-inherit mr-3" 
                        placeholder="What are you looking for?" />
                    <label htmlFor="search"><Search /></label>
                </form>
                
                <Heart />

                <span className="relative">
                    <ShoppingCart size={22} />
                    <span className="flex items-center justify-center text-white w-4 h-4 rounded-full bg-[#DB4444] text-xs absolute -top-1 -right-2">2</span>
                </span>

                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#DB4444]">
                    <User className="text-white" size={18} />
                </span>
                <Menu className="block md:hidden" />
            </section>
        </div>
    </nav>
  )
}

export default Navigation