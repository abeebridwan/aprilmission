/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { Container, ButtonLink, Logo, Text, Link, Group, Icon, Frame, MainHeader, SmallGroup } from './styles/header';

const propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default function Header({ children, ...restProps }) {
  return <MainHeader {...restProps}>{children}</MainHeader>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Header.Container = function HeaderContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.Icon = function HeaderIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.SmallGroup = function HeaderSmallGroup({ children, ...restProps }) {
  return <SmallGroup {...restProps}>{children}</SmallGroup>;
};

Header.propTypes = propTypes;
