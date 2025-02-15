import React from 'react'

type Props = {
    campaign: any
}

const CampaignHero = ({campaign}: Props) => {
  console.log(campaign);
  return (
    <div>
        <h1 className='lg:text-[60px] md:text-[40px] text-[30px] font-bold tracking-tight'>{campaign.name}</h1>
        <p className='px-2'>{campaign.description}</p>
    </div>
  )
}

export default CampaignHero