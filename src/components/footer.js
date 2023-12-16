/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
     © 2024 Suhail Saban 
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
         <Link to="http://api.whatsapp.com/send?phone=971563901109&text=Hi%20Anas%20%0aI%20would%20like%20to%20discuss%20about%20building%20a%20website%20like%20suhailsaban.com">Need a website like this ?</Link>
      </p>
    </div>
  </footer>
)

export default Footer
