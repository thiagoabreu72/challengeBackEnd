import mongoose from "mongoose";

mongoose.set("useFindAndModify", false);

// inserir no Mongo inserindo os videos
const videosSchema = mongoose.Schema({
  id: { type: Number, require: true },
  titulo: {
    type: String,
    min: 1,
    require: true,
  },
  descricao: {
    type: String,
    min: 10,
  },
  url: { type: String, require: true },
});

export const videosCollection = mongoose.model(
  "challenge",
  videosSchema,
  "challenge"
);
