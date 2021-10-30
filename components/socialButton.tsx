import React from 'react'
import { Pane, Card } from 'evergreen-ui'
import GithubIcon from './githubIcon'
import GoogleIcon from './googleIcon'

const icons = { github: GithubIcon, google: GoogleIcon }
const SocialButton = ({ type, onClick }) => {
  const Icon = icons[type] || GithubIcon

  return (
    <Card
      is="button"
      type="button"
      elevation={1}
      paddingY="14px"
      paddingX="17px"
      marginBottom="10px"
      width="100%"
      maxWidth="345px"
      background={type === 'google' ? 'white' : '#121212'}
      cursor="pointer"
      style={{ border: '0px solid' }}
      color={type === 'google' ? 'black' : 'white'}
      onClick={onClick}
    >
      <Pane display="flex" justifyContent="space-evenly" alignItems="center" fontSize="20px">
        <Icon />
        <span style={{ fontSize: '1.2rem' }}>
          {'Continue with '}
          <strong>{type}</strong>
        </span>
      </Pane>
    </Card>
  )
}

export default SocialButton
