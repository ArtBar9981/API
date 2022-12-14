import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Layout from '../../components/Layout';

const route = express.Router();

route.get('/', async (req, res) => {
  try {
    const initState = { path: req.originalUrl };
    const html = renderToString(<Layout initState={initState} />);
    res.write('<!DOCTYPE html>');
    res.end(html);
  } catch (err) {
    console.error(err);
  }
});

export default route;
