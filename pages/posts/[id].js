import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Post = () => {
    const router = useRouter();
    return (
        <>
            <h1>{router.query.id}</h1>
            <p>Post page</p>
        </>
    );
};

const Page = () => (
    <Layout>
        <Post />
    </Layout>
);

export default Page;