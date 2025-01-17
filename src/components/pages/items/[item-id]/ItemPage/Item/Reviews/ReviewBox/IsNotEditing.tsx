import { ActionIcon, Flex, Text } from '@mantine/core'
import { Dispatch, SetStateAction } from 'react'
import { Edit } from 'tabler-icons-react'
import { RemoveReviewButton } from './RemoveReviewButton'

export const IsNotEditing = ({
  text,
  setIsEditing,
  id,
}: {
  text: string
  setIsEditing: Dispatch<SetStateAction<boolean>>
  id: string
}) => {
  return (
    <Flex>
      <Text w="100%">{text}</Text>
      <Flex justify="end">
        <ActionIcon onClick={() => setIsEditing(true)}>
          <Edit size="1.125rem" />
        </ActionIcon>
        <RemoveReviewButton id={id} />
      </Flex>
    </Flex>
  )
}
