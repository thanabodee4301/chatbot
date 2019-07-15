exports.helloWorld = (req, res) => {
    let message = req.query.message || req.body.message || 'สวัสดีครับ';
    res.status(200).send(message);
  };