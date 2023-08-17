import { FC } from "react"
import SectionTitle from "@/components/sections/SectionTitle"
const Anon:FC = () => {
    return (
        <div>
              <SectionTitle
                title="Anonmous Thoughts."
                caption="Social Media"
                description="A place where you can expreess your thoughts and idea across world in the most very native way possible "
                button={{
                title: 'learn more',
                href: '/docs/anon-thoughts',
                }}
            />
            


        </div>
    )
}
export default Anon