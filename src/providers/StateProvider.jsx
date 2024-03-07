'use client';
import React, { createContext, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import useLocalStorage from '@/hooks/useLocalStorage';
import { validateUser } from '@/utils/userAuth';

const StateContext = createContext();
const favouritePostsInitial = [];

function StateProvider({ children }) {
  const [favouritePosts, setFavouritePosts] = useLocalStorage(
    'userFavouritePosts',
    []
  );
  const stateValues = { favouritePosts, setFavouritePosts };
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash') || 0;
  
  useEffect(() => {
    //validateUser(hash);

    if (!favouritePosts) {
      setFavouritePosts(favouritePostsInitial);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StateContext.Provider value={stateValues}>
      {stateValues ? children : null}
    </StateContext.Provider>
  );
}

export { StateContext, StateProvider };
