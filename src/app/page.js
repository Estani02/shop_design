import { Card } from "@/components/Card";
import StartModal from "@/components/StartModal";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <StartModal />
      <div className="inline-flex flex-col items-center gap-6">
          <h1 className="text-[32px] text-center lg:text-[48px] capitalize">Wait ! your order in progress.</h1>
          <p className="text-[16px] text-center lg:text-[24px] text-[#4D5254] flex flex-col lg:flex-row">Lorem ipsum dolor sit amet, consectetur&nbsp; <span>adipiscing</span> </p>
      </div>
      <section className="lg:w-4/5 lg:my-[60px] lg:block">
        <Steps />
        <Card />
      </section>
    </main>
  )
}
