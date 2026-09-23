import { useMemo, useState } from 'react';
import {
  Add,
  Edit,
  RestartAlt,
  Search,
  Visibility,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

type CeremonyStatus =
  | 'Programada'
  | 'En preparación'
  | 'En curso'
  | 'Finalizada'
  | 'Cancelada';

interface Ceremony {
  id: string;
  name: string;
  date: string;
  campus: string;
  place: string;
  sessions: number;
  graduates: number;
  status: CeremonyStatus;
}

const ceremonyData: Ceremony[] = [
  {
    id: 'CER-001',
    name: 'Ceremonia de grado Ingeniería de Sistemas',
    date: '15/05/2025',
    campus: 'Campus Centro',
    place: 'Auditorio Principal',
    sessions: 2,
    graduates: 42,
    status: 'Programada',
  },
  {
    id: 'CER-002',
    name: 'Ceremonia de grado Psicología',
    date: '20/05/2025',
    campus: 'Campus Centro',
    place: 'Auditorio Principal',
    sessions: 1,
    graduates: 35,
    status: 'Programada',
  },
  {
    id: 'CER-003',
    name: 'Ceremonia de grado Administración',
    date: '28/05/2025',
    campus: 'Campus Santiago',
    place: 'Sala de Eventos',
    sessions: 2,
    graduates: 38,
    status: 'En preparación',
  },
  {
    id: 'CER-004',
    name: 'Ceremonia de grado Educación',
    date: '02/06/2025',
    campus: 'Campus Centro',
    place: 'Auditorio Principal',
    sessions: 1,
    graduates: 29,
    status: 'Programada',
  },
];

function statusSx(status: CeremonyStatus) {
  switch (status) {
    case 'Programada':
      return {
        backgroundColor: '#EAF7EF',
        color: '#177245',
        border: '1px solid #B9E5C8',
      };

    case 'En preparación':
      return {
        backgroundColor: '#FFF5E6',
        color: '#A45A00',
        border: '1px solid #F1D09B',
      };

    case 'En curso':
      return {
        backgroundColor: '#EAF1FB',
        color: '#1A4F85',
        border: '1px solid #C4D6EE',
      };

    case 'Finalizada':
      return {
        backgroundColor: '#F0F1F4',
        color: '#4B5563',
        border: '1px solid #D8DCE3',
      };

    case 'Cancelada':
      return {
        backgroundColor: '#FDECEF',
        color: '#B4233C',
        border: '1px solid #F3B7C2',
      };
  }
}

export default function Ceremonias() {
  const [search, setSearch] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const filteredCeremonies = useMemo(() => {
    const query = search.trim().toLowerCase();

    return ceremonyData.filter((ceremony) => {
      const matchesSearch =
        !query ||
        ceremony.name.toLowerCase().includes(query) ||
        ceremony.id.toLowerCase().includes(query) ||
        ceremony.place.toLowerCase().includes(query);

      const matchesDate = !date || ceremony.date === date;
      const matchesStatus = !status || ceremony.status === status;

      return matchesSearch && matchesDate && matchesStatus;
    });
  }, [search, date, status]);

  const clearFilters = () => {
    setSearch('');
    setDate('');
    setStatus('');
  };

  return (
    <Box
      sx={{
        minHeight: '100%',
        backgroundColor: '#F4F7FA',
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 3, md: 4 },
      }}
    >
      {/* ENCABEZADO */}
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
          justifyContent: 'space-between',
          alignItems: { xs: 'stretch', sm: 'flex-start' },
          gap: 2,
          mb: 1,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 27, md: 34 },
              lineHeight: 1.2,
              fontWeight: 700,
              color: '#18214D',
            }}
          >
            Ceremonias de grado
          </Typography>

          <Typography
            sx={{
              mt: 0.8,
              fontSize: 14,
              color: '#6B7280',
            }}
          >
            Eventos institucionales / Ceremonias de grado
          </Typography>
        </Box>

        <Button
          variant="contained"
          startIcon={<Add />}
          sx={{
            alignSelf: { xs: 'stretch', sm: 'auto' },
            minHeight: 44,
            px: 2.2,
            backgroundColor: '#E41E3F',
            fontWeight: 700,
            textTransform: 'none',
            borderRadius: 1.5,
            '&:hover': {
              backgroundColor: '#C91836',
            },
          }}
          onClick={() => {
            window.history.pushState(
              {},
              '',
              '/eventos/ceremonias/nueva'
            );

            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
        >
          Nueva ceremonia
        </Button>
      </Stack>

      <Typography
        sx={{
          color: '#5F6B7A',
          fontSize: 15,
          lineHeight: 1.6,
          maxWidth: 900,
          mb: 3,
        }}
      >
        Administra las ceremonias de grado, consulta su programación y
        realiza seguimiento a los eventos institucionales.
      </Typography>

      {/* FILTROS */}
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, md: 2.5 },
          mb: 3,
          border: '1px solid #E1E7EF',
          borderRadius: 2,
          backgroundColor: '#FFFFFF',
        }}
      >
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            gap: 2,
            alignItems: { xs: 'stretch', md: 'center' },
          }}
        >
          <TextField
            fullWidth
            size="small"
            label="Nombre de ceremonia"
            placeholder="Buscar ceremonia..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <Search
                    sx={{
                      color: '#8A94A6',
                      mr: 1,
                    }}
                    fontSize="small"
                  />
                ),
              },
            }}
          />

          <TextField
            fullWidth
            size="small"
            label="Fecha"
            type="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />

          <FormControl fullWidth size="small">
            <InputLabel>Estado</InputLabel>

            <Select
              label="Estado"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              <MenuItem value="">Todos</MenuItem>
              <MenuItem value="Programada">Programada</MenuItem>
              <MenuItem value="En preparación">
                En preparación
              </MenuItem>
              <MenuItem value="En curso">En curso</MenuItem>
              <MenuItem value="Finalizada">Finalizada</MenuItem>
              <MenuItem value="Cancelada">Cancelada</MenuItem>
            </Select>
          </FormControl>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            sx={{
              gap: 1,
              flexShrink: 0,
            }}
          >
            <Button
              variant="contained"
              startIcon={<Search />}
              sx={{
                minHeight: 40,
                backgroundColor: '#1A4F85',
                textTransform: 'none',
                fontWeight: 700,
                '&:hover': {
                  backgroundColor: '#143E6A',
                },
              }}
            >
              Buscar
            </Button>

            <Button
              variant="outlined"
              startIcon={<RestartAlt />}
              onClick={clearFilters}
              sx={{
                minHeight: 40,
                textTransform: 'none',
                fontWeight: 600,
                color: '#1A4F85',
                borderColor: '#B8C5D4',
              }}
            >
              Limpiar filtros
            </Button>
          </Stack>
        </Stack>
      </Paper>

      {/* TABLA */}
      <Paper
        elevation={0}
        sx={{
          border: '1px solid #E1E7EF',
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
        }}
      >
        <Box sx={{ overflowX: 'auto' }}>
          <Box sx={{ minWidth: 980 }}>
            {/* CABECERA TABLA */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns:
                  '2.2fr 1fr 1.2fr 0.8fr 0.9fr 1fr 0.9fr',
                backgroundColor: '#F7F9FC',
                borderBottom: '1px solid #E1E7EF',
              }}
            >
              {[
                'Ceremonia',
                'Fecha',
                'Lugar',
                'Sesiones',
                'Graduandos',
                'Estado',
                'Acciones',
              ].map((header) => (
                <Box
                  key={header}
                  sx={{
                    px: 2,
                    py: 1.7,
                    fontSize: 12,
                    fontWeight: 800,
                    color: '#18214D',
                    textTransform: 'uppercase',
                    letterSpacing: 0.3,
                    borderRight: '1px solid #E8EDF2',
                  }}
                >
                  {header}
                </Box>
              ))}
            </Box>

            {/* FILAS */}
            {filteredCeremonies.map((ceremony) => (
              <Box
                key={ceremony.id}
                sx={{
                  display: 'grid',
                  gridTemplateColumns:
                    '2.2fr 1fr 1.2fr 0.8fr 0.9fr 1fr 0.9fr',
                  minHeight: 74,
                  borderBottom: '1px solid #E8EDF2',
                  '&:hover': {
                    backgroundColor: '#FAFBFD',
                  },
                }}
              >
                {/* CEREMONIA */}
                <Box sx={{ px: 2, py: 1.7 }}>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: '#18214D',
                    }}
                  >
                    {ceremony.name}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 0.35,
                      fontSize: 12,
                      color: '#7A8494',
                    }}
                  >
                    {ceremony.id} · {ceremony.campus}
                  </Typography>
                </Box>

                {/* FECHA */}
                <Box
                  sx={{
                    px: 2,
                    py: 1.7,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 13,
                    color: '#4B5563',
                  }}
                >
                  {ceremony.date}
                </Box>

                {/* LUGAR */}
                <Box
                  sx={{
                    px: 2,
                    py: 1.7,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 13,
                    color: '#4B5563',
                  }}
                >
                  {ceremony.place}
                </Box>

                {/* SESIONES */}
                <Box
                  sx={{
                    px: 2,
                    py: 1.7,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 13,
                    color: '#4B5563',
                  }}
                >
                  {ceremony.sessions}
                </Box>

                {/* GRADUANDOS */}
                <Box
                  sx={{
                    px: 2,
                    py: 1.7,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 13,
                    fontWeight: 700,
                    color: '#18214D',
                  }}
                >
                  {ceremony.graduates}
                </Box>

                {/* ESTADO */}
                <Box
                  sx={{
                    px: 2,
                    py: 1.7,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Chip
                    label={ceremony.status}
                    size="small"
                    sx={{
                      ...statusSx(ceremony.status),
                      fontWeight: 700,
                      borderRadius: 1,
                    }}
                  />
                </Box>

                {/* ACCIONES */}
                <Stack
                  direction="row"
                  sx={{
                    px: 1.5,
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  <Button
                    size="small"
                    startIcon={<Visibility />}
                    sx={{
                      minWidth: 0,
                      textTransform: 'none',
                      color: '#1A4F85',
                      fontWeight: 700,
                    }}
                  >
                    Ver
                  </Button>

                  <Button
                    size="small"
                    startIcon={<Edit />}
                    sx={{
                      minWidth: 0,
                      textTransform: 'none',
                      color: '#5F6B7A',
                    }}
                  >
                    Editar
                  </Button>
                </Stack>
              </Box>
            ))}

            {/* SIN RESULTADOS */}
            {filteredCeremonies.length === 0 && (
              <Box
                sx={{
                  py: 7,
                  textAlign: 'center',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: '#18214D',
                  }}
                >
                  No encontramos ceremonias
                </Typography>

                <Typography
                  sx={{
                    mt: 0.5,
                    color: '#6B7280',
                    fontSize: 14,
                  }}
                >
                  Intenta cambiar los filtros de búsqueda.
                </Typography>
              </Box>
            )}
          </Box>
        </Box>

        {/* PIE DE TABLA */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', sm: 'center' },
            gap: 1.5,
            px: 2,
            py: 1.8,
            borderTop: '1px solid #E8EDF2',
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              color: '#6B7280',
            }}
          >
            Mostrando 1 - {filteredCeremonies.length} de{' '}
            {filteredCeremonies.length}
          </Typography>

          <Stack
            direction="row"
            sx={{
              gap: 0.5,
              justifyContent: 'flex-end',
            }}
          >
            <Button
              size="small"
              variant="contained"
              sx={{
                minWidth: 34,
                minHeight: 34,
                backgroundColor: '#1A4F85',
                fontWeight: 700,
              }}
            >
              1
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}