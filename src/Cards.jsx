/** @format */

import { useContext } from "react"
import { CardContext } from "./App"

function Cards() {
  const { cards, guesses } =  useContext(CardContext)

	return (
  <section>
    {cards.length}
  </section>
  )
}

export { Cards }
