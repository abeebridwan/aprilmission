/* eslint-disable react/prop-types */
import React from 'react';
import { Container, Item, Icon, Content } from './styles/service';

const Service = ({ children, ...RestProps }) => <Container {...RestProps}>{children}</Container>;

Service.Item = ({ children, ...RestProps }) => <Item {...RestProps}>{children}</Item>;

Service.Icon = ({ children, ...RestProps }) => <Icon {...RestProps}>{children}</Icon>;

Service.Content = ({ children, ...RestProps }) => <Content {...RestProps}>{children}</Content>;

export default Service;
