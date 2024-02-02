/** @format */

import { useCallback, useContext } from 'react'
import { CardContext } from './App'

function Cards() {
	const { cards, guesses, setGuesses } = useContext(CardContext)

	//DESC: Durstenfeld shuffle algorithm
	const round = useCallback(() => {
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[cards[i], cards[j]] = [cards[j], cards[i]]
		}

		return cards.slice(0, 3).map(card => {
			return (
				<button
					onClick={() => {
						setGuesses([...guesses, card])
					}}
				>
					{card}
				</button>
			)
		})
	}, [guesses])

	return <section>{round()}</section>
}

export { Cards }
