import { cookies } from 'next/headers'
import SubscribeCard from '../components/SubscribeCard'
import { tokenActiveUser, tokenActiveTrial } from '@/utils/userAuth'
import { TrialProvider } from '@/providers/TrialProvider'
import NextCrypto from 'next-crypto'

const cryptoUser = new NextCrypto('user enabled')
const cryptoTrial = new NextCrypto('trial')

export default async function layout({ children }) {
  const activeUser = cookies().get(tokenActiveUser.name)
  const activeTrial = cookies().get(tokenActiveTrial.name)
  let userEnabled = false
  let userTrial = 0

  userTrial = await cryptoTrial.decrypt(activeTrial.value).then((res) => {
    return res
  })

  userEnabled = await cryptoUser.decrypt(activeUser.value).then((res) => {
    return res
  })

  const ChildrenAuth = () => {
    if (activeUser && userEnabled === 'true') return children
    if (userTrial > 0) return <TrialProvider>{children}</TrialProvider>
    return <SubscribeCard />
  }

  return (
    <div className=" mt-16 md:mt-24 lg:mt-32 w-full h-full flex flex-col items-center relative ">
      <ChildrenAuth />
    </div>
  )
}
