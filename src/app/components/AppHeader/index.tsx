/* eslint-disable @typescript-eslint/unbound-method */
import {
  ActionIcon,
  Group,
  Header,
  Title,
  useMantineColorScheme,
  NavLink as NavMantine
} from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons'
import {
  useNavigate,
  useLocation,
  NavLink as NavRouterDom
} from 'react-router-dom'
import { WithTranslation, withTranslation } from 'react-i18next'
// import { DOC, API, SUPPORT, APPLICATION } from 'common'

export function AppHeader({ t }: WithTranslation) {
  const navigate = useNavigate()
  const location = useLocation()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()

  const routes = [{ label: t('pages.document'), path: '/page1' }]

  return (
    <Header height={60} p="xs" className="justify-start px-8">
      <Group sx={{ height: '100%' }} position="apart">
        <Group onClick={() => navigate('/')}>
          <Title
            order={1}
            size="xl"
            color={colorScheme === 'dark' ? 'white' : 'black'}
          >
            {t('nexon.appName')}
          </Title>
        </Group>
        <Group>
          <div style={{ display: 'flex' }}>
            {routes.map(route => (
              <NavMantine
                component={NavRouterDom}
                variant="subtle"
                to={route.path}
                key={route.label}
                label={route.label}
                active={location.pathname.includes(route.path)}
                sx={{ fontWeight: 'bold' }}
              />
            ))}
          </div>
        </Group>
        <Group>
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
  )
}

export default withTranslation()(AppHeader)
