import css from './SearchBox.module.css'

const SearchBox = ({ filter, onFilter }) => {

 
  return (
    <div>
      <p className={css.text}>Find contacts by name</p>
      <input  className={css.input} type="text" value={filter} onChange={onFilter} />
          
    </div>
  )
}

export default SearchBox