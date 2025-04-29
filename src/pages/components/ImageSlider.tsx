import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    imageUrls: string[];
}

const ImageSlider = ({ imageUrls }: Props) => {
    const [imageIndex, setImageIndex] = useState(0);

    const showPreviousImage = () => {
        setImageIndex(index => (index === 0 ? imageUrls.length - 1 : index - 1));
    };

    const showNextImage = () => {
        setImageIndex(index => (index === imageUrls.length - 1 ? 0 : index + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            showNextImage();
        }, 3000);
    
        return () => clearInterval(intervalId);
    }, []);    

    return (
        <section className="w-full h-full relative overflow-hidden">
            <figure className="flex w-full h-full transition-transform duration-300 ease-in-out" style={{ transform: `translateX(${-100 * imageIndex}%)` }}>
                {imageUrls.map((url, index) => (
                    <img 
                        key={url}
                        src={url}
                        alt={`Slide ${index + 1}`}
                        className="block object-fill min-w-full max-h-full shrink-0 grow-0"
                    />
                ))}
            </figure>

            {/* Left Arrow */}
            <button
                onClick={showPreviousImage}
                className="image-slider-btn absolute top-0 bottom-0 left-0 p-4 hover:bg-black/20 focus-visible:bg-black/20 cursor-pointer transition-colors duration-100 group"
            >
                <ArrowBigLeft size={24} className="stroke-white fill-black group-hover:scale-125 group-focus-visible:scale-125 transition-transform duration-200 ease-in-out" />
            </button>

            {/* Right Arrow */}
            <button
                onClick={showNextImage}
                className="image-slider-btn absolute top-0 bottom-0 right-0 p-4 hover:bg-black/20 focus-visible:bg-black/20 cursor-pointer transition-colors duration-100 group"
            >
                <ArrowBigRight size={24} className="stroke-white fill-black group-hover:scale-125 group-focus-visible:scale-125 transition-transform duration-200 ease-in-out" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {imageUrls.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setImageIndex(index)}
                        className="w-3 h-3 flex items-center justify-center cursor-pointer transition-transform duration-100 hover:scale-120 focus-visible:scale-120 outline-none"
                    >
                        {index === imageIndex ? (
                            <CircleDot className="stroke-3 stroke-[#DB4444] fill-white w-full h-full" />
                        ) : (
                            <Circle className="stroke-white fill-black w-full h-full" />
                        )}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default ImageSlider;
