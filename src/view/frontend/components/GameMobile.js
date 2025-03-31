import '../../public/frontend/css/gamemobile.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GameMobile ({ listdanhsach, selectedKey, setkey, setitem, item }) {
  return (
    <div className='div_gamemobile_container'>
      <section className='section_sidebartong'>
        <section className='section_sidebar'>
          <div className='div_sidebar_container'>
            <ul className='ul_sidebar_container'>
              {listdanhsach.map((list, index) => (
                <li
                  className={
                    selectedKey === list.key
                      ? 'ng-star-inserted active'
                      : 'ng-star-inserted'
                  }
                  key={index}
                  onClick={() => {
                    setkey(list.key)
                    setitem(list.item)
                  }}
                >
                  <img src={list.src} className='icon_sidebar' alt='' />
                  {list.key}
                </li>
              ))}
            </ul>
          </div>
          {/* <div className='div_muiten_container'>
            <FontAwesomeIcon icon={faChevronDown} />
          </div> */}
        </section>
      </section>

      <section className='section_listgame'>
        <div className='div_listgame_container'>
          <div className='div_listgame'>
            <section className='section_game'>
              {item.map((game, index) => (
                <div key={index} className='div_game_list'>
                  <img src={game.img} alt='' />
                  <p>{game.name}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GameMobile
