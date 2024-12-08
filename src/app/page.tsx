import UserCard from './widgets/ui/Author';
import UserSkills from './widgets/ui/Skills';
import Footer from './widgets/ui/Footer';
import styles from './styles/index.module.css';

const author = {
  firstName: 'Andrei',
  lastName: 'Miller',
  age: 16,
  role: 'developer',
  place: 'Russia'
};

const skills = [
  { id: 1, value: 'HTML' },
  { id: 2, value: 'CSS' },
  { id: 3, value: 'JS' },
  { id: 4, value: 'Python' },
];

const App: React.FC = () => {
  return (  
    <div className={styles.container}>
      <UserCard author={author}/>
      <UserSkills skills={skills}/>
      <Footer />
  </div>
  );

};
export default App

