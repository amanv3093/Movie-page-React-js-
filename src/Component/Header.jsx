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
     <p className='trans'>TV SHOWS</p>
     <p className='trans'>MOVIES</p>
     </div>
    <p className='trans'>SIGN IN</p>
    </header>
  )
}

export default Header
