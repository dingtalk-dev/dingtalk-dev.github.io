import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, siteDescription }) => (
  <header
    style={{
      background: `linear-gradient(to right, rgb(50, 150, 250), rgb(21, 119, 218))`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 720,
        padding: `1.45rem 1.0875rem 0.5rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, marginTop: '3rem', color: '#fff' }}>
        {siteTitle}
      </h1>
      <h2 style={{ color: '#fff', fontSize: '1rem', fontWeight: 400, opacity: 0.6, margin: '0.8rem 0 0 0' }}>
        {siteDescription}
      </h2>
    </div>
    <div style={{ borderTop: 'calc(3vw + 30px) solid transparent', borderRight: '100vw solid #fff' }} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
