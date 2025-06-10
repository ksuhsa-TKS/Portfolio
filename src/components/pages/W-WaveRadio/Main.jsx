import { Banner } from './Main/Banner'
import { Podcast } from './Main/Podcast'
import { Broadcast } from './Main/Broadcast'
import { Guest } from './Main/Guest'
import { Playlist } from './Main/Playlist'
import { Sale } from './Main/Sale'
import { AboutUs } from './Main/AboutUs'

const Main = () => {
  return (
    <main className="w-wave-main">
      <Banner />

      <Podcast />

      <Broadcast />

      <Guest />

      <Playlist />

      <Sale />

      <AboutUs />
    </main>
  )
}
export default Main
