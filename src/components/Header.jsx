import React from 'react'

const Header = ({ handleToggle }) => {
  return (
    <div className='header'>
        <h1>My Notes</h1>
        <input 
            onClick={() => 
                handleToggle(
                    (previousDarkMode)=> !previousDarkMode)
                } 
                        type='checkbox' />
    </div>
  )
}

export default Header 