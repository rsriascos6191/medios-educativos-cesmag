import {
  Box,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import {
  AddCircleOutlined,
  AppsOutlined,
} from '@mui/icons-material';

const CEDE_CENTRO_IMAGE =
  'https://www.figma.com/api/mcp/asset/8da56da5-db18-4ef0-86c0-c86f80e515cf/dcaba.png';

const tags = ['BIENESTAR', 'TECNOLOGÍA', 'EXCELENCIA'];

const aspectos = [
  {
    number: '01',
    icon: <AddCircleOutlined sx={{ color: '#E41E3F' }} />,
    accentColor: '#E41E3F',
    title: 'Misión y propósito',
    description:
      'Conectar recursos físicos y tecnológicos con la excelencia educativa y operativa.',
    linkLabel: 'Conocer más',
  },
  {
    number: '02',
    icon: <AppsOutlined sx={{ color: '#1A4F85' }} />,
    accentColor: '#1A4F85',
    title: 'Servicios',
    description:
      'Conoce los servicios y recursos disponibles para apoyar las actividades de la comunidad universitaria.',
    linkLabel: 'Ver servicios',
  },
  {
    number: '03',
    icon: <AddCircleOutlined sx={{ color: '#E41E3F' }} />,
    accentColor: '#E41E3F',
    title: 'Ubicación y atención',
    description: 'Información de campus y atención de Medios Educativos.',
    linkLabel: 'Ver horarios',
  },
];

function Informacion() {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', color: '#18214D', overflow: 'hidden' }}>
      {/* HERO */}
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#1A4F85',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, #1A4F85 0%, #1A4F85 55%, #101B3D 55%, #101B3D 100%)',
          }}
        />

        {/* decorative ascending bars */}
        <Box
          sx={{
            position: 'absolute',
            right: { xs: 24, md: 96 },
            top: 0,
            bottom: 0,
            display: { xs: 'none', md: 'flex' },
            alignItems: 'flex-end',
            gap: 3,
            pb: 6,
          }}
        >
          {[70, 46, 30, 16].map((height, index) => (
            <Box key={index} sx={{ position: 'relative', width: 1, height }}>
              <Box
                sx={{
                  width: 1,
                  height: '100%',
                  backgroundColor: 'rgba(255,255,255,0.25)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: -4,
                  left: -3,
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  backgroundColor: '#E41E3F',
                }}
              />
            </Box>
          ))}
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 640, py: { xs: 6, md: 7 } }}>
            <Box sx={{ width: 56, height: 3, backgroundColor: '#E41E3F', mb: 2 }} />

            <Typography
              sx={{
                color: '#FFFFFF',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: 1.1,
                mb: 1.5,
              }}
            >
              MEDIOS EDUCATIVOS
            </Typography>

            <Typography
              component="h1"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: 34, md: 44 },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Información
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: { xs: 15, md: 16 },
                lineHeight: 1.6,
              }}
            >
              Conoce el área de Medios Educativos, sus funciones y los recursos
              que pone a disposición de la comunidad universitaria.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* QUÉ ES MEDIOS EDUCATIVOS */}
      <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: 'center' }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: 'relative',
                  minHeight: { xs: 220, md: 300 },
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundImage: `url(${CEDE_CENTRO_IMAGE})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(0deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 45%)',
                  }}
                />
                <Typography
                  sx={{
                    position: 'absolute',
                    left: 16,
                    bottom: 14,
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: 0.5,
                  }}
                >
                  CEDE CENTRO
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  color: '#E41E3F',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: 1.1,
                  mb: 1.5,
                }}
              >
                MEDIOS EDUCATIVOS
              </Typography>

              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 26, md: 32 },
                  fontWeight: 700,
                  color: '#18214D',
                  mb: 2,
                }}
              >
                ¿Qué es Medios Educativos?
              </Typography>

              <Typography
                sx={{
                  color: '#5F6B7A',
                  fontSize: 15,
                  lineHeight: 1.7,
                  mb: 3,
                }}
              >
                En la Oficina de Medios Educativos, somos el puente que conecta
                los recursos físicos y tecnológicos con la excelencia educativa
                y operativa de la Universidad CESMAG.
              </Typography>

              <Box sx={{ width: 48, height: 3, backgroundColor: '#E41E3F', mb: 2 }} />

              <Typography
                sx={{
                  color: '#1A4F85',
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 0.8,
                }}
              >
                {tags.join(' · ')}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ASPECTOS CLAVE */}
      <Box component="section" sx={{ backgroundColor: '#F4F7FA', py: { xs: 6, md: 8 } }}>
        <Container maxWidth="xl">
          <Typography
            sx={{
              color: '#E41E3F',
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1.1,
              mb: 1,
            }}
          >
            INFORMACIÓN DE INTERÉS
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 26, md: 32 },
              fontWeight: 700,
              color: '#18214D',
              mb: 1,
            }}
          >
            Conoce los aspectos clave de Medios Educativos
          </Typography>

          <Typography sx={{ color: '#5F6B7A', mb: 4 }}>
            Una vista breve sobre nuestro propósito, servicios y atención.
          </Typography>

          <Grid container spacing={3}>
            {aspectos.map((aspecto) => (
              <Grid key={aspecto.number} size={{ xs: 12, md: 4 }}>
                <Box
                  sx={{
                    height: '100%',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 2,
                    borderTop: `3px solid ${aspecto.accentColor}`,
                    boxShadow: '0 1px 3px rgba(16,24,40,0.08)',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 32,
                        fontWeight: 700,
                        color: '#D9DEE5',
                        lineHeight: 1,
                      }}
                    >
                      {aspecto.number}
                    </Typography>
                    {aspecto.icon}
                  </Box>

                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: 700,
                      color: '#18214D',
                      mb: 1,
                    }}
                  >
                    {aspecto.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#5F6B7A',
                      fontSize: 14,
                      lineHeight: 1.6,
                      mb: 2,
                      flex: 1,
                    }}
                  >
                    {aspecto.description}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#E41E3F',
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {aspecto.linkLabel} →
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Informacion;
