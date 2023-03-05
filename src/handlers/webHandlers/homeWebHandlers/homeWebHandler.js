const homeWebHandler = (req, res) => {
  const data = {
    message: 'Cuming Soon!',
    deez: 'Nutz'
  };
  res.render('web/home/index', data);
};

module.exports = homeWebHandler;
