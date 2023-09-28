import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import ProfileNav from "./components/profile-nav"
import { GoPerson } from "react-icons/go"
import { PiHandbagLight } from "react-icons/pi"
import "./header.css"
import { useState } from "react"

const Header = () => {
  const [isPopupList, setPopupList] = useState(false)
  const popupStatus = (e: any) => {
    e.preventDefault()
    if (isPopupList) {
      setPopupList(false)
    } else {
      setPopupList(true)
    }
  }
  const navigate = useNavigate()
  const redirectTo = (page: string) => {
    navigate(`/${page}`)
  }
  return (
    <>
      <Container
        fluid
        className='d-flex align-items-center justify-content-between border customize-header'
      >
        {/* Logo and Navigation Section... */}
        <div className='d-flex'>
          <div className='m-3 d-flex align-items-center cursor-pointer'>
            <Navbar expand='lg'>
              <Container fluid>
                <Navbar.Brand href='#home'>
                  <Link to='/' className='link-style text-dark'>
                    <span className='logo'>Online shoping</span>
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-dark-example' />
                <Navbar.Collapse id='navbar-dark-example'>
                  <Nav>
                    <Nav.Item>
                      <Nav.Link title='Home'>
                        <Link to='/' className='link-style'>
                          Home
                        </Link>
                      </Nav.Link>
                    </Nav.Item>
                    <NavDropdown
                      id='nav-dropdown-dark-example'
                      title='Devices'
                      // menuVariant='dark'
                    >
                      <NavDropdown.Item href='/mobile'>Mobile</NavDropdown.Item>
                      <NavDropdown.Item href='/laptop'>Laptop</NavDropdown.Item>
                      <NavDropdown.Item href='/tab'>Tab</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='#action/3.4'>
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item>
                      <Nav.Link>Latest Devices</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>

        {/* Profile and Setting Section... */}
        <div className='d-flex'>
          <div className='m-3 d-flex flex-column'>
            <div
              className='d-flex flex-column align-items-center cursor-pointer'
              onClick={(e) => popupStatus(e)}
            >
              <GoPerson size={22} />
              <span className='fw-bold' style={{ fontSize: "12px" }}>
                Profile
              </span>
            </div>
            {isPopupList && <ProfileNav />}
          </div>
          <div
            className='m-3 d-flex flex-column align-items-center cursor-pointer'
            onClick={() => redirectTo("Bag")}
          >
            <PiHandbagLight size={22} />
            <span className='fw-bold' style={{ fontSize: "12px" }}>
              Bag
            </span>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header
