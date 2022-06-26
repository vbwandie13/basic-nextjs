/* eslint-disable @next/next/no-img-element */
import Layout from '../components/layout/layout';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataPosts: Post[];
}

export default function Blog(props: BlogProps) {
  const { dataPosts } = props;
  return (
    <Layout pageTitle="Blog Page">
      <div className="container my-3">
        <div className="row">
          {dataPosts.map((post) => {
            return (
              <div className="col" key={post.id}>
                <div className="card my-2" style={{ width: '18rem' }}>
                  <img src="https://placeimg.com/640/480/tech" className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{post.title}</h5>
                    <p className="card-text ">{post.body}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataPosts = await res.json();

  return {
    props: {
      dataPosts,
    },
  };
}
