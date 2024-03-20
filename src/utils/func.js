const Func = {
  setDay(key) {
    switch (key) {
      case 'Sunday':
        return 'S';
      case 'Monday':
        return 'M';
      case 'Tuesday':
        return 'T';
      case 'Wednesday':
        return 'W';
      case 'Thursday':
        return 'T';
      case 'Friday':
        return 'F';
      case 'Saturday':
        return 'S';
      default:
        return '';
    }
  },
  days: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
};
export default Func;
