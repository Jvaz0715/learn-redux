import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@material-ui/core/Box"

function ProductCard(props) {
   console.log(props.product)
   const {
      title,
      image,
      price,
      description
   } = props.product;

   return (
      <Box sx={6}>
         <Card sx={{ maxWidth: 400 }} style={{margin:"10px"}}>
            <CardMedia
               component="img"
               height="25%"
               image={image}
               alt={title}
            />
            <CardContent>
               <Typography gutterBottom variant="h5" component="div">
                  {title}
               </Typography>
               <Typography>
                  {`$${price}`}
               </Typography>
               <Typography variant="body2" color="text.secondary">
                  {description}
               </Typography>
            </CardContent>
            <CardActions>
               <Button 
                  size="medium" 
                  onClick={() => {
                  
                  }}
                  variant="contained"
                  style={{marginRight:"10px"}}
               >
                  ADD TO BAG
               </Button>
            </CardActions>
         </Card>
      </Box>
   )
};

export default ProductCard
