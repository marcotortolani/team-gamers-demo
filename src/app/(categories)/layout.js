import { cookies } from 'next/headers'
import SubscribeCard from '../components/SubscribeCard'
import { tokenActiveUser, tokenActiveTrial } from '@/utils/userAuth'
import { TrialProvider } from '@/providers/TrialProvider'

export default function layout({ children }) {
  const activeUser = cookies().get(tokenActiveUser.name)
  const activeTrial = cookies().get(tokenActiveTrial.name)
  const activeTrialNumber = parseInt(activeTrial?.value)

  const ChildrenAuth = () => {
    if (activeUser && activeUser?.value === 'true') return children
    if (activeTrialNumber > 0) return <TrialProvider>{children}</TrialProvider>
    return <SubscribeCard />
  }

  return (
    <div className=" mt-16 md:mt-24 lg:mt-32 w-full h-full flex flex-col items-center relative ">
      <ChildrenAuth />
    </div>
  )
}
