import { Button, Col, Row } from "react-bootstrap"
import { BsCart2 } from "react-icons/bs"
import { BiPurchaseTag } from "react-icons/bi"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify"
import ProductReview from "../productReview"
import { addCart } from "../../../../app/slices/cartSlice"
import { cart, productType, reviewType, userType } from "../../../../types"
import { useDispatch, useSelector } from "react-redux"
type props = {
  data: productType
  review: reviewType
  userList: userType
}

const ProdDesc = ({ data, review, userList }: props) => {
  const cartData = useSelector((state: any) => state.cart?.cart)
  const dispatch = useDispatch()
  const cart = {
    name: `${data?.name}`,
    qty: "1",
    image: ` ${data?.image}`,
    price: `${data?.price}`,
    product: `${data?.category}`,
  }

  const countStars: any = []
  let i = 0
  const processRatingCount = (count: number) => {
    for (i = 1; i <= 5; i++) {
      if (i <= count) {
        countStars.push(<AiFillStar />)
      } else {
        countStars.push(<AiOutlineStar />)
      }
    }
    return countStars
  }

  processRatingCount(data?.rating)
  const processAddToCart = () => {
    console.log("cartData", cartData)
    let checkAvilableData = cartData.find(
      (item: cart) => item.name === data.name
    )
    if (!checkAvilableData) {
      dispatch(addCart(cart))
      toast("Added to Cart Sucessfull")
    } else {
      toast("Product is avilable in Cart")
    }
  }
  return (
    <>
      <ToastContainer />
      <Row>
        <Col>
          <img
            src={data?.image}
            alt={data?.name}
            className='product-description-img'
          />
        </Col>

        <Col>
          <div className='d-flex flex-column m-4'>
            <h1 className='text-start'>{data?.name}</h1>
            <p className='text-start'>
              <b>Description:</b>
              <br />
              {data?.description}
            </p>

            <span className='text-start'>
              <b>Rating: </b>
              {countStars.map((star: any) => star)}
            </span>
            <div className='d-flex fw-bold text-start mt-2 mb-2'>
              {data?.countInStock !== 0 ? (
                <>Quantity : {data?.countInStock}</>
              ) : (
                <span className='text-warning'>Not Available</span>
              )}
            </div>
            <span className='fw-bolder text-start'>Price: ₹{data?.price}</span>
            {data.countInStock !== 0 && (
              <div className='d-flex'>
                <Button variant='dark m-2' onClick={processAddToCart}>
                  <BsCart2 size={20} />
                  <span className='fw-bold p-2'>Add to Cart</span>
                </Button>
                <Button variant='dark m-2'>
                  <BiPurchaseTag size={20} />
                  <span className='fw-bold p-2'>Buy Now</span>
                </Button>
              </div>
            )}
          </div>
          <ProductReview
            review={review}
            userList={userList}
            productName={data?.name}
          />
        </Col>
      </Row>
    </>
  )
}

export default ProdDesc
