
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
https://github.com/rizqi-noor-fauzan/jadwal-sholat.git
cd jadwal-sholat-app
```

2️⃣ **Buka file `index.html` di browser**  
3️⃣ **Pastikan Anda menginstal ekstensi berikut di Chrome:**

- **Allow CORS:**  
  [Download di Chrome Web Store](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)

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
  "total": 2,
  "schedules": [
    {
      "lokasi": "KAB. CIREBON",
      "daerah": "JAWA BARAT",
      "jadwal": {
        "tanggal": "Selasa, 04/03/2025",
        "imsak": "04:26",
        "subuh": "04:36",
        "terbit": "05:48",
        "dhuha": "06:15",
        "dzuhur": "12:01",
        "ashar": "15:02",
        "maghrib": "18:07",
        "isya": "19:16",
        "date": "2025-03-04"
      }
    },
    {
      "lokasi": "KOTA CIREBON",
      "daerah": "JAWA BARAT",
      "jadwal": {
        "tanggal": "Selasa, 04/03/2025",
        "imsak": "04:26",
        "subuh": "04:36",
        "terbit": "05:48",
        "dhuha": "06:15",
        "dzuhur": "12:01",
        "ashar": "15:02",
        "maghrib": "18:07",
        "isya": "19:16",
        "date": "2025-03-04"
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
