import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../components/@layout/RootLayout'
import MypageRootLayout from '../components/@layout/MypageRootLayout'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import AuthPage from '../pages/AuthPage'
import AllProductsPage from '../pages/(categories)/AllProductsPage'
import ExclusivePage from '../pages/(categories)/ExclusivePage'
import NewArrivalsPage from '../pages/(categories)/NewArrivalsPage'
import EventPage from '../pages/(categories)/EventPage'
import BrandPage from '../pages/(product)/BrandPage'
import ProductDetailsPage from '../pages/(product)/ProductDetailsPage'
import CartPage from '../pages/(checkout)/CartPage'
import CheckoutPage from '../pages/(checkout)/CheckoutPage'
import OrdersPage from '../pages/(checkout)/OrdersPage'
import OrderDetailPage from '../pages/(checkout)/OrderDetailPage'
import ProfilePage from '../pages/(profile)/ProfilePage'
import ProfileEditPage from '../pages/(profile)/ProfileEditPage'
import SellerPage from '../pages/(seller)/SellerPage'
import ProductCreatePage from '../pages/(seller)/ProductCreatePage'
import ProductEditPage from '../pages/(seller)/ProductEditPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'categories',
				children: [
					{
						index: true,
						path: 'all',
						element: <AllProductsPage />,
					},
					{
						path: 'new-arrivals',
						element: <NewArrivalsPage />,
					},
					{
						path: 'exclusive',
						element: <ExclusivePage />,
					},
					{
						path: 'event',
						element: <EventPage />,
					},
				],
			},
			{
				path: 'brand',
				element: <AllProductsPage />,
				children: [
					{
						index: true,
						path: ':productId',
						element: <BrandPage />,
					},
					{
						path: ':productId',
						element: <ProductDetailsPage />,
					},
				],
			},
			{
				path: 'cart',
				element: <CartPage />,
			},
			{
				path: 'checkout',
				element: <CheckoutPage />,
			},
			{
				path: 'orders',
				element: <OrdersPage />,
				children: [
					{
						path: 'orders:orderId',
						element: <OrderDetailPage />,
					},
				],
			},
			{
				path: 'mypage',
				element: <MypageRootLayout />,
				children: [
					{
						index: true,
						element: <OrdersPage />,
					},
					{
						path: 'profile',
						element: <ProfilePage />,
						children: [
							{
								path: 'edit',
								element: <ProfileEditPage />,
							},
						],
					},
				],
			},
			{
				path: 'seller',
				element: <SellerPage />,
				children: [
					{
						path: 'product',
						children: [
							{
								index: true,
								path: 'create',
								element: <ProductCreatePage />,
							},
							{
								path: ':productId',
								element: <ProductDetailsPage />,
								children: [
									{
										path: ':edit',
										element: <ProductEditPage />,
									},
								],
							},
						],
					},
				],
			},
		],
	},
	{
		path: 'auth',
		element: <AuthPage />,
		errorElement: <ErrorPage />,
	},
])

export default router
