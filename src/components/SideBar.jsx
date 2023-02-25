import { memo, useContext, useEffect, useRef } from 'react'
import { myContext } from '../contexts'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo/main-logo.png'

const SideBar = () => {
  // variable initializing
  let height

  const mainHeightHandler = () => {
    height = window.getComputedStyle(sideBarRef.current).getPropertyValue('height')
    setMainHeight(height)
  }
  // useContext initializing
  const { setMainHeight } = useContext(myContext)

  // useRef initializing
  const sideBarRef = useRef()

  // useEffect initializing for main element height
  useEffect(() => {
    setTimeout(mainHeightHandler, 500)
  }, [])

  window.addEventListener('resize', function () {
    if (sideBarRef.current != undefined) {
      mainHeightHandler()
    }
  })

  // jsx
  return (
    <aside ref={sideBarRef} className='d-flex flex-column justify-content-around sidebar'>
      <div className='sidebar-logo d-none d-md-flex align-items-center my-md-3 my-lg-4 ps-5'>
        <img src={logo} className='rounded-circle' />
        <h2 className='px-4 ls-1 mb-0'>MusicPlayer</h2>
      </div>
      <nav className='ps-5 nav-custom'>
        <ul className='px-4 mb-0 px-md-3 px-xl-4'>
          <li>
            <NavLink to='/' end className={({ isActive }) => (isActive ? 'active' : '')}> {/* also <a href='/'> can be used */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" id="mainIconPathAttribute"></path> </svg>
              <span className='ls-2 d-none d-sm-inline'>All songs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/favorite'> {/* also <a href='/favorite'> can be used */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" id="mainIconPathAttribute"></path> </svg>
              <span className='ls-2 d-none d-sm-inline'>Favorite list</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/top'> {/* also <a href='/top'> can be used */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-speaker" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" id="mainIconPathAttribute"></path> <path d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" id="mainIconPathAttribute"></path> </svg>
              <span className='ls-2 d-none d-sm-inline'>Top player songs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'> {/* also <a href='/contact'> can be used */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" id="mainIconPathAttribute"></path> </svg>
              <span className='ls-2 d-none d-sm-inline'>Contact us</span>
            </NavLink>
          </li>
          <li>
            <NavLink to='/about'> {/* also <a href='/about'> can be used */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bank" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z" id="mainIconPathAttribute"></path> </svg>
              <span className='ls-2 d-none d-sm-inline'>About us</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <p className='pb-0 d-none d-md-block my-md-2 my-lg-3 text-center'>© Copyright all reserver-Behnam Inanloo</p>
    </aside>
  )
}
export default memo(SideBar)