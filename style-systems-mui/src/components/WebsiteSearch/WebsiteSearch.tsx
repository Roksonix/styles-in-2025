import React from 'react';
import {
  Autocomplete,
  TextField,
  Box,
  Typography,
  InputAdornment,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SearchItem, Website, WebsiteComparison } from './types';
import { mockData } from './mockData';

const StyledImg = styled('img')({
  width: 16,
  height: 16,
  objectFit: 'contain',
});

const IconWrapper = styled(Box)({
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  boxSizing: 'border-box',
  width: 32,
  height: 32,
  borderRadius: 6,
  background: '#fff',
  border: '1px solid #e6e9ec',
  boxShadow: '0 2px 4px #cacaca33',
  flexShrink: 0,
  marginRight: 8,
});

const isWebsite = (item: SearchItem): item is Website => {
  return 'domain' in item && !('websites' in item);
};

const isComparison = (item: SearchItem): item is WebsiteComparison => {
  return 'websites' in item;
};

interface WebsiteSearchProps {
  style?: React.CSSProperties;
}

const WebsiteSearch: React.FC<WebsiteSearchProps> = ({ style }) => {
  const options = mockData;

  const renderOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: SearchItem
  ) => {
    if (isWebsite(option)) {
      return (
        <li {...props}>
          <Box display="flex" alignItems="center">
            <IconWrapper>
              <StyledImg src={option.favicon} alt={option.domain} />
            </IconWrapper>
            <Typography>{option.domain}</Typography>
          </Box>
        </li>
      );
    }

    if (isComparison(option)) {
      const [first, second] = option.websites;
      const remainingCount = option.websites.length - 2;

      return (
        <li {...props}>
          <Box display="flex" alignItems="center">
            <IconWrapper>
              <StyledImg src={first.favicon} alt={first.domain} />
            </IconWrapper>
            <Typography>{first.domain}</Typography>
            <Typography sx={{ mx: 1 }}>vs.</Typography>
            <IconWrapper>
              <StyledImg src={second.favicon} alt={second.domain} />
            </IconWrapper>
            <Typography>{second.domain}</Typography>
            {remainingCount > 0 && (
              <Typography sx={{ ml: 1 }}>+{remainingCount}</Typography>
            )}
          </Box>
        </li>
      );
    }

    return null;
  };

  const getOptionLabel = (option: SearchItem) => {
    if (isWebsite(option)) {
      return option.domain;
    }
    if (isComparison(option)) {
      return option.websites.map(w => w.domain).join(' vs ');
    }
    return '';
  };

  const groupBy = (option: SearchItem) => {
    const category = options.find(cat => 
      cat.items.some(item => 
        JSON.stringify(item) === JSON.stringify(option)
      )
    );
    return category?.title || '';
  };

  return (
    <Autocomplete
      options={options.flatMap(category => category.items)}
      groupBy={groupBy}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      style={style}
      popupIcon={null}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          placeholder="Search for a website or a keyword"
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <>
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
                {params.InputProps.startAdornment}
              </>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              height: '40px',
              padding: '0 15px',
              boxShadow: 'rgba(14, 30, 62, 0.08) 0px 3px 6px',
              borderRadius: '3px',
              '& fieldset': {
                borderColor: 'rgb(230, 233, 236)',
              },
              '&:hover fieldset': {
                borderColor: 'rgb(230, 233, 236)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgb(230, 233, 236)',
                borderWidth: '1px',
              },
            }
          }}
        />
      )}
    />
  );
};

export default WebsiteSearch; 