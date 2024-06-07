import { cookies } from 'next/headers'
import SubscribeCard from '../components/SubscribeCard'
import { tokenActiveUser } from '@/utils/userAuth'

export default function layout({ children }) {
  //const activeUser = cookies().get(tokenActiveUser.name);
  const activeUser = { value: 'true' }
  const childrenAuth =
    activeUser && activeUser?.value === 'true' ? children : <SubscribeCard />

  return <div className=" mt-16 md:mt-24 lg:mt-32 w-full h-full flex flex-col items-center relative ">{childrenAuth}</div>
}
