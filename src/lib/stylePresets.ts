/*

Light theme

*/

export const lightTheme = {
  overall: {
    textColorPrimary: 'text-gray-900',
    textColorSecondary: 'text-gray-600',
    textColorLight: 'text-gray-50',
    textColorCompanyColor: 'text-[#0156CA]', // dəyişdi
    backgroundColor: 'bg-gray-50',
    diverderColor: '#c2c2c2',
  },

  contactForm: {
    textColor: 'text-gray-800',
    backgroundColor: 'bg-gray-50',
    borderColor: 'border-gray-300',
  },

  header: {
    backgroundColor: 'bg-gray-50',
  },

  navigation: {
    textSize: 'text-lg',
    backgroundColor: 'bg-gray-50',
    backgroundHover: 'hover:bg-[#0156CA]', // dəyişdi
    textColor: 'text-gray-800',
    textColorHover: 'hover:text-gray-50',
    underlineActiveColor: 'border-b-[#0156CA]', // dəyişdi
    underlineInActiveColor: 'border-b-gray-50',
    underlineHoverColor: 'hover:border-b-gray-400',
  },

  shopInfoCard: {
    backgroundColor: 'bg-gradient-radial',
    from: 'from-[#0156CA]', // dəyişdi
    via: 'via-[#0156CA]',   // dəyişdi
    to: 'to-[#0156CA]',     // dəyişdi
  },

  footer: {
    borderTopColor: 'border-[#0156CA]', // dəyişdi
    backgroundColor: 'bg-gray-50',
  },

  productCard: {
    titleColor: 'text-gray-50',
    headBackgroundColor: 'bg-[#0156CA]', // dəyişdi
    borderColor: 'border-[#EAE0D5]',
    imageBackgroundColor: 'bg-gray-50',
  },

  categoryCard: {
    borderColor: 'border border-gray-300',
    backgroundColorDark: 'bg-gradient-to-br from-gray-100 to-[#e8e8e8]',
    backgroundColorLight: 'bg-gradient-to-br from-gray-100 to-[#e8e8e8]',
    backgroundColorActive: 'bg-gray-200',
  },

  table: {
    headTextColor: 'text-gray-50',
    headBackgroundColor: 'bg-[#0156CA]', // dəyişdi
    headBorderColor: 'border-gray-400',
    unitsBorderColor: 'border-gray-400',
    unitsBackgroundColor: 'bg-gray-50',
    cellBackgroundEven: 'even:bg-[#ebebeb]',
    cellBackgroundOdd: 'odd:bg-gray-50',
    cellBorderColor: 'border-gray-400',
    highlightRow: 'hover:bg-gray-300',
  },

  notification: {
    textColor: 'text-[#0156CA]', // dəyişdi
    asteriskColor: 'text-[#0156CA]', // dəyişdi
    borderColor: 'border-[#c2c2c2]',
    iconColor: 'text-[#1e40af]',
  },

  button: {
    backgroundColor: 'bg-[#0156CA]', // dəyişdi
    backgroundHover: 'hover:bg-[#014bb2]', // dəyişdi
    textColor: 'text-gray-50',
  },

  confirmMessage: {
    textColor: 'text-[#166534]',
    backgroundColor: 'bg-[#dcfce7]',
    borderColor: 'border-green-300',
  },
};

/*

Dark theme

*/

export const darkTheme = {
  overall: {
    textColorPrimary: 'text-[#ffffff]',
    textColorSecondary: 'text-gray-400',
    textColorLight: 'text-[#ffffff]',
    textColorCompanyColor: 'text-[#0156CA]', // dəyişdi
    backgroundColor: 'bg-[#202020]',
    diverderColor: '#ffffff',
  },

  contactForm: {
    textColor: 'text-gray-800',
    backgroundColor: 'bg-[#ffffff]',
    borderColor: 'border-gray-50',
  },

  header: {
    backgroundColor: 'bg-[#2c2c2c]',
  },

  navigation: {
    textSize: 'text-lg',
    backgroundColor: 'bg-[#2c2c2c]',
    backgroundHover: 'hover:bg-gray-600',
    textColorHover: 'text-[#ffffff]',
    textColor: 'text-[#ffffff]',
    underlineActiveColor: 'border-b-[#0156CA]', // dəyişdi
    underlineInActiveColor: 'border-b-[#2c2c2c]',
    underlineHoverColor: 'hover:border-b-[#ffffff]',
  },

  shopInfoCard: {
    backgroundColor: 'bg-gradient-radial',
    from: 'from-[#3a3a3a]',
    via: 'via-[#333333]',
    to: 'to-[#2c2c2c]',
  },

  footer: {
    borderTopColor: 'border-[#0156CA]', // dəyişdi
    backgroundColor: 'bg-[#202020]',
  },

  productCard: {
    titleColor: 'text-gray-50',
    headBackgroundColor: 'bg-[#0156CA]', // dəyişdi
    borderColor: 'border-gray-700',
    imageBackgroundColor: 'bg-gray-50',
  },

  categoryCard: {
    borderColor: 'border border-[#202020]',
    backgroundColorDark: 'bg-gradient-to-br from-[#2c2c2c] to-[#2e2e2e]',
    backgroundColorLight: 'bg-gradient-to-br from-[#2c2c2c] to-[#2e2e2e]',
    backgroundColorActive: 'bg-gray-600',
  },

  table: {
    headTextColor: 'text-[#ffffff]',
    headBackgroundColor: 'bg-[#0156CA]', // dəyişdi
    headBorderColor: 'border-gray-700',
    unitsBorderColor: 'border-gray-700',
    unitsBackgroundColor: 'bg-[#202020]',
    cellBackgroundEven: 'even:bg-[#2c2c2c]',
    cellBackgroundOdd: 'odd:bg-[#252525]',
    cellBorderColor: 'border-gray-700',
    highlightRow: 'hover:bg-gray-600',
  },

  notification: {
    textColor: 'text-gray-500',
    asteriskColor: 'text-[#0156CA]', // dəyişdi
    borderColor: 'border-[#2c2c2c]',
    iconColor: 'text-[#1e40af]',
  },

  button: {
    backgroundColor: 'bg-[#0156CA]', // dəyişdi
    backgroundHover: 'hover:bg-[#014bb2]', // dəyişdi
    textColor: 'text-gray-50',
  },

  confirmMessage: {
    textColor: 'text-[#166534]',
    backgroundColor: 'bg-[#dcfce7]',
    borderColor: 'border-green-300',
  },
};
