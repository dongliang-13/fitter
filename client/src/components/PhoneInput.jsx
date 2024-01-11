import React from 'react';
import { IMaskInput } from 'react-imask';

const PhoneInput = React.forwardRef((props, ref) => (
    <IMaskInput
      {...props}
      mask="(#00) 000-0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
    />
));
  
export default PhoneInput;