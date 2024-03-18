import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./core/navigation/routes.enum";
import { HomePage } from "./modules/home/pages/HomePage";
import { FlowersPage } from "./modules/flowers/pages/FlowersPage";
import { FavoritesPage } from "./modules/favorites/pages/FavoritesPage";
import { SightingsPage } from "./modules/sightings/pages/SightingsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.FLOWERS} element={<FlowersPage />} />
          <Route path={ROUTES.LATEST_SIGHTINGS} element={<SightingsPage />} />
          <Route path={ROUTES.FAVORITES} element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
