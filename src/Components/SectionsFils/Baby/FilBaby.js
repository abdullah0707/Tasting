import React from 'react';
import {  Link } from "react-router-dom";
import './FilBaby.css';


export default function FilBaby (){

    return(

    <div className="FliBaby">
		<div className="container-fluid mx-0">
			<div className="row">
				<div className="col-12">
					<Link to='/Baby'>
						<img src="/img/ar5.png" alt="/sports-outdoors" className="w-100 mb-3" />
					</Link>
				</div>
				<div className="col-3">
					<Link to='/Baby'>
						<img src="/img/q1.png" alt="/sports-outdoors" className="w-100" />
					</Link>
				</div>
				<div className="col-3">
					<Link to='/Baby'>
						<img src="/img/q2.png" alt="/sports-outdoors" className="w-100" />
					</Link>
				</div>
				<div className="col-3">
					<Link to='/Baby'>
						<img src="/img/q3.png" alt="/sports-outdoors" className="w-100" />
					</Link>
				</div>
				<div className="col-3">
					<Link to='/Baby'>
						<img src="/img/en4.png" alt="/sports-outdoors" className="w-100" />
					</Link>
				</div>
			</div>
		</div>
	</div>
		
    );
}
