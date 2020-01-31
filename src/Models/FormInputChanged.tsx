import React from 'react';

export default interface FormInputChanged {
  changed?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}