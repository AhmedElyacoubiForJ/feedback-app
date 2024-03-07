/*
    styling component to use it in multiple places.
    reverse prop to reverse the style either as a class or as style prop
*/
// conditional class & conditional style
function Card({ children, reverse }) {
  return <div className={`card ${reverse && 'reverse' } `}>
      {children}
    </div>
  
}

export default Card
