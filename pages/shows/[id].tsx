import fetch from "isomorphic-unfetch";
import Layout from "../../components/Layout";
import { any } from "prop-types";

const Show = (props: any) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
        <img src={props.show.image.medium} />
    </Layout>
);

Show.getInitialProps = async function(context: any) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log(`Fetched show: ${show.name}`);

    return { show };
};

export default Show;