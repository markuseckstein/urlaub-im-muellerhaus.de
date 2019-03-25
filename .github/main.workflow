workflow "Build" {
  on = "push"
  resolves = ["Build Gatsby"]
}

action "Install node_modules" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm install"
}

action "Build Gatsby" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["Install node_modules"]
  runs = "npm run build"
}
