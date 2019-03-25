workflow "Build" {
  on = "push"
  resolves = ["Github Action for Gatsby CLI"]
}

action "Github Action for Gatsby CLI" {
  uses = "jzweifel/gatsby-cli-github-action@v1.0.0"
  runs = "gatsby build --verbose"
}
