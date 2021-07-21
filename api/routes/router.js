import express from "express";

const router = express.Router();

const videos = [
  {
    id: 1,
    titulo: "De volta para o futuro",
    descricao: "Os caras são brabos, voltaram para o passado.",
    url: "https://www.youtube.com/watch?v=DYFBYfzA90E",
  },
  {
    id: 2,
    titulo: "O máscara!",
    descricao: "O carinha verde mais insano do mundo!",
    url: "https://www.youtube.com/watch?v=_wjsHQpRfss",
  },
];

router.get("/videos", (req, res) => {
  const registros = videos.map((novo) => {
    return { titulo: novo.titulo, descricao: novo.descricao, url: novo.url };
  });

  if (registros.length > 0) res.send(registros);
  else res.send("Não há registros.");
});

router.get("/videos/:id", (req, res) => {
  const registros = videos.filter((novo) => {
    return novo.id == req.params.id;
  });

  if (registros.length > 0) res.send(registros);
  else res.send("Não foi encontrado o registro.");
});

// exclusão do registro
router.delete("/videos/:id", (req, res) => {
  
  let indice = videos.findIndex((result) => {
    return result.id === req.params.id;
  });

  console.log(indice);

  if (indice !== -1) {
    // videos.splice(indice,1);
    res.send("indice1");
  } else res.send("indice");
});

router.patch("/videos", (req, res) => {
  const requisicao = req.body;

  const registros = videos.filter((novo) => {
    return novo.id == requisicao.id;
  });

  res.send(requisicao);
});

export default router;
