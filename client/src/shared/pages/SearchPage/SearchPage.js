import React, { Component } from 'react';
import _ from 'lodash';
import { parse } from 'qs';

import SearchBar from '../../components/SearchBar/SearchBar';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ProductsList from '../../components/ProductList/ProductList';

// Remove diacrítico na pesquisa
const removeDiacritics = require('diacritics').remove;

class SearchPage extends Component {
  constructor(props) {
    super(props);

    let initialProducts = [];
    let initialCategories = [];

    this.state = {
      products: initialProducts,
      search: '',
      categories: initialCategories,
      loading: false };
  }

  componentDidMount() {
    if (!_.isEmpty(this.props.location.search) && _.isEmpty(this.state.products)) {
       const queryString = parse(this.props.location.search, { ignoreQueryPrefix: true });
       this.getProducts(queryString.search);
    }
  }

  componentDidUpdate(prevProps) {
    if (!_.isEmpty(this.props.location.search)
      && !_.isEmpty(prevProps.location.search)
      && prevProps.location.search !== this.props.location.search) {
      const queryString = parse(this.props.location.search, { ignoreQueryPrefix: true });
      this.getProducts(queryString.search);
    }
  }

  getProducts(search) {
    this.setState({ search, products: [], categories: [], loading: true });
    this.requestGetProducts(search)
      .then((data) => {
        this.setState({
          products: data.items,
          categories: data.categories,
          loading: false });
      });
  }


  requestGetProducts(search, baseUrl = '') {
    return fetch('/api/items?search=' + encodeURI(removeDiacritics(search)))
    .then(response => response.json())
    .catch(error => console.log(error));
  }


  render() {
    const lastCategory = this.state.categories ? this.state.categories[this.state.categories.length-1] : [];
    return (<div>
      <SearchBar history={this.props.history} />
      <BreadCrumbs crumbs={this.state.categories} />
      <ProductsList
        lastCategory={lastCategory}
        products={this.state.products}
        loading={this.state.loading}
      />
    </div>);
  }
}

export default SearchPage;
