import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Toolbar from './../../components/SearchToolBar';
import ProductCard from './ArtistCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
   
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ArtistList = () => {
  const classes = useStyles();
  const [products] = useState(data);

  return (
 
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
              <Grid
                item
                key={product.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ProductCard
                  className={classes.productCard}
                  product={product}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
  
  );
};

export default ArtistList;
