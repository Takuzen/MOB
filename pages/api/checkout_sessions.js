const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const smallCount = req.body.mob_small;
      const bigCount = req.body.mob_big;
      const line_items = [];
      if (smallCount) {
        line_items.push({
          price: "price_1JRdvWLyzw9JkHFdwuQSEvri",
          quantity: smallCount,
        });
      }
      if (bigCount) {
        line_items.push({
          price: "price_1JRdxALyzw9JkHFdWnvzPnVu",
          quantity: bigCount,
        });
      }
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items,
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/cart`,
        shipping_address_collection: {
          allowed_countries: ["JP"],
        },
      });

      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
