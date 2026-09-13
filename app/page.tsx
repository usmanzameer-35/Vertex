import { Hero } from "@/components/hero"
import { Overview } from "@/components/overview"
import { WhyVertex } from "@/components/why-vertex"
import { Services } from "@/components/services"
import { Markets } from "@/components/markets"
import { Process } from "@/components/process"
import { Leadership } from "@/components/leadership"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Overview />
        <WhyVertex />
        <Services />
        <Markets />
        <Process />
        <Leadership />
        <Contact />
      </main>
    </>
  )
}
