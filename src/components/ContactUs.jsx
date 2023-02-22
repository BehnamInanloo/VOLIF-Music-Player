import { memo, useContext } from 'react'
import { myContext } from '../contexts'

const ContactUs = () => {
  // useContext initializing
  const { mainHeight } = useContext(myContext)

  // jsx
  return (
    <div className='contact-us-container d-flex flex-column' style={{height: mainHeight}}>
      <h2 className='mb-3 ls-1'>Contact us</h2>
      <p>If you have any questions, comments or suggestions regarding our product,
        please contact us using the form below. We are always ready to help our users.
      </p>
      <form action='' method='post'>
        <div className='mb-3'>
          <label htmlFor="user-name">Your name <sup>*</sup></label>
          <input id='user-name' type='text' placeholder='please enter your name...' className='form-control form-control-lg' required />
        </div>
        <div className='mb-3'>
          <label htmlFor="user-email">Your email <sup>*</sup></label>
          <input id='user-email' type='email' placeholder='please enter your email...' className='form-control form-control-lg' required />
        </div>
        <div className='mb-3'>
          <label htmlFor="user-sub">Subject <sup>*</sup></label>
          <select id="user-sub" className='form-select form-select-lg'>
            <option value="support-questions">Support questions</option>
            <option value="upgrade">Upgrade</option>
            <option value="bug-report">Bug report</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor="user-cm">Your message <sup>*</sup></label>
          <textarea id="user-cm" placeholder='please type your message...' className='form-control form-control-lg' required></textarea>
        </div>
        <div className='d-flex justify-content-end pb-3 btn-box'>
          <input type="submit" value='Send' className='btn btn-outline-success' />
        </div>
      </form>
      <div className='address-container d-flex justify-content-between pt-3'>
        <div>
          <h5>Mailing address</h5>
          <p className='address-info mb-0'>behnaminanloo@yahoo.com</p>
        </div>
        <div>
          <h5>Phone</h5>
          <p className='address-info mb-0'>+98 9367942590</p>
        </div>
      </div>
    </div>

  )
}
export default memo(ContactUs)