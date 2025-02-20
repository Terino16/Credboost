'use client'
import { Rocket } from 'lucide-react'
import { use } from 'react'
 
export default function NumberOfSpacesCard({
  space,
}: {
  space: Promise<string>
}) {
  const allSpaces = use(space)
 
  return (
    <div className="flex flex-col items-center justify-center p-4 w-full">
      <div className="flex items-center justify-between w-full">
        <span className=''>
          Spaces
        </span>
        <Rocket className="w-4  h-4 text-blue-400" />
      </div>

      <h1>{allSpaces}</h1>
    </div>

  )
}