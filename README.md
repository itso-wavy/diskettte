# diskettte

- 자체 컨벤션
- 컴포넌트 세분화

# diskettte

- router 28
- auth

## url

http://localhost:5173/product/501

## code

// {
// "compilerOptions": {
// "target": "es6"
// }
// }

## 홍보 문구

1. "Curated Pieces for Diverse Tastes"
   "Curated Collection for Diverse Tastes"
   "다양한 취향을 위한 선별된 소품"
2. "A Collection of Pieces for Every Preference"
   "모든 취향을 위한 소품 컬렉션"
3. "Elevate Your Wardrobe Handpicked Pieces"
   "핸드픽된 소품으로 Wardrobe를 업그레이드하세요"
4. "Discover Unique Pieces for Every Style"
5. "A Range of Pieces"
   "당신의 취향에 맞는 다양한 소품 컬렉션"
6. "Curated Pieces Tailored to Your Unique Taste"
   "독특한 취향에 맞춘 소품을 만나보세요"
7. "Personalize Your Style with Curated Pieces"

## deco

```jsx
import starImg from '/assets/icons/test/game-icons_european-flag.svg'
import decoImg from '/assets/icons/test/game-icons_spotted-mushroom.svg'
;<div className='tr touch'>
	<Img src={decoImg} alt='' $size='2.25em' />
	<Img
		src={starImg}
		alt=''
		$size='6.5em'
		style={{
			position: 'absolute',
			top: '-15%',
			right: 0,
		}}
	/>
</div>
```

```css
.touch {
	/* width: 3.25em; */
	height: fit-content;
	aspect-ratio: 1;
	padding: 1.5em;
	display: grid;
	place-items: center;
	border-radius: 50%;

	/* border: 1px solid black; */
	/* outline: 1px solid white;
		outline-offset: -3px; */
	/* background-color: white;
		background-color: black; */
	position: relative;
}
```
