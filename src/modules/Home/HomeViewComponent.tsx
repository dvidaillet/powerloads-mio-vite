import { useTranslation } from "react-i18next";
import { Box, CardMedia, Typography } from "@mui/material";
import BoxSectionsInfo from "./components/BoxSectionsInfo/BoxSectionsInfo";
import AboutUsListItem from "./components/AboutUsListItem/AboutUsListItem";

const HomeViewComponent = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "500px",
          marginBottom: 1,
          marginTop: "-5px",
          position: "relative", // Necesario para el posicionamiento absoluto del texto
          overflow: "hidden", // Para evitar desbordamientos
        }}
      >
        {/* Imagen usando CardMedia */}
        <CardMedia
          component="img"
          image="../../../public/images/fondo_home_2.jpg"
          alt="icon"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Mantener proporciones sin distorsión
          }}
        />

        {/* Texto superpuesto con breakpoints */}
        <Box
          sx={{
            position: "absolute",
            padding: "20px",
            color: "white",
            textAlign: "left",
            width: {
              xs: "100%", // Ocupa el 100% del ancho en pantallas pequeñas
              md: "50%", // Ocupa el 50% en pantallas medianas y grandes
            },
            left: {
              xs: 0, // Sin margen en pantallas pequeñas
              md: "20%", // Margen del 5% en pantallas grandes
            },
            top: "50%", // Centrar verticalmente el texto
            transform: "translateY(-50%)", // Ajustar para centrar el texto verticalmente
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Regístrate y comienza a trabajar hoy.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "18px" }}>
            Encuentra cargas, localiza gasolineras y recibe pagos en 24 horas,
            todo mientras gestionas tus operaciones con facilidad.
          </Typography>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        maxWidth="1400px"
        justifyContent="space-between"
        alignContent="center"
        mx="auto"
        my={10}
        gap={2}
      >
        <BoxSectionsInfo
          imgName="cargadores.svg"
          title="Para cargadores"
          subtitle="Encuentra a alguien que lleve tu carga al mejor precio."
        />
        <BoxSectionsInfo
          imgName="transportistas.svg"
          title="Para Transportistas"
          subtitle="Busca la mejor oferta de carga y comienza el viaje con nosotros."
        />
        <BoxSectionsInfo
          imgName="colaboradores.svg"
          title="Para colaboradores"
          subtitle="Siempre estarás a tiempo para unirte a nosotros y promocionar tu
            negocio."
        />
      </Box>
      <Box sx={{ backgroundColor: "#606062" }}>
        <Box maxWidth="1400px" mx="auto" paddingTop={8} paddingBottom={8}>
          <Typography
            textAlign="center"
            color="white"
            fontSize={36}
            variant="h3"
          >
            Mueve tus cargas de manera simple y segura con Powerload
          </Typography>
          <Box border="1px solid white" padding={4} marginTop={5}>
            <ul>
              <AboutUsListItem text="Obtén cotizaciones instantáneas en 3 pasos y realiza envíos al día siguiente." />
              <AboutUsListItem text="Localiza cargas, gasolineras y servicios en un radio de hasta 200 km con nuestro sistema GPS." />
              <AboutUsListItem text="Disfruta de soporte y monitoreo 24/7 para una experiencia sin preocupaciones." />
              <AboutUsListItem text="Crea una cuenta gratuita y optimiza tus envíos con nuestra tecnología avanzada en toda Europa." />
            </ul>
          </Box>
          <Typography
            textAlign="center"
            color="white"
            fontSize={28}
            marginTop={5}
          >
            {t("Aprovecha las ventajas y ahorros para Transportista")}
          </Typography>
          <Typography textAlign="center" color="white" fontSize={28}>
            {t("¡Comienza hoy y transforma la forma como haces tus envíos!")}
          </Typography>
        </Box>
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
