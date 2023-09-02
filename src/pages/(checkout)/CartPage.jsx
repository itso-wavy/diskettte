import { Link, redirect, useLoaderData } from 'react-router-dom'
import { useTitle } from '../../hooks'
import { api, clientAPI } from '../../lib/api'
import { getAuthToken, getAccountType } from '../../lib/utils/getStorageInfo'

export const cartLoader = () => {
	const isSignedin = !!getAuthToken()
	const accountType = getAccountType()

	if (!isSignedin) return null
	if (accountType === 'SELLER') {
		alert('구매 계정만 이용할 수 있는 서비스입니다.')
		return redirect('/')
	}

	const client = clientAPI('cart')

	const success = res => res.data
	const error = err => {
		throw json({ message: err.message }, { status: err.response.status })
	}

	return api(client)(success, error)
}

export function CartPage() {
	useTitle('장바구니')

	const cart = useLoaderData()
	console.log('cart: ', cart) // null || cart

	return (
		<>
			{/* <nav aria-label='Breadcrumb'>
				<ol>
					<li>
						<span>01 SHOPPING BAG</span>
					</li>
					<span>&gt;</span>
					<li>
						<span>02 ORDER</span>
					</li>
					<span>&gt;</span>
					<li>
						<span>03 ORDER CONFIRMED</span>
					</li>
				</ol>
			</nav> */}

			<Link to='/checkout'>checkout</Link>
			<Link to='/checkout/confirm'>confirm</Link>
			<form action='' className='shippingbag'></form>

			<article className='cart-summary'>
				<h2>Cart Summary</h2>
				<p>Total Items: 3</p>
				<p>Subtotal: $150.00</p>
				<p>Shipping: Free</p>
				<button className='checkout-button'>Proceed to Checkout</button>
			</article>

			{/* <form class="woocommerce-cart-form" action="https://themedemos.webmandesign.eu/eimear/demo-cart/" method="post">
	<h2 class="cart-table-title">Cart content<small class="cart-table-products-count"> (9 items)</small></h2>
	<table class="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellspacing="0">
		<thead>
			<tr>
				<th class="product-remove"><span class="screen-reader-text">Remove item</span></th>
				<th class="product-thumbnail"><span class="screen-reader-text">Thumbnail image</span></th>
				<th class="product-name">Product</th>
				<th class="product-price">Price</th>
				<th class="product-quantity">Quantity</th>
				<th class="product-subtotal">Subtotal</th>
			</tr>
		</thead>
		<tbody>
			
								<tr class="woocommerce-cart-form__cart-item cart_item">

						<td class="product-remove">
							<a href="https://themedemos.webmandesign.eu/eimear/demo-cart/?remove_item=5c8912a248eddd705d6c549e2c6bb079&amp;_wpnonce=6220ac83fa" class="remove" aria-label="Remove Night desk - Dark grey from cart" data-product_id="143" data-product_sku="PFU6">×</a>						</td>

						<td class="product-thumbnail">
						<a href="https://themedemos.webmandesign.eu/eimear/product/furniture-6/?attribute_pa_color=dark-grey"><img width="480" height="720" src="https://themedemos.webmandesign.eu/eimear/wp-content/uploads/sites/27/WMDEMO__avery-klein-C_dRtsnBOQA-unsplash-480x720.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="Don't forget to set alt text." decoding="async" fetchpriority="high" srcset="https://themedemos.webmandesign.eu/eimear/wp-content/uploads/sites/27/WMDEMO__avery-klein-C_dRtsnBOQA-unsplash-480x720.jpg 480w, https://themedemos.webmandesign.eu/eimear/wp-content/uploads/sites/27/WMDEMO__avery-klein-C_dRtsnBOQA-unsplash-640x960.jpg 640w, https://themedemos.webmandesign.eu/eimear/wp-content/uploads/sites/27/WMDEMO__avery-klein-C_dRtsnBOQA-unsplash-768x1152.jpg 768w, https://themedemos.webmandesign.eu/eimear/wp-content/uploads/sites/27/WMDEMO__avery-klein-C_dRtsnBOQA-unsplash.jpg 960w" sizes="(max-width: 480px) 100vw, 480px"></a>						</td>

						<td class="product-name" data-title="Product">
						<a href="https://themedemos.webmandesign.eu/eimear/product/furniture-6/?attribute_pa_color=dark-grey">Night desk - Dark grey</a>						</td>

						<td class="product-price" data-title="Price">
							<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">€</span>95,00</bdi></span>						</td>

						<td class="product-quantity" data-title="Quantity">
						<div class="quantity">
		<label class="screen-reader-text" for="quantity_64f1724fcc0e7">Night desk - Dark grey quantity</label>
	<input type="number" id="quantity_64f1724fcc0e7" class="input-text qty text" name="cart[5c8912a248eddd705d6c549e2c6bb079][qty]" value="1" aria-label="Product quantity" size="4" min="0" max="" step="1" placeholder="" inputmode="numeric" autocomplete="off"/>
	</div>
						</td>

						<td class="product-subtotal" data-title="Subtotal">
							<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">€</span>95,00</bdi></span>						</td>
					</tr>
					</tbody>
	</table>
	</form> */}

			{/* <div class="cart-collaterals">
	<div class="cart_totals ">

	
	<h2>Cart totals</h2>

	<table cellspacing="0" class="shop_table shop_table_responsive">

		<tbody><tr class="cart-subtotal">
			<th>Subtotal</th>
			<td data-title="Subtotal"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">€</span>1.687,00</bdi></span></td>
		</tr>

		
		
			
			<tr class="woocommerce-shipping-totals shipping">
	<th>Shipping</th>
	<td data-title="Shipping">
					<ul id="shipping_method" class="woocommerce-shipping-methods">
									<li>
						<input type="hidden" name="shipping_method[0]" data-index="0" id="shipping_method_0_flat_rate1" value="flat_rate:1" class="shipping_method"><label for="shipping_method_0_flat_rate1">Flat rate: <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">€</span>6,00</bdi></span></label>					</li>
							</ul>
							<p class="woocommerce-shipping-destination">
					Shipping to <strong>Cork</strong>. 				</p>
						
		
					</td></tr><tr class="shipping"><td class="shipping-calculator" colspan="2">
<form class="woocommerce-shipping-calculator" action="https://themedemos.webmandesign.eu/eimear/demo-cart/" method="post">

	<a href="#" class="shipping-calculator-button">Change address</a>
	<section class="shipping-calculator-form" style="display:none;">

					<p class="form-row form-row-wide" id="calc_shipping_country_field">
				<label for="calc_shipping_country" class="screen-reader-text">Country / region:</label>
				<select name="calc_shipping_country" id="calc_shipping_country" class="country_to_state country_select" rel="calc_shipping_state">
					<option value="default">Select a country / region…</option>
					<option value="AF">Afghanistan</option><option value="AX">Åland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="PW">Belau</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Saint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo (Brazzaville)</option><option value="CD">Congo (Kinshasa)</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curaçao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran</option><option value="IQ">Iraq</option><option value="IE" selected="selected">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="CI">Ivory Coast</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Laos</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia</option><option value="MD">Moldova</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="KP">North Korea</option><option value="MK">North Macedonia</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PS">Palestinian Territory</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russia</option><option value="RW">Rwanda</option><option value="ST">São Tomé and Príncipe</option><option value="BL">Saint Barthélemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="SX">Saint Martin (Dutch part)</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia/Sandwich Islands</option><option value="KR">South Korea</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syria</option><option value="TW">Taiwan</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom (UK)</option><option value="US">United States (US)</option><option value="UM">United States (US) Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VA">Vatican</option><option value="VE">Venezuela</option><option value="VN">Vietnam</option><option value="VG">Virgin Islands (British)</option><option value="VI">Virgin Islands (US)</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option>				</select>
			</p>
		
					<p class="form-row validate-required form-row-wide address-field" id="calc_shipping_state_field">
									<span>
						<label for="calc_shipping_state" class="screen-reader-text">County&nbsp;<abbr class="required" title="required">*</abbr></label>
						<select name="calc_shipping_state" class="state_select" id="calc_shipping_state" data-placeholder="State / County"><option value="">Select an option…</option><option value="CW">Carlow</option><option value="CN">Cavan</option><option value="CE">Clare</option><option value="CO">Cork</option><option value="DL">Donegal</option><option value="D">Dublin</option><option value="G">Galway</option><option value="KY">Kerry</option><option value="KE">Kildare</option><option value="KK">Kilkenny</option><option value="LS">Laois</option><option value="LM">Leitrim</option><option value="LK">Limerick</option><option value="LD">Longford</option><option value="LH">Louth</option><option value="MO">Mayo</option><option value="MH">Meath</option><option value="MN">Monaghan</option><option value="OY">Offaly</option><option value="RN">Roscommon</option><option value="SO">Sligo</option><option value="TA">Tipperary</option><option value="WD">Waterford</option><option value="WH">Westmeath</option><option value="WX">Wexford</option><option value="WW">Wicklow</option></select>
					</span>
								</p>
		
					<p class="form-row validate-required form-row-wide address-field" id="calc_shipping_city_field">
				<label for="calc_shipping_city" class="screen-reader-text">Town / City&nbsp;<abbr class="required" title="required">*</abbr></label>
				<input type="text" class="input-text" value="" placeholder="City" name="calc_shipping_city" id="calc_shipping_city">
			</p>
		
					<p class="form-row form-row-wide address-field" id="calc_shipping_postcode_field">
				<label for="calc_shipping_postcode" class="screen-reader-text">Eircode&nbsp;<span class="optional">(optional)</span></label>
				<input type="text" class="input-text" value="" placeholder="Postcode / ZIP" name="calc_shipping_postcode" id="calc_shipping_postcode">
			</p>
		
		<p><button type="submit" name="calc_shipping" value="1" class="button">Update</button></p>
		<input type="hidden" id="woocommerce-shipping-calculator-nonce" name="woocommerce-shipping-calculator-nonce" value="76e72de258"><input type="hidden" name="_wp_http_referer" value="/eimear/demo-cart/">	</section>
</form>

			</td>
</tr>

			
		
		
		
		
		<tr class="order-total">
			<th>Total</th>
			<td data-title="Total"><strong><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">€</span>1.693,00</bdi></span></strong> </td>
		</tr>

		
	</tbody></table>

	<div class="wc-proceed-to-checkout">
		
<a href="https://themedemos.webmandesign.eu/eimear/demo-checkout/" class="checkout-button button alt wc-forward">
	Proceed to checkout</a>
<a href="https://themedemos.webmandesign.eu/eimear/demo-shop/" class="continue-shopping">Continue Shopping</a>	</div>

	
</div>
</div>

</div> */}
		</>
	)
}
