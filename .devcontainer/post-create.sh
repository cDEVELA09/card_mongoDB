#!/usr/bin/env bash
set -e

echo "Installing root dependencies..."
npm install --no-audit --no-fund || true

if [ -d "server" ]; then
  echo "Installing server dependencies..."
  npm --prefix server install --no-audit --no-fund || true
fi

if [ -d "client" ]; then
  echo "Installing client dependencies..."
  npm --prefix client install --no-audit --no-fund || true
fi

echo "Setup complete. To start both dev servers run: npm run dev"
