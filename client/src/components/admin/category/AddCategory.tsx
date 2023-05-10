import { Button, TextField, Typography } from '@mui/material'
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface IFormInput {
    title: string;
  }

function AddCategory() {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { control, handleSubmit  , formState: { errors },register} = useForm({
        defaultValues: {
            title: '',
        }
      });
    
      const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
        control={control}
        {...register("title", { required: true })} 
        render={({ field }) => <TextField {...field} id="outlined-basic" label="إضافة قسم" color='secondary' 
        variant="outlined" fullWidth sx={{maxWidth:"600px"}} autoComplete='off'/>
        }
        />
        {errors.title && <Typography variant='h6' color="error" sx={{fontSize:"12px", marginTop:"12px"}}>هذا الحقل مطلوب</Typography>}
        <Button variant='contained' sx={{marginTop:"20px" , width:"100px" , display:"block"}} type="submit" color='secondary'>حفظ</Button>
    </form>
  )
}

export default AddCategory