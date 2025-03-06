import { CaretRight } from "@phosphor-icons/react"

const Hero = () => {
  return (
    <section className="flex justify-center">
        <div className="w-[85vw] flex justify-between">
            <section className=" border-r border-gray-300">
                <ul className="flex flex-col gap-4 text-sm pr-4 pt-10">
                    <li className="flex items-center justify-between gap-14">
                        Women's Fashion <CaretRight size={16} weight="bold" />
                    </li>
                    <li className="flex items-center justify-between gap-14">
                        Men's Fashion <CaretRight size={16} weight="bold" />
                    </li>
                    <li>Electronics</li>
                    <li>Home & Lifestyle</li>
                    <li>Medicine</li>
                    <li>Sport & Outdoor</li>
                    <li>Baby's & Toys</li>
                    <li>Groceries & Pets</li>
                    <li>Health & Beauty</li>
                </ul>
            </section>
            <section className="bg-red-950 flex-4/6 mt-10 ml-10">
                <img src="" alt="Slider Image" /> image
            </section>
        </div>
    </section>
  )
}

export default Hero