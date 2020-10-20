import React from 'react';
import TopMenu from '../components/TopMenu';
import Middle from '../components/Middle';
import Footer from '../components/Footer';

export default class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
          <Footer/>
        </div>
    );
  }
}