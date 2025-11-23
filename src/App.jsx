import './App.css';
import Logo from './assets/MomentumLogo.png';
import CurrencyLogo from './assets/Currency.png';
import LevelLogo from './assets/Level.png';
import CommunityLogo from './assets/Communities.png';
import SettingsLogo from './assets/Settings.png';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
    <div id="container">
      <nav className="bg-[#1A1A2E] relative p-[10px] flex flex-row justify-between items-center">
        <div id="navLogoContainer">
          <div className="flex items-center gap-[20px]">
            <img src={Logo} className="h-[64px]" alt="Momentum" />
            <h1 className="text-[25px]">Momentum Fitness</h1>
          </div>
        </div>
        <div id="navButtons">
          <ul className="flex flex-row gap-[20px] list-none">
          <li><Link to="#" className="no-underline text-[#FFFFFF]">Dashboard</Link></li>
          <li><Link to="#" className="no-underline text-[#FFFFFF]">Quests</Link></li>
          <li><Link to="#" className="no-underline text-[#FFFFFF]">Workouts</Link></li>
          <li><Link to="#" className="no-underline text-[#FFFFFF]">Nutrition</Link></li>
          <li><Link to="#" className="no-underline text-[#FFFFFF]">Progress</Link></li>
          <li><Link to="#" className="no-underline text-[#FFFFFF]">Character</Link></li>
          <li><Link to="#" className="no-underline text-[#FFFFFF]">Tools</Link></li>
          <li><Link to="#" className="no-underline text-[#FFFFFF]">Profile</Link></li>
        </ul>
        </div>
        <div id="navMisc">
          <ul className="flex flex-row items-center gap-[15px] list-none">
            <li>
              <div className="flex flex-row items-center gap-[8px]">
                <img src={CurrencyLogo} className="h-[24px]" />
                <p>0</p>
              </div>
            </li>
            <li>
              <div className="flex flex-row items-center gap-[8px]">
                <img src={LevelLogo} className="h-[24px]" />
                <p>0</p>
              </div>
            </li>
            <li>
              <Link to="#" className="text-[#FFFFFF] no-underline flex flex-row gap-[5px] items-center">
                <img src={CommunityLogo} />
                <p>Communities</p>
              </Link>
            </li>
            <li><Link to="#" className="flex items-center"><img src={SettingsLogo} /></Link></li>
          </ul>
        </div>
      </nav>
      <main></main>
    </div>
    </>
  )
}

export default App
