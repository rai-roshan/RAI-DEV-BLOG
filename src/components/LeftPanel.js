import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import avatar from '../images/avatar.png';

const Size = {
    height: "100vh",
    width: "17rem",
    maxHeight: "100vh",
};
const ImgHeight = {
  height: "3rem"
};

const LeftPanel = () => {

    const { description , author } = useSiteMetadata();

    return <div 
    id="left-pan"
    class="list-group col-lg-3 col-md-4 list-group-flush" style={ Size }>
    <button type="button" class="list-group-item bg-transparent">
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
    <button type="button" class="list-group-item list-group-item-action bg-transparent">Dapibus ac facilisis in</button>
    <button type="button" class="list-group-item list-group-item-action bg-transparent">Morbi leo risus</button>
    <button type="button" class="list-group-item list-group-item-action bg-transparent">Porta ac consectetur ac</button>
    <button type="button" class="list-group-item list-group-item-action bg-transparent" disabled>Vestibulum at eros</button>
  </div>
};

export default LeftPanel;