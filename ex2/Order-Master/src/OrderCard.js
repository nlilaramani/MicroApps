import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const Card = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 350px;
  margin: 0 5px;
`;

const CardTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`
  margin: 0;
`;

const PriceRange = styled.span`
  font-size: 20px;
`;

const Img = styled.img`
  width: 100%;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 20px;
`;

const OrderCard = ({ order }) => (
  <Card>
    <StyledLink to={`/orders/${order.id}`}>
      <CardTitleRow>
        <CardTitle>{order.id}</CardTitle>
        <PriceRange>{order.orderTotal}</PriceRange>
      </CardTitleRow>
      <Description>{order.custId}</Description>
      <Description>{order.orderDate}</Description>
    </StyledLink>
  </Card>
);

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.string.isRequired,
    orderTotal: PropTypes.string.isRequired,
    custId: PropTypes.string.isRequired,
    orderDate: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrderCard;
