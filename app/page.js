import Image from 'next/image'
import IntroPic from './IntroPic'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <IntroPic />
    </main>
  )
}
