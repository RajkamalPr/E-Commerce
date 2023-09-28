import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../../components/Loader"
import ProductDescription from "./components/productDescription"
import FeatureProduct from "./components/featureProduct"
import { useSelector } from "react-redux"
import { productType } from "../../types"

const Home = () => {
  const params = useParams()
  const [isLoding, setLoding] = useState(true)
  const Products = useSelector((state: any) => state.product)
  const Reviews = useSelector((state: any) => state.review)
  const userList = useSelector((state: any) => state.user)
  const productDesc =
    Number(params.id) &&
    Products.find((item: productType) => item.id === Number(params.id))
  useEffect(() => {
    setLoding(false)
  }, [Products])
  return (
    <div className='main-container'>
      {isLoding ? (
        <Loader />
      ) : !Number(params.id) ? (
        <FeatureProduct data={Products} />
      ) : (
        <ProductDescription
          data={productDesc}
          review={Reviews}
          userList={userList}
        />
      )}
    </div>
  )
}

export default Home
