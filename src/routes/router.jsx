import { createBrowserRouter } from '../../node_modules/react-router-dom/dist/index'
import RootLayout from '../components/@layout/RootLayout'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage, { loading as homeLoading } from '../pages/HomePage/HomePage'
import AllProductsPage from '../pages/(categories)/AllProductsPage/AllProductsPage'
import AuthPage from '../pages/(auth)/AuthPage'
import ExclusivePage from '../pages/(categories)/ExclusivePage/ExclusivePage'
import NewArrivalsPage from '../pages/(categories)/NewArrivalsPage/NewArrivalsPage'
import EventPage from '../pages/(categories)/EventPage/EventPage'
import BrandPage from '../pages/(product)/BrandPage/BrandPage'
import ProductDetailsPage from '../pages/(product)/ProductDetailsPage/ProductDetailsPage'
import CartPage from '../pages/(checkout)/CartPage/CartPage'
import CheckoutPage from '../pages/(checkout)/CheckoutPage/CheckoutPage'
import OrdersPage from '../pages/(checkout)/OrdersPage/OrdersPage'
import OrderDetailPage from '../pages/(checkout)/OrderDetailPage/OrderDetailPage'
import ProfilePage from '../pages/(profile)/ProfilePage/ProfilePage'
import ProfileEditPage from '../pages/(profile)/ProfileEditPage/ProfileEditPage'
import SellerPage from '../pages/(seller)/SellerPage/SellerPage'
import ProductCreatePage from '../pages/(seller)/ProductCreatePage/ProductCreatePage'
import ProductEditPage from '../pages/(seller)/ProductEditPage/ProductEditPage'
import MypageRootLayout from '../components/@layout/MypageRootLayout'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
				loading: homeLoading,
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
