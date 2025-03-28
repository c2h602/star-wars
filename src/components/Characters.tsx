import { Outlet } from "react-router";
import CharacterList from "./CharacterList";
import { useCharacterStore } from "../store/useCharacterStore";
import CharacterModal from "./CharacterModal";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Characters() {
  const {
    characters,
    selectedCharacter,
    hasMore,
    fetchCharacters,
    eyeColor,
    setEyeColor,
  } = useCharacterStore();

  return (
    <>
      <InfiniteScroll
        dataLength={characters.length}
        next={fetchCharacters}
        hasMore={hasMore}
      >
        <div className="characters">

          <div className="characters__wrapper">

            <div className="characters__title">
              <h2>
                <strong>82 Peoples</strong> for you to choose your favorite
              </h2>
            </div>

            <div className="characters__select">
              <label>
                color eye
                <select
                  name="eye_color"
                  value={eyeColor}
                  onChange={(e) => setEyeColor(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="brown">brown</option>
                  <option value="red">red</option>
                  <option value="blue">blue</option>
                  <option value="orange">orange</option>
                  <option value="yellow">yellow</option>
                  <option value="black">black</option>
                  <option value="green">green</option>
                </select>
              </label>
            </div>

            <CharacterList />
          </div>
          
        </div>
      </InfiniteScroll>

      {/* <Button 
        className="characters__translate-button" 
        onClick={() => setLanguage(language === 'en' ? 'wookiee' : 'en')}
      >
        <img src={charBtn}/>
      </Button> */}

      {selectedCharacter && <CharacterModal />}

      <Outlet />
    </>
  );
}
