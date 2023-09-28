import { Card } from "react-bootstrap"
import "./card.css"
import { productType } from "../../types"
const card = ({ data }: productType) => {
  return (
    <>
      <Card className='custm-card '>
        <div>
          <Card.Img
            variant='top'
            alt={data && data.name}
            src={data && data.image}
            className='custm-product-img'
          />
        </div>
        <Card.Body>
          <Card.Title>
            {data && data.name.length > 14
              ? `${data.name.substring(0, 14)}...`
              : data && `${data.name}`}
          </Card.Title>
          <Card.Text className='description'>
            {data && data.description.substring(0, 140)}...
          </Card.Text>
          <div className='d-flex justify-content-end align-self-center'>
            <span className='fw-bold'>{data && `₹${data.price}`}</span>
            {/* <Button variant='dark'>
              <BsCart2 size={20} />
              <span className='fw-bold p-2'>Add to Cart</span>
            </Button> */}
          </div>
        </Card.Body>
      </Card>
    </>
  )
}
export default card
