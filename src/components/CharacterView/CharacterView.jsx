
function CharacterView({ character }) {
  return (
    <div className="character-view-container">
      <div className="character-image-container">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="character-info">
        <h2 className="character-name">{character.name}</h2>
        <p className="character-description base-txt">{character.description}</p>
        <h2 className="title">STATUS</h2>
        <p className={character.status === "Vivo" || character.status === "Viva" ? "base-txt" : "spoiler"}>{character.status}</p>
        <h2 className="title">TÉCNICA INATA</h2>
        {character.abilities != null ? character.abilities.map((ability, index) => (
          <p key={index} className="base-txt">{ability}</p>
        )) : <p className="base-txt">{character.name} não possuí habilidades...</p>}
        <h2 className="title">EXPANSÃO DE DOMÍNIO</h2>
        <p className="base-txt">{character.domainExpasion != null ? character.domainExpasion : character.name + ' não tem uma Expansão de Domínio...'}</p>
      </div>
    </div>
  );
}

export default CharacterView;