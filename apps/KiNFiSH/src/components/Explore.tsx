import { Link } from "./mdx/custom-components/Link"
import { FC } from "react";
import clsx from 'clsx';
import Projects from "@/pages/projects";
import SectionTitle from "./sections/SectionTitle";
const Explore:FC = () => {
    return (
        <div className="">
            <Projects />
        <SectionTitle
                title="Explore more project"
                caption=""
                description=""
                button={{
                title: 'Explore',
                href: '/projects',
                }}
            />

        </div>


    )
}
export default Explore