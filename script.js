async function showInfo() {
  const status = document.getElementById("status")

  try {
    const response = await fetch("/api/status")
    const data = await response.json()

    status.textContent = `${data.status} - ${data.layanan} berjalan di ${data.platform}.`
  } catch (error) {
    status.textContent = "Sistem aktif. API belum berhasil dimuat."
  }
}

async function loadMahasiswa() {
  const tbody = document.getElementById("mahasiswa-body")

  try {
    const response = await fetch("/api/mahasiswa")
    const data = await response.json()

    tbody.innerHTML = ""

    data.forEach((mhs) => {
      const row = document.createElement("tr")

      row.innerHTML = `
        <td>${mhs.nim}</td>
        <td>${mhs.nama}</td>
        <td>${mhs.prodi}</td>
        <td>${mhs.status}</td>
      `

      tbody.appendChild(row)
    })
  } catch (error) {
    tbody.innerHTML = `
      <tr>
        <td colspan="4">Data mahasiswa belum berhasil dimuat dari API.</td>
      </tr>
    `
  }
}

async function loadMataKuliah() {
  const list = document.getElementById("matakuliah-list")

  try {
    const response = await fetch("/api/matakuliah")
    const data = await response.json()

    list.innerHTML = ""

    data.forEach((mk) => {
      const item = document.createElement("div")
      item.className = "card"

      item.innerHTML = `
        <h3>${mk.nama}</h3>
        <p>Kode: ${mk.kode}</p>
        <p>SKS: ${mk.sks}</p>
        <p>Semester: ${mk.semester}</p>
      `

      list.appendChild(item)
    })
  } catch (error) {
    list.innerHTML = `
      <div class="card">
        <p>Data mata kuliah belum berhasil dimuat dari API.</p>
      </div>
    `
  }
}

loadMahasiswa()
loadMataKuliah()
