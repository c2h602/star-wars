import classNames from "classnames";

export function getGenderClass(gender: string) {
  return classNames({
    "info__gender-male": gender === "male",
    "info__gender-female": gender === "female",
    "info__gender-hermaphrodite": gender === "hermaphrodite",
  });
}
