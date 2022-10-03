import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html lang="en">
            <Head />
            <script src="https://unpkg.com/@codersrank/skills-chart@0.9.2/codersrank-skills-chart.min.js" defer></script>
            <script src="https://unpkg.com/@codersrank/activity/codersrank-activity.min.js" defer></script>
            <Main />
            <NextScript />
        </Html>
    )
}

export default Document;