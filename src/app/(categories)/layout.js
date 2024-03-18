import { cookies } from 'next/headers'
import Breadcrumb from '../components-old/ui/Breadcrumb'
import HorizontalLine from '../components/ui/HorizontalLine'
import ButtonFilterCategories from '../components-old/ui/ButtonFilterCategories'
import SubscribeCard from '../components-old/SubscribeCard'
import { tokenActiveUser } from '@/utils/userAuth'

export default function layout({ children }) {
  //const activeUser = cookies().get(tokenActiveUser.name);
  const activeUser = { value: 'true' }
  const childrenAuth =
    activeUser && activeUser?.value === 'true' ? children : <SubscribeCard />

  return <div className=" mt-16 w-full h-full relative ">{childrenAuth}</div>
}
