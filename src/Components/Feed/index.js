import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FeedModal from './FeedModal';
import FeedPhotos from './FeedPhotos';
import { loadNewPhotos, resetFeedState } from '../../store/feed';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';

const Feed = ({ user }) => {
  const { infinite, loading, list, error } = useSelector((state) => state.feed);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(resetFeedState());
    dispatch(loadNewPhotos({ user, total: 6 }));
  }, [dispatch, user]);

  React.useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          dispatch(loadNewPhotos({ user, total: 6 }));
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite, dispatch, user]);

  return (
    <div>
      <FeedModal />

      {list.length > 0 && <FeedPhotos />}
      {loading && <Loading />}
      {error && <Error error={error} />}
      {!infinite && !user && (
        <p
          style={{
            textAlign: 'center',
            padding: '2rem 0 4rem 0',
            color: '#888',
          }}
        >
          There are no more posts.
        </p>
      )}
    </div>
  );
};

export default Feed;
