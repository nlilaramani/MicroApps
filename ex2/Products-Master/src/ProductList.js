import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductList = ({ products, priceRangeFilter, nameFilter }) => {
  const anyPriceSelected = Object.values(priceRangeFilter).some(f => f);

  const productsInPriceRange = anyPriceSelected
    ? products.filter(product => priceRangeFilter[product.price])
    : products;

  const filteredProducts = productsInPriceRange.filter(
    product =>
      product.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
      product.description.toLowerCase().includes(nameFilter.toLowerCase()),
  );

  return (
    <CardContainer>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </CardContainer>
  );
};

export default ProductList;
