import React from 'react'
import { Link } from 'react-router-dom'

export const CoachCard = (coach) => {
	const {URL, name, description} = coach
	return (
		<div className='col pb-5'>
		<div className='card coach-carder hotBorder text-center'>
			<img src={URL} className='card-img-top img-fluid rounded' style={{height:"25rem"}} width='100px' alt={name} />
			<div className='card-body'>
				<p className='card-text'>
						{name} <br /> {description}
				</p>
				<Link to='/' className='btn btn-primary hotBorder'>
					Schedule with {name}
				</Link>
			</div>
		</div>
	</div>
	)
}
