import {
  createStyles,
  ActionIcon,
  Title,
  useMantineColorScheme,
  Box
} from '@mantine/core'
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram
} from '@tabler/icons'
import { WithTranslation, withTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

const useStyles = createStyles(theme => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    padding: '1rem 0'
  },
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem'
  }
}))

function AppFooter({ t }: WithTranslation) {
  const { classes } = useStyles()
  const navigate = useNavigate()
  const { colorScheme } = useMantineColorScheme()

  return (
    <footer className={classes.footer}>
      <Box className={classes.box}>
        <div onClick={() => navigate('/')} aria-hidden>
          <Title
            order={1}
            size="xl"
            color={colorScheme === 'dark' ? 'white' : 'black'}
            sx={{ width: '100%' }}
          >
            {t('nexon.appName')}
          </Title>
        </div>

        <div style={{ display: 'flex' }}>
          <ActionIcon>
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon>
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon>
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </div>
      </Box>
    </footer>
  )
}

export default withTranslation()(AppFooter)
