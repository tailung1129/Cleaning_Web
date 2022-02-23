import Layout from "../layout/Layout"
import HomeMenu from "../components/Menus/HomeMenu"
import HomeCarousel from "../components/HomeCarousel"

const Home = () => {

  return (
    <div>
      <Layout>
        <HomeMenu />
        <HomeCarousel />
      </Layout>
    </div>
  )
}

export default Home