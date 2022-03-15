import Head from "next/head"
import { useRouter } from "next/router"
import styles from "@/styles/Layout.module.css"
import Header from "./Header"
import Footer from "./Footer"
import ShowCase from "./ShowCase"
const Layout = ({ title, keywords, description, children }) => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description}></meta>
                <meta name='keywords' content={keywords}></meta>
            </Head>
            <Header />
            {router.pathname === "/" && <ShowCase />}
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>

    )
}

Layout.defaultProps = {
    title: 'Dj Events | Find the hottest parties',
    description: "Find the latest DJ and other musical events",
    keywords: "Music, dj, edm, events"
}

export default Layout