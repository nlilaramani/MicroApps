import React from 'react';
import styled from 'styled-components';
import OrderCard from './OrderCard';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const OrderList = ({ orders, priceRangeFilter, nameFilter }) => {
  const anyPriceSelected = Object.values(priceRangeFilter).some(f => f);

  const ordersInPriceRange = anyPriceSelected
    ? orders.filter(order => priceRangeFilter[order.orderTotal])
    : orders;

  const filteredOrders = ordersInPriceRange;

  return (
    <CardContainer>
      {filteredOrders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </CardContainer>
  );
};

export default OrderList;
