import { Header } from "./componentes/Header";
import { Portfolio } from "./componentes/Portfolio";

import "./scss/App.scss";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Portfolio />
      </main>
    </div>
  );
};
