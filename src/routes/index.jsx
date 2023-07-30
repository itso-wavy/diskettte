import { createBrowserRouter } from 'react-router-dom'
import {
	RootLayout,
	CategoriesRootLayout,
	MypageRootLayout,
	SellerRootLayout,
	AuthRootLayout,
} from '../components/@layout'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import AllProductsPage from '../pages/(categories)/AllProductsPage'
import ExclusivePage from '../pages/(categories)/ExclusivePage'
import NewArrivalsPage from '../pages/(categories)/NewArrivalsPage'
import EventPage from '../pages/(categories)/EventPage'
import BrandPage from '../pages/(brand)/BrandPage'
import ProductDetailPage from '../pages/(brand)/ProductDetailPage'
import CartPage from '../pages/(checkout)/CartPage'
import CheckoutPage from '../pages/(checkout)/CheckoutPage'
import OrdersPage from '../pages/(mypage)/OrdersPage'
import OrderDetailPage from '../pages/(mypage)/OrderDetailPage'
import ProfilePage from '../pages/(mypage)/ProfilePage'
import ProfileEditPage from '../pages/(mypage)/ProfileEditPage'
import ProductsPage from '../pages/(seller)/ProductsPage'
import ProductCreatePage from '../pages/(seller)/ProductCreatePage'
import ProductEditPage from '../pages/(seller)/ProductEditPage'
import SigninPage from '../pages/(auth)/SigninPage'
import SignupPage from '../pages/(auth)/SignupPage'

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
				element: <CategoriesRootLayout />,
				children: [
					{
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
				path: 'brand/:brandId',
				element: <BrandPage />,
			},
			{
				path: 'brand/:productId',
				element: <ProductDetailPage />,
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
				path: 'mypage',
				element: <MypageRootLayout />,
				children: [
					{
						path: 'profile',
						element: <ProfilePage />,
					},
					{
						path: 'profile/edit',
						element: <ProfileEditPage />,
					},
					{
						path: 'orders',
						element: <OrdersPage />,
					},
					{
						path: 'orders/:orderId',
						element: <OrderDetailPage />,
					},
				],
			},
			{
				path: 'seller',
				element: <SellerRootLayout />,
				children: [
					{
						path: 'product',
						element: <ProductsPage />,
					},
					{
						path: 'product/create',
						element: <ProductCreatePage />,
					},
					{
						path: 'product/:productId/edit',
						element: <ProductEditPage />,
					},
				],
			},
		],
	},
	{
		path: '/auth',
		element: <AuthRootLayout />,
		children: [
			{
				path: 'signin',
				element: <SigninPage />,
			},
			{
				path: 'signup',
				element: <SignupPage />,
			},
		],
	},
])

export default router
