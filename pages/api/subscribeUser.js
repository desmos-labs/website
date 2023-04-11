import fetch from "isomorphic-unfetch"

export default async (req, res) => {
  const { email } = req.body

  console.log({ email })

  if (!email) {
    return res.status(400).json({ error: "Email is required" })
  }

  try {
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const DATACENTER = process.env.MAILCHIMP_API_SERVER
    const data = {
      email_address: email,
      tags: ["butter"],
      status: "subscribed",
      merge_fields: {
        FNAME: "John",
        LNAME: "Smith",
        TITLE: "Sir",
        UNIVERSITY: "University Tokyo",
      },
    }

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,

      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    )

    if (response.status >= 400) {
      const error = await response.json()
      return res.status(400).json({
        error:
          error.title === "Member Exists"
            ? "subscription-message-existed"
            : "subscription-message-error",
      })
    }

    return res.status(201).json({ error: "" })
  } catch (error) {
    return res.status(500).json({
      error: error.message || error.toString(),
    })
  }
}
