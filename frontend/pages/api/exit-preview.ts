export default async function exit(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()

  // Redirect the user back to a provided redirect path or the index page

  // deepcode ignore OR: Code cant be reached if preview secret is not valid
  res.writeHead(307, { Location: req.query.redirect || "/" })
  res.end()
}
