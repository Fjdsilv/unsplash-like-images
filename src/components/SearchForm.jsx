import { myUseContext } from "../context/Context";

const SearchForm = () => {
  const { setSearchTerm } = myUseContext()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.elements)
    let searchValue = e.target.elements.search.value;
    if (!searchValue) return
    setSearchTerm(searchValue)
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form 
        className="search-form"
        onSubmit={handleSubmit}
      >
        <input 
          type="text"
          className="form-input search-input" 
          name="search"
          placeholder="catholic"
        />
        <button 
          type="submit"
          className="btn"
        >
          search
        </button>
      </form>
    </section>
  )
}
export default SearchForm