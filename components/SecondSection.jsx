import React from 'react'
import Card from './second section components/Card'

export default function SecondSection() {
  return (
    <div className='w-screen max-w-4xl flex flex-row gap-8'>
        <div className='flex flex-col gap-6 w-1/2 '>
            <h2 className='text-4xl text-[#253056] font-semibold'>
                What´s different about Manage?
            </h2>
            <p className='pr-[120px] text-start text-sm text-gray-400 leading-5'>
                Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.
            </p>
        </div>
        <div className='w-1/2 flex flex-col gap-6'>
            <Card 
            number='01' 
            title='Track company-wide progress'
            text='See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way donde to the smallest of details. Never lose sight of the bigger picture again.'
            />
            <Card 
            number='02' 
            title='Advanced build-in reports'
            text='Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need yo keep key stakeholders informed.'
            />
            <Card 
            number='03' 
            title='Everything you need in one place'
            text='Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.'
            />
        </div>
    </div>
  )
}
