function ClassCard({ className, link, website, piazza, deleteClass, classes }) {

  const handleRemove = () => {
    const updatedClasses = classes.filter(classItem => classItem.class !== className);
    deleteClass(updatedClasses);
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.className}>{className}</h2>
      <div style={styles.linkContainer}>
        <a href={link} target="__blank" style={styles.link}>
          <p style={styles.text}>Zoom &nbsp; |</p>
        </a>
        <a href={website} target="__blank" style={styles.link}>
          <p style={styles.text}>&nbsp; Website &nbsp;</p>
        </a>
        {
          piazza !== "" ?
            <a href={piazza} target="__blank" style={styles.link}>
              <p style={styles.text}>| &nbsp; Piazza</p>
            </a> : null
        }
      </div>
      <div style={styles.remove} onClick={handleRemove}>[remove]</div>
    </div>
  )
}

const styles = {
  container: {
    width: 225,
    height: 60,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  linkContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  className: {
    margin: 0,
    fontSize: 18,
    alignSelf: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 14,
    marginTop: 5
  },
  text: {
    margin: 0
  }, 
  remove: {
    fontSize: 14, 
    alignSelf: 'center', 
    marginTop: 5, 
    height: 5,
  }
}

export default ClassCard;