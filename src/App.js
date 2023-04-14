import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";

//object for project descriptions
const project1 = {
  title: "xyz project",
  role: "project manager",
};

const project2 = {
  title: "DEF project",
  role: "project queen",
};

function App() {
  //any js code before return and within return you have jsx code
  //code wrapped in {} is js
  return (
    <div className="App">
      <Navbar />
      <h1>This is our custom app component</h1>
      <Hero />
      <Projects title={project1.title} role={project1.role} />
      <Projects title={project2.title} role={project2.role} />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
