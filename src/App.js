import "./index";
import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Design from "./components/Design";
import Theory from "./components/Theory";
import Art from "./components/Art";
import Footer from "./components/Footer";
  
import BlogDataPages from './components/Blogs/BlogDataPages';
import DesignPages from "./components/Blogs/DesignPages";

import SceneB from "./components/Art/SceneB";
import SceneW from "./components/Art/SceneW";

function App() {
	return (
		<>
			<React.Fragment>
				<Navbar />
			</React.Fragment>
			<Routes>
				<Route path="/im4reactrepo/" element={<Home />}></Route>
				<Route path="/im4reactrepo/Design" element={<Design />}></Route>
        <Route path="/im4reactrepo/Theory" element={<Theory/>}></Route>
        <Route path="/im4reactrepo/Art" element={<Art />}></Route>

		<Route path="/im4reactrepo/UIEssay" element={<DesignPages />}></Route>
		<Route path="/im4reactrepo/artEssay" element={<DesignPages />}></Route>
		<Route path="/im4reactrepo/SG" element={<DesignPages />}></Route>

		<Route path="/im4reactrepo/W3" element={<BlogDataPages />}></Route>
		<Route path="/im4reactrepo/W4" element={<BlogDataPages />}></Route>
		<Route path="/im4reactrepo/W5" element={<BlogDataPages />}></Route>
		<Route path="/im4reactrepo/W8" element={<BlogDataPages />}></Route>
		<Route path="/im4reactrepo/W9" element={<BlogDataPages />}></Route>
		<Route path="/im4reactrepo/W10" element={<BlogDataPages />}></Route>
		<Route path="/im4reactrepo/W11" element={<BlogDataPages />}></Route>
		<Route path="/im4reactrepo/W12" element={<BlogDataPages />}></Route>
		<Route path="/im4reactrepo/W13" element={<BlogDataPages />}></Route>

		<Route path="/im4reactrepo/webArt" element={<BlogDataPages />}></Route>

		<Route path="/im4reactrepo/sceneW" element={<SceneW />}></Route>
		<Route path="/im4reactrepo/sceneB" element={<SceneB />}></Route>

		
			</Routes>
			<Footer/>
		</>
	);
}

export default App;
