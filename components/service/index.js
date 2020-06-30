/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Item } from './styles/service';

const Service = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

Service.Item = ({ children, RestProps }) => <Item {...RestProps}>{children}</Item>;

Service.Icon = ({ children, RestProps }) => <Item {...RestProps}>{children}</Item>;

Service.Content = ({ children, RestProps }) => <Item {...RestProps}>{children}</Item>;

export default Service;
