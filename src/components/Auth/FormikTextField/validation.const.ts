import { IValidationSpecialRules } from './ValidationSpecialRules.types';

const validationSpecialRules: IValidationSpecialRules[] = [
  {
    name: 'age',
    min: 3,
    max: 130,
    countable: 'validation.years',
  },
  {
    name: 'password',
    min: 8,
    max: 30,
    countable: 'validation.characters',
  },
  {
    name: 'username',
    min: 3,
    max: 0,
    countable: 'validation.characters',
  },
];

export default validationSpecialRules;
