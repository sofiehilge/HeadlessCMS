import React from 'react';
import { Cookies } from 'react-cookie';

export const CookieProvider = ({ children }) => {
  const cookies = new Cookies();

  return <React.Fragment>{children}</React.Fragment>;
};
