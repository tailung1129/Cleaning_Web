
const Header = ({ head, description }) => {
  return (
      <div className='starter-template text-center mt-5'>
        <h1>{head} Page</h1>
        <p className='lead text-capitalize'>{description}</p>
      </div>
  )
}

export default Header
