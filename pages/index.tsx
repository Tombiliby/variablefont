import Layout from "../components/Layout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import fontsData from "../components/fonts.json";
import { Show } from "../types/tvmaze";

interface Props {
    id: string;
    name?: string;
}

interface Props {
    id: string;
    name?: string;
}

const PostLink = (props: Props) => (
    <li>
        <Link href="/posts/[id]" as={`/posts/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const PostListZone = () => (
    <>
        <h2>Blog</h2>
        <ul>
            <PostLink id="hello-nextjs" name="roger" />
            <PostLink id="learn-nextjs" />
            <PostLink id="deploy-nextjs" />
        </ul>
    </>
);

const FontLink = (props: any) => (
    <li>
        <Link href="/fonts/[id]" as={`/fonts/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);
const FontListZone = () => (
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

const FontsLink = ({ font }: any) => (
    <li>
        <Link href="/fonts/[id]" as={`/fonts/${font.id}`}>
            <a>{font.name}</a>
        </Link>
        <style jsx>{`
            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: blue;
                font-family: 'Arial';
            }

            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </li>
);

const Index = (props: any) => (
    <Layout>
        <ul>
            {fontsData.map(font => (
                <FontsLink key={font.id} font={font} />
            ))}
        </ul>
        <hr />
        <PostListZone />
        <FontListZone />
        <hr />
        <h2>Batman TV shows</h2>
        <ul>
            {props.shows.map((show: any) => (
                <li key={show.id}>
                    <Link href="/shows/[id]" as={`/shows/${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>

        <style jsx>{`
        h2,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>

    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();

    console.log(`Show data fetched. Count: ${data.length}`);

    return {
        shows: data.map((entry: { show: any; }) => entry.show)
    };

};

export default Index;