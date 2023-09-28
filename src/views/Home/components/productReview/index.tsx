import { AiFillStar } from "react-icons/ai"
import { reviewType, userType } from "../../../../types"
import { BsPersonCircle } from "react-icons/bs"
type props = {
  review: reviewType
  userList: userType
  productName: string
}
const productReview = ({ review, userList, productName }: props) => {
  const fetchUser = (userId: number) => {
    let user = userList.find((userObj: userType) => userObj.id === userId)
    return ` ${user.name} ${user.lastname}`
  }
  return (
    <div className='m-3'>
      <h3 className='d-flex'>Top 10 Reviews:</h3>

      {review.map((reviewObj: any) =>
        reviewObj.name === productName ? (
          <>
            <div className='d-flex flex-row'>
              <BsPersonCircle size={25} />
              <span className='fw-bold ms-2'>{fetchUser(reviewObj.user)}</span>
              <span className='fw-bold ms-2'>
                {reviewObj.rating} <AiFillStar />
              </span>
            </div>

            <div className='d-flex'>
              <span className='ms-5'>{reviewObj.comment}</span>
            </div>
          </>
        ) : (
          <>Review not avilable.</>
        )
      )}
    </div>
  )
}
export default productReview
