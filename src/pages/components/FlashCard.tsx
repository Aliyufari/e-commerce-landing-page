import { Eye, Heart, Star } from 'lucide-react'

interface Props {
    name: string;
    imageUrl: string;
    price: number;
    oldPrice: number;
    discount: number;
    rating: number;
}

const FlashCard = ({ name, imageUrl, price, oldPrice, discount, rating } : Props) => {
  return (
    <div className="flex flex-col gap-3 w-70">
        <figure className="bg-gray-200  h-58 flex items-center justify-center relative px-7 py-10 rounded">
            <img src={imageUrl} alt="" />
            <button className="absolute left-3 top-3 bg-[#DB4444] text-xs py-1 px-2 text-white rounded">{discount}%</button>
            <span className="absolute top-3 right-3 flex flex-col gap-3">
                <Heart className="w-9 h-9 bg-white p-2 rounded-full" />
                <Eye className="w-9 h-9 bg-white p-2 rounded-full" />
            </span>
        </figure>
        <h3>{name}</h3>
        <h3 className="flex gap-4 text-[#DB4444]">${price} <del className="text-gray-600 line">${oldPrice}</del></h3>
        <div className="flex items-center gap-2">
            <p className="flex">
                <Star className="fill-[#ffad33] stroke-[#ffad33] w-5 h-5" />
                <Star className="fill-[#ffad33] stroke-[#ffad33] w-5 h-5" />
                <Star className="fill-[#ffad33] stroke-[#ffad33] w-5 h-5" />
                <Star className="fill-[#ffad33] stroke-[#ffad33] w-5 h-5" />
                <Star className="fill-[#ffad33] stroke-[#ffad33] w-5 h-5" />
            </p>
            <span>({rating})</span>
        </div>
    </div>
  )
}

export default FlashCard