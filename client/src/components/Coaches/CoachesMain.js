import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import { CoachContext } from '../../Context/coaches/coachContext';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const CoachesMain = () => {
	const coachContext = useContext(CoachContext);
	const { coaches, updateCoaches } = coachContext;
	useEffect(() => {
		if (coaches === null) {
			updateCoaches();
		}
	}, [coaches, updateCoaches]);

	if (coaches === null) {
		return <Loader type='Puff' color='#00BFFF' height={200} width={200} timeout={3000} />;
	}
	return (
		<div className='coaches-main hotBorder'>
			<div className='row mx-0'>
				<div className='col-md-10 offset-md-1 carousel'>
					<div id='carouselControls' className='carousel slide' data-bs-ride='carousel'>
						<div className='carousel-inner'>
							{coaches.map((coach, i) => {
								return (
									<div key={uuidv4()} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
										<img src={coach.URL} id='coachesImage' className='img rounded' alt='Gee' />
										<div className='carousel-caption d-none d-md-block'>
											<h3 className='carousel-text'>{coach.name} </h3>
											<p className='carousel-text fs-4'>
												{coach.name} has been with us for over {coach.years} years and specializes in {coach.specialty}.
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
					<button className='carousel-control-prev' type='button' data-bs-target='#carouselControls' data-bs-slide='prev'>
						<span className='carousel-control-prev-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Previous</span>
					</button>
					<button className='carousel-control-next' type='button' data-bs-target='#carouselControls' data-bs-slide='next'>
						<span className='carousel-control-next-icon' aria-hidden='true'></span>
						<span className='visually-hidden'>Next</span>
					</button>
				</div>
			</div>
			<div className='container'>
				<div className='row row-cols-2 mt-5'>
					{coaches.map((coach) => {
						return (
							<div key={uuidv4()} className='col pb-5'>
								<div className='card coach-carder hotBorder text-center'>
									<img src={coach.URL} className='card-img-top rounded' height='300px' width='100px' alt={coach.name} />
									<div className='card-body'>
										<p className='card-text'>
											{coach.name} is a specialist in {coach.specialty}, and they have been with us for over {coach.years} years we look forward to having you meet us!
										</p>
										<Link to='/' className='btn btn-primary hotBorder'>
											Schedule with {coach.name}
										</Link>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
