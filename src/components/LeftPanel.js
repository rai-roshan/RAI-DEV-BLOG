import React from 'react';
import { Link } from 'gatsby';

import useSiteMetadata from '../hooks/useSiteMetadata';
import GetAllTags from '../hooks/getAllTags';
import GetPostFromTag from '../hooks/getPostFromTag';

import avatar from '../images/avatar.png';

const Size = {
    height: "100vh",
    width: "17rem",
    maxHeight: "100vh",
};
const ImgHeight = {
  height: "3rem"
};

const AuthHead = ({ author, description }) =>{

  return <button type="button" className="list-group-item bg-transparent">
  <div className="w-100">
    <img 
    src={ avatar } 
    alt="rairoshan"
    className="rounded-circle" 
    style={ ImgHeight } />
  </div>
  <div className="w-100 font-weight-bold my-1">{ author }</div>
  <div className="w-100">{ description }</div>
</button>
};

const LeftPanel = () => {

    const { description , author } = useSiteMetadata();
    const allTags = GetAllTags();

    return <div 
    id="left-pan"
    className="list-group col-lg-3 col-md-4 list-group-flush" style={ Size }>

      <AuthHead 
      author={ author }
      description={ description }/>

      <div 
      className="list-group-item disabled bg-transparent font-weight-bold">
        Tags
      </div>

      {
        allTags.map( tag => {
          return <Link to={`/${tag.fieldValue}`}
          key={ tag.fieldValue }
          type="button" 
          className="list-group-item  bg-transparent d-flex justify-content-between align-items-center">
            #{ tag.fieldValue }
            <span 
            className="badge badge-primary badge-pill">
              { tag.totalCount }
            </span>
          </Link>
  
        })
      }

  </div>
};

export default LeftPanel;