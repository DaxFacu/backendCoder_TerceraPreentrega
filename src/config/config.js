import dotenv from "dotenv";

export const entorno = { mode: process.argv[2] };
if ((process.argv[2] != "DEV" && process.argv[2] != "DEV") || process) {
  console.log("no esta bien el argumento, (dev or prod)");
  process.exit;
}
dotenv.config({
  path:
    process.argv[2].mode === "DEV" ? "./env.development" : "./.env.production",
});

entorno.PORT = process.env.PORT;
entorno.MONGO_URL = process.env.MONGO_URL;
entorno.ADMIN_NAME = process.env.ADMIN_NAME;
entorno.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
