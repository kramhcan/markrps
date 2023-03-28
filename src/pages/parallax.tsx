import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Inter } from 'next/font/google'
import { Fade as Hamburger } from 'hamburger-react'
import { Menu } from './menu'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

const interB = Inter({ weight: '600', subsets: ['latin'] })

export function ParallaxScroll() {
  const parallax = useRef<IParallax>(null!);
  const [isOpen, setOpen] = useState(false);
  const ref: any = useRef<HTMLDivElement>();
  // const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, "-100px");
  return (
    <>
      <Menu />
      <div>
        <Parallax ref={parallax} pages={2} style={{ top: '0', left: '0' }} className="parallax">
          <ParallaxLayer offset={1} speed={0} style={{ background: '#f5730a' }} />

          <ParallaxLayer offset={0} speed={0.225}>
            <div className="animation-layer parallax" id="pointed-hills-1"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.175}>
            <div className="animation-layer parallax" id="pointed-hills-2"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.125}>
            <div className="animation-layer parallax" id="pointed-hills-3"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={1}>
            <div className={inter.className}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                fontSize: '7rem',
              }}
              >
                Hey There
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.075}>
            <div className="animation-layer parallax" id="pointed-hills-4"></div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0}>
            <div className="animation-layer parallax" id="pointed-hills-5"></div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1}>
            <div
              style={{
                display: 'flex',
                position: 'absolute',
                left: '0',
                bottom: '25%',
                padding: '10rem',
                height: '50vh',
                width: '70vw',
                minWidth: '600px',
                backgroundColor: 'white'
              }}
            >
                <div className={inter.className}
                  style={{
                    paddingBottom: '2rem',
                    marginLeft: '17rem',
                    fontSize: '2.5rem',
                    color: '#2C0A56',
                  }}
                >
                  Its Me.
                </div>
                <div className={interB.className}
                  style={{
                    paddingTop: '2rem',
                    marginLeft: '2rem',
                    fontSize: '3.5rem',
                    color: '#2C0A56',
                  }}
                >
                  Mark
                </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={2}>
            <div>
              <Image src="" width={600} height={600} alt={'me'}
                className='blob-bordered' />
            </div>
          </ParallaxLayer>



          {/* <ParallaxLayer offset={1} speed={1}>
              <div className={inter.className} 
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'left',
                height: '100vh',
                fontSize: '4rem',
                color: '#2C0A56',
                padding: '10rem',
                marginLeft: '18rem',
              }}
              >
                Its Me.
              </div>
          </ParallaxLayer> */}

          {/* Scroll on click */}
          <ParallaxLayer
            offset={0}
            speed={0}
            onClick={() => parallax.current.scrollTo(1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0}
            onClick={() => parallax.current.scrollTo(0)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
          </ParallaxLayer>

        </Parallax>
      </div>
    </>
  )
}

// Hook
function useOnScreen<T extends Element>(ref: MutableRefObject<T>, rootMargin: string = "0px"): boolean {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
}
