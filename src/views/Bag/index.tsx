import { useEffect, useState } from "react"
import { Button, Form, ListGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { AiOutlineDelete } from "react-icons/ai"
import { cart, productType } from "../../types"
import { removeCart, updateCart } from "../../app/slices/cartSlice"
type data = {
  name: string
  qty: string
}
const Bag = () => {
  const cartState = useSelector((state: any) => state.cart.cart)
  const productState = useSelector((state: any) => state.product)
  const dispatch = useDispatch()
  const productList: productType = []
  const [updateQnty, setUpdateQuantity] = useState<data>({
    name: "",
    qty: "",
  })

  const processQuality = (totalStock: number) => {
    let optionsChunk = []
    for (let i = 1; i <= totalStock; i++) {
      optionsChunk.push(<option value={i}>{i}</option>)
    }
    return optionsChunk
  }
  const changeQuantity = (e: any, name?: string) => {
    e.preventDefault()
    setUpdateQuantity({
      name: `${name}`,
      qty: e.target.value,
    })
  }
  const removeCartItem = (e: any, name?: string) => {
    e.preventDefault()
    dispatch(removeCart({ name }))
  }
  useEffect(() => {
    dispatch(updateCart({ ...updateQnty }))
  }, [updateQnty])

  return (
    <div className='main-container' style={{ height: "100vh" }}>
      <div className='d-flex flex-column text-start m-4'>
        <h5>Item List</h5>
        <ListGroup>
          {cartState.map((cartItem: cart, index: number) => {
            productList.push(
              productState.find((Item: any) => Item.name === cartItem.name)
            )

            return (
              <ListGroup.Item>
                <div
                  className='d-flex justify-content-between'
                  style={{ width: "100%" }}
                >
                  <div className='d-flex flex-row'>
                    <img
                      src={cartItem.image}
                      className='cartItem-image-icon'
                      alt={cartItem.name}
                    />
                    <div className='d-flex flex-column'>
                      <div className='d-flex ms-4'>
                        <span className='fw-bold'>{cartItem.name}</span>
                      </div>
                      <div className='d-flex'>
                        <div className='ms-4'>
                          <b>Price :</b> {cartItem.price}
                        </div>
                        <div className='ms-4'>
                          <b>Product :</b> {cartItem.product}
                        </div>
                      </div>
                      <div className='d-flex  '>
                        <div className='d-flex justify-content-start ms-4'>
                          <span className='fw-bold'>Quantity :</span>
                          <Form.Select
                            aria-label='Default select example'
                            onChange={(e) => changeQuantity(e, cartItem.name)}
                            size='sm'
                            className='ms-2'
                            style={{ width: "5rem" }}
                            value={cartItem.qty}
                          >
                            {processQuality(productList[index].countInStock)}
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='d-flex align-self-center ms-4'>
                    <Button
                      variant='outline-danger'
                      className='d-flex justify-content-center text-center'
                      style={{ height: "2rem", width: "3rem" }}
                      onClick={(e) => removeCartItem(e, cartItem.name)}
                    >
                      <AiOutlineDelete size={20} />
                    </Button>
                  </div>
                </div>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </div>
    </div>
  )
}

export default Bag
