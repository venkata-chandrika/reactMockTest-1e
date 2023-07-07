import './index.css'

const VisitedCountry = props => {
  const {visitedCountry, removeVisitedCountry} = props
  const {id, name, imageUrl} = visitedCountry

  const removeCountry = () => {
    removeVisitedCountry(id)
  }

  return (
    <li className="visited-list-item">
      <img src={imageUrl} alt="thumbnail" className="img" />
      <div className="name-btn-container">
        <p className="name">{name}</p>
        <button type="button" onClick={removeCountry} className="remove">
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountry
