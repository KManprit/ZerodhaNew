#!/bin/bash
set -e

# Install backend dependencies
cd backend
npm install

# Install dashboard dependencies
cd ../dashboard
npm install

# Install frontend dependencies
cd ../frontend
npm install
