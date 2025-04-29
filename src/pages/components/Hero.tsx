import { ChevronRight } from 'lucide-react';
import ImageSlider from "./ImageSlider"
import image1 from "./../../assets/images/phone1.png"
import image2 from "./../../assets/images/phone2.jpg"
import image3 from "./../../assets/images/bag.jpeg"
import image4 from "./../../assets/images/cap.jpeg"
import image5 from "./../../assets/images/glasses.jpg"
import image6 from "./../../assets/images/jacket.jpg"
import image7 from "./../../assets/images/laptop.jpg"
import image8 from "./../../assets/images/shirt.jpg"
import image9 from "./../../assets/images/watch.png"

const IMAGES = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const Hero = () => {
  return (
    <section className="flex justify-center">
        <div className="container flex justify-between">
            <section className=" border-r border-gray-300">
                <ul className="flex flex-col gap-5 text-2sm pr-4 pt-10">
                    <li className="flex items-center justify-between gap-14">
                        Women's Fashion <ChevronRight />
                    </li>
                    <li className="flex items-center justify-between gap-14">
                        Men's Fashion <ChevronRight />
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
            <section className="flex-4/6 h-[380px] mt-10 ml-10"  aria-label="Image Slider">
                <ImageSlider imageUrls={IMAGES} />
            </section>
        </div>
    </section>
  )
}

export default Hero