/* eslint-disable react/prop-types */
import React from 'react';
import Service from '../components/service/index';

const ServiceContainer = ({ childern }) => (
  <Service>
    <Service.Item>we can make it today</Service.Item>
    {childern}
  </Service>
);

export default ServiceContainer;
