import { useEffect, useState } from "react"

// components
import ProductDetails from '../components/ProductDetails'

const Home = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => { // Fires component when effect is rendered
        const fetchWorkouts = async () => {
            const response = await fetch('/api/products')
            const json = await response.json()

            if (response.ok) {
                setProducts(json)
            }
        }

        fetchWorkouts()
    }, []) // Empty depend array, fires only once
    
    return (
        <div className="home">
            <div className="products">
                {products && products.map((product) => (
                    <ProductDetails key={product._id} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default Home