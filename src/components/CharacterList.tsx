import { useEffect } from "react";
import { useCharacterStore } from "../store/useCharacterStore";
import { getGenderClass } from "../getGenderClass";

export default function CharacterList() {
  const {
    characters,
    filteredCharacters,
    selectCharacter,
    isLoading,
    fetchCharacters,
  } = useCharacterStore();

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="character-list">
      {isLoading && characters.length === 0 && <span className="loader"></span>}

      {filteredCharacters.map((char) => {
        const genderClassName = getGenderClass(char.gender);

        return (
          <article
            key={char.id}
            className="character-card"
            onClick={() => selectCharacter(char.id)}
          >
            <div className="character-card__wrapper">
              <h3 className="character-card__name">{char.name}</h3>

              <div className="character-card__parameters">
                <div className="parameters__item">
                  {char.height !== "unknown" && (
                    <span className="parameters__value">{char.height}</span>
                  )}
                  {char.height !== "unknown" && (
                    <span className="parameters__label">height</span>
                  )}
                </div>

                <div className="parameters__item">
                  {char.mass !== "unknown" && (
                    <span className="parameters__value">{char.mass}</span>
                  )}
                  {char.mass !== "unknown" && (
                    <span className="parameters__label">mass</span>
                  )}
                </div>
              </div>

              <div className="character-card__info">
                {char.gender !== "n/a" && (
                  <span className={`info__gender ${genderClassName}`}>
                    {char.gender}
                  </span>
                )}
                {char.birth_year !== "unknown" && (
                  <span className="info__birth">{char.birth_year}</span>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
