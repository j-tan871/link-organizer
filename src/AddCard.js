import { useState } from 'react';

function AddCard({classes, setClasses, clubs, setClubs}) {
  const [type, setType] = useState('class');
  
  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Add a Class or Organization</h2>
      <div style={styles.formContainer}>
        <form>
          <div>Class or Organization?</div>
          <label>
            <input
              type="radio"
              name="type"
              value="class"
              checked={console.log('hi')}
            /> Class
          </label>
          <label>
            <input 
              type="radio"
              name="type"
              value="club"
            /> Organization
          </label>
          <div>Zoom Link:</div>
          <label>
            <input 
              name="zoom"
              placeholder="Zoom"
              style={styles.input}
            />
          </label>
          <div>Class Website:</div>
          <label>
            <input 
              name="website"
              placeholder="Class Website"
              style={styles.input}
            />
          </label>
          <div>Piazza:</div>
          <label>
            <input 
              name="piazza"
              placeholder="Piazza"
              style={styles.input}
            />
          </label>
          <div>All done?</div>
          <button style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex', 
    flexDirection: 'column',
    width: '100%', 
    alignItems: 'flex-start', 
    marginBottom: 20
  }, 
  header: {
    margin: 0,
    fontSize: 18, 
    alignSelf: 'center'
  }, 
  formContainer: {
    marginLeft: 20,
  }, 
  input: {
    fontFamily: 'Work Sans'
  },
  button: {
    alignSelf: 'center', 
    width: 75,
    height: 25,
    fontFamily: 'Work Sans'
  }
}

export default AddCard;