import { Box, Button, TextField, Typography , styled} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Editor from '../Editor';
import { useCallback, useMemo, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import {toast } from 'react-toastify';



const Image = styled("img")({
  width:"220px",
  height:"200px",
  objectFit:"cover",
  marginTop:"10px"
})

interface IFormInput {
    name: string;
    headline : string
  }

  const baseStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent:"center",
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };
  
  const focusedStyle = {
    borderColor: '#2196f3'
  };
  
  const acceptStyle = {
    borderColor: '#00e676'
  };
  
  const rejectStyle = {
    borderColor: '#ff1744'
  };


  type AddNewProps = {
    name?:string,
    headline?: string,
    isUpdate?: boolean
  }

function AddAuthor({name  , headline , isUpdate}:AddNewProps) {
    const { control, handleSubmit  , formState: { errors },register} = useForm({
        defaultValues: {
            name: name || "",
            headline: headline || ""
        }
      });

    
      const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
        toast(" الرجاء تحميل الصورة ",{position:"bottom-right", type:"error" , autoClose:1500})
      };

      const [file , setFile] = useState<File | null>(null);
      const onDrop = useCallback( (acceptedFiles:File[])=> {
        setFile(acceptedFiles[0]);
      }, [])

      const {
        getRootProps,
        getInputProps,
        isFocused,
        isDragAccept,
        isDragReject
      } = useDropzone({accept: {'image/png':[],'image/jpg':[],'image/webp':[],'image/jpeg':[]} , onDrop:onDrop});
  
      const style = useMemo(() => ({
        ...baseStyle,
        ...(isFocused ? focusedStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isFocused,
        isDragAccept,
        isDragReject
      ]);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{marginBottom:"20px"}}>
          <Controller
          control={control}
          {...register("name", { required: true })} 
          render={({ field }) => <TextField {...field} id="outlined-basic" label="إسم المؤلف" color='secondary' 
          variant="outlined" fullWidth sx={{maxWidth:"600px"}} autoComplete='off'/>
          }
          />
          {errors.name && <Typography variant='h6' color="error" sx={{fontSize:"12px", marginTop:"12px"}}>هذا الحقل مطلوب</Typography>}
        </Box>
        <Box sx={{marginBottom:"20px"}}>
            <Controller
              control={control}
              {...register("headline", { required: true })} 
              render={({ field }) => <TextField {...field} id="outlined-basic" label="وصف قصير" color='secondary' 
              variant="outlined" fullWidth sx={{maxWidth:"600px"}} autoComplete='off'/>
              }
            />
            {errors.headline && <Typography variant='h6' color="error" sx={{fontSize:"12px", marginTop:"12px"}}>هذا الحقل مطلوب</Typography>}
        </Box>
        <Box>
          <div {...getRootProps({style})}>
          <input {...getInputProps()} />
          <p>اسحب وأفلت بعض الملفات هنا ، أو انقر لتحديد الملفات</p>
          </div>
          {
            file && <Image src={URL.createObjectURL(file)}/>
          }
        </Box>
        {
          isUpdate
          ?
          <Button variant='contained' sx={{marginTop:"20px" , width:"140px" , display:"block"}} type="submit" color='secondary'>حفظ التعديل</Button>
          :
          <Button variant='contained' sx={{marginTop:"20px" , width:"100px" , display:"block"}} type="submit" color='secondary'>حفظ</Button>
        }
    </form>
  )
}

export default AddAuthor