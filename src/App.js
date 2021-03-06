import React, { useState } from 'react';

import AddCard from './components/AddCard';
import Card from './components/Card';
import Welcome from './Welcome';

function App() {
  const [editing, setEditing] = useState(false);

  const getName = () => {
    const firstName = window.localStorage.getItem('name');
    if (!firstName || typeof firstName === 'undefined') {
      return '';
    }
    return JSON.parse(firstName);
  };

  const [name, setName] = useState(
    getName()
  );

  const updateName = (name) => {
    const stringifiedName = JSON.stringify(name);
    window.localStorage.setItem('name', stringifiedName);
    setName(name);
  }

  const getClasses = () => {
    const classes = window.localStorage.getItem('classes');
    if (!classes || typeof classes === 'undefined') {
      return [];
    }
    return JSON.parse(classes);
  };

  const [classes, setClasses] = useState(
    getClasses()
  );

  const getOrganizations = () => {
    const organizations = window.localStorage.getItem('organizations');
    if (!organizations || typeof organizations === 'undefined') {
      return [];
    }
    return JSON.parse(organizations);
  };

  const [clubs, setClubs] = useState(
    getOrganizations()
  );

  const [addOrganization, setAddOrganization] = useState(false);

  const updateClasses = (classes) => {
    const stringifiedClasses = JSON.stringify(classes);
    window.localStorage.setItem('classes', stringifiedClasses);
    setClasses(classes);
  };

  const updateClubs = (clubs) => {
    const stringifiedClubs = JSON.stringify(clubs);
    window.localStorage.setItem('organizations', stringifiedClubs);
    setClubs(clubs);
  };

  return (
    <div style={styles.container}>
      {
        name === '' ? <Welcome updateName={updateName}/> : 
          <React.Fragment>
            <h1 style={styles.header}>Welcome {name}.</h1>
            {
              classes.length === 0 && clubs.length < 1 ? 
              <div style={{marginLeft: 20, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div>Store your class links here!</div>
                <div>Click the button below to get started.</div>
              </div> : null
            }
            <div style={styles.body}>
              <div style={styles.columnContainer}>
                {classes.map((item, index) => (
                  <Card 
                    key={index}
                    type="class"
                    name={item.name}
                    link={item.link}
                    website={item.website}
                    piazza={item.piazza}
                    deleteItem={updateClasses}
                    itemList={classes}
                    editing={editing}
                  />
                ))}
              </div>
              <div style={styles.columnContainer}>
                {clubs.map((club, index) => (
                  <Card 
                    key={index}
                    type="club"
                    name={club.name}
                    link={club.link}
                    deleteItem={updateClubs}
                    itemList={clubs}
                    editing={editing}
                  />
                ))}
              </div>
            </div>
            <div style={styles.addCard}>
              <button
                style={styles.button}
                onClick={() => setEditing(!editing)}
              >
                {
                  editing ? <div>I'm done!</div> : 
                  <div>Remove a Class or Organization</div>
                }
              </button>
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
                addOrganization ? <AddCard classes={classes} setClasses={updateClasses} clubs={clubs} setClubs={updateClubs} /> : null
              }
            </div>
          </React.Fragment>
      }
    </div>
  );
}

const styles = {
  container: {
    width: 500,
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
    fontSize: 11.5,
    marginBottom: 20
  }
}

export default App;
