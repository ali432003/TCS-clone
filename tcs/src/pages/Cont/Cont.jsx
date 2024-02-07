import { useState } from 'react'
import Nav from "../../components/Nav"
import Footer from '../../components/Footer'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import Ques from '../../components/Ques';



const Cont = () => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [isFocused, setIsFocused] = useState(true);
  return (
    <>
      <Nav />
      <div>
        <img src="/img/contact-us.jpg" className='w-[100%]' alt="" />
      </div>
      <div >
        <div className='bg-[#efefef] text-md text-center'>
          <p className='py-10 text-lg  mx-auto max-w-[50rem]'>
            As an organisation that directly interacts with its customers on a daily basis, we believe in finding ways to constantly improve our services by understanding your needs better. Our call centre, highly motivated social media teams and WhatsApp response systems are all ears. Please do not hesitate to contact us with your queries, input, or feedback.
          </p>
        </div>
        <div className=' gap-x-[4rem] mx-auto max-w-[50rem] mt-10 flex justify-between'>
          <div className='bg-[#fbfbfb] flex flex-col text-center items-center gap-y-1 p-10'>
            <img src="/img/whatsappGreen.png" className='w-[5rem] rounded-full mt-2' alt="" />
            <h1 className='text-2xl font-bold'>Chat with us on WhatsApp</h1>
            <a href="https://wa.me/9221111123456" className='text-red-600'>+92 21 111 123 456</a>
          </div>
          <div className='bg-[#fbfbfb] flex flex-col text-center items-center gap-y-1 p-10'>
            <img src="/img/socialMix.png" className='w-[5rem] rounded-full mt-2' alt="" />
            <h1 className='text-2xl font-bold'>Social Media Links</h1>
            <div className='flex  gap-x-10 mt-5'>
              <img src="/img/whatsapp.svg" className='social_w w-[1rem] cursor-pointer' alt="" />
              <img src="/img/youtube.svg" className='social_y w-[1rem]' alt="" />
              <img src="/img/twitter.svg" className='social_l w-[1rem]' alt="" />
              <img src="/img/instagram.svg" className='social_i w-[1rem]' alt="" />
              <img src="/img/fb.svg" className='social_f cursor-pointer w-[1rem]' alt="" />
            </div>

          </div>
        </div>

        <div className='mx-auto max-w-[50rem] flex flex-col gap-y-[5rem] mt-[5rem]'>
          <h1 className='text-center text-4xl font-bold'>Contact Us Form</h1>
          <div className='flex flex-col gap-y-[1rem]'>
            <div className='flex flex-row gap-x-[2rem]'>
              <TextField
                fullWidth
                id="outlined-error"
                label="Your Name*"
                variant="outlined"
                defaultValue=""
                error={isFocused}
                helperText={isFocused ? 'This Field is required' : ''}
                onChange={() => setIsFocused(false)}
                onBlur={() => { setIsFocused(true) }}
              />
              <TextField
                fullWidth

                id="outlined-error"
                label="Your Email*"
                variant="outlined"
                defaultValue=""
                error={isFocused}
                helperText={isFocused ? 'This Field is required' : ''}
                onChange={() => setIsFocused(false)}
                onBlur={() => { setIsFocused(true) }}
              />
            </div>
            <div className='flex flex-row gap-x-[2rem]'>
              <TextField
                fullWidth

                id="outlined-error"
                label="Consignment#*"
                variant="outlined"
                defaultValue=""
                error={isFocused}
                helperText={isFocused ? 'This Field is required' : ''}
                onChange={() => setIsFocused(false)}
                onBlur={() => { setIsFocused(true) }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}><DatePicker renderInput={(params) => <TextField {...params} size="small" />} className='w-[50rem]' label="Basic date picker" /></LocalizationProvider>
            </div>
            <div className='flex flex-row gap-x-[2rem]'>
              <TextField
                fullWidth
                id="outlined-error"
                label="Your contact number*"
                variant="outlined"
                defaultValue=""

              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  error={isFocused}
                  onBlur={() => setIsFocused(true)}
                  onChange={(event) => {
                    setIsFocused(false);
                    handleChange(event);
                  }}
                >
                  <MenuItem value={9}>Please select</MenuItem>
                  <MenuItem value={10}>Complaint</MenuItem>
                  <MenuItem value={20}>Track</MenuItem>
                  <MenuItem value={30}>Request & General Feedback</MenuItem>
                </Select>
                <FormHelperText>{isFocused ? 'This field is required' : ''}</FormHelperText>
              </FormControl>
            </div>
            <div className='flex flex-row gap-x-[2rem]'>
              <TextField
                fullWidth

                id="outlined-error"
                label="Attachment*"
                variant="outlined"
                defaultValue=""

              />
            </div>
            <div className='flex flex-row gap-x-[2rem]'>
              <TextField
                fullWidth
                multiline
                rows={6}
                id="outlined-error"
                label="Your Message*"
                variant="outlined"
                defaultValue=""

              />
            </div>
            <div className="reCAPTHA"></div>
            <div className='bg-red-600 text-center text-white rounded hover:bg-red-700 cursor-pointer'>
              <button className='py-2 '>Submit</button>
            </div>
          </div>
        </div>
        <div className='bg-[#efefef] mt-10'>
          <div className='mx-auto max-w-[50rem]'>
            <h1 className='text-3xl font-bold text-center py-[5rem]'>Frequently Asked Questions</h1>
          </div>
        </div>
        <Ques/>
      </div>
      <Footer />
    </>
  )
}

export default Cont