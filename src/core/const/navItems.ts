import { INavItem } from "../interfaces/navItem.interface";
import { ROUTES } from "../navigation/routes.enum";

export const navItems: INavItem[] = [
  { id: "1", name: "Flowers", link: ROUTES.FLOWERS },
  { id: "2", name: "Latest Sightings", link: ROUTES.LATEST_SIGHTINGS },
  { id: "3", name: "Favorites", link: ROUTES.FAVORITES },
];
