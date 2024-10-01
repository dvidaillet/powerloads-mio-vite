import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

const HomeViewComponent = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 1,
          marginTop: "-5px",
        }}
      >
        <img
          src={"../../../public/images/fondo_home_2.jpg"}
          alt="icon"
          style={{ width: "100%", height: "500px" }}
        />
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        maxWidth="1400px"
        justifyContent="space-between"
        alignContent="center"
        mx="auto"
      >
        <Box>
          <img
            src={"../../../public/images/cargadores.svg"}
            alt="icon"
            style={{ width: "150%", height: "250px" }}
          />
          <Typography>Para cargadores</Typography>
        </Box>
        <Box>
          <img
            src={"../../../public/images/transportistas.svg"}
            alt="icon"
            style={{ width: "250", height: "250px" }}
          />
          <Typography>Para cargadores</Typography>
        </Box>
        <Box>
          <img
            src={"../../../public/images/colaboradores.svg"}
            alt="icon"
            style={{ width: "250", height: "250px" }}
          />
          <Typography>Para cargadores</Typography>
        </Box>
      </Box>
      <Box maxWidth="1400px" mx="auto">
        <Typography alignItems="center">
          Mueve tus cargas de manera simple y segura con Powerload
        </Typography>
        <Box>
          <ul>
            <li>
              <img
                src={"../../../public/images/icons/item.svg"}
                alt="icon"
                style={{ width: "20px", height: "20px" }}
              />
              Obtén cotizaciones instantáneas en 3 pasos y realiza envíos al día
              siguiente.
            </li>
            <li>
              <img
                src={"../../../public/images/icons/item.svg"}
                alt="icon"
                style={{ width: "20px", height: "20px" }}
              />
              Localiza cargas, gasolineras y servicios en un radio de hasta 200
              km con nuestro sistema GPS.
            </li>
            <li>
              <img
                src={"../../../public/images/icons/item.svg"}
                alt="icon"
                style={{ width: "20px", height: "20px" }}
              />
              Disfruta de soporte y monitoreo 24/7 para una experiencia sin
              preocupaciones.
            </li>
            <li>
              <img
                src={"../../../public/images/icons/item.svg"}
                alt="icon"
                style={{ width: "20px", height: "20px" }}
              />
              Crea una cuenta gratuita y optimiza tus envíos con nuestra
              tecnología avanzada en toda Europa.
            </li>
          </ul>
        </Box>
      </Box>
      <Box maxWidth="1400px" mx="auto">
        <Typography>
          {t("Aprovecha las ventajas y ahorros para Transportista")}
        </Typography>
        <Typography>
          {t("¡Comienza hoy y transforma la forma como haces tus envíos!")}
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignContent="center"
        sx={{ backgroundColor: "white" }}
      >
        <Typography mx="auto" variant="h4" fontWeight={600} color="grey" my={3}>
          {t("¿Cómo funciona?")}
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          maxWidth="1400px"
          mx="auto"
          justifyContent="center"
          alignContent="center"
        >
          <Box>
            <img
              src={"../../../public/images/como_funciona1.svg"}
              alt="icon"
              style={{ width: "125px", height: "125px" }}
            />
            <Typography>
              {t("Regístrate y obten acceso a la plataforma.")}
            </Typography>
          </Box>
          <Box>
            <img
              src={"../../../public/images/como_funciona2.svg"}
              alt="icon"
              style={{ width: "125px", height: "125px" }}
            />
            <Typography>
              {t(
                "Selecciona la ruta o transportista que se adapte a tus necesidades."
              )}
            </Typography>
          </Box>
          <Box>
            <img
              src={"../../../public/images/como_funciona3.svg"}
              alt="icon"
              style={{ width: "125px", height: "125px" }}
            />
            <Typography>
              {t("Transporta, envía o recibe tu mercancía a tiempo.")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeViewComponent;
