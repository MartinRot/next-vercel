'use client'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import styled from 'styled-components'
import { FC } from 'react' //Importar FC(Funcional Components)

// This creates a custom component that wraps an <a> tag
const RedLink = styled.a`
  color: blue;
  text-decoration: underline;
`
//Interface para declarar las props en tipescript
interface Props {
  text: string;
  href: string;
}

const ActiveLink: FC<Props> = ({ text, href }) => {
  
  const path = usePathname()
  
  return (

    path === href ? 
      <Link href={href} passHref legacyBehavior>
        <RedLink>{ text }</RedLink>
      </Link>
      :
      <Link href={href} passHref legacyBehavior>
        { text }
      </Link>
  )
}

export default ActiveLink