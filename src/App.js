import { ToastContainer } from 'react-toastify'
import { CheckoutSection } from './components/Checkout'
import { Product } from './components/Products'

function App() {
	return (
		<>
			<ToastContainer
				position='top-center'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<div className='relative flex flex-col min-h-screen overflow-x-hidden items-center max-w-6xl mx-auto '>
				<h1 className='text-2xl font-bold m-4 p-4'>Shopping Cart</h1>
				<div className='flex flex-col lg:flex-row lg:max-w-[1100px] lg:min-w-full lg:gap-8'>
					<Product />
					<CheckoutSection />
				</div>
			</div>
		</>
	)
}

export default App
