const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center text-capitalize mt-5'>
        copyright {year} by Uniplex GmbH
      </footer>
    </>
  )
}

export default Footer
