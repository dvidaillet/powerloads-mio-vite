import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";
import BoxSectionsInfo from "./components/BoxSectionsInfo/BoxSectionsInfo";
import AboutUsListItem from "./components/AboutUsListItem/AboutUsListItem";
import FirstBox from "./components/FirstBox/FirstBox";
import HowWorkBox from "./components/HowWorkBox/HowWorkBox";

const HomeViewComponent = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <FirstBox />
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
          title={t("Para cargadores")}
          subtitle="Encuentra a alguien que lleve tu carga al mejor precio."
        />
        <BoxSectionsInfo
          imgName="transportistas.svg"
          title={t("Para Transportistas")}
          subtitle="Busca la mejor oferta de carga y comienza el viaje con nosotros."
        />
        <BoxSectionsInfo
          imgName="colaboradores.svg"
          title={t("Para colaboradores")}
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
        <Typography
          mx="auto"
          variant="h4"
          fontWeight={600}
          color="grey"
          my={8}
          textAlign="center"
        >
          {t("¿Cómo funciona nuestra web?")}
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          maxWidth="1400px"
          mx="auto"
          justifyContent="space-between"
          alignContent="center"
        >
          <HowWorkBox
            imgName="como_funciona1.svg"
            text={t("Regístrate y obten acceso a la plataforma.")}
          />
          <HowWorkBox
            imgName="como_funciona2.svg"
            text={t(
              "Selecciona la ruta o transportista que se adapte a tus necesidades."
            )}
          />
          <HowWorkBox
            imgName="como_funciona3.svg"
            text={t("Transporta, envía o recibe tu mercancía a tiempo.")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeViewComponent;
