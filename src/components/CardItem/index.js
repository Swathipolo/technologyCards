// Write your code here.
import './index.css'

const CardItem = props => {
  const {eachDetails} = props
  const {title, description, imgUrl, className} = eachDetails
  return (
    <li className={`${className} cardItem`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <div className="img-container">
        <img className="card-img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
