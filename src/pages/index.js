import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-indigo-300 text-gray-800 text-center h-screen flex justify-center items-center">
      <>
        <span className="text-3xl bold">Welcome to Liquidity Finance,</span> <span className="text-gray-600">where magic happens</span>
      </>
    </div>
  )
}
