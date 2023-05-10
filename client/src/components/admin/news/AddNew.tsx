import { Box, Button, TextField, Typography } from '@mui/material'
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Editor from '../Editor';
import { useState } from 'react';

interface IFormInput {
    title: string;
  }

function AddNew() {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { control, handleSubmit  , formState: { errors },register} = useForm({
        defaultValues: {
            title: '',
        }
      });

      const [editorText , setEditorText]=useState('');
    
      const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
        console.log(editorText);
      };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
        control={control}
        {...register("title", { required: true })} 
        render={({ field }) => <TextField {...field} id="outlined-basic" label="عنوان الخبر" color='secondary' 
        variant="standard" fullWidth sx={{maxWidth:"600px"}} autoComplete='off'/>
        }
        />
        {errors.title && <Typography variant='h6' color="error" sx={{fontSize:"12px", marginTop:"12px"}}>هذا الحقل مطلوب</Typography>}
        <Box sx={{marginTop:"20px"}}>
            <Editor updatedText={"hello"} setEditorText={setEditorText}/>        
        </Box>
        <Button variant='contained' sx={{marginTop:"20px" , width:"100px" , display:"block"}} type="submit" color='secondary'>حفظ</Button>
    </form>
  )
}

export default AddNew