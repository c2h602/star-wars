import { useEffect } from "react";
import { useCharacterStore } from "../store/useCharacterStore";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const {
    characters,
    filteredCharacters,
    isLoading,
    fetchCharacters,
  } = useCharacterStore();

  useEffect(() => {
    fetchCharacters(1);
  }, []);

  return (
    <div className="character-list">
      {isLoading && characters.length === 0 && <span className="loader"></span>}

      {filteredCharacters.map((char) => (
        <CharacterCard key={char.id} char={char}/>
      ))}
    </div>
  );
}
