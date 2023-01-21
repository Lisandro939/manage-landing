import React from 'react'
import OpinionCard from './opinions components/OpinionCard'
import AnishaLi from '../public/images/avatar-anisha.png'
import AliBravo from '../public/images/avatar-ali.png'
import RichardWatts from '../public/images/avatar-richard.png'
import ShanaiGough from '../public/images/avatar-shanai.png'

export default function Opinions() {

  return (
    <div className='w-screen flex flex-col items-center justify-center sm:gap-6'>
        <h2 className='text-4xl text-[#253056] font-semibold'>
            What they&rsquo;ve said
        </h2>
        <div className='flex flex-row w-full h-[300px] gap-6 px-6 justify-center items-center sm:flex-col sm:h-full'>
          <OpinionCard image={AnishaLi} name='Anisha Li' opinion='Manage has supercharged our team&rsquo;s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.'/>
          <OpinionCard image={AliBravo} name='Ali Bravo' opinion='We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.' />
          <OpinionCard image={RichardWatts} name='Richard Watts' opinion='Manage allows us to provide structure and process. It keeps us organized and focused. I can&rsquo;t stop recommending them to everyone I talk to!' />
          <OpinionCard image={ShanaiGough} name='Shanai Gough' opinion='Their software allows us to track, manage and collaborate on out projects from anywhere. It keeps the whole team in-sync without being intrusive.' />
        </div>
        <button className='bg-[#F3603C] px-6 py-2 rounded-full text-xs font-medium text-white hover:opacity-50'>
            Get Started
        </button>
    </div>
  )
}
