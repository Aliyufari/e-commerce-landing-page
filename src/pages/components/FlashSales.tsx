import { ArrowLeft, ArrowRight } from "lucide-react"
import FlashCard from "./FlashCard"
import gamepad from "./../../assets/images/flash/gamepad.png"
import bag from "./../../assets/images/flash/bag.png"
import chair from "./../../assets/images/flash/chair.png"
import keyboard from "./../../assets/images/flash/keyboard.png"
import monitor from "./../../assets/images/flash/monitor.png"

const FLASH_IMAGES = [
    {name: 'HAVIT HV-G92 Gamepad', imageUrl: gamepad, price: 150, old_price: 180, discount: -40, rating: 75},
    {name: 'Gucci Duffle Bag', imageUrl: bag, price: 95, old_price: 100, discount: -30, rating: 64},
    {name: 'S-Series Comfort Chair', imageUrl: chair, price: 100, old_price: 120, discount: -35, rating: 84},
    {name: 'AK-900 Wired Keyboard', imageUrl: keyboard, price: 70, old_price: 90, discount: -20, rating: 79},
    {name: 'IPS LCD Gaming Monitor', imageUrl: monitor, price: 200, old_price: 250, discount: -25, rating: 90},
];

const FlashSales = () => {
  return (
    <section className="container mt-28">
        <h3 className="font-bold text-[#DB4444] border-l-20 p-3 rounded mb-2">Today's</h3>
        <div className="flex items-center justify-between">
            <aside className="flex justify-between gap-28 mb-8">
                <h2 className="font-semibold text-4xl self-end">Flash Sales</h2>
                <div className="flex gap-3">
                    <section>
                        <span className="text-sm">Days</span>
                        <h2 className="font-semibold text-3xl">03</h2>
                    </section>
                    <span className="self-end text-lg text-[#DB4444] font-bold pb-2">:</span>
                    <section>
                        <span className="text-sm">Hours</span>
                        <h2 className="font-semibold text-3xl">23</h2>
                    </section>
                    <span className="self-end text-lg text-[#DB4444] font-bold pb-2">:</span>
                    <section>
                        <span className="text-sm">Minutes</span>
                        <h2 className="font-semibold text-3xl">19</h2>
                    </section>
                    <span className="self-end text-lg text-[#DB4444] font-bold pb-2">:</span>
                    <section>
                        <span className="text-sm">Seconds</span>
                        <h2 className="font-semibold text-3xl">56</h2>
                    </section>
                </div>
            </aside>
            <aside className="flex items-center gap-3">
                <ArrowLeft className="bg-gray-200 h-10 w-10 p-2 rounded-full" />
                <ArrowRight className="bg-gray-200 h-10 w-10 p-2 rounded-full" />
            </aside>
        </div>
        <div className="flex justify-between gap-4">
            {
                FLASH_IMAGES.map(image => 
                    <FlashCard 
                        name={image.name} 
                        price={image.price} 
                        oldPrice={image.old_price} 
                        imageUrl={image.imageUrl} 
                        discount={image.discount} 
                        rating={image.rating} 
                    />
                )
            }
        </div>
    </section>
  )
}

export default FlashSales