import { useTranslation } from "react-i18next";
import { Box, Button, CardMedia, Typography } from "@mui/material";
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
          gap={2}
          flexDirection={{ xs: "column", md: "row" }}
          maxWidth="1200px"
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
      <Box>
        <Typography
          textAlign="center"
          variant="h5"
          fontSize={36}
          fontWeight={600}
          color="grey"
          marginTop={8}
        >
          {t("Últimas cargas")}
        </Typography>
        <Typography
          textAlign="center"
          variant="body2"
          fontSize={28}
          color="grey"
          marginBottom={8}
        >
          {t("Aqui puedes encontrar un registro de las últimas cargas")}
        </Typography>
        <Box maxWidth="1200px" mx="auto">
          Tabla
        </Box>
      </Box>
      <Box sx={{ backgroundColor: "#C40F40" }} paddingTop={8}>
        <Typography
          textAlign="center"
          variant="h5"
          fontSize={42}
          fontWeight={300}
          color="white"
        >
          {t("Calculador de cotización")}
        </Typography>
        <Typography
          textAlign="center"
          variant="body2"
          fontSize={24}
          fontWeight={300}
          color="white"
          marginBottom={8}
        >
          {t("Calcule su cotización en tiempo real")}
        </Typography>
        <Box
          display="flex"
          gap={2}
          flexDirection={{ xs: "column", md: "row" }}
          maxWidth="1200px"
          mx="auto"
          justifyContent="space-between"
          alignContent="center"
        >
          <Box color="white">From</Box>
          <Box color="white">Mapa</Box>
        </Box>
      </Box>
      <Box marginTop={8}>
        <Typography
          mx="auto"
          textAlign="center"
          fontSize={38}
          color="grey"
          maxWidth={1000}
        >
          ¡Con Powerload disfruta de una plataforma completa para gestionar tu
          transporte!
        </Typography>
        <Typography
          textAlign="center"
          color="grey"
          fontSize={28}
          fontWeight={600}
          marginTop={5}
        >
          Nuestros servicios incluyen:
        </Typography>
        <Box>
          <Box>
            <Typography>Calculadora de rutas y precios</Typography>
            <Typography>
              Planifica tus viajes con nuestra herramienta fácil de usar
            </Typography>
            <Typography>Seguimiento en tiempo real Monitorea</Typography>
            <Typography>
              las rutas y tiempos de llegada de tu flota con nuestro sistema GPS
            </Typography>
            <Typography>Facturación automática</Typography>
            <Typography>
              Genera facturas y órdenes de carga automáticamente una vez aceptas
              el viaje
            </Typography>
          </Box>
          <Box>
            <Typography>Centro de ayuda y soporte</Typography>
            <Typography>
              Accede a asistencia y resolución de incidencias directamente desde
              la aplicación
            </Typography>
            <Typography>Pagos rápidos</Typography>
            <Typography>
              Recibe tus pagos en 48h una vez concluido el viaje
            </Typography>
            <Typography>Servicios adicionales</Typography>
            <Typography>
              Encuentra gasolineras, talleres y todo lo que necesitas
              directamente con nosotros
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ backgroundColor: "#4b4b4d" }}
        paddingTop={8}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={3}
      >
        <Typography
          textAlign="center"
          color="White"
          fontSize={32}
          fontWeight={300}
          maxWidth={1000}
          mx="auto"
          marginBottom={1}
        >
          Nuestra aplicación móvil permite el seguimiento en tiempo real de los
          viajes, optimizando la gestión y garantizando el control total y la
          eficiencia en cada etapa del proceso.
        </Typography>

        <Button
          variant="contained"
          color="success"
          size="large"
          sx={{ paddingX: 10, paddingY: "11px" }}
        >
          Descargar
        </Button>
        <CardMedia
          component="img"
          image="/public/images/appmobile.jpg"
          alt="icon"
          sx={{
            maxWidth: "1000px",
            maxHeight: "600px",
          }}
        />
      </Box>
      <Box paddingTop={8} maxWidth={900} mx="auto" paddingBottom={8}>
        <Typography
          textAlign="center"
          fontSize={36}
          fontWeight={300}
          color="grey"
        >
          {t("Contacta con nosotros")}
        </Typography>
        <Typography fontSize={18} fontWeight={600} color="black">
          {t("headerColumns.email")}:
          <Button variant="text">info@powerload.eu</Button>
        </Typography>
        <Box>Form</Box>
      </Box>
      <Box
        sx={{
          height: "350px",
        }}
      >
        <CardMedia
          image="/public/images/footer.jpg"
          component="img"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default HomeViewComponent;
