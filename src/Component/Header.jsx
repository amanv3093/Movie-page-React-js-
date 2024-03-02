import React from 'react'

function Header() {
  return (
    <header>
    <div className='header-logo'>
     <span class="material-symbols-outlined " id='mvlogo'>movie</span>
     <div className='search'>
     <input type='text' className='inp-search'/>
     <span class="material-symbols-outlined " id='search-logo'>search</span>
</div>
     <p>TV SHOWS</p>
     <p>MOVIES</p>
     </div>
    <p>SIGN IN</p>
    </header>
  )
}

export default Header
