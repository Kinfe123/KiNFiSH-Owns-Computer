import { FC } from "react"
import SectionTitle from "@/components/sections/SectionTitle"
const a2svNotes:FC = () => {
    return (
        <div>
              <SectionTitle
                title="A2SV Notes ."
                caption="OSS Project"
                description="An Internal tool for a2sv which make it easier to access any softcopy file and share their own copy and useful material along with it to the platform "
                button={{
                title: 'learn more',
                href: '/docs/a2sv-notes',
                }}
            />
            


        </div>
    )
}
export default a2svNotes