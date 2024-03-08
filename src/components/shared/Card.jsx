import { PropTypes } from "prop-types"
/*
    styling component to use it in multiple places.
    reverse prop to reverse the style either as a class or as style prop
*/
// conditional class & conditional style
function Card({ children, reverse }) {
  // conditional class
  /*  return <div className={`card ${reverse && 'reverse' } `}>
      {children}
    </div> */

  return (
    // conditinal style
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
}
Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card
