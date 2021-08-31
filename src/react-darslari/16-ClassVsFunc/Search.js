function Search(props) {

    const handleChange = (e) => {
        props.setFilterText(e.target.value)
    }
 return <div>
            <input value={props.filterText} onChange={handleChange} />
            <p>
               <input type="checkbox" onChange={(e) => props.setInStockOnly(e.target.checked)} checked={props.stocked} />
               Faqat omborda mavjud mahsulotlar
            </p>
        </div>
}
export default Search