// impt
import PropTypes from 'prop-types'

const headerStyled = {
  backgroundColor: 'blue',
  color: 'red'
}

function Header({ text }) {
  return (
    <header style={headerStyled}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}
Header.propTypes = {
  text: PropTypes.string,
}

export default Header
