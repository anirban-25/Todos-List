import React from 'react'
export const Footer = () => {
  let Footstyle={
    position: 'relative',
    top: '95vh',
    width: '100%',
    margin: '34px 0px',
    backgroundColor: 'black',
    height: '50px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <div className="bg text" style={Footstyle}>
      <p className="text-center" >
        Copyright &copy; MyTodosList.com
      </p>
    </div>
  )
}
