#!/usr/bin/env node

// Build optimization script
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const distDir = join(rootDir, "dist");

console.log("🚀 Running build optimizations...");

// Ensure dist directory exists
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Create _headers file for Netlify
const headersContent = `/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.{png,jpg,jpeg,gif,svg,webp,ico}
  Cache-Control: public, max-age=2592000

/*.{js,css}
  Cache-Control: public, max-age=31536000, immutable
`;

// Write headers file
try {
  writeFileSync(join(distDir, "_headers"), headersContent.trim());
  console.log("✅ _headers file created successfully");
} catch (error) {
  console.error("❌ Failed to create _headers file:", error.message);
}

console.log("✅ Build optimizations completed!");
