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
	ProductPage,
	CartPage,
	CheckoutPage,
	OrdersPage,
	OrderDetailPage,
	ProfilePage,
	ProfileEditPage,
	ProductsPage,
	ProductCreatePage,
	ProductEditPage,
	ProductDeletePage,
	SigninPage,
	SignupPage,
	CallbackPage,
} from '../pages'
import {
	homeLoader,
	allProductsLoader,
	brandLoader,
	productLoader,
} from '../pages'
import { signinAction, signupAction, paymentAction } from '../pages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
				loader: homeLoader,
			},
			{
				path: 'categories',
				element: <CategoriesRootLayout />,
				children: [
					{
						path: 'all',
						element: <AllProductsPage />,
						loader: allProductsLoader,
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
				loader: brandLoader,
			},
			{
				// path: 'brand/:brandId/:productId',
				path: 'product/:productId',
				element: <ProductPage />,
				loader: productLoader,
				action: paymentAction,
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
					// {
					// 	path: 'profile/edit',
					// 	element: <ProfileEditPage />,
					// },
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
						path: 'product/:productId',
						element: <ProductPage />,
						id: 'product-detail',
						children: [
							{
								path: 'edit',
								element: <ProductEditPage />,
							},
							{
								path: 'delete',
								element: <ProductDeletePage />,
							},
						],
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
				action: signinAction,
			},
			{
				path: 'signup',
				element: <SignupPage />,
				action: signupAction,
			},
			{
				path: 'signin_success',
				element: <CallbackPage />,
			},
		],
	},
])

export default router
