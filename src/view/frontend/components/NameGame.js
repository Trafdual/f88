import '../../public/frontend/css/namegame.css'

function NameGame ({ name, title }) {
  return (
    <div className='div_name_game'>
      <div className='name_game'>
        <h2>{name}</h2>
        <span>{title}</span>
      </div>
    </div>
  )
}

export default NameGame
