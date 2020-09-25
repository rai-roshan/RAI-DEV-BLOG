import React from 'react';

const Size = {
    height: "100vh",
    width: "4rem"
};

const RightPanel = () => {

    return <ul 
    id="right-pan"
    class="list-group col-lg-3 bg-transparent" style={ Size }>
    <li class="list-group-item list-group-item-dark font-weight-bold">Listings</li>
    <li class="list-group-item bg-transparent">Dapibus ac facilisis in</li>
    <li class="list-group-item bg-transparent">Morbi leo risus</li>
    <li class="list-group-item bg-transparent">Porta ac consectetur ac</li>
    <li class="list-group-item bg-transparent">Vestibulum at eros</li>
  </ul>
};

export default RightPanel;