import { CaretDown } from "@phosphor-icons/react"

const TopHeader = () => {
  return (
    <div className="bg-gray-950 h-12 flex items-center justify-between text-sm px-32">
        <div></div>
        <p className="text-gray-50">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
            <span className="font-semibold ml-4">Shop Now</span>
        </p>
        <button className="flex items-center text-gray-50 cursor-buttonointer">
            English <CaretDown className="text-gray-50 ml-2" size={16} />
        </button>
    </div>
  )
}

export default TopHeader