import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contact } from '../Component/Contact'
import { Home } from '../Component/Home'
import { Project } from '../Component/Project'
import { Education } from '../Component/Education'
import { Experience } from '../Component/Experience'
import { Skills } from '../Component/Skills'

export const AppRoute = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Education' element={<Education/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
        <Route path='/Experience' element={<Experience/>}></Route>
      </Routes>

    </div>
  )
}
