import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return <Card />;
}

function Card() {
  return (
    <div className="card">
      <Avatar />
      <Bio />
      <SkillList />
    </div>
  );
}

function Avatar() {
  return <img src="profile_avatar.png" alt="Profile" className="avatar" />;
}

function Bio() {
  return (
    <div className="data">
      <h1>Bogdan Dumitrescu</h1>
      <p>
        Full-stack web developer and technical coach. When not coding, I live to
        play games on my computer or travel the world.
      </p>
    </div>
  );
}

function SkillList() {
  const skills = [
    { skill: "JavaScript", background: "Yellow", level: "Intermediate" },
    { skill: "HTML+CSS", background: "Blue", level: "Intermediate" },
    { skill: "Web Design", background: "Green", level: "Beginner" },
    { skill: "Git and GitHub", background: "Magenta", level: "Advanced" },
    { skill: "React", background: "LightBlue", level: "Intermediate" },
    { skill: "Svelte", background: "Red", level: "Beginner" },
  ];

  return (
    <ul className="skill-list">
      {skills.map((skillObj) => (
        <li key={skillObj.skill}>
          <Skill
            skill={skillObj.skill}
            background={skillObj.background}
            level={skillObj.level}
          />
        </li>
      ))}
    </ul>
  );
}

function Skill({ level, background, skill }) {
  const emojis = [
    { level: "Advanced", emoji: "💪" },
    { level: "Intermediate", emoji: "😁" },
    { level: "Beginner", emoji: "🤭" },
  ];

  const [emoji] = emojis.filter((e) => e.level === level);
  console.log(emoji.emoji);

  return (
    <span className="skill">
      <h3 style={{ background: background }}>
        {skill}
        {emoji.emoji}
      </h3>
    </span>
  );
}

const domRoot = document.getElementById("root");
const reactDomRoot = ReactDOM.createRoot(domRoot);
reactDomRoot.render(<App />);
