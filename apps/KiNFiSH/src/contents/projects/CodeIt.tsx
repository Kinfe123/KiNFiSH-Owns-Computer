import SectionTitle from "@/components/sections/SectionTitle"
import { FC } from "react"
const CodeIt:FC = () => {
    return (
        <div>
            <SectionTitle
                title="CodeIt."
                caption="Innovative"
                description="CodeIt - a code sharing social media platform designed and developed specifically for developers. It provides a dedicated space for developers to share their code snippets, algorithms, or pieces of code with each other. Additionally, developers can also share memes related to coding and technology."
                button={{
                title: 'learn more',
                href: '/docs/code-it',
                }}
            />



        </div>
    )
} 
export default CodeIt