import { Anchor, Avatar, Center, Flex } from '@mantine/core'

import { AppIcon } from '@/src/components/svgs/AppIcon'
import { APP_URLS } from '@/src/constants/URLS'
import Link from 'next/link'
import { MenuLinks } from './Menu'

export const Mobile = () => {
  return (
    <Flex align="center" justify="space-between" w="100%">
      <MenuLinks />

      <Center w="100%">
        <Anchor href={APP_URLS.INDEX} component={Link}>
          <AppIcon svgProps={{ height: 25 }} color="#212121" />
        </Anchor>
      </Center>

      <Avatar sx={{ transition: '1000ms' }} size={25} radius="xl" m={0} />
    </Flex>
  )
}
