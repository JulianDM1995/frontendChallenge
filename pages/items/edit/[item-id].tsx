import { EditItemPage } from '@/src/components/pages/items/edit/EditItemPage'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

export const EditItemNextPage: NextPage = () => {
  const itemId = useRouter().query['item-id'] as string
  return <EditItemPage itemId={itemId} />
}

export default EditItemNextPage
