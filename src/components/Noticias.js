import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const Noticias = () => {
  const { noticias } = useNoticias();
  return (
    <>
      <Typography align="center" marginY={5} component="h1" variant="h3">
        Listado Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia noticia={noticia} key={noticia.publishedAt} />
        ))}
      </Grid>
      <Stack
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ marginY: 6 }}
      >
        <Pagination count={10} color="primary" />
      </Stack>
    </>
  );
};

export default Noticias;
