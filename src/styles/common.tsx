// Path: src/styles/common.js

import colors from './colors';
import fonts from './fonts';

const commonStyles = {
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.background,
  },
  header: {
    fontSize: fonts.size.large,
    fontFamily: fonts.family.primary,
    fontWeight: fonts.weight.bold,
    color: colors.primary,
  },
  text: {
    fontSize: fonts.size.medium,
    fontFamily: fonts.family.secondary,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: fonts.size.medium,
    color: '#fff',
    textAlign: 'center',
  },
};

export default commonStyles;
