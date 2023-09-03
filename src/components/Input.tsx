import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface InputType {
    name:string,
    placeholder: string
}

const Input = forwardRef((props: InputType, ref) => {
  return (
    <div>
      < TextField
            variant='outlined'
            margin='normal'
            inputRef={ref}
            fullWidth
            type='text'
            {...props} // 'spread operator'
      >  
      </TextField>
    </div>
  )
});

export default Input
