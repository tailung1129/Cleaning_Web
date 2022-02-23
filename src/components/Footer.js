const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center text-capitalize'>
        copyright {year} by Uniplex GmbH
      </footer>
    </>
  )
}

export default Footer
