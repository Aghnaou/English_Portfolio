import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import projImg1 from "../assets/img/rag.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Enterprise Knowledge Management AI Assistant",
      shortDescription: "AI app querying company documentation in natural language",
      fullDescription: "Development of an AI-based application allowing users to query company documentation in natural language. Provides contextual answers from unstructured internal documents through an advanced RAG mechanism.",
      imgUrl: projImg1,
      githubUrl: "#",
      liveUrl: "#",
      category: "ai",
      isMobile: false,
      technologies: ["Java", "Spring Boot", "Spring AI", "OpenAI API", "MCP", "RAG", "Angular", "Python", "Node.js", "REST API"],
      status: "Completed",
      year: "2025",
      difficulty: "Expert",
      features: [
        "Contextual answers from unstructured internal documents",
        "RAG mechanism to enrich queries with relevant information",
        "AI agent using MCP protocol to dynamically orchestrate multiple tools",
        "Integration of company data, file system and external services"
      ]
    },
     {
  id: 2,
  title: "BiblioManager — AI-Powered Library Management System",
  shortDescription: "A library platform supercharged with a RAG chatbot that answers questions about books in natural language",
  fullDescription: "Built a full-stack library management system and integrated a Generative AI chatbot using RAG (Retrieval-Augmented Generation). The assistant understands natural language questions, remembers conversation context using chat memory, and retrieves semantically relevant books via vector embeddings from a live MySQL database. Works with Google Gemini and OpenAI — switchable with zero code changes. Built entirely in Java using LangChain4j — rare in the AI freelance world.",
  imgUrl: projImg2,
  githubUrl: "#",
  liveUrl: "#",
  category: "fullstack",
  isMobile: false,
  technologies: ["ReactJs", "Spring Boot", "Java", "LangChain4j", "Google Gemini API", "RAG", "Vector Embeddings", "MySQL", "REST APIs"],
  status: "Completed",
  year: "2025",
  difficulty: "Expert",
  features: [
    "RAG chatbot answering natural language questions about the book catalog",
    "Chat memory maintaining full multi-turn conversation context",
    "Semantic vector embeddings for intelligent book retrieval from MySQL",
    "Multi-provider LLM support — Gemini and OpenAI switchable with zero code changes",
    "Book catalog, reservations and user review management"
  ]
},
    {
      id: 3,
      title: "ReserveINPT",
      shortDescription: "Android mobile app for booking sports facilities at INPT",
      fullDescription: "Mobile application to facilitate the booking of sports fields and premises within INPT. Allows users to manage their reservations (create, edit, cancel) and provides administrators with tools to manage student accounts and facilities.",
      imgUrl: projImg3,
      githubUrl: "#",
      liveUrl: "#",
      category: "mobile",
      isMobile: true,
      technologies: ["Java", "Android Studio", "Android SDK"],
      status: "Completed",
      year: "2023",
      difficulty: "Intermediate",
      features: [
        "Create, edit and cancel field reservations",
        "Student account management by administrators",
        "Sports facilities and premises management",
        "Intuitive native Android interface"
      ]
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: "🚀", count: projects.length },
    { id: "ai", label: "AI & LLM", icon: "🤖", count: projects.filter(p => p.category === "ai").length },
    { id: "fullstack", label: "Fullstack", icon: "💻", count: projects.filter(p => p.category === "fullstack").length },
    { id: "mobile", label: "Mobile", icon: "📱", count: projects.filter(p => p.category === "mobile").length }
  ];

  const filteredProjects = activeFilter === "all" ? projects : projects.filter(p => p.category === activeFilter);
  const getDifficultyColor = (d) => ({ "Intermediate": "#F39C12", "Advanced": "#E74C3C", "Expert": "#9B59B6" }[d] || "#95A5A6");
  const getStatusColor = (s) => ({ "Completed": "#2ECC71", "In Progress": "#F39C12" }[s] || "#95A5A6");

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="project-header">
                    <h2>My Projects</h2>
                    <p>Discover my technical work through a selection of innovative projects. Each project reflects my expertise in different areas: Generative AI, Fullstack development and mobile applications.</p>
                  </div>
                  <div className="project-categories">
                    {categories.map((category) => (
                      <button key={category.id} className={`category-filter ${activeFilter === category.id ? 'active' : ''}`} onClick={() => setActiveFilter(category.id)}>
                        <span className="category-icon">{category.icon}</span>
                        <span className="category-label">{category.label}</span>
                        <span className="category-count">({category.count})</span>
                      </button>
                    ))}
                  </div>
                  <div className="projects-grid">
                    {filteredProjects.map((project, index) => (
                      <TrackVisibility key={project.id} partialVisibility={true}>
                        {({ isVisible }) => (
                          <div
                            className={`project-card ${isVisible ? 'animate__animated animate__fadeInUp' : ''} ${hoveredProject === project.id ? 'hovered' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                          >
                            <div className={`project-image ${project.isMobile ? 'mobile-mockup' : ''}`}>
                              <img src={project.imgUrl} alt={project.title} />
                              <div className="project-overlay">
                                <div className="project-links">
                                  {project.githubUrl !== "#" && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link"><span>📂</span> Code</a>}
                                  {project.liveUrl !== "#" && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link"><span>🚀</span> Demo</a>}
                                </div>
                              </div>
                            </div>
                            <div className="project-content">
                              <div className="project-meta">
                                <span className="project-year">{project.year}</span>
                                <span className="project-status" style={{ backgroundColor: getStatusColor(project.status) }}>{project.status}</span>
                                <span className="project-difficulty" style={{ backgroundColor: getDifficultyColor(project.difficulty) }}>{project.difficulty}</span>
                              </div>
                              <h3>{project.title}</h3>
                              <p className="project-short-desc">{project.shortDescription}</p>
                              {hoveredProject === project.id && (
                                <div className="project-details animate__animated animate__fadeIn">
                                  <p className="project-full-desc">{project.fullDescription}</p>
                                  <div className="project-features">
                                    <h5>Key features:</h5>
                                    <ul>{project.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                                  </div>
                                </div>
                              )}
                              <div className="project-technologies">
                                {project.technologies.map((tech, i) => <span key={i} className="tech-badge">{tech}</span>)}
                              </div>
                            </div>
                          </div>
                        )}
                      </TrackVisibility>
                    ))}
                  </div>
                  <div className="project-stats">
                    <div className="stat-item"><h4>{projects.length}</h4><p>Projects built</p></div>
                    <div className="stat-item"><h4>{projects.filter(p => p.status === "Completed").length}</h4><p>Completed</p></div>
                    <div className="stat-item"><h4>{new Set(projects.flatMap(p => p.technologies)).size}</h4><p>Technologies used</p></div>
                    <div className="stat-item"><h4>{categories.length - 1}</h4><p>Areas of expertise</p></div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};