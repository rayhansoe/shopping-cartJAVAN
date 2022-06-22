import { toast } from 'react-toastify'
export const Product = () => {
	return (
		<div className='flex flex-col gap-2 p-2 m-2 shadow-xl rounded-md border-[.1px] border-gray-100 divide-y md:rounded-lg lg:w-[60%]'>
			<p className='p-4 pl-8 text-base md:p-8 md:text-lg font-medium'>Cart (2 items)</p>
			<ProductItem />
			<ProductItem />
		</div>
	)
}

export const ProductItem = () => {
	const underDev = () => toast.warn('This feature is under development.')
	return (
		<div className='flex min-w-[200px] max-w-lg justify-between p-8 md:min-w-[600px] md:max-w-2xl md:gap-10'>
			<div className='flex flex-col max-w-[40%] h-auto md:max-w-[30%] gap-4 md:flex-grow'>
				<img className='rounded-md ' src='/denim.jpg' alt='product' />
				<div className='flex justify-center gap-2 md:hidden text-lg font-medium items-center'>
					<button onClick={underDev} className='border p-1 rounded'>
						-
					</button>
					{1}
					<button onClick={underDev} className='border p-1 rounded'>
						+
					</button>
				</div>
			</div>
			<div className='max-w-[60%] flex flex-col gap-7 items-end md:items-start md:max-w-[40%] pt-2 md:gap-4 md:flex-grow'>
				<p className='text-xl font-medium'>Blue denim shirt</p>
				<p className='hidden md:block text-xs text-gray-500'>SHIRT BLUE</p>
				<p className='hidden md:block text-xs text-gray-500'>COLOR BLUE</p>
				<p className='hidden md:block text-xs text-gray-500'>SIZE M</p>
				<p className='font-semibold md:hidden'>$49.99</p>
				<div className='flex gap-3 justify-between text-base'>
					<button onClick={underDev} className='text-red-500'>
						Remove
					</button>
					<button onClick={underDev} className=''>
						Move to wishlist
					</button>
				</div>
			</div>
			<div className='max-w-[30%] hidden md:flex flex-col justify-between md:flex-grow items-center '>
				<div className='flex justify-center gap-4 items-center text-lg font-medium'>
					<button onClick={underDev} className='border p-1 rounded'>
						-
					</button>
					{1}
					<button onClick={underDev} className='border p-1 rounded'>
						+
					</button>
				</div>
				<p className='font-semibold'>$49.99</p>
			</div>
		</div>
	)
}
