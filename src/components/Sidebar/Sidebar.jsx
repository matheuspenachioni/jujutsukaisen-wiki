import { useState } from "react";
import { categories } from "../../data/characters";
import MusicPlayer from '../MusicPlayer/MusicPlayer';

function Sidebar({ activeCategory, activeCharacter, onSelectCategory, onSelectCharacter }) {
  const currentCategory = categories.find(cat => cat.id === activeCategory);
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <div className={`sidebar${menuOpened ? ' opened' : ''}`}>
      <i className={`menu-toggle fas ${menuOpened ? 'fa-times' : 'fa-bars'}`} onClick={toggleMenu}></i>
      <img className="sidebar-logo" src="./src/assets/logos/jujutsu-kaisen-logo.png" alt="" />
      <MusicPlayer/>
      <div>
        <h2 className="sidebar-title">Categorias</h2>
        <div className="category-button-container">
          {categories.map(category => (
            category.id !== activeCategory && (
              <button className="category-button" key={category.id} onClick={() => onSelectCategory(category.id)}>
                {category.label}
              </button>
            )
          ))}
        </div>
      </div>
      <div>
        <h2 className="sidebar-title">Personagens</h2>
        <div className="character-button-container">
          {currentCategory.characters.map(character => (
            character.id !== activeCharacter.id && (
              <button className="character-button" key={character.id} onClick={() => onSelectCharacter(character)}>
                <img className="character-image" src={character.preview} alt={character.name} />
              </button>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
