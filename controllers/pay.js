const request = require('request');
// const paymentModel = require('../models/payment');
const { YooCheckout } = require('@a2seven/yoo-checkout');

const pay = async (req, res) => {
  const paymentId = req.body.id;

  const checkout = new YooCheckout({ shopId: '248028', secretKey: 'test_BIqQ4BhzerjH9ll9K7BOgmz4tJ9FpW3vnBLr9WktvT8' });


  try {
    const payment = await checkout.getPayment(paymentId);
    if (payment) {
      res.send(payment);
    }
  } catch (err) {
    res.send(err);
  }



//   const sendPaymentRequest = () => {
//     request.post(
//       {
//         url: 'https://api.yookassa.ru/v3',
//         form: {
//           id: paymentId,
//         },
//       },
//       (err, response) => {
//         if (err) {
//           res.status(500).send({ message: err });
//         } else {
//           // Ответ Юкассы
//           const responseBody = JSON.parse(response.body);
//           console.log(responseBody);
//           if (responseBody.status === '200') {
//             clearInterval(paymentInterval);
//             res.send(responseBody);
//           } else {
//             res.send(responseBody);
//           }
//         }
//       },
//     );
//   };

//   const paymentInterval = setInterval(sendPaymentRequest, 5000);

//   sendPaymentRequest();
};

module.exports = {
  pay,
};
