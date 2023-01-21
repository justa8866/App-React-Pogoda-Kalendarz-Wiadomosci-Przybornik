import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { Input, Wrapper } from './LanguageSelector.style';

export default function LanguageSelect() {
  const [t] = useTranslation();
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'pl');
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLang(event.target.value);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  }, [i18n, lang]);

  return (
    <Wrapper>
      <FormControl fullWidth>
        <Input id="simple-select-label">{t('common.textLang')}</Input>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          label={t('common.textLang')}
          value={lang}
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
