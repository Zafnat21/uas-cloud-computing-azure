const { app } = require("@azure/functions");

app.http("matakuliah", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async () => {
    return {
      jsonBody: [
        {
          kode: "CC601",
          nama: "Cloud Computing",
          sks: 3,
          semester: 6
        },
        {
          kode: "RPL602",
          nama: "Rekayasa Perangkat Lunak",
          sks: 3,
          semester: 6
        },
        {
          kode: "AI603",
          nama: "Kecerdasan Buatan",
          sks: 3,
          semester: 6
        }
      ]
    };
  }
});
