import { cookies } from 'next/headers'
import SubscribeCard from '../components/SubscribeCard'
import { TrialProvider } from '@/providers/TrialProvider'
import NextCrypto from 'next-crypto'

const cryptoUser = new NextCrypto('user enabled')
const cryptoTrial = new NextCrypto('trial')

export default async function Layout({ children }) {
  const cookieStore = cookies()
  const activeUser = cookieStore.get('enabledUser')
  const activeTrial = cookieStore.get('trial')

  let userEnabled = false
  let userTrial = 0

  if (activeUser) {
    userEnabled = (await cryptoUser.decrypt(activeUser.value)) === 'true'
  }

  if (activeTrial) {
    userTrial = parseInt(await cryptoTrial.decrypt(activeTrial.value), 10)
  }

  const ChildrenAuth = () => {
    if (userEnabled) return children
    if (userTrial > 0) return <TrialProvider>{children}</TrialProvider>
    return <SubscribeCard />
  }

  return (
    <div className="mt-16 md:mt-24 lg:mt-32 w-full h-full flex flex-col items-center relative">
      <ChildrenAuth />
    </div>
  )
}
