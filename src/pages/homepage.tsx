import { useEffect, useState } from "react"
import Product from "../components/product"
import { IProduct } from "../models"
import { getAll } from "../api/product"

const Homepage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const fetchProduct = async () => {
        try {
            const { data } = await getAll()
            setProducts(data)
        } catch (err) {

        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])
    return <div className="container mx-auto px-12">
        <section className="py-4">
            <img className="container mx-auto w-full " src="../../public/img/banner.png" alt="" />
        </section>
        <h1 className="font-medium text-2xl">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
        <div className="grid grid-cols-7 gap-4">
            {products.map(product => <Product data={product} key={product.id} />)}
        </div>
    </div>
}

export default Homepage