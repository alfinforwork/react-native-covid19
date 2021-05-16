var express = require('express');
const {custom_json} = require('../helper');
var router = express.Router();

router.post('/', (req, res) => {
  return res.json(custom_json(true, '', req.body));
  if (req.body.username === '' || req.body.password === '') {
    res.status(400).json(custom_json(false, 'Gagal login'));
  }
  res.status(200).json(
    custom_json(true, 'Berhasil login', {
      nama: 'Mohamad Alfin Nahrowi',
      email: 'alfinforwork@gmail.com',
      no_telp: 8564728545,
    }),
  );
});

module.exports = router;
