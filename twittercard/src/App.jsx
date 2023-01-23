import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './Twitter-follow-card'


export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing={false} userName="midudev" name="Miguel Anguel Duran"/>
      <TwitterFollowCard isFollowing userName="pheralb" name="Pablo Hernandez"/> 
      <TwitterFollowCard userName="elonmusk" name="Elon Musk"/>  
    </section>
  )
}
