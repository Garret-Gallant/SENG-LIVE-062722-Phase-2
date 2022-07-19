import ProjectListItem from "./ProjectListItem";
import { useState } from 'react';
 
const ProjectList = ({ projects }) => {

const [searchQuery, setSearchQuery] = useState("")

  const renderProjects = (projects) => projects.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));

console.log('search query:', searchQuery)

const handleSearch = (e) => {
    setSearchQuery(e.target.value)
}

const searchResults = projects.filter(project => {
  return project.name.toLowerCase().includes(searchQuery.toLowerCase())
})

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input type="text" placeholder="Search..." onChange={handleSearch}/>

      <ul className="cards">{renderProjects(searchResults)}</ul>
    </section>
  );
};

export default ProjectList;
