/** @jsx jsx */
import { jsx } from "theme-ui"
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
        Made with {" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        by <a href="https://www.camelcaseguy.com">CamelCaseGuy</a>
      </p>
    </div>
  </footer>
)

export default Footer
