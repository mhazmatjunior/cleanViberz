#!/bin/bash

echo "🌟 Clean Vibez VIP - Template Engine Setup"
echo "=========================================="
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
  echo "✅ Dependencies installed"
  echo ""
fi

echo "🚀 Starting development server..."
echo "📍 Open browser: http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev
