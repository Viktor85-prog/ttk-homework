import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Posts from "./Components/Posts/Posts";
import Albums from "./Components/Albums/Albums";
import Album from "./Components/Albums/Album";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/contacts" render={() => <Contacts />} />
          <Route path="/posts" render={() => <Posts />} />
          <Route path="/albums" render={() => <Albums />} />
          <Route path="/album" render={() => <Album />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
