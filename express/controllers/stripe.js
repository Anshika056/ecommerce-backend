const stripe = require("stripe")(process.env.STRIPE_KEY);

exports.makepayment = (req, res) => {
    stripe.charges.create(
      {
        source: req.body.tokenId,                    //tokenid will e returned from frontend part
        amount: req.body.amount,                     //after making order from front
        currency: "inr",     
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  };