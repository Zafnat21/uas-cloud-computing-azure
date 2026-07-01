const { app } = require("@azure/functions");

app.http("status", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async () => {
    return {
      jsonBody: {
        status: "Aktif",
        platform: "Microsoft Azure",
        layanan: "Azure Functions Serverless API",
        keterangan: "API status berhasil berjalan untuk prototype sistem akademik."
      }
    };
  }
});
