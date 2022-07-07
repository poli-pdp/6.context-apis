import { Grid, Link } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Noticia = ({ noticia }) => {
  const { urlToImage, description, url, title, source } = noticia;
  return (
    <Grid item md={6} xs={12} lg={4}>
      <Card>
        <CardMedia
          component="img"
          height="250"
          image={urlToImage}
          alt={`imagen ${title}`}
        />
        <CardContent>
          <Typography variant="body1" color="error">
            {source.name}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions>
          <Link
            href={url}
            target="_blank"
            variant="button"
            textAlign="center"
            width="100%"
            sx={{ textDecoration: "none" }}
          >
            Leer Mas...
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Noticia;
