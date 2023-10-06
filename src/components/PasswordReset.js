import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
function PasswordReset() {
    const randomString = useParams()
    const navigate = useNavigate()
  return (
     <div className='container'>
     <h1 className='container'>Reset Account Password</h1>
    <form>
        <label for="password" class="col-form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your new password" />
        <label for="confirmpassword" class="col-form-label">Re-enter Password</label>
        <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm password" />
        <button type="submit" className="btn btn-primary mt-3" onClick={()=>{
        
          navigate('/')
        }}>Reset Password</button>
      </form>
    </div>
  )
}

export default PasswordReset