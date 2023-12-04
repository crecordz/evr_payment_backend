const request = require('request');
// const paymentModel = require('../models/payment');

const pay = (req, res) => {
  const paymentId = req.body.id;
  res.send('check')
  const sendPaymentRequest = () => {
    // request.post(
    //   {
    //     url: 'https://api.yookassa.ru/v3',
    //     form: {
    //       id: paymentId,
    //     },
    //   },
    //   (err, response) => {
    //     if (err) {
    //       res.status(500).send({ message: err });
    //     } else {
    //       // Ответ Юкассы
    //       const responseBody = JSON.parse(response.body);
    //       console.log(responseBody);
    //       if (responseBody.status === '200') {
    //         clearInterval(paymentInterval);
    //         res.send(responseBody);
    //       } else {
    //         res.send(responseBody);
    //       }
    //     }
    //   },
    // );
  };

  const paymentInterval = setInterval(sendPaymentRequest, 5000);

  sendPaymentRequest();
};

module.exports = {
  pay,
};
