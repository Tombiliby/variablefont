import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import fontsData from "../../components/fonts.json";
import Markdown from "react-markdown";

const Font = (props: any) => {
    const router = useRouter();
    return (
        <>
            <h1>{router.query.id}</h1>
            <p>Font page</p>
        </>
    );
};

const Page = (props: any) => (
    <Layout>
        <Font />
        <hr />
        <div className="markdown">
            <Markdown
                source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
                `}
            />
        </div>
        <style jsx global>{`
            .markdown {
            font-family: 'Arial';
            }

            .markdown a {
            text-decoration: none;
            color: blue;
            }

            .markdown a:hover {
            opacity: 0.6;
            }

            .markdown h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
            }
      `}</style>

        {fontsData.map(font => (
            <li key={font.id}>

            </li>
        ))}

    </Layout>
);

export default Page;