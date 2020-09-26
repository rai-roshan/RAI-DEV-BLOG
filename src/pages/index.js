import React,{ useContext } from "react";
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import AllPost from '../components/AllPosts';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';

import GetAllPost from '../hooks/getAllPost';
import { AllPostContext } from '../contexts/AllPostContext';

const App = ( ) => {

  //const data = GetAllPost();
  const {allPosts} = useContext(AllPostContext);

  console.log("context data : ", allPosts);

  return <Layout>
      <div className="row">
      <LeftPanel/>
      <AllPost allPosts={allPosts} />
      <RightPanel/>
      </div>
      </Layout>
};

export default App;

  

