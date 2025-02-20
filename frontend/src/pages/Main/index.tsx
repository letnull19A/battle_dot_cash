import { Balance } from './Balance'
import { PopularGames } from './PopularGames'

export const MainPage = () => {
  return (
    <div className={'pt-4'}>
      <Balance />
      <PopularGames />
    </div>
  )
}
