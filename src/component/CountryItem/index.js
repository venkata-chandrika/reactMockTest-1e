import './index.css'

const CountryItem = props => {
  const {eachList, visitCountry} = props
  const {id, name, isVisited} = eachList

  const onClickVisit = () => {
    visitCountry(id)
  }
  return (
    <li className="list-item">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="visited">visited</p>
      ) : (
        <button type="button" onClick={onClickVisit} className="visit">
          visit
        </button>
      )}
    </li>
  )
}
export default CountryItem
