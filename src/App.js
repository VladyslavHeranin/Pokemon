import React, { useEffect, useState } from "react"
import Items from "./components/items"
import Button from "./components/button"
import axios from 'axios'
import "./index.css"



const App = () => {
  const [items, setItem] = useState([])
  const [loding, setLoding] = useState(true)
  const [button, setButton] = useState(9)

  const lodeMore = () => {
    setButton(button + 12)
  }


  useEffect(() => {
    const fetchItems = async () => {

      const arr = []

      const result = await axios(`https://pokeapi.co/api/v2/pokemon/?limit=${button}`)

      for (let i = 0; i < result.data.results.length; i++) {

        let fetch = await axios(result.data.results[i].url)

        arr.push(fetch.data)
      }
      setItem(arr)
      setLoding(false)
    }

    fetchItems()

  }, [button])

  return (
    <div>
      <Items items={items} loding={loding} button={lodeMore}  />
    </div>
  );
}

export default App;
