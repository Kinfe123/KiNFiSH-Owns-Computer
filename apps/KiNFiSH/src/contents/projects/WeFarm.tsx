import { FC } from "react"
import SectionTitle from "@/components/sections/SectionTitle"
const WeFarm:FC = () => {
    return (
        <div>
              <SectionTitle
                title="We Farm ."
                caption="OSS Project"
                description="Explore

                Internship Jobs and visually engaging learning slides cover data structures, algorithms, and other tech skills, providing a comprehensive understanding of concepts to help you grasp the skills you desire "
                button={{
                title: 'learn more',
                href: '/docs/we-farm',
                }}
            />
            


        </div>
    )
}
export default WeFarm