import UserCard from './widgets/User/User';
import UserSkills from './widgets/Skills/Skills';
import Footer from './widgets/Footer/Footer';
import styles from './styles/index.module.css';
import skills from './widgets/Skills/skillsData';
import user from './widgets/User/userData';

const App: React.FC = () => {
  return (  
    <div className={styles.container}>
      <UserCard user={user}/>
      <UserSkills skills={skills} />
      <Footer />
  </div>
  );

};
export default App

