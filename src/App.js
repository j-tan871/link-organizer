import { useState } from 'react';

import ClassContainer from './ClassCard';
import Club from './ClubCard';
import AddCard from './AddCard';

function App() {
  const [addOrganization, setAddOrganization] = useState(false);
  const [classes, setClasses] = useState([
    {
      class: "CSCI 0180", 
      link: "https://google.com", 
      website: "https://google.com", 
      piazza: "https://google.com"
    }, 
    {
      class: "CSCI 0220", 
      link: "https://google.com", 
      website: "https://google.com", 
      piazza: ""
    },
    {
      class: "CSCI 1951A", 
      link: "https://google.com", 
      website: "https://google.com", 
      piazza: "https://google.com"
    }, 
    {
      class: "LITR 0110B", 
      link: "https://google.com", 
      website: "https://google.com", 
      piazza: "https://google.com"
    }
  ]);
  const [clubs, setClubs] = useState([
    {
      club: "Gendo Taiko", 
      link: "https://google.com"
    }, 
    {
      club: "Full Stack at Brown", 
      link: "https://google.com"
    }
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome Jenny.</h1>
      <div style={styles.body}>
        <div style={styles.columnContainer}>
          {classes.map((item, index) => (
            <ClassContainer 
              key={index} 
              className={item.class} 
              link={item.link}
              website={item.website}
              piazza={item.piazza}
            />
          ))}
        </div>
        <div style={styles.columnContainer}>
          {clubs.map((club, index) => (
            <Club 
              key={index}
              clubName={club.club}
              link={club.link}
            />
          ))}
        </div>
      </div>
      <div style={styles.addCard}>
        <button 
          style={styles.button}
          onClick={() => setAddOrganization(!addOrganization)}
        >
          {
            addOrganization ? <div>I'm done!</div>
            : <div>Add a Class or Organization</div>
          }
          </button>
          {
            addOrganization ? <AddCard classes={classes} setClasses={setClasses} clubs={clubs} setClubs={setClubs}/> : null
          }
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: 500, 
    border: 'solid',
  }, 
  header: {
    marginTop: 20, 
    marginLeft: 150,
    letterSpacing: 1
  }, 
  body: {
    display: 'flex', 
  },
  columnContainer: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    width: '50%', 
    margin: 10
  }, 
  addCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  button: {
    alignSelf: 'center', 
    width: 200,
    height: 30,
    fontFamily: 'Work Sans',
    marginBottom: 20
  }
}

export default App;
