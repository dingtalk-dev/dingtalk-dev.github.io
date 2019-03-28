import React from 'react';
import * as moment from 'moment';
import 'moment/locale/zh-cn';

function FormattedDate({ dateString }) {
  return <span>{moment(dateString, 'YYYY-MM-DD').locale('zh-cn').format('LL')}</span>;
}

export default React.memo(FormattedDate);