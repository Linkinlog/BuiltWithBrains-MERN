import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

export const CoachCard = (coach) => {
	const {URL, name, role, years} = coach
	return (
		<div key={uuidv4()} className='col pb-5'>
		<div className='card coach-carder hotBorder text-center'>
			<img src={URL} className='card-img-top rounded' height='300px' width='100px' alt={name} />
			<div className='card-body'>
				<p className='card-text'>
					{name} is our {role}, and they have been with us for over {years} years we look forward to having you meet us!
				</p>
				<Link to='/' className='btn btn-primary hotBorder'>
					Schedule with {name}
				</Link>
			</div>
		</div>
	</div>
	)
}
