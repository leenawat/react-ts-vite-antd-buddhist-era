// buddhistLocale.ts
import dayjs from 'dayjs';
import 'dayjs/locale/th';

import th from 'antd/es/date-picker/locale/th_TH';
import buddhistEra from 'dayjs/plugin/buddhistEra'

dayjs.extend(buddhistEra)
dayjs.locale('th')

const buddhistLocale: typeof th = {
  ...th,
  lang: {
    ...th.lang,
    fieldDateFormat: 'DD/MM/BBBB',
    fieldDateTimeFormat: 'DD/MM/BBBB HH:mm',
    yearFormat: 'BBBB',
    cellYearFormat: 'BBBB',
  },
};

export default buddhistLocale;