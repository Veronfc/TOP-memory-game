/** @format */

import { createContext } from 'react'
import { Cards } from './Cards'

	const CardContext = createContext({
		cards: [],
		guesses: [],
	})

function App() {

	const cards = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
	const guesses = []

	return (
		<>
			<header>Memory game</header>
			<CardContext.Provider value={{ cards, guesses }}>
				<Cards />
			</CardContext.Provider>
		</>
	)
}

export { App, CardContext }
