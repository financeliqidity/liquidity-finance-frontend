import React from "react";

function Display() {
	return (
		<div className='w-full py-5 px-20 rounded-t-md bg-primary mt-5'>
			<div className='flex w-full mt-5 pool-item py-3 px-3 rounded-t-xl'>
				<div className='flex items-center justify-evenly w-1/5'>
					<img src='/assets/icons/lfi-32.png' alt='LFI' className='h-10 w-10' />
					<div className=''>
						<p className=''>Auto LFI</p>
						<p className=''>Automatic restaking</p>
					</div>
				</div>

				<div className='flex w-3/5 justify-evenly'>
					<div className=''>
						<p className='text-tertiary'>Recent LFI profit</p>
						<p className=''>0</p>
						<p className=''>0 USD</p>
					</div>
					<div className=''>
						<p className='text-tertiary'>APY</p>
						<p className=''>
							74.55%
							{/* <img src='/j' alt='' /> */}
						</p>
					</div>
					<div className=''>
						<p className='text-tertiary'>Total Staked</p>
						<p className=''>
							345,211,055 LFI
							{/* <img src="" alt="" /> */}
						</p>
					</div>
					<div className=''>
						<p className=''>Ends in</p>
						<p className=''>
							1,230.543 Blocks
							{/* <img src="" alt="" /> */}
						</p>
					</div>
				</div>

				<div className='isLink w-1/5 flex items-start justify-end'>
					<span className=''>Details</span>
					<img
						src='/assets/icons/arrow-down.svg'
						alt='details-drop'
						className='inline w-4 h-4 mx-1 pt-2 mx-1'
					/>
				</div>
			</div>

			<div className='flex w-full mt-5 pool-item py-3 px-3 rounded-t-xl'>
				<div className='flex items-center justify-evenly w-1/5'>
					<img src='/assets/icons/lfi-32.png' alt='LFI' className='h-10 w-10' />
					<div className=''>
						<p className=''>Auto LFI</p>
						<p className=''>Automatic restaking</p>
					</div>
				</div>

				<div className='flex w-3/5 justify-evenly'>
					<div className=''>
						<p className='text-tertiary'>Recent LFI profit</p>
						<p className=''>0</p>
						<p className=''>0 USD</p>
					</div>
					<div className=''>
						<p className='text-tertiary'>APY</p>
						<p className=''>
							74.55%
							{/* <img src='/j' alt='' /> */}
						</p>
					</div>
					<div className=''>
						<p className='text-tertiary'>Total Staked</p>
						<p className=''>
							345,211,055 LFI
							{/* <img src="" alt="" /> */}
						</p>
					</div>
					<div className=''>
						<p className=''>Ends in</p>
						<p className=''>
							1,230.543 Blocks
							{/* <img src="" alt="" /> */}
						</p>
					</div>
				</div>

				<div className='isLink w-1/5 flex items-start justify-end'>
					<span className=''>Details</span>
					<img
						src='/assets/icons/arrow-down.svg'
						alt='details-drop'
						className='inline w-4 h-4 mx-1 pt-2 mx-1'
					/>
				</div>
			</div>

			<div className='flex w-full mt-5 pool-item py-3 px-3 rounded-t-xl'>
				<div className='flex items-center justify-evenly w-1/5'>
					<img src='/assets/icons/lfi-32.png' alt='LFI' className='h-10 w-10' />
					<div className=''>
						<p className=''>Auto LFI</p>
						<p className=''>Automatic restaking</p>
					</div>
				</div>

				<div className='flex w-3/5 justify-evenly'>
					<div className=''>
						<p className='text-tertiary'>Recent LFI profit</p>
						<p className=''>0</p>
						<p className=''>0 USD</p>
					</div>
					<div className=''>
						<p className='text-tertiary'>APY</p>
						<p className=''>
							74.55%
							{/* <img src='/j' alt='' /> */}
						</p>
					</div>
					<div className=''>
						<p className='text-tertiary'>Total Staked</p>
						<p className=''>
							345,211,055 LFI
							{/* <img src="" alt="" /> */}
						</p>
					</div>
					<div className=''>
						<p className=''>Ends in</p>
						<p className=''>
							1,230.543 Blocks
							{/* <img src="" alt="" /> */}
						</p>
					</div>
				</div>

				<div className='isLink w-1/5 flex items-start justify-end'>
					<span className=''>Details</span>
					<img
						src='/assets/icons/arrow-down.svg'
						alt='details-drop'
						className='inline w-4 h-4 mx-1 pt-2 mx-1'
					/>
				</div>
			</div>
			<div className='flex w-full bg-tertiary py-3 px-5'>
				<div className='w-1/3'>
					<div className='w-2/3 flex flex-col py-6 px-3 h-full bg-primary rounded-xl'>
						<p className=''>
							See Token Info
							{/* <img src='/assets/icons/' alt='' /> */}
						</p>
						<p className='my-1'>
							View Project Site
							{/* <img src="" alt="" /> */}
						</p>
						<p className=''>
							View Contract
							{/* <img src="" alt="" /> */}
						</p>
						<div className='mt-2'>
							<button className='btn-primary py-1 px-3 rounded-xl'>
								{/* <img src="" alt="" /> */}
								Auto
							</button>
							{/* <img src="" alt="" /> */}
						</div>
					</div>
				</div>
				<div className='w-1/3 px-4'>
					<div className='flex flex-col py-8 px-3 h-full bg-primary rounded-xl'>
						<p className='text-tertiary'>RECENT LFI PROFIT</p>
						<p className='mt-3'>0</p>
					</div>
				</div>
				<div className='w-1/3 px-4'>
					<div className='flex flex-col py-8 px-3 h-full bg-primary rounded-xl'>
						<p className='text-tertiary'>START STAKING</p>
						<button className='btn-primary mt-5 py-3 rounded-lg'>
							Connect Wallet
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Display;
