import { create } from "zustand";

type EyeColor =
  | "brown"
  | "red"
  | "blue"
  | "orange"
  | "yellow"
  | "black"
  | "green"
  | string;

type Language = 'en' | 'wookiee'

interface Character {
  id: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: EyeColor;
  birth_year: string;
  gender: string;
}

export interface CharacterStore {
  characters: Character[];
  filteredCharacters: Character[];
  page: number;
  hasMore: boolean;
  fetchCharacters: (page: number) => Promise<void>;
  isLoading: boolean;
  selectedCharacter: Character | null;
  selectCharacter: (id: string) => void;
  clearSelectedCharacter: () => void;
  eyeColor: string;
  setEyeColor: (eyeColor: string) => void;
}

export const useCharacterStore = create<CharacterStore>((set, get) => ({
  characters: [],
  filteredCharacters: [],
  isLoading: true,
  page: 1,
  hasMore: true,
  selectedCharacter: null,
  eyeColor: "All",

  fetchCharacters: async () => {
    const { page, characters } = get();

    set({ isLoading: true });

    const [response1, response2] = await Promise.all([
      fetch(`https://swapi.dev/api/people/?page=${page}`),
      fetch(`https://swapi.dev/api/people/?page=${page + 1}`),
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();

    const charactersWithId1 = data1.results.map((char) => ({
      ...char,
      id: char.url.split("/").filter(Boolean).pop(),
    }));

    const charactersWithId2 = data2.results.map((char) => ({
      ...char,
      id: char.url.split("/").filter(Boolean).pop(),
    }));

    set({
      characters: [...characters, ...charactersWithId1, ...charactersWithId2],
      filteredCharacters: [...characters, ...charactersWithId1, ...charactersWithId2],
      page: page + 2,
      isLoading: false,
      hasMore: !!data2.next, // Проверяем, есть ли ещё страницы
    });
  },

  selectCharacter: (id) => {
    const character = get().characters.find((char) => char.id === id);
    set({ selectedCharacter: character || null });
  },

  clearSelectedCharacter: () => set({ selectedCharacter: null }),

  setEyeColor: (eyeColor: EyeColor) => {
    const filteredCharacters =
      eyeColor === "All"
        ? get().characters
        : get().characters.filter((char) => 
          char.eye_color.includes(eyeColor));

    set({
      eyeColor,
      filteredCharacters,
    });
  },

}));
