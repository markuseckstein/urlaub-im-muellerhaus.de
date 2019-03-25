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

workflow "Deploy on Release" {
  on = "release"
  resolves = ["markuseckstein/github_actions/ftp-deploy@master"]
}

action "GitHub Action for npm" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  runs = "npm ci"
}

action "Build " {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["GitHub Action for npm"]
  runs = "npm run build"
}

action "markuseckstein/github_actions/ftp-deploy@master" {
  uses = "markuseckstein/github_actions/ftp-deploy@master"
  needs = ["Build "]
  secrets = ["LOCAL_DIR", "REMOTE_DIR", "FTP_SERVER", "FTP_USERNAME", "FTP_PASSWORD"]
}
