import Mazera from '../../assets/mazera.png'
import './../HomeStyle/home.css'
const HomeNavbar = () => {

  return (
    <header>
        <nav>
        <img src={Mazera} alt=''className='navpic'/>
          <ul className='flex p-10 space-x-5'>
          <li className='text-xl font-semibold text-green-800	'><a href='home'>El Mazraa</a></li>
          <li className='text-xl font-semibold	'><a href='home'>Qualité</a></li>
          <li className='text-xl font-semibold	'><a href='home'>Produits</a></li>
          <li className='text-xl font-semibold	'><a href='home'>Actualités</a></li>
          <li className='text-xl font-semibold	'><a href='home'>Contact</a></li>
          <li className='text-xl font-semibold	' ><a href='/login'>Se connecter</a></li>
          </ul>
        </nav>
    </header>
  )
}

export default HomeNavbar