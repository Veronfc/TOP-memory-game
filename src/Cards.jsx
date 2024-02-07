/** @format */

import { useCallback, useContext } from 'react'
import { CardContext } from './App'

function Cards() {
	const { max, cards, guesses, setMode, setGuesses } = useContext(CardContext)

	//DESC: Durstenfeld shuffle algorithm
	const round = useCallback(() => {
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[cards[i], cards[j]] = [cards[j], cards[i]]
		}

		return cards.slice(0, 3).map(card => {
			return (
				<button
					className='mx-2 overflow-hidden rounded-2xl border-[1px] border-white'
					onClick={() => {
						setGuesses([...guesses, card])
					}}>
					<img
						className={`h-60 w-48 bg-cover c${card}`}>
					</img>
				</button>
			)
		})
	}, [guesses])

	return (
		<>
			<section className='flex gap-4 pb-12'>
				<input
					type='radio'
					name='mode'
					id='easy'
					value='easy'
					defaultChecked
					onClick={() => setMode('easy')}></input>
				<label
					htmlFor='easy'
					className='cursor-pointer rounded-2xl border py-1 pl-4 pr-3'>
					Easy
				</label>
				<input
					type='radio'
					name='mode'
					id='normal'
					value='normal'
					onClick={() => setMode('normal')}></input>
				<label
					htmlFor='normal'
					className='cursor-pointer rounded-2xl border py-1 pl-4 pr-3'>
					Normal
				</label>
				<input
					type='radio'
					name='mode'
					id='hard'
					value='hard'
					onClick={() => setMode('hard')}></input>
				<label
					htmlFor='hard'
					className='cursor-pointer rounded-2xl border py-1 pl-4 pr-3'>
					Hard
				</label>
			</section>
			<section>{round()}</section>
			<p className='py-4 text-5xl'>Round {guesses.length + 1}</p>
		</>
	)
}

export { Cards }
