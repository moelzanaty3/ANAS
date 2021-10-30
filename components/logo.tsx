import React from 'react'
import Link from 'next/link'
import { Text } from 'evergreen-ui'

const Logo = ({ ...styles }) => {
  return (
    <Link href="/">
      <a>
        <Text fontSize="30px" color="#1877f2" {...styles}>
          <strong>ANAS.</strong>
        </Text>
      </a>
    </Link>
  )
}

export default Logo
