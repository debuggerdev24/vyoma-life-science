import ProductsGrid from '@/components/common/ProductsGrid'
import React from 'react'
import { products } from "@/lib/productData";
import HeroSection from '@/components/howToUse/HeroSection';
import Steps from '@/components/howToUse/Steps';
import { howToUseSteps } from '@/lib/howToUseData';
import VideoPlayer from '@/components/howToUse/VideoPlayer';
import CropUsage from '@/components/howToUse/CropUsage';
import { cropUsageData } from '@/lib/cropUsageData';
import FAQSection from '@/components/home/FAQSection';

const page = () => {
  return (
    <div>
      <HeroSection />
      
      <ProductsGrid
        sectionLabel="View Instructions"
        title="Select Your Product for Guidance"
        description="View detailed instructions, dosage guidance, and application steps for each formula."
        products={products}
        paddingClasses="py-[110px]"
        variant="steps"
        ctaButtonLabel="View Steps"
      />
      <Steps
        sectionLabel="Step-by-Step Guide"
        title="How to Use Our Products"
        subtitle="Simple instructions for farmers, field teams, and agronomists to use Vyoma products correctly for maximum results."
        steps={howToUseSteps}
      />
      <VideoPlayer />
      <CropUsage crops={cropUsageData} />
      <FAQSection />
    </div>
  )
}

export default page