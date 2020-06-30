/* eslint-disable react/prop-types */
import React from 'react';

import Service from '../components/service/index';
import { contentData } from '../fixtures/Data';

const ServiceContainer = ({ childern }) => (
  <Service>
    <Service.Item>
      {contentData.map((item) => (
        <div key={item.key}>
          <Service.Icon>{item.icon}</Service.Icon>
          <Service.Content>
            <p>{item.text}</p>
            <h3>{item.head}</h3>
          </Service.Content>
        </div>
      ))}
    </Service.Item>
    {childern}
  </Service>
);

export default ServiceContainer;
