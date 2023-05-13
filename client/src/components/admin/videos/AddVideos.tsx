import { Box, Button, TextField, Typography} from '@mui/material'
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface IFormInput {
    title: string;
    url : string
  }

function AddVideo() {
    const { control, handleSubmit  , formState: { errors },register} = useForm({
        defaultValues: {
            title:  "",
            url: ""
        }
      });

    
      const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
      };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{marginBottom:"20px"}}>
          <Controller
          control={control}
          {...register("title", { required: true })} 
          render={({ field }) => <TextField {...field} id="outlined-basic" label="عنوان الفيديو" color='secondary' 
          variant="outlined" fullWidth sx={{maxWidth:"600px"}} autoComplete='off'/>
          }
          />
          {errors.title && <Typography variant='h6' color="error" sx={{fontSize:"12px", marginTop:"12px"}}>هذا الحقل مطلوب</Typography>}
        </Box>
        <Box sx={{marginBottom:"20px"}}>
          <Controller
          control={control}
          {...register("url", { required: true })} 
          render={({ field }) => <TextField {...field} id="outlined-basic" label="رابط الفيديو" color='secondary' 
          variant="outlined" fullWidth sx={{maxWidth:"600px"}} autoComplete='off'/>
          }
          />
          {errors.url && <Typography variant='h6' color="error" sx={{fontSize:"12px", marginTop:"12px"}}>هذا الحقل مطلوب</Typography>}
        </Box>
        <Button variant='contained' sx={{marginTop:"20px" , width:"100px" , display:"block"}} type="submit" color='secondary'>حفظ</Button>
    </form>
  )
}

export default AddVideo