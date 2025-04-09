import { cn } from "@/lib/utils";
import { source_sans_3, prompt } from "@/assets/fonts/fonts";
import Image from "next/image";
import Divider from "@/assets/images/intro-section-divider.svg";

export default function Page() {
  return (
    <>
      <div className="w-full bg-background pt-4 md:pt-16">
        <div className="mx-auto flex max-w-80 flex-col items-center md:max-w-screen-sm">
          <div
            className={cn(
              "pb-2 text-2xl font-semibold md:pb-4 md:text-5xl",
              source_sans_3.className
            )}>
            Välkommen till
          </div>
          <div
            className={cn(
              "rounded-lg bg-secondary px-6 py-4 text-3xl font-medium md:px-12 md:py-8 md:text-6xl",
              prompt.className
            )}>
            Återbrukslabbet
          </div>
          <div
            className={cn(
              "text-balance px-4 pt-4 text-center text-sm font-light md:px-16 md:pt-8 md:text-3xl",
              source_sans_3.className
            )}>
            <p>
              Återbrukslabbet ger avställd labbutrustning nytt liv i skolan.
              Modern utrustning ökar undervisningens relevans, avlastar
              skolbudgetar, sparar planetens resurser och gör lärandet roligare.
            </p>
            <p>
              Företag kan donera, lärare kan efterfråga. Välkommen till
              Återbrukslabbet!
            </p>
          </div>
        </div>
      </div>
      <Image src={Divider} alt="Divider" className="w-full" />
    </>
  );
}
