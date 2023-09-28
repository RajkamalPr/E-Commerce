import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Slider from "../../../../components/slider"
import Card from "../../../../components/card"
import { productType } from "../../../../types"
const featureProduct = ({ data }: productType) => {
  return (
    <>
      <Slider />
      <div className='d-flex flex-column align-items-start m-4'>
        <h3 className='text-uppercase md-5'>Latest Devices</h3>
        <Row>
          {data.map(
            (data: productType, index: number) =>
              index <= 4 && (
                <>
                  <Col>
                    <Link
                      to={`product/${data.id}`}
                      className='text-decoration-none'
                    >
                      <Card data={data} />
                    </Link>
                  </Col>
                </>
              )
          )}
        </Row>
      </div>
      <div className='d-flex flex-column align-items-start m-4'>
        <h3 className='text-uppercase md-5'>Best Selling Devices</h3>
        <Row>
          {data.map(
            (data: productType, index: number) =>
              index <= 4 && (
                <>
                  <Col>
                    <Card data={data} />
                  </Col>
                </>
              )
          )}
        </Row>
      </div>
      <div className='d-flex flex-column align-items-start m-4'>
        <h3 className='text-uppercase md-5'>Products</h3>
        <Row>
          {data.map(
            (data: productType, index: number) =>
              index <= 4 && (
                <>
                  <Col>
                    <Card data={data} />
                  </Col>
                </>
              )
          )}
        </Row>
      </div>
    </>
  )
}
export default featureProduct
