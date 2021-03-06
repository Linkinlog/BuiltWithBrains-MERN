import React, { useContext } from 'react'
import { AlertContext } from '../../Context/alert/alertContext';

export const Alert = () => {
	const alertContext = useContext(AlertContext)
	const { alerts } = alertContext;
	
	return (
		alerts.length > 0 && alerts.map(alert => (
			<div key={alert.id} className={`alert alert-${alert.type} m-4`} >
				<i className="fa fa-info-circle" /> {alert.msg}
			</div>
		))
	)
}
