import Image from 'next/image'
import SomeComponent from './someRoute/someComponent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Let's suppose for now that this is the skins page</p>
      <SomeComponent></SomeComponent>
    </main>
  )
}
