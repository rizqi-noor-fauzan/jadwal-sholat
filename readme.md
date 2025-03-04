
---
# **🕌 Jadwal Sholat App**

📌 **Deskripsi**
Aplikasi ini menampilkan **jadwal sholat** berdasarkan kota yang dicari oleh pengguna. Data diperoleh dari API dan ditampilkan dengan tampilan yang responsif serta mudah digunakan.

🔹 **Fitur:**
1. ✅ Menampilkan jadwal sholat berdasarkan lokasi pengguna
2. ✅ Desain sederhana dan responsif
3. ✅ Menggunakan API untuk mendapatkan data jadwal sholat
4. ✅ Loader animasi sebelum data muncul
---

## **⚙️ Instalasi**

1️⃣ **Clone repository ini:**

```bash
git clone https://github.com/username/jadwal-sholat-app.git
cd jadwal-sholat-app
```

2️⃣ **Buka file `index.html` di browser**  
3️⃣ **Pastikan Anda menginstal ekstensi berikut di Chrome:**

- **Allow CORS:**  
  [Download di Chrome Web Store](https://chrome.google.com/webstore/detail/allow-cors-access-control/lfhmikememgdcahcdlaciloimgbfbnfm)

---

## **🚀 Cara Menggunakan**

1️⃣ Masukkan **nama kota** pada input pencarian  
2️⃣ Klik tombol **Cari** atau tekan **Enter**  
3️⃣ Tunggu **loader selesai**, jadwal sholat akan muncul

---

## **🔗 Referensi API**

Aplikasi ini menggunakan API dari **RyzenDesu** untuk mendapatkan jadwal sholat berdasarkan kota.

📌 **Endpoint API:**

```
https://api.ryzendesu.vip/api/search/jadwal-sholat?kota={nama_kota}
```

📌 **Contoh Response:**

```json
{
  "status": true,
  "message": "Success",
  "schedules": [
    {
      "lokasi": "Cirebon",
      "daerah": "Jawa Barat",
      "jadwal": {
        "tanggal": "02 Maret 2025",
        "subuh": "05:30",
        "dzuhur": "12:00",
        "ashar": "15:30",
        "maghrib": "18:00",
        "isya": "19:15"
      }
    }
  ]
}
```

📌 **Dokumentasi API:**  
🌐 [RyzenDesu API Docs](https://api.ryzendesu.vip/docs)

---

## **🛠 Teknologi yang Digunakan**

- **HTML, CSS, JavaScript**
- **Tailwind CSS**
- **Fetch API**

---
