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
		<div className='h-screen w-screen bg-[url(./src/assets/bg.jpg)] bg-cover p-4 pb-0 font-sdg text-white'>
			<header className='grid h-20 place-items-center rounded-2xl border-2 text-center text-6xl tracking-widest'>
				Memory Game
			</header>
			<p className='py-4 text-center text-xl tracking-widest'>
				High score: {highScore}
			</p>
			<main className='flex flex-col items-center justify-center px-8 text-xl tracking-widest'>
				<CardContext.Provider
					value={{ highScore, max, cards, guesses, setMode, setGuesses }}>
					<Cards />
				</CardContext.Provider>
			</main>
		</div>
	)
}

export { App, CardContext }
