import { toast } from 'react-toastify'

export const CheckoutSection = () => {
	const underDev = () => toast.warn('This feature is underdevelopment.')
	return (
		<div className='flex flex-col items-center lg:w-[30%] lg:flex-grow lg:m-2'>
			<div className='fixed bottom-0 py-8 border-y border-gray-200 w-full text-center lg:hidden'>
				<div className='flex px-4 justify-between max-w-[658px] mx-auto items-center lg:px-0'>
					<p className='text-2xl font-bold'>$100</p>
					<button onClick={underDev} className='bg-blue-500 py-3 px-10 rounded-md text-white'>
						GO TO CHECKOUT
					</button>
				</div>
			</div>
			<div className='hidden lg:flex flex-col p-8 border gap-1 border-gray-100 shadow-xl rounded-md w-full items-center'>
				<h2 className='text-xl font-medium mb-5'>The total amount of</h2>
				<div className='flex'>
					<div className='flex min-w-[300px] justify-between'>
						<p>Temporary amount</p>
						<p>$49.99</p>
					</div>
				</div>
				<div className='flex'>
					<div className='flex min-w-[300px] justify-between border-b-2 border-gray-200 pb-3'>
						<p>Shipping</p>
						<p>FREE</p>
					</div>
				</div>
				<div className='flex min-w-[300px] justify-between pt-3 font-medium items-center'>
					<p>
						The total of amount <br /> (including VAT)
					</p>
					<p>$100</p>
				</div>
				<button
					onClick={underDev}
					className='min-w-[300px] mt-7 bg-blue-500 py-3 px-10 rounded-md text-white'>
					GO TO CHECKOUT
				</button>
			</div>
			<button
				onClick={underDev}
				className='hidden lg:flex w-full mt-7 py-8 border border-gray-100 items-center px-10 rounded-md shadow-xl text-gray-400 font-medium'>
				Add a discount code [optional]
			</button>
		</div>
	)
}
