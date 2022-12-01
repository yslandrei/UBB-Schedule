import PropTypes from 'prop-types'

const Header = ({title}) => {

  return (
    <header>
      <h1 className="title">{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'UBB Schedule',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = { 
//     color: 'blue', 
//     backgroundColor: 'black'
// }

export default Header