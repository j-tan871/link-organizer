function ClubCard({ clubName, link }) {
  return (
    typeof clubName !== 'undefined' ? <div style={styles.container}>
      <h2 style={styles.clubName}>{clubName}</h2>
      <a href={link} target="__blank" style={styles.link}>
        <p style={styles.text}>Zoom</p>
      </a>
    </div> : null
  )
}

const styles = {
  container: {
    width: 225,
    height: 50,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  clubName: {
    margin: 0,
    fontSize: 18,
    alignSelf: 'center'
  },
  link: {
    textDecoration: 'none',
    color: 'black',
    fontSize: 14,
    marginTop: 5,
    alignSelf: 'center'
  },
  text: {
    margin: 0
  }
}

export default ClubCard;