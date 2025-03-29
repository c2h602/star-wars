import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CharacterCard from "../components/CharacterCard";
import { Character } from "../store/useCharacterStore";

const mockSelectCharacter = jest.fn();

jest.mock("../store/useCharacterStore", () => ({
  useCharacterStore: jest.fn(() => ({
    selectCharacter: mockSelectCharacter,
  })),
}));

describe("CharacterCard", () => {
  const mockCharacter: Character = {
    id: "13",
    name: "Chewbacca",
    height: "228",
    mass: "112",
    gender: "male",
    birth_year: "200BBY",
    hair_color: "brown",
    skin_color: "unknown",
    eye_color: "blue",
  };

  it("корректно рендерит карточку персонажа", () => {
    render(<CharacterCard char={mockCharacter} />);

    const nameElem = screen.getByText("Chewbacca");
    expect(nameElem).toBeInTheDocument();
    expect(nameElem).toHaveClass("character-card__name");

    const heightElem = screen.getByText("228");
    expect(heightElem).toBeInTheDocument();
    expect(heightElem).toHaveClass("parameters__value");

    const massElem = screen.getByText("112");
    expect(massElem).toBeInTheDocument();
    expect(massElem).toHaveClass("parameters__value");

    const genderElem = screen.getByText("male");
    expect(genderElem).toBeInTheDocument();
    expect(genderElem).toHaveClass("info__gender");

    const birthElem = screen.getByText("200BBY");
    expect(birthElem).toBeInTheDocument();
    expect(birthElem).toHaveClass("info__birth");
  });

  it("вызывает selectCharacter при клике по карточке", async () => {
    const user = userEvent.setup();

    render(<CharacterCard char={mockCharacter} />);

    const cardElem = screen.getByRole("article");
    expect(cardElem).toBeInTheDocument();
    expect(cardElem).toHaveClass("character-card");

    // fireEvent.click(cardElem);

    await act(async () => {
      await user.click(cardElem);
    });

    expect(mockSelectCharacter).toHaveBeenCalledTimes(1);
    expect(mockSelectCharacter).toHaveBeenCalledWith(mockCharacter.id);
  });
});
