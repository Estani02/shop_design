import { Card } from "@/components/Card";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="inline-flex flex-col items-center gap-6">
          <h1 className="text-[32px] text-center xl:text-[48px] capitalize">Wait ! your order in progress.</h1>
          <p className="text-[16px] text-center xl:text-[24px] text-[#4D5254]">Lorem ipsum dolor sit amet, consectetur <span className="hidden xl:block">adipiscing</span> </p>
      </div>
      <section className="xl:w-4/5 xl:my-[60px] xl:block">
        <Steps />
        <Card />
      </section>
    </main>
  )
}
