import React, { Fragment, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CoachContext } from '../../Context/coaches/coachContext';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { CoachCard } from './CoachCard';

export const CoachesMain = () => {
	const coachContext = useContext(CoachContext);
	const { coaches, updateCoaches, loading } = coachContext;
	useEffect(() => {
		if (coaches === null) {
			updateCoaches();
		}
	}, [coaches, updateCoaches]);

	return (
		<Fragment>
			{loading ? (
				<div className='container-fluid coaches-main hotBorder pt-5'>
					<div className='col-md-3 offset-md-5 pt-5'>
						<div className='container pt-5'>
							<Loader type='Puff' color='#00BFFF' height={200} width={200}  timeout={3000}/>
						</div>
					</div>
				</div>
			) : (
				<div className='coaches-main hotBorder'>
					<div className='row mx-0'>
						<div className='col-md-10 offset-md-1 carousel'>
							<div id='carouselControls' className='carousel slide' data-bs-ride='carousel'>
								<div className='carousel-inner'>
									{coaches.map((coach, i) => {
										return (
											<div key={uuidv4()} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
												<img src={window.matchMedia("(max-width: 768px)").matches ? coach.mainPicture : coach.carouselPicture} id='coachesImage' className='img img-fluid rounded rounded-3' alt={coach.name} />
												<div className='carousel-caption d-none d-md-block'>
													<h3 className='carousel-text'>{coach.name} </h3>
													<p className='carousel-text fs-4'>
														{coach.role}
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
							{coaches.map((coach) => (
								<CoachCard {...coach} key={coach._id}/>
							))}
						</div>
					</div>
				</div>
			)}
		</Fragment>
	);
};
