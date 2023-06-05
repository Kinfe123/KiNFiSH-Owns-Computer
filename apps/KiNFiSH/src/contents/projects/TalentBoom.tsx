import SectionTitle from "@/components/sections/SectionTitle"
import { FC } from "react"
const TalentBoom:FC = () => {
    return (
        <div>
            <SectionTitle
                title="Talent Boom."
                caption="Innovative"
                description="TalentBoom - A platform that innovates and encourage native african student to build the next generation "
                button={{
                title: 'learn more',
                href: '/docs/talent-boom',
                }}
            />



        </div>
    )
} 
export default TalentBoom