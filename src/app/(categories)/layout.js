import { cookies } from 'next/headers'
import SubscribeCard from '../components/SubscribeCard'
import { tokenActiveUser, tokenActiveTrial } from '@/utils/userAuth'
import { TrialProvider } from '@/providers/TrialProvider'
import NextCrypto from 'next-crypto'

const cryptoUser = new NextCrypto('user enabled')
const cryptoTrial = new NextCrypto('trial')

export default async function layout({ children }) {
  let userEnabled = false
  let userTrial = 0

  try {
    const activeUser = cookies().get(tokenActiveUser.name)
    const activeTrial = cookies().get(tokenActiveTrial.name)

    if (activeUser) {
      userEnabled = await cryptoUser.decrypt(activeUser.value)
    }

    if (activeTrial) {
      userTrial = parseInt(await cryptoTrial.decrypt(activeTrial.value), 10)
    }
  } catch (error) {
    console.log('Error decrypting cookies:', error)
  }

  return (
    <div className="mt-16 md:mt-24 lg:mt-32 w-full h-full flex flex-col items-center relative">
      <ChildrenAuth userEnabled={userEnabled} userTrial={userTrial}>
        {children}
      </ChildrenAuth>
    </div>
  )
}

const ChildrenAuth = ({ children, userEnabled, userTrial }) => {
  if (userEnabled === 'true') return children
  if (userTrial > 0) return <TrialProvider>{children}</TrialProvider>
  return <SubscribeCard />
}
