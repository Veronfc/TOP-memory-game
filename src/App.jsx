/** @format */

import { createContext, useEffect, useRef, useState } from 'react'
import { Cards } from './Cards'

const CardContext = createContext(null)

function App() {
	const [highScore, setHighScore] = useState(0)
	const [mode, setMode] = useState('easy')
	const [guesses, setGuesses] = useState([])

	const max = useRef(5)

	const cards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

	const reset = num => {
		setGuesses([])
		if (highScore < guesses.length - num) {
			setHighScore(guesses.length - num)
		}
	}

	useEffect(() => {
		switch (mode) {
			case 'normal':
				max.current = 10
				break
			case 'hard':
				max.current = 15
				break
			default:
				max.current = 5
		}

		reset(0)
	}, [mode])

	useEffect(() => {
		console.log(guesses)

		if (new Set(guesses).size != guesses.length) {
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

	//TODO: add attribution for card images
	return (
		<div className='bg-[url(./src/assets/bg.jpg)] bg-cover p-4 pb-0 font-sdg text-white'>
			<header className='grid h-20 place-items-center text-6xl tracking-widest border-2 rounded-2xl '>
				Memory Game
			</header>
			<p className='text-xl text-center tracking-widest'>High score: {highScore}</p>
			<main className='flex h-[calc(100vh-7.8rem)] w-[calc(100vw-2rem)] flex-col items-center justify-center text-xl tracking-widest px-8'>
				<CardContext.Provider
					value={{ highScore, max, cards, guesses, setMode, setGuesses }}>
					<Cards />
				</CardContext.Provider>
			</main>
		</div>
	)
}

export { App, CardContext }
