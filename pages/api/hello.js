// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// server environment NODE.js
// common js Deno......
const fs = require('fs');


export default function handler(req, res) {
  // api services
  res.status(200).json({ name: 'John Doe' })
}