/** @format */

import { useCallback, useContext } from 'react'
import { CardContext } from './App'

function Cards() {
	const { max, cards, guesses, setMode, setGuesses } =
		useContext(CardContext)

	//DESC: Durstenfeld shuffle algorithm
	const round = useCallback(() => {
		for (let i = cards.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[cards[i], cards[j]] = [cards[j], cards[i]]
		}

		return cards.slice(0, 3).map(card => {
			return (
				<button
					className='rounded-2xl border-[1px] border-white overflow-hidden'
					onClick={() => {
						setGuesses([...guesses, card])
					}}>
					<img className='h-60 w-48 object-cover' src={`./src/assets/${card}.jpg`}></img>
				</button>
			)
		})
	}, [guesses])

	return (
		<>
			<section className='flex gap-4'>
				<div>
					<input
						type='radio'
						name='mode'
						id='easy'
						value='easy'
						defaultChecked
						onClick={() => setMode('easy')}></input>
					<label htmlFor='easy' className='ml-[.4rem]'>
						Easy
					</label>
				</div>
				<div>
					<input
						type='radio'
						name='mode'
						id='normal'
						value='normal'
						onClick={() => setMode('normal')}></input>
					<label htmlFor='normal' className='ml-[.4rem]'>
						Normal
					</label>
				</div>
				<div>
					<input
						type='radio'
						name='mode'
						id='hard'
						value='hard'
						onClick={() => setMode('hard')}></input>
					<label htmlFor='hard' className='ml-[.4rem]'>
						Hard
					</label>
				</div>
			</section>
			<section>{round()}</section>
			<p>
				Round: {guesses.length} / {max.current}
			</p>
		</>
	)
}

export { Cards }
