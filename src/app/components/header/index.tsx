import React from 'react'
import {
  ActionIcon,
  Group,
  Header,
  Title,
  Button,
  useMantineColorScheme
} from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons'
import { useNavigate, NavLink } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import { DOC, API, SUPPORT, FORUM, APPLICATION } from 'common'

export function AppNavigator({ t }) {
  const navigate = useNavigate()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const routes = [
    { label: t('pages.document'), path: DOC },
    {
      label: t('pages.api'),
      path: API
    },
    {
      label: t('pages.support'),
      path: SUPPORT
    },
    { label: t('pages.forum'), path: FORUM },
    { label: t('pages.app'), path: APPLICATION }
  ]

  return (
    <div>
      <Header height={60} p="xs" className="justify-start">
        {/* Header content */}
        <Group sx={{ height: '100%' }} position="apart">
          <Group
            sx={{ gap: '0', marginLeft: '12px', cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <Title
              order={3}
              color={colorScheme === 'dark' ? 'white' : 'black'}
              sx={{ width: 280, textAlign: 'left' }}
            >
              {t('nexon.appName')}
            </Title>
          </Group>
          <Group>
            {routes.map(route => (
              <NavLink
                className="px-3 py-2 hover:bg-neutral-200 duration-300 no-underline text-neutral-800 font-semibold "
                to={route.path}
                key={route.label}
                style={({ isActive }) =>
                  isActive ? { color: 'blue' } : { color: '' }
                }
              >
                {route.label}
              </NavLink>
            ))}
          </Group>
          <Group>
            <Button variant="default" className="font-normal">
              My page
            </Button>
            <Button variant="default" className="font-normal">
              Logout
            </Button>
            <ActionIcon
              variant="default"
              onClick={() => toggleColorScheme()}
              size={30}
            >
              {colorScheme === 'dark' ? (
                <IconSun size={16} />
              ) : (
                <IconMoonStars size={16} />
              )}
            </ActionIcon>
          </Group>
        </Group>
      </Header>
    </div>
  )
}

export default withTranslation()(AppNavigator)
