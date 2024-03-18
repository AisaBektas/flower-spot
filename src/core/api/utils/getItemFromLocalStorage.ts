import { LOCAL_STORAGE } from "../../const/localStorage";

const getItemFromLocalStorage = <T>(key: LOCAL_STORAGE): T | null => {
  try {
    const item = window.localStorage.getItem(key);

    if (item !== null) {
      return JSON.parse(item);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      `Can not get item with key ${key} from local storage - `,
      error
    );
  }

  return null;
};

export default getItemFromLocalStorage;
