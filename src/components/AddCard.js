import { useState } from 'react';

function AddCard({ classes, setClasses, clubs, setClubs }) {
  const [values, setValues] = useState({
    type: "class",
    name: '',
    zoom: '',
    website: '',
    piazza: ''
  });

  const handleType = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      type: event.target.value,
    }));
  };

  const handleName = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };

  const handleZoom = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      zoom: event.target.value,
    }));
  };

  const handleWebsite = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      website: event.target.value,
    }));
  };

  const handlePiazza = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      piazza: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.type === "class") {
      const addedClass = {
        name: values.name,
        link: values.zoom,
        website: values.website,
        piazza: values.piazza
      }
      const newClasses = [...classes, addedClass];
      setClasses(newClasses);
    } else {
      const addedClub = {
        name: values.name,
        link: values.zoom,
      }
      const newClubs = [...clubs, addedClub];
      setClubs(newClubs);
    }
    setValues(() => ({
      type: 'class',
      name: '',
      zoom: '',
      website: '',
      piazza: ''
    }));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Add a Class or Organization</h2>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 5 }}>Class or Organization?</div>
          <label>
            <input
              type="radio"
              name="type"
              value="class"
              checked={values.type === "class"}
              onChange={handleType}
            /> Class &nbsp;
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="club"
              checked={values.type === "club"}
              onChange={handleType}
            /> Organization
          </label>
          <div style={{ marginBottom: 5, marginTop: 5 }}>Class or Organization Name</div>
          <label>
            <input
              placeholder="Class or Organization Name"
              style={styles.input}
              value={values.name}
              onChange={handleName}
            />
          </label>
          <div style={{ marginBottom: 5, marginTop: 5 }}>Zoom Link:</div>
          <label>
            <input
              name="zoom"
              placeholder="Zoom"
              style={styles.input}
              value={values.zoom}
              onChange={handleZoom}
            />
          </label>
          {
            values.type === "class" ?
              <div>
                <div style={{ marginBottom: 5, marginTop: 5 }}>Class Website:</div>
                <label>
                  <input
                    name="website"
                    placeholder="Class Website"
                    style={styles.input}
                    value={values.website}
                    onChange={handleWebsite}
                  />
                </label>
                <div style={{ marginBottom: 5, marginTop: 5 }}>Piazza:</div>
                <label>
                  <input
                    name="piazza"
                    placeholder="Piazza"
                    style={styles.input}
                    value={values.piazza}
                    onChange={handlePiazza}
                  />
                </label>
              </div>
              : null
          }
          <div style={{ marginBottom: 5, marginTop: 5 }}>All done?</div>
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
    marginBottom: 5,
    fontSize: 18,
    alignSelf: 'center'
  },
  formContainer: {
    marginLeft: 20,
  },
  input: {
    fontFamily: 'Work Sans',
    width: 200,
  },
  button: {
    alignSelf: 'center',
    width: 75,
    height: 25,
    fontFamily: 'Work Sans'
  }
}

export default AddCard;