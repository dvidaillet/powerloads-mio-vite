import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import BoxSectionsInfo from "./components/BoxSectionsInfo/BoxSectionsInfo";

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
        my={10}
        gap={2}
      >
        <BoxSectionsInfo
          urlImg="../../../public/images/cargadores.svg"
          title="Para cargadores"
          subtitle="Encuentra a alguien que lleve tu carga al mejor precio."
        />
        <BoxSectionsInfo
          urlImg="../../../public/images/transportistas.svg"
          title="Para Transportistas"
          subtitle="Busca la mejor oferta de carga y comienza el viaje con nosotros."
        />
        <BoxSectionsInfo
          urlImg="../../../public/images/colaboradores.svg"
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
            fontSize={32}
            variant="h3"
          >
            Mueve tus cargas de manera simple y segura con Powerload
          </Typography>
          <Box border="1px solid white" padding={4} marginTop={5}>
            <ul>
              <li>
                <img
                  src={"../../../public/images/icons/item.svg"}
                  alt="icon"
                  style={{ width: "20px", height: "20px" }}
                />
                <Typography color="white" fontSize={18}>
                  Obtén cotizaciones instantáneas en 3 pasos y realiza envíos al
                  día siguiente.
                </Typography>
              </li>
              <li>
                <img
                  src={"../../../public/images/icons/item.svg"}
                  alt="icon"
                  style={{ width: "20px", height: "20px" }}
                />
                Localiza cargas, gasolineras y servicios en un radio de hasta
                200 km con nuestro sistema GPS.
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
