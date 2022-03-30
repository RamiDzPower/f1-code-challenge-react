import { normalizeSeasonsData } from "./normalizeSeasonsData";

export const getSeasons = () => {
  return fetch(
    "https://ergast.com/api/f1/driverStandings/1.json?limit=21&offset=55"
  )
    .then(res => res.json())
    .then(normalizeSeasonsData);
};
