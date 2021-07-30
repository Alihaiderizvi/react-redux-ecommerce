import React from "react";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";

const Nav = () => {
	return (
		<>
			<div className='nav'>
				<div className='containe'>
					<div className='nav__container'>
						<div className='nav__left'>
							<Link to='/'>
								<h2>Ali Commerce</h2>
							</Link>
						</div>
						<div className='nav__right'>
							<Link to='/cart'>
								<div className='basket'>
									<BsFillBagFill className='cart-icon' />
									{/* <span></span> */}
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Nav;
