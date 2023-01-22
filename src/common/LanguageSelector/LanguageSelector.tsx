import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { Input, Wrapper } from './LanguageSelector.style';

export default function LanguageSelect() {
  const { t, i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Wrapper>
      <FormControl fullWidth>
        <Input id="simple-select-label">{t('common.textLang')}</Input>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          label={t('common.textLang')}
          value={i18n.language}
          onChange={handleChange}
        >
          <MenuItem value="pl">PL</MenuItem>
          <MenuItem value="en">EN</MenuItem>
          <MenuItem value="de">DE</MenuItem>
        </Select>
      </FormControl>
    </Wrapper>
  );
}
