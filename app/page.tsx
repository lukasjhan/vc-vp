"use client";

import { Credential } from "@/components/Credential";
import { Description } from "@/components/Description";
import { Holder } from "@/components/Holder";
import { Loading } from "@/components/common/Loading";
import { useState } from "react";
import { Verifier } from "@/components/Verifier";
import Image from "next/image";
import { ISSUE, HOLDER, VERIFY } from "@/const/status";

export default function Home() {
  const [step, setStep] = useState(ISSUE);
  const [loading, setLoading] = useState(false);

  const renderStepComponent = () => {
    switch (step) {
      case ISSUE:
        return <Credential setStep={handleNextStep} />;
      case HOLDER:
        return <Holder setStep={handleNextStep} />;
      case VERIFY:
        return <Verifier setStep={handleNextStep} />;
      default:
        return null;
    }
  };

  const handleNextStep = (step: string) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setStep(step);
    }, 1000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24  ">
      <div className="mt-20 w-[48rem] main-container">
        <div className="flex justify-center items-center mb-8 pr-5">
          <Image
            src="/삼.png"
            layout="intrinsic"
            alt="sd-vc-concept"
            width={570} //이미지 원본크기
            height={381}
          />
        </div>
        <Description step={step} />
        {loading ? <Loading /> : <>{renderStepComponent()}</>}
      </div>
    </main>
  );
}
