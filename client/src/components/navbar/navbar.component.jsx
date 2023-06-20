function Navbar ({handleChange,handleSubmit}){
    return (
        <div>
            <form onChange={handleChange}>
            <input placeholder="Busque un Juego" type="search" />
            <button type="submit" onClick={handleSubmit}>Buscar</button>
            </form>
        </div>
    )
}

export default Navbar