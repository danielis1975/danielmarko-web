#!/usr/bin/env bash
# Build the site and publish ./dist to the `gh-pages` branch on GitHub.
# GitHub Pages serves that branch at https://danielmarko.com.
# Usage: ./scripts/deploy.sh
set -euo pipefail

REPO_URL="https://github.com/danielis1975/danielmarko-web.git"
cd "$(dirname "$0")/.."

echo "▶ Building…"
npm run build

# Belt-and-suspenders: GitHub Pages runs Jekyll, which ignores _astro/ (underscore
# dirs) → CSS/JS/images 404. .nojekyll disables Jekyll. (Also in public/.)
: > dist/.nojekyll

echo "▶ Publishing dist/ → gh-pages…"
cd dist
git init -q
git checkout -q -b gh-pages
git add -A
git -c user.name="Daniel" -c user.email="daniel@danielmarko.com" \
    commit -q -m "Deploy $(git -C .. rev-parse --short HEAD 2>/dev/null || echo site)"
git push -q -f "$REPO_URL" gh-pages:gh-pages
cd ..
rm -rf dist/.git

echo "✓ Deployed. Live at https://danielmarko.com (after DNS) / gh-pages branch updated."
