import {useState} from 'react';
import { categories } from './data/characters';
import Sidebar from './components/Sidebar/Sidebar';
import CharacterView from './components/CharacterView/CharacterView';
import './App.scss';

function App() {
  const [activeCategory, setActiveCategory] = useState('jujutsuStudents');
  const [activeCharacter, setActiveCharacter] = useState(categories[0].characters[0]);

  const handleCategoryChange = (categoryId) => {
    const newCategory = categories.find(cat => cat.id === categoryId);
    setActiveCategory(categoryId);
    setActiveCharacter(newCategory.characters[0]);
  };

  return (
    <div className="app-body">
      <Sidebar 
        activeCategory={activeCategory} 
        activeCharacter={activeCharacter} 
        onSelectCategory={handleCategoryChange} 
        onSelectCharacter={setActiveCharacter}
      />
      <CharacterView character={activeCharacter} />
    </div>
  );
}

export default App;