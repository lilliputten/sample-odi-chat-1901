import React, { SFC } from 'react';

export const Html: SFC = ({ children }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link href="/assets/index.css" type="text/css" rel="stylesheet" />
      <title>Simple chat</title>
    </head>
    <body>
      {children}
    </body>
    {/*
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js" />
    */}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.dev.js" />
    <script src="/assets/index.js" />
  </html>
)
