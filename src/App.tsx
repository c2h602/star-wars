import "./App.css";
import { Layout } from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="characters" element={<CharactersPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
