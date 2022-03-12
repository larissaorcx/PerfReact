import { FormEvent, useCallback, useState } from "react"
import { SearchResults } from "../components/SearchResults";


export default function Home() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([]);

  async function handleaSerch(event: FormEvent) {
    event.preventDefault()

    if(!search.trim()){
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const data = await response.json();

    setResults(data);
  }

const addToWishlist = useCallback(async (id: number) => {
  console.log(id)
}, [])

  return (
    <div>
      <h1>Serch</h1>

      <form onSubmit={handleaSerch}>
       <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)} 
          
          />

          <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results}  onAddToWishlist={addToWishlist}/>
    </div>
  )
}
