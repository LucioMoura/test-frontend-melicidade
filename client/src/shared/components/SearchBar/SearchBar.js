import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../../assets/Logo_ML.png';
import ImgSearch from './../../../assets/ic_Search.png';
import './SearchBar.scss';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.submitSearch = this.submitSearch.bind(this);
    this.changueSearch = this.changueSearch.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  changueSearch(event) {
    const target = event.target;
    this.setState({
      search: target.value,
    });
  }

  submitSearch = () => {
    if (this.state.search) {
      this.props.history.push(`/items?search=${this.state.search}`);
    }
  }

  keyPress(e) {
    if (e.keyCode === 13) {
      this.submitSearch();
    }
  }

  render() {
    return (
      <nav>
        <div className='grid-0'>
            <div className='col-desk-1 col-tab-2 col-mob-1 padding-10'>
              <Link to='/'>
                 <img src={logo} className="logo-search" alt='logo' title='logo' />
              </Link>
            </div>
            <div className='col-desk-11 col-tab-10 col-mob-3 padding-10'>
                <div className='warp-search'>
                  <input type='text'
                    onChange={this.changueSearch}
                    onKeyDown={this.keyPress}
                    placeholder='Buscar produtos, marcas e muito mais...'
                    aria-label="placeholder" />
                    <button onClick={this.submitSearch} className='lupa' alt=''>
                      <img src={ImgSearch} alt='' />
                    </button>
                </div>
            </div>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
