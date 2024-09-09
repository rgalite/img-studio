'use client'

import * as React from 'react'
import { useSession, signIn } from 'next-auth/react'
import Box from '@mui/material/Box'
import Image from 'next/image'
import icon from 'public/ImgStudioLogo.svg'
import GoogleSignInButton from '@/app/ui/components/GoogleSignInButton'
import { pages } from './routes'
import { useRouter } from 'next/navigation'

//TODO update with welcome href

export default function Page() {
  /* const { data: session } = useSession() //TODO

  var redirectHref = process.env.AUTH_URI ? process.env.AUTH_URI : ''

  if (session) {
    redirectHref = pages.Generate.href
  }*/

  const router = useRouter()
  const handleClick = () => {
    router.push('/generate')
  }

  return (
    <main>
      <Box justifyContent="left" minHeight="100vh" pl={15} pt={10}>
        <Image priority src={icon} width={800} alt="ImgStudio" />
        <Box sx={{ pl: 2 }}>
          <GoogleSignInButton onClick={handleClick} />
        </Box>
      </Box>
    </main>
  )
}
