import React from 'react';
import { Footer } from '../layout/Footer';
import coaches from './coachList.json';

export const CoachesMain = () => {
	return (
		<div className='coaches-main'>
			<div className='container p-0'>
				<div className='row m-0'>
					<div className='col carousel'>
						<div id='carouselControls' className='carousel slide' data-bs-ride='carousel'>
							<div className='carousel-inner'>
								{coaches.map((coach, i) => {
									return (
										<div key={coach.id} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
											<img src={coach.URL} id='coachesImage' className='img rounded' alt='Gee' />
											<div className='carousel-caption d-none d-md-block'>
												<h3 className='carousel-text'>{coach.Coach} </h3>
												<p className='carousel-text fs-4'>
													{coach.Coach} has been with us for over {coach.Years} years and specializes in {coach.Specialty}.
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
								<div className='col pb-5'>
									<div className='card coach-carder text-center'>
										<img src={coach.URL} className='card-img-top rounded' height='300px' width='100px' alt={coach.Coach} />
										<div className='card-body'>
											<p className='card-text'>
												{coach.Coach} is a specialist in {coach.Specialty}, and they have been with us for over {coach.Years} years we look forward to having you meet us!
											</p>
											<a href=' ' className='btn btn-primary'>
												Schedule with {coach.Coach}
											</a>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
