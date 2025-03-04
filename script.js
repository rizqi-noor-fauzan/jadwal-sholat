document.getElementById("input").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    fetchJadwalSholat();
  }
});

const fetchJadwalSholat = async () => {
  const inputUser = document.getElementById("input").value.trim();
  const resultDataWrapper = document.getElementById("result");
  let loader = document.querySelector(".loader");

  if (!inputUser) {
    alert("Masukkan nama kota!");
    return;
  }

  resultDataWrapper.innerHTML = "";

  loader.style.display = "block";

  try {
    setTimeout(async () => {
      const response = await fetch(
        `https://api.ryzendesu.vip/api/search/jadwal-sholat?kota=${inputUser}`
      );
      const responseData = await response.json();

      loader.style.display = "none";

      const dataResult = responseData.schedules;

      if (!dataResult || dataResult.length === 0) {
        resultDataWrapper.innerHTML = `<p class="text-center text-red-500">Jadwal tidak ditemukan</p>`;
        return;
      }

      // Format data yang ditampilkan
      const htmlResult = dataResult
        .map((data) => {
          return `
                  <div class="shadow-md rounded-lg bg-blue-100 p-4">
                      <h2 class="text-center text-xl font-semibold text-blue-700">
                        ${data.lokasi} - ${data.daerah}
                      </h2>
                      <h3 class="text-center text-md text-gray-600">${data.jadwal.tanggal}</h3>
        
                      <div class="mt-4 overflow-x-auto">
                        <table class="w-full text-center border-collapse">
                          <thead>
                            <tr class="bg-blue-600 text-white">
                              <th class="py-2 px-4 border">Subuh</th>
                              <th class="py-2 px-4 border">Dzuhur</th>
                              <th class="py-2 px-4 border">Ashar</th>
                              <th class="py-2 px-4 border">Maghrib</th>
                              <th class="py-2 px-4 border">Isya</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-white text-gray-800">
                              <td class="py-2 px-4 border">${data.jadwal.subuh}</td>
                              <td class="py-2 px-4 border">${data.jadwal.dzuhur}</td>
                              <td class="py-2 px-4 border">${data.jadwal.ashar}</td>
                              <td class="py-2 px-4 border">${data.jadwal.maghrib}</td>
                              <td class="py-2 px-4 border">${data.jadwal.isya}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  `;
        })
        .join("");

      resultDataWrapper.innerHTML = htmlResult;
    }, 1500);
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data:", error);
    resultDataWrapper.innerHTML = `<p class="text-center text-red-500">Gagal mengambil data. Coba lagi nanti.</p>`;

    loader.style.display = "none";
  }
};
