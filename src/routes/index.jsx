import { createBrowserRouter } from 'react-router-dom'
import {
	RootLayout,
	AuthRootLayout,
	ProductRootLayout,
	CategoriesRootLayout,
	CheckoutRootLayout,
	MypageRootLayout,
	SellerRootLayout,
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
	OrderDetailPage,
	ProfilePage,
	ProductsPage,
	ProductCreatePage,
	ProductEditPage,
	ProductDeletePage,
	SigninPage,
	SignupPage,
	LogoutPage,
} from '../pages'
import {
	productsLoader,
	// mypageInfoLoader,
	sellerInfoLoader,
} from '../components/@layout'
import {
	homeLoader,
	// productsLoader,
	// brandLoader,
	productLoader,
	cartLoader,
	checkoutLoader,
	orderConfirmLoader,
	ordersLoader,
} from '../pages'
import {
	signinAction,
	signupAction,
	productAction,
	cartAction,
	checkoutAction,
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
						// element: <CategoriesRootLayout />,
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
						// loader: brandLoader,
						element: <BrandPage />,
					},
					{
						path: 'product/:productId',
						loader: productLoader,
						element: <ProductPage />,
						action: productAction,
					},
				],
			},
			// {
			// 	path: 'categories',
			// 	element: <CategoriesRootLayout />,
			// 	children: [
			// 		{
			// 			path: 'all',
			// 			loader: productsLoader,
			// 			element: <AllProductsPage />,
			// 		},
			// 		{
			// 			path: 'new-arrivals',
			// 			element: <NewArrivalsPage />,
			// 		},
			// 		{
			// 			path: 'exclusive',
			// 			element: <ExclusivePage />,
			// 		},
			// 		{
			// 			path: 'event',
			// 			element: <EventPage />,
			// 		},
			// 	],
			// },
			// {
			// 	path: 'brand/:brandId',
			// 	loader: brandLoader,
			// 	element: <BrandPage />,
			// },
			// {
			// 	path: 'product/:productId',
			// 	loader: productLoader,
			// 	element: <ProductPage />,
			// 	action: productAction,
			// },
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
				// loader: mypageInfoLoader,
				// id: 'mypage-info',
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
						loader: ordersLoader,
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
				loader: sellerInfoLoader,
				id: 'seller-info',
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
				// id: 'auth-info',
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
