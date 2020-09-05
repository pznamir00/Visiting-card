import React, { useEffect } from 'react'
import './style.scss'
import $ from 'jquery'


const Loader = () => {

  const loaderRef = React.createRef();

  useEffect(() => {
    window.onload = $(loaderRef.current).fadeToggle();
  }, [])

  return (
    <div ref={loaderRef} id="loader-background">
      <i className="fa fa-spinner fa-spin"/>
    </div>
  )
}

export default Loader
