import '../../public/frontend/css/selectgame.css'

function SelectGame ({ listdanhsach, selectedKey, setkey, setitem }) {
  return (
    <div className='div_selectgame_container'>
      <ul className='ul_select_game'>
        {listdanhsach.map((list, index) => (
          <li
            className={selectedKey === list.key ? 'active' : ''}
            key={index}
            onClick={() => {
              setkey(list.key)
              setitem(list.item)
            }}
          >
            <figure>
              <img src={list.src} alt='' />
            </figure>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SelectGame
