import { useNavigate } from "react-router-dom"
import Dropdown from "react-bootstrap/Dropdown"
import { LuSettings, LuLogOut } from "react-icons/lu"
const ProfileNav = () => {
  const navList = [
    { icon: <LuSettings />, name: "Settings" },
    { icon: <LuLogOut />, name: "Logout" },
  ]
  const navigate = useNavigate()
  const redirectTo = (page: string) => {
    navigate(`/${page}`)
  }
  return (
    <>
      <div className='popup-list'>
        <Dropdown.Menu show>
          {navList &&
            navList.map((content: any) => (
              <>
                <Dropdown.Item
                  className={`d-flex align-items-center justify-content-left `}
                >
                  <div className={content.className}>
                    {content.icon}
                    <span
                      className='p-1'
                      onClick={() => {
                        redirectTo(`${content.name}`)
                      }}
                    >
                      {content.name}
                    </span>
                  </div>
                </Dropdown.Item>
              </>
            ))}
        </Dropdown.Menu>
      </div>
    </>
  )
}
export default ProfileNav
