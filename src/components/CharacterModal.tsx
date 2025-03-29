import { useCharacterStore } from "../store/useCharacterStore";
import Button from "./Button";
import close from "../assets/closeIcon.png";
import female from "../assets/female.png";
import male from "../assets/male.png";
import defaultIcon from "../assets/default.png";
import { getGenderClass } from "../getGenderClass";

export default function CharacterModal() {
  const { selectedCharacter, clearSelectedCharacter } = useCharacterStore();

  if (!selectedCharacter) return null;

  const genderClassName = getGenderClass(selectedCharacter.gender);

  return (
    <div className="modal">
      <Button className="modal__button" onClick={clearSelectedCharacter} disabled={false}>
        <img src={close} />
      </Button>

      <div className="modal__content">
        <div className="modal__avatar">
          <img
            src={
              selectedCharacter.gender === "female"
                ? female
                : selectedCharacter.gender === "male"
                ? male
                : defaultIcon
            }
          />

          <div className="character-card__info">
            {selectedCharacter.gender !== "n/a" && (
              <span className={`info__gender ${genderClassName}`}>{selectedCharacter.gender}</span>
            )}
            {selectedCharacter.birth_year !== "unknown" && (
              <span className="info__birth">
                {selectedCharacter.birth_year}
              </span>
            )}
          </div>
        </div>

        <div className="modal__info">
          <h2 className="modal__title">{selectedCharacter.name}</h2>

          <div className="modal__abillities">
            {selectedCharacter.hair_color !== "n/a" && (
              <span>hair color: {selectedCharacter.hair_color}</span>
            )}
            <span>skin color: {selectedCharacter.skin_color}</span>
            <span>eye color: {selectedCharacter.eye_color}</span>
          </div>

          <div className="modal__parameters">
            {selectedCharacter.height !== "unknown" &&
              selectedCharacter.height !== "unknown" && (
                <div className="modal-parameters__item">
                  <span className="parameters__value">
                    {selectedCharacter.height}
                  </span>

                  <span className="parameters__label">height</span>
                </div>
              )}

            {selectedCharacter.mass !== "unknown" &&
              selectedCharacter.mass !== "unknown" && (
                <div className="modal-parameters__item">
                  <span className="parameters__value">
                    {selectedCharacter.mass}
                  </span>

                  <span className="parameters__label">mass</span>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
