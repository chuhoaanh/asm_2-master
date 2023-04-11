import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { formSignup } from '../../models'

const UserLayout = () => {
    const [user, setUser] = useState<formSignup>({} as formSignup)
    console.log(user.userName);


    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/')
    }

    useEffect(() => {
        const getData = localStorage.getItem("user")
        if (getData) {
            const dataObject = JSON.parse(getData)
            setUser(dataObject)
        }
    }, [])
    return <>
        {/* Header */}
        <header className='bg-[#D70018]'>
            <div className="container flex flex-row items-center justify-center  h-[64px]  ">
                <div className="logo">
                    <img className='w-[65px] mx-auto ' src="../../public/img/logo.png" alt="" />
                </div>
                <div className="search">
                    <form className=" px-4 ">
                        <div className="relative">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search"
                                className=" py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 h-[34px] w-[600px]"
                            />
                        </div>
                    </form>
                </div>
                <div className="">
                    {user.userName ? <div className='text-[#ffffff] ml-[700px] flex items-center'>
                        <button className='' onClick={() => logout()}><span className="flex-1  whitespace-nowrap">Log out </span>
                        </button></div>
                        : <Link to="/signin" className=''> <span className="flex-1  whitespace-nowrap text-[#ffffff] ml-[700px]">Login </span>
                        </Link>}

                </div>
            </div>
        </header>
        {/* Content */}
        <Outlet />
        <footer className=''>
            <div className="grid grid-cols-4 gap-5 my-10 py-10 max-w-[1024px] mx-auto">
                <div className="min-w-[250px]">
                    <h1 className='font-semibold text-xl'>Tìm cửa hàng</h1>
                    <ul className='list-none'>
                        <li className='text-sm mt-2'>Tìm cửa hàng gần nhất</li>
                        <li className='text-sm mt-2'>Mua hàng từ xa</li>
                        <li className='text-red-600 text-sm mt-2 '>Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</li>
                    </ul>
                    <h1 className='font-semibold my-10'>Phương thức thanh toán</h1>
                    <ul className="list-none flex ml-[-16px]">
                        <li className='ml-4'><img src="https://s3-alpha-sig.figma.com/img/57eb/353e/bb8cc93a8f954930d75c7394ca2ad285?Expires=1681084800&Signature=X18rYMvV3zd0UJa3XIYrrLd5X9ghLQFjer8ihoBOFDCsTEOLJTX2XASYGPCZwBGYbefMehpXYtmJ1Rt6DA7z1HeEdlrPciSoN5ip4pAj0A7V1srqXTU14ipY4Z31wOXFfbn83e4bSGMy8nuPx8UapGLJRtvP1nQQQV3DpKXgfwmV-8UAzs-ea6uvnMHV1jyx3Soa4GC2S3suGwTPn~Ro~WzKN-EwDSCgS4CaarVT~LUXwavTMGKXTuxaXtxOQRNsIgq9mBEpBq~-yrWW67aA3wAawDm2rSfbiQBVqPutydSSyrJXkSgC8jTGfnQHq4vZvv7Kzoe0A5-ZDksG3Cku3g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" className='w-[100px] h-[20px] object-cover' /></li>
                    </ul>
                </div>
                <div className="min-w-[250px]">
                    <ul className='list-none text-[14px] mt-[-4px]'>
                        <li className='mt-2'>Gọi mua hàng: <span>0967***(10h-12h)</span></li>
                        <li className='mt-2'>Gọi khiếu nại: <span>0967***(10h-12h)</span></li>
                        <li className='mt-2'>Gọi bảo hành: <span>0967***(10h-12h)</span></li>
                    </ul>
                    <ul className='list-none text-[14px] my-3'>
                        <h1 className='font-semibold text-lg'>Đối tác dịch vụ bảo hành</h1>
                        <li className='mt-2'>Điện thoại - máy tính</li>
                    </ul>
                    <h1 className='font-semibold text-[15px]'>Trung tâm bảo hành uỷ quyền Apple</h1>
                    <img src="../../public/img/Rectangle.png" className='w-[230px] h-10 mt-3' alt="" />
                </div>
                <div className="min-w-[250px]">
                    <ul className='list-none text-[14px] mt-[-4px]'>
                        <li className='mt-2'>Mua hàng và thanh toán Online</li>
                        <li className='mt-2'>Mua hàng trả góp Online</li>
                        <li className='mt-2'>Tra thông tin đơn hàng</li>
                        <li className='mt-2'>Tra điểm Smember</li>
                        <li className='mt-2'>Tra thông tin bảo hành</li>
                        <li className='mt-2'>Tra cứu hoá đơn VAT điện tử</li>
                        <li className='mt-2'>Trung tâm bảo hành chính hãng</li>
                        <li className='mt-2'>Quy định về việc sao lưu dữ liệu</li>
                        <li className='mt-2 text-red-600'>Dịch vụ bảo hành điện thoại</li>
                    </ul>
                    <ul className='list-none text-[14px] my-3'>
                        <h1 className='font-semibold text-xl'>Đối tác dịch vụ bảo hành</h1>
                        <li className='mt-2'>Điện thoại - máy tính</li>
                    </ul>
                </div>
                <div className="min-w-[250px]">
                    <ul className='list-none text-[14px] mt-[-4px]'>
                        <li className='mt-2'>Quy chế hoạt động</li>
                        <li className='mt-2'>Chính sách Bảo hành</li>
                        <li className='mt-2'>Liên hệ hợp tác kinh doanh</li>
                        <li className='mt-2'>Khách hàng doanh nghiệp (B2B)</li>
                        <li className='mt-2 text-red-600'>Ưu đãi thanh toán</li>
                        <li className='mt-2'>Tuyển dụng</li>
                    </ul>
                    <ul className='list-none text-[14px] my-3'>
                        <h1 className='font-semibold text-xl'>Đối tác dịch vụ bảo hành</h1>
                        <li className='mt-2'>Điện thoại - máy tính</li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#F8F8F8]">
                <div className="grid grid-cols-3 gap-8 py-10 max-w-[1024px] mx-auto ">
                    <div className="min-w-[250px]">
                        <ul className='list-none text-[14px] mt-[-4px]'>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 - </span>
                                <span>Điện thoại iPhone 12 - </span>
                                <span>Điện thoại iPhone 11</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 Pro Max - </span>
                                <span>Điện thoại iPhone 11 Pro Max</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>iPhone cũ giá rẻ - </span>
                                <span>iPhone 13 cũ - </span>
                                <span>iPhone 12 cũ - </span>
                                <span>iPhone 11 cũ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="min-w-[250px]">
                        <ul className='list-none text-[14px] mt-[-4px]'>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 - </span>
                                <span>Điện thoại iPhone 12 - </span>
                                <span>Điện thoại iPhone 11</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 Pro Max - </span>
                                <span>Điện thoại iPhone 11 Pro Max</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>iPhone cũ giá rẻ - </span>
                                <span>iPhone 13 cũ - </span>
                                <span>iPhone 12 cũ - </span>
                                <span>iPhone 11 cũ</span>
                            </li>
                        </ul>
                    </div>
                    <div className="min-w-[250px]">
                        <ul className='list-none text-[14px] mt-[-4px]'>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 - </span>
                                <span>Điện thoại iPhone 12 - </span>
                                <span>Điện thoại iPhone 11</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>Điện thoại iPhone 13 Pro Max - </span>
                                <span>Điện thoại iPhone 11 Pro Max</span>
                            </li>
                            <li className='mt-2 text-[10px]'>
                                <span>iPhone cũ giá rẻ - </span>
                                <span>iPhone 13 cũ - </span>
                                <span>iPhone 12 cũ - </span>
                                <span>iPhone 11 cũ</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-5">
                    <p className='text-[10px] text-[#333] text-center font-bold opacity-40'>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
                </div>
            </div>
        </footer >
    </>
}

export default UserLayout