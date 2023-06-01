import project from '@/sanity/schemas/project-schema'
import { getProject } from '@/sanity/schemas/sanity-utils'

import React from 'react'

export default async function Project({params}:any) {
    const slug = params.project
    const project = await getProject(slug)
  return (
    <div>
        <h1 className='text-4xl'>{project.name} </h1>
    </div>
  )
}
