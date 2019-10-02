import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const PostLink = props => (
    <li>
        <Link href="/posts/[id]" as={`/posts/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);
const PostListZone = props => (
    <>
        <h2>Blog</h2>
        <ul>
            <PostLink id="hello-nextjs" />
            <PostLink id="learn-nextjs" />
            <PostLink id="deploy-nextjs" />
        </ul>
    </>
);


const FontLink = props => (
    <li>
        <Link href="/fonts/[id]" as={`/fonts/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);
const FontListZone = props => (
    <>
        <h2>Fonts</h2>
        <ul>
            <FontLink id="fontID1" />
            <FontLink id="fontID2" />
            <FontLink id="fontID3" />
            <FontLink id="fontID4" />
        </ul>
    </>
);


const Index = () => (
    <Layout>
        <PostListZone />
        <FontListZone />
    </Layout>
);

export default Index;