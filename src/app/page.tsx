'use client'
import React, { useState } from 'react';
import UserCard from './widgets/User/User';
import UserSkills from './widgets/Skills/Skills';
import styles from './styles/index.module.css';
import skills from './widgets/Skills/skillsData';
import user from './widgets/User/userData';

const App: React.FC = () => {

  const [state, setState] = useState<string>("white");
  let themeType;

  const ChangeClick = () => {
    let newState;
    if (state === "white") {
      newState = "black";
    } 
    else {
      newState = "white";
    }
    setState(newState);
  };

  
  if (state === "white") {
    themeType = styles.lightTheme;
  } 
  else {
    themeType = styles.darkTheme;
  }

  return (
    <div className={`${styles.container} ${themeType}`}>
      <UserCard user={user} />
      <UserSkills skills={skills} />
      <button onClick={ChangeClick} className={styles.Button}>Сменить тему</button>
      
    </div>
  );
};

export default App;
