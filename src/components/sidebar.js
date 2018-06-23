import React from 'react';
import Category from './category';
import RecentPost from './recentposts';
import Socail from './social';

class Sidebar extends React.Component{
  render(){
    return(
      <div>
        <Category />
        <Socail />
        <RecentPost />
      </div>
    )
  }
}

export default Sidebar;