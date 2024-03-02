import React from 'react'

function Footer() {
  return (
    <footer>
        <div className='ft'>
            <ul className='ft-box1'>
                <li >HOME</li>
                <li>TOP SHOWS</li>
                <li>TOP MOVIES</li>
                <li>HELP</li>
                <li>DOWNLOAD</li>
                <li>ABOUT</li>
                <li>CAREERS</li>
            </ul>
            <ul className='ft-box2'>
                <li>© 2024 MOVIES.COM</li>
                <li>PRIVACY POLICY</li>
                <li>TERMS OF USE</li>
                <li>DMCA</li>
                
            </ul>
        </div>
        <div className='ft2'>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
    </footer>
  )
}

export default Footer
