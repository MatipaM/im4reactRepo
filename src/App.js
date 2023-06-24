import "./index";
import { Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Design from "./components/Design";
import Theory from "./components/Theory";
import Art from "./components/Art";
import Footer from "./components/Footer";
  
import BlogData from './components/Blogs/BlogData';

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
        <Route path="/im4reactrepo/Theory" element={<Theory/>}></Route>
        <Route path="/im4reactrepo/Art" element={<Art />}></Route>

		<Route path="/im4reactrepo/webArt" element={<BlogData />}></Route>

		<Route path="/im4reactrepo/UIEssay" element={<UIEssay />}></Route>
		<Route path="/im4reactrepo/styleGuide" element={<styleGuide />}></Route>
		<Route path="/im4reactrepo/artEssay" element={<AE />}></Route>
		<Route path="/im4reactrepo/SG" element={<SG />}></Route>

		<Route path="/im4reactrepo/W3" element={<BlogData />}></Route>
		<Route path="/im4reactrepo/W4" element={<BlogData />}></Route>
		<Route path="/im4reactrepo/W5" element={<BlogData />}></Route>
		<Route path="/im4reactrepo/W8" element={<BlogData />}></Route>
		<Route path="/im4reactrepo/W9" element={<BlogData />}></Route>
		<Route path="/im4reactrepo/W10" element={<BlogData />}></Route>
		<Route path="/im4reactrepo/W11" element={<BlogData />}></Route>
		<Route path="/im4reactrepo/W12" element={<BlogData />}></Route>
		<Route path="/im4reactrepo/W13" element={<BlogData />}></Route>
		
			</Routes>
			<Footer/>
		</>
	);
}

export default App;
