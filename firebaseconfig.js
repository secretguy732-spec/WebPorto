/* ============================================================
   firebaseconfig.js — Konfigurasi WebPorto
   ============================================================

   PENTING — baca ini dulu:
   File ini SELALU terlihat oleh siapa pun yang membuka website kamu
   (lewat "View Source" atau tab Network). Ini BUKAN kebocoran rahasia —
   seluruh config Firebase (apiKey, projectId, dst) memang didesain untuk
   publik dan ada di SEMUA aplikasi web Firebase, termasuk contoh resmi
   dari Google sendiri. apiKey di sini cuma penanda "ini project Firebase
   yang mana", bukan kata sandi.

   Keamanan WebPorto yang SESUNGGUHNYA datang dari:
   1. Firestore Rules (file firestore.rules) — aturan di server Google,
      menentukan siapa boleh baca/tulis apa. Ini yang WAJIB benar.
   2. Verifikasi email — akun baru harus verifikasi email dulu sebelum
      bisa membagikan website / berkomentar / chat (anti-spam).
   3. Escaping HTML yang benar di index.html — supaya nama pengguna atau
      komentar yang berisi kode tidak pernah dieksekusi sebagai script
      (celah XSS yang sempat ditemukan sudah diperbaiki per 2026-10-03).

   Mengganti/menyembunyikan isi file ini TIDAK menambah keamanan apa pun.
   ============================================================ */

// Email akun developer/owner. Akun yang daftar/login pakai email ini
// otomatis mendapat role "owner" (akses penuh).
const OWNER_EMAIL = "secretguy732@gmail.com";

// (Opsional) Site key Cloudflare Turnstile — widget "saya bukan robot"
// tambahan di form Daftar, mirip yang dipakai situs safelink.
// Kosongkan ("") untuk menonaktifkan — aplikasi tetap jalan normal
// dengan honeypot + jeda waktu anti-bot yang sudah bawaan.
// Cara dapat: daftar gratis di https://dash.cloudflare.com/?to=/:account/turnstile
// lalu tempel "Site Key" (BUKAN "Secret Key") di bawah ini.
const TURNSTILE_SITE_KEY = "";

// Config project Firebase kamu (Project Settings → General → Your apps → SDK setup).
const firebaseConfig = {
  apiKey: "AIzaSyBQCvEgWfnvOlkDF9Ey5ou5fLdDApcQvIE",
  authDomain: "webporto-0.firebaseapp.com",
  projectId: "webporto-0",
  storageBucket: "webporto-0.firebasestorage.app",
  messagingSenderId: "1093873006619",
  appId: "1:1093873006619:web:adee0861c1a6d179d0a0be",
  measurementId: "G-9SRY64LHHV"
};
