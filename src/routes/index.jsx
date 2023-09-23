import { createBrowserRouter } from 'react-router-dom'
import {
	RootLayout,
	AuthRootLayout,
	ProductRootLayout,
	CheckoutRootLayout,
	DashboardRootLayout,
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
	OrderConfirmPage,
	OrdersPage,
	// OrderDetailPage,
	// ProfilePage,
	ProductsPage,
	ProductCreatePage,
	ProductEditPage,
	// ProductDeletePage,
	SigninPage,
	SignupPage,
	LogoutPage,
} from '../pages'
import {
	productsLoader,
	// mypageInfoLoader,
	// sellerInfoLoader,
} from '../components/@layout'
import {
	homeLoader,
	// productLoader,
	brandLoader,
	productDetailLoader,
	cartLoader,
	checkoutLoader,
	orderConfirmLoader,
	ordersLoader,
	sellerProductsLoader,
} from '../pages'
import {
	signinAction,
	signupAction,
	productAction,
	cartAction,
	checkoutAction,
	productCreateAction,
	productEditAction,
} from '../pages'

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				loader: homeLoader,
				element: <HomePage />,
			},
			{
				loader: productsLoader,
				id: 'all-products',
				element: <ProductRootLayout />,
				children: [
					{
						path: 'categories',
						children: [
							{
								path: 'all',
								// loader: productsLoader,
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
						loader: brandLoader,
						element: <BrandPage />,
					},
					{
						path: 'product/:productId',
						loader: productDetailLoader,
						element: <ProductPage />,
						action: productAction,
					},
				],
			},
			{
				element: <CheckoutRootLayout />,
				children: [
					{
						path: 'cart',
						loader: cartLoader,
						element: <CartPage />,
						action: cartAction,
					},
					{
						path: 'checkout',
						loader: checkoutLoader,
						element: <CheckoutPage />,
						action: checkoutAction,
					},
					{
						loader: orderConfirmLoader,
						path: 'checkout/confirm',
						element: <OrderConfirmPage />,
					},
				],
			},
			{
				path: 'mypage',
				element: <DashboardRootLayout />,
				children: [
					{
						loader: ordersLoader,
						path: 'orders',
						element: <OrdersPage />,
					},
				],
			},
			{
				path: 'seller',
				element: <DashboardRootLayout />,
				children: [
					{
						loader: sellerProductsLoader,
						path: 'product',
						element: <ProductsPage />,
					},
					{
						path: 'product/create',
						element: <ProductCreatePage />,
						action: productCreateAction,
					},
					{
						loader: productDetailLoader,
						path: 'product/edit/:productId',
						element: <ProductEditPage />,
						action: productEditAction,
					},
					// {
					// 	path: 'product/delete/:productId',
					// 	element: <ProductDeletePage />,
					// },
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
				path: 'logout',
				element: <LogoutPage />,
			},
		],
	},
])

export default router
