import { createBrowserRouter } from 'react-router-dom'
import {
	RootLayout,
	CategoriesRootLayout,
	MypageRootLayout,
	SellerRootLayout,
	AuthRootLayout,
} from '../components/@layout'
import {
	HomePage,
	ErrorPage,
	AllProductsPage,
	ExclusivePage,
	NewArrivalsPage,
	EventPage,
	BrandPage,
	ProductDetailPage,
	CartPage,
	CheckoutPage,
	OrdersPage,
	OrderDetailPage,
	ProfilePage,
	ProfileEditPage,
	ProductsPage,
	ProductCreatePage,
	ProductEditPage,
	SigninPage,
	SignupPage,
} from '../pages'

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
		path: 'auth',
		element: <AuthRootLayout />,
		errorElement: <ErrorPage />,
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
