import React, { useState } from 'react';

function Welcome({ updateName }) {
  const [name, setName] = useState('');

  const handleName = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateName(name);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Welcome!</h1>
      <p style={styles.body}>What is your name?</p>
      <label>
        <input
          placeholder="Name"
          style={styles.input}
          value={name}
          onChange={handleName}
        />
      </label>
      <button style={styles.button} onClick={handleSubmit}>Submit</button>
    </div>
  )
};

const styles = {
  container: {
    width: 500,
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center'
  },
  header: {
    letterSpacing: 1, 
    marginBottom: 10
  },
  body: {
    display: 'flex',
    fontSize: 20
  },
  input: {
    fontFamily: 'Work Sans',
    width: 200,
    height: 20,
    marginBottom: 20
  },
  button: {
    alignSelf: 'center',
    width: 75,
    height: 25,
    fontFamily: 'Work Sans', 
    marginBottom: 30,
  }
}

export default Welcome;