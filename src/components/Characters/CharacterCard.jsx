import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function CharacterCard({eachCharacter}) {
  const placeholderImg = `https://placehold.co/300x400?text=${eachCharacter.name}`

  const altText = `imagen de ${eachCharacter.name}`

  return (
    
    <article className="main_list_character">
      <Link to={`/character/${eachCharacter.id}`}>
        <img 
        src={eachCharacter.img || placeholderImg} 
        alt={altText} />
        <h3>{eachCharacter.name}</h3>
        <p>{eachCharacter.species}</p>
      </Link>
    </article>
    
  )
}

CharacterCard.prototypes ={
  eachCharacter: PropTypes.object,
}

export default CharacterCard