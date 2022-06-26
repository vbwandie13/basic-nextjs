import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../components/layout/layout';

const Page_404 = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  });

  return (
    <Layout pageTitle="404 Page">
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {' '}
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link href="/">
            <a className="btn btn-primary">Go Home</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Page_404;
