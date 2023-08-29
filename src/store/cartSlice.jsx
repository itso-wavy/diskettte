export const createCartSlice = set => ({
	cart: [],
	addToCart: product => set(state => ({ cart: state.cart.push(product) })),
	removeFromCart: productId =>
		set(state => ({ cart: state.cart.filter(item => item.id !== productId) })),
	clearCart: () => set(() => ({ cart: [] })),
})

/* 
import create from 'zustand'
import axios from 'axios'

// set, get 메서드를 제공해서 state의 값을 읽기, 쓰기할 수 있다.
export const useGameStore = create((set, get, _state) => ({
  games: [],
  getGames: async (params) => {
    const games = (await axios.get('/games', { params })).data
    set({ games })
    return games
  },
  gameIds: () => {
    const games = get().games
    return games.map((v) => v.id).join(',')
  },
}))



// Store의 action에 async/await을 감싸고 해당 action을 비동기 api로 쓸 수 있다.
// (단, loading, error 상태값 조회, 캐싱 등등의 편의 기능은... 직접 구현.. ㅎ)
import { useState } from 'react'
import { useGameStore } from '../store/zustand'

const Games = () => {
  const [term, setTerm] = useState('')
  const games = useGameStore((state) => state.games)
  const getGames = useGameStore((state) => state.getGames)

  const handleChange = async (e) => {
    const q = e.target.value
    setTerm(q)
    const res = await getGames({q})
    console.log(res)
  }

  useEffect(() => {
    getGames()
  }, [])

  return <>
    <input type="text" value={term} onChange={handleChange} />
  	<div>{JSON.stringify(games)}</div>
  </>
}

export default Games
 */
