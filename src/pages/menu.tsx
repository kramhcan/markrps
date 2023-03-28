import { IParallax } from '@react-spring/parallax';
import { Fade as Hamburger } from 'hamburger-react'
import { useEffect, useRef, useState } from 'react'

export function Menu({dark = true}) {
    const [isOpen, setOpen] = useState(false);
    const parallax = useRef<IParallax>(null!)

    return (
      <>
        <div 
        className='menu'
        style={{
            position: 'sticky',
            top: '0',
            left: '0',
            zIndex: 1000,
            padding: '1rem',
            color: dark ? 'white' : 'black',
            boxShadow: dark ? '0 0 0 0' : '0 0 0 0.5rem rgba(0,0,0,0.5)',
        }}>
          <Hamburger toggled={isOpen} toggle={setOpen}/>
          {/* <p>{scrollY > 1
          ? "Scrolled more than 100px"
          : "Still somewhere near the top!"} </p> */}
        </div>
      </>
    )
  }
  