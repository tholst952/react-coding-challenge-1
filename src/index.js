import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar
        name="Trena Holsten"
        avatarLink="https://mighty.tools/mockmind-api/content/abstract/40.jpg"
      />
      <div className="data">
        <Intro
          name="Trena Holsten"
          bio="Aspiring front-end web developer actively honing skills and mastering new concepts. When not coding or learning React, I like to play video games, read books and knit, or just enjoy the
          company of my family and cats."
        />

        <div className="skill-list">
          <SkillList skillName="HTML+CSS 💪🏼" color="cornflowerblue" />
          <SkillList skillName="JavaScript 💪🏼" color="khaki" />
          <SkillList skillName="Git and GitHub 💪🏼" color="indianred" />
          <SkillList skillName="React 💪🏼" color="mediumturquoise" />
        </div>
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.avatarLink} alt={props.name} className="avatar" />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );
}

function SkillList(props) {
  return (
    <div>
      <ul>
        <li className="skill" style={{ backgroundColor: `${props.color}` }}>
          {props.skillName}
        </li>
      </ul>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
