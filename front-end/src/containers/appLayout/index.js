import { Box, Button, Divider, ThemeProvider, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import { RouteItems } from '../../routes/routeItems'
import { useHistory, useLocation } from 'react-router-dom'
import useTheme from '../../css/muiTheme'
import LoginInButton from '../login/loginButton'
import LoginPanel from '../login/login'
import SignUpButton from '../signUp/signupButton'
import SignUpPanel from '../signUp/signup'

const AppLayout = (props) => {
  const { children = <></> } = props
  const history = useHistory()
  const pathName = useLocation().pathname
  const theme = useTheme()
  return (
    <Fragment>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '8vh',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          {RouteItems.map((routeItem, index) => {
            return (
              <Fragment key={routeItem.name}>
                <Box
                  sx={{
                    display: 'flex',
                    paddingLeft: index === 0 ? '12px' : '8px',
                    paddingRight: index === 0 ? '12px' : '8px',
                    flexGrow: 0,
                    flexShrink: 1,
                    maxWidth: index === 0 ? '180px' : '100px',
                    boxShadow:
                      index !== 0 && pathName === routeItem.path
                        ? '0px -7px 0px 0px #E66B3B inset'
                        : 'none',
                  }}
                >
                  <Button
                    sx={{
                      '&': {
                        textTransform: 'none',
                      },
                    }}
                    onClick={() => history.push(routeItem.path)}
                  >
                    <Typography
                      variant={index === 0 ? 'h6' : 'subtitle1'}
                      sx={{ color: '#E0470B' }}
                    >
                      {routeItem.name}
                    </Typography>
                  </Button>
                </Box>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{
                    borderColor: '#E66B3B',
                    borderRightWidth: '5px',
                    marginTop: '22px',
                    marginBottom: '22px',
                  }}
                />
              </Fragment>
            )
          })}
        </Box>
        <Box
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <ThemeProvider theme={theme}>
            <Box sx={{ paddingRight: '8px' }}>
              <LoginInButton>
                <LoginPanel />
              </LoginInButton>
            </Box>
            <SignUpButton>
              <SignUpPanel />
            </SignUpButton>
          </ThemeProvider>
        </Box>
      </Box>
      <Divider
        sx={{
          borderColor: '#E66B3B',
        }}
      />
      <div className="content">
        <main className="main-content">{children}</main>
      </div>
    </Fragment>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node,
}

export default AppLayout
