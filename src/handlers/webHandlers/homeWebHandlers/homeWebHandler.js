const homeWebHandler = (req, res) => {
  const data = {
    message: 'Hello ',
  };
  res.render('web/home/index', data);
};

module.exports = homeWebHandler;
