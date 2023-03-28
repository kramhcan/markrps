import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { ParallaxScroll } from './parallax'
import { Menu } from './menu'
import { MutableRefObject, useEffect, useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <ParallaxScroll />
    </>
  )
}
