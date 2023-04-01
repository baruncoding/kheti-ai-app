import React from 'react'
import MainCmp from '../../components/MainCmp'
import Nav from '../../components/Nav'
import HomePage from '../../components/HomePage'

// this is dashboard

export default function KishanDashbord() {
  return (
    <>
    <Nav/>
    <MainCmp  
    comp={
        <>
            <HomePage />
        </>
    }
     />

    </>
  )
}
