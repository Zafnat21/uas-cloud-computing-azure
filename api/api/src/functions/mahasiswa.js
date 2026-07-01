const { app } = require("@azure/functions");

app.http("mahasiswa", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async () => {
    return {
      jsonBody: [
        {
          nim: "2023001",
          nama: "Zafnat Paaneah Matusal",
          prodi: "Teknik Informatika",
          status: "Aktif"
        },
        {
          nim: "2023002",
          nama: "Alvey Reza Pahlevi",
          prodi: "Sistem Informasi",
          status: "Aktif"
        }
      ]
    };
  }
});
