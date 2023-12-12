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
     © <span id="currentYear"></span> Suhail Saban 
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
         <Link to="https://wa.me/971563901109">Contact developer</Link>
      </p>
    </div>
  </footer>
)

export default Footer
