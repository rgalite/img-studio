import theme from 'app/theme'
const palette = theme.palette

export const CustomizedAccordion = {
  maxHeight: '430px',
  overflowY: 'scroll',
  bgcolor: 'transparent',
  boxShadow: 0,
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    borderRadius: 1,
    border: 1,
    borderWidth: 1,
    borderColor: palette.secondary.light,
    minHeight: 0,
    margin: 0,
    '&:hover': {
      borderColor: palette.secondary.main,
    },
  },
}

export const CustomizedAccordionSummary = {
  backgroundColor: palette.background.paper,
  color: 'white',
  '&.Mui-expanded': {
    backgroundColor: 'white',
    color: palette.primary.main,
  },
}