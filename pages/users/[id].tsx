import { useRouter } from 'next/router';
import Layout from '../../components/layout/layout';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface Detail {
  user: User;
}

const Detail = (props: Detail) => {
  // const router = useRouter();
  // const { id } = router.query;
  const { user } = props;
  return (
    <Layout pageTitle="Detail User Page">
      <div className="card my-3">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">
                Detail User
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Change Password
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">{user.username}</p>
          <a href="#" className="btn btn-primary">
            {user.email}
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;

// untuk mendapatkan id dan kirim ke getStaticProps
export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  const paths = dataUsers.map((user: User) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

interface getStaticPropsContext {
  params: {
    id: string;
  };
}

export async function getStaticProps(context: getStaticPropsContext) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
