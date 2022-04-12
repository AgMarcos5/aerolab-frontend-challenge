import toast, {Toaster} from 'react-hot-toast'

export function toastSuccess(productName){
 return toast.success( (t) => (
      <span>
        Custom and <b>bold</b>
        <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
      </span>
    )
  );
}


export default function ToastComponent () {
    return (
        <Toaster 
            position='bottom-left'
        />
    )
}