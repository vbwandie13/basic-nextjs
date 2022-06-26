import { useRouter } from 'next/router';
import { Fragment } from 'react';
import Layout from '../../components/layout/layout';

interface UserProps {
  dataUsers: Array<any>;
}

const Index = (props: UserProps) => {
  const { dataUsers } = props;
  const router = useRouter();
  return (
    <Layout pageTitle="User Page">
      <div className="my-3">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Username</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
            </tr>
          </thead>
          <tbody>
            {dataUsers.map((user, i = 1) => {
              return (
                <Fragment key={user.id}>
                  <tr onClick={() => router.push(`/users/${user.id}`)}>
                    <td>{i + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
