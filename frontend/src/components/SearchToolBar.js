import React from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
} from '@material-ui/core';

const Toolbar = () => {

  return (
    <div>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <TextField
                fullWidth
                placeholder="Search Artist"
                variant="outlined"
              />
              <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};



export default Toolbar;
