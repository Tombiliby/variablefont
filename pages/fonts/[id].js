import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Font = () => {
    const router = useRouter();
    return (
        <>
            <h1>{router.query.id}</h1>
            <p>Font page</p>
        </>
    );
};

const Page = () => (
    <Layout>
        <Font />
    </Layout>
);

export default Page;