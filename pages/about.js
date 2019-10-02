import Layout from "../components/Layout";

const About = () => (
    <Layout>
        <p>This is the about page</p>
    </Layout>
);

export default About;

/* Method 1
const Page = () => (
    <p>This is the about page</p>
);

export default Layout(Page);
*/

/*
const contentAbout = <p>This is the about page</p>;

const Index = () => (
    <Layout content={contentAbout} />
);

export default Index;
*/