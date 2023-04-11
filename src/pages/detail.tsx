import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Link } from 'react-router-dom'

import { IProduct } from "../models"
import { getById } from "../api/product"

const ProductDetail = (props: any) => {
    const { id } = useParams()

    const [product, setProduct] = useState<IProduct>({} as IProduct)

    const fetchProductById = async (id: string) => {
        try {
            const { data } = await getById(id)
            setProduct(data)
        } catch (err) {

        }
    }

    useEffect(() => {
        if (id) {
            fetchProductById(id)
        }
    }, [])

    const [isHidden, setIsHidden] = useState(true);
    const [showMore, setShowMore] = useState(false);
    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };


    return <div className="container mx-auto">
        <div className="border-b-2">
            <ul className="list-none h-8 flex items-center justify-start mx-auto max-w-[1024px] border-[#ccc] w-full text-sm cursor-pointer text-gray-400">
                <li className="mr-6"><a href="">Trang chủ</a></li>
                <li className="mr-6"><a href="">Điện thoại</a></li>
                <li className="mr-6"><a href="">SamSung</a></li>
                <li className="mr-6"><a href="">Samsung Galaxy A73 (5G) 256GB</a></li>
            </ul>
        </div>
        {/* product_Name */}
        {/* <div className="border-b-2">
            <h1 className="text-2xl py-2 product_name mx-auto max-w-[1024px] font-semibold">{product.name}</h1>
        </div> */}
        <div className='max-w-[1024px] mx-auto'>
            {/* layout */}
            <div className="layout_product flex my-12">
                <div className="w-[30%]">
                    <img src="https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg" alt="" className="h-[380px] w-[380px] object-cover justify-center items-center" />
                    <div className="flex flex-wrap mt-12">

                        <div className="h-16 w-16 rounded-md border-[#D70018] border-2 p-1 mr-3 mt-3 flex flex-col items-center justify-center">
                            <i className="fa-regular fa-star " ></i>
                            <p className="text-[10px] text-center">Tính năng nổi bật</p>
                        </div>

                        {/* //List Image */}
                        <div className="h-16 w-16 rounded-md border-gray-500 border-2 p-1 mr-3 mt-3">
                            <img src="https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg" className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="h-16 w-16 rounded-md border-gray-500 border-2 p-1 mr-3 mt-3">
                            <img src="https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg" className="w-full h-full object-cover" alt="" />
                        </div>
                        <div className="h-16 w-16 rounded-md  border-gray-500 border-2 p-1 mr-3 mt-3">
                            <img src="https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg" className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-[70%] px-14 flex flex-col">
                    <div className="border-b-2 pb-4">
                        <h1 className="text-4xl py-2 product_name mx-auto max-w-[1024px] font-semibold">{product.name}</h1>
                    </div>
                    <div className="flex font-semibold">
                        {product.price && (
                            <div className="text-red-600 text-3xl">
                                {product.price.toLocaleString()} <sup>đ</sup>
                            </div>
                        )}
                        {product.original_price && (
                            <div className="text-base mt-auto opacity-70 ml-6">{product.original_price.toLocaleString()}<sup>đ</sup></div>
                        )}
                    </div>
                    <div className="mt-10 text-[15px]">

                        Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.
                    </div>
                    <div className="mt-auto flex">
                        <button className="bg-[#FF3945]  text-[#FFFFFF] w-[240px] h-12 rounded-md hover:bg-white hover:border-[#FF3945] hover:text-[#FF3945] hover:border-2 ease-linear transition-all"><a href="/gio-hang">Mua ngay</a></button>
                        <div className="w-12 h-12 border-[#FF3945] border-2 ml-5 rounded-md flex justify-center items-center cursor-pointer hover:bg-[#FF3945] group text-[#FF3945] hover:text-[#FFF] ">
                            <a href="/cart" >
                                {/* <i className="fa-solid fa-basket-shopping-simple"></i> */}
                                <i className="fa-solid fa-cart-shopping " ></i>
                            </a>
                        </div>
                        {/* <Link to={'/cart'} className="block">
                            <FontAwesomeIcon icon={['fas', 'shopping-basket']} />
                        </Link> */}
                        {/* <span className="w-16 text-sm ml-5 cursor-pointer "><a href="/gio-hang">Thêm vào giỏ hàng</a></span> */}
                    </div>
                </div>
            </div>
            {/* description */}

            <div className="px-[70px]">
                <div dangerouslySetInnerHTML={{ __html: showMore && product.description ? product.description : (product.description && product.description.slice(0, 400)) }} />

                {!isHidden && (
                    <div className="product_description">
                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>
                )}
                <button onClick={() => setShowMore(!showMore)} className="mx-auto border-[#0A263C] border-2 text-[#0A263C] w-[30%] py-1 block mb-5 mt-[100px] rounded-lg hover:bg-[#0A263C] hover:text-white ease-linear transition-all">
                    {showMore ? 'Thu gọn' : 'Xem thêm'}
                </button>


            </div>



        </div>
    </div>
}

export default ProductDetail