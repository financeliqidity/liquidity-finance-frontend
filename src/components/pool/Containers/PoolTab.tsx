import React from "react";

function PoolTab() {
	return (
		<div className='w-full flex justify-center items-center bg-primary py-5 px-20 rounded-md'>
			<div className='w-1/4'>
				<button>
					<img src='/assets/icons/menu.svg' alt='menu' />
				</button>
				<button>
					<img src='/assets/icons/menu.svg' alt='menu' />
				</button>
			</div>

			<div className='flex w-1/4  items-center'>
				<div className='flex justify-center align-center h-5'>
					<div className='relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in'>
						<input
							type='checkbox'
							name='toggle'
							id='toggle'
							className='toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer'
						/>
						<label
							htmlFor='toggle'
							className='toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer'
						></label>
					</div>
				</div>
				<p className='text-tertiary mx-1'>Staked only</p>
				<div className='ml-5'>
					<button className='btn-primary py-1 px-3 rounded mx-1'>Live</button>
					<button className=''>Finished</button>
				</div>
			</div>

			<form className='flex w-2/4 justify-end'>
				<div className=''>
					<p className=''>Sort By</p>
					<select>
						<option value='hot'>Hot</option>
						<option value='recent'>Recent</option>
						<option value='old'>Old</option>
					</select>
				</div>
				<div className=''>
					<p className=''>Search</p>
					<input type='text' className='' />
				</div>
			</form>
		</div>
	);
}

export default PoolTab;
