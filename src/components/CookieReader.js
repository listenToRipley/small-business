import React from 'react';
import cookie from 'cookie';

const CookieReader = () => {
const cookies = (cookie.parse(document.cookie))
const status = JSON.parse(cookies.businessCookies)
  if(status.loggedIn===true) {
    return (
      <div className='cookieGreeting'>
        <p>Logged in as user: {status.username}</p>
      </div>
    )
  }
}

export default CookieReader;