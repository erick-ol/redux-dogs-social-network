import React from 'react';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const getData = async () => {
      const token = window.localStorage.getItem('token');
      const { url, options } = STATS_GET(token);
      await request(url, options);
    };
    getData();
  }, [request]);

  return (
    <React.Suspense fallback={<div></div>}>
      <Head
        title="Photos Stats"
        description="Page that you can see the photos' stats."
      />
      {loading && <Loading />}
      {error && <Error error={error} />}
      {data && <UserStatsGraphs data={data} />}
    </React.Suspense>
  );
};

export default UserStats;
