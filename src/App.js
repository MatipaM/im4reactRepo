import "./index";
import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Design from "./components/Design";
import Theory from "./components/Theory";
import Art from "./components/Art";
import Footer from "./components/Footer";
  
import W3 from './components/Blogs/W3';
import W4 from './components/Blogs/W4';
import W5 from './components/Blogs/W5';
import W8 from './components/Blogs/W8';
import W9 from './components/Blogs/W9';
import W10 from './components/Blogs/W10';
import W11 from './components/Blogs/W11';
import W12 from './components/Blogs/W12';
import W13 from './components/Blogs/W13';

import WA from './components/Blogs/webArt';

import UIEssay from './components/Blogs/UIEssay';
import SG from './components/Blogs/styleGuide';
import AE from "./components/Blogs/artEssay";

function App() {
	return (
		<>
			<React.Fragment>
				<Navbar />
			</React.Fragment>
			<Routes>
				<Route path="/im4reactrepo/" element={<Home />}></Route>
				<Route path="/im4reactrepo/Design" element={<Design />}></Route>
        <Route path="/im4reactrepo/Theory" element={<Theory />}></Route>
        <Route path="/im4reactrepo/Art" element={<Art />}></Route>

		<Route path="/im4reactrepo/webArt" element={<WA />}></Route>

		<Route path="/im4reactrepo/UIEssay" element={<UIEssay />}></Route>
		<Route path="/im4reactrepo/styleGuide" element={<styleGuide />}></Route>
		<Route path="/im4reactrepo/artEssay" element={<AE />}></Route>
		<Route path="/im4reactrepo/SG" element={<SG />}></Route>

		<Route path="/im4reactrepo/W3" element={<W3 />}></Route>
		<Route path="/im4reactrepo/W4" element={<W4 />}></Route>
		<Route path="/im4reactrepo/W5" element={<W5 />}></Route>
		<Route path="/im4reactrepo/W8" element={<W8 />}></Route>
		<Route path="/im4reactrepo/W9" element={<W9 />}></Route>
		<Route path="/im4reactrepo/W10" element={<W10 />}></Route>
		<Route path="/im4reactrepo/W11" element={<W11 />}></Route>
		<Route path="/im4reactrepo/W12" element={<W12 />}></Route>
		<Route path="/im4reactrepo/W13" element={<W13 />}></Route>
		
			</Routes>
			<Footer/>
		</>
	);
}

export default App;
