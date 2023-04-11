import { Link } from 'react-router-dom'
import { IProduct } from "../models"

type ProductProp = {
    data: IProduct
}

const Product = ({ data }: ProductProp) => {

    return <Link to={`/product/${data.id}`} className="block h-[303px] relative">
        <img
            alt="Art"
            src={data?.images}
            className="w-full object-cover"
        />

        <div className="absolute bottom-0 w-full">
            <h3 className="mt-4 text-[14px]  text-gray-900 font-semibold">
                {data.name}
            </h3>

            <p className="mt-2 text-[14px] flex">
                <p className="text-[#D70018] text-[14px] font-semibold">{data.original_price && typeof data.original_price !== 'undefined' && (
                    <p className="text-[#D70018] text-[14px] font-semibold">{data.original_price.toLocaleString()}<span className="text-gray-700 opacity-50 ml-2 text-[13px]">{data.price.toLocaleString()} ₫</span></p>
                )} ₫<span className="text-gray-700 opacity-50 ml-2 text-[13px]">{data.price.toLocaleString()} ₫</span></p>
            </p>
            <p className="mt-2 text-[12px] flex w-full">
                <p className="flex">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </p>
                <span className="text-gray-700 opacity-50 ml-2">10 đánh giá</span>
            </p>
        </div>
    </Link>
}

export default Product
