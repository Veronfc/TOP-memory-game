/** @format */

import { createContext, useEffect, useRef, useState } from 'react'
import { Cards } from './Cards'

const CardContext = createContext({
	highScore: 0,
	cards: [],
	guesses: [],
})

function App() {
	const [highScore, setHighScore] = useState(0)
	const [mode, setMode] = useState('easy')
	const [guesses, setGuesses] = useState([])

	const max = useRef(5)

	const cards = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	]

	const reset = num => {
		setGuesses([])
		setHighScore(guesses.length - num)
	}

	useEffect(() => {
		console.log(mode)

		switch (mode) {
			case 'normal':
				max.current = 10
				break
			case 'hard':
				max.current = 20
				break
			default:
				max.current = 5
		}

		reset(0)
	}, [mode])

	useEffect(() => {
		console.log(guesses)

		if (
			guesses.length < max.current &&
			new Set(guesses).size != guesses.length
		) {
			alert('You lost')
			reset(1)
		} else if (
			guesses.length == max.current &&
			new Set(guesses).size == guesses.length
		) {
			alert('You won')
			reset(0)
		}
	}, [guesses])

	return (
		<>
			<header>Memory game</header>
			<p>High score: {highScore}</p>
			<section>
				<label htmlFor='easy'>
					<input
						type='radio'
						name='mode'
						id='easy'
						value='easy'
						defaultChecked
						onClick={() => setMode('easy')}
					></input>
					Easy
				</label>
				<label htmlFor='normal'>
					<input
						type='radio'
						name='mode'
						id='normal'
						value='normal'
						onClick={() => setMode('normal')}
					></input>
					Normal
				</label>
				<label htmlFor='hard'>
					<input
						type='radio'
						name='mode'
						id='hard'
						value='hard'
						onClick={() => setMode('hard')}
					></input>
					Hard
				</label>
			</section>
			<CardContext.Provider value={{ cards, guesses, setGuesses }}>
				<Cards />
			</CardContext.Provider>
			<p>Round: {guesses.length}</p>
		</>
	)
}

export { App, CardContext }
