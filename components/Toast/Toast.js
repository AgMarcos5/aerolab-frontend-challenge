import toast, {Toaster} from 'react-hot-toast'
import Image from 'next/image'
import colors from '../../styles/colors';


export function toastPointsSuccess(){
  return toast.success( (t) => (
       <span className='toast_content'>
         <span> Points updated</span> 
         <button onClick={() => toast.dismiss(t.id)}><Image src="/icons/cross-default.svg" alt="close" width={24}  height={24} /></button>
       </span>
     )
   );
 }

export function toastSuccess(productName){
 return toast.success( (t) => (
      <span className='toast_content'>
        <span> <span className='name'>{productName}</span> redeemed successfully</span> 
        <button onClick={() => toast.dismiss(t.id)}><Image src="/icons/cross-default.svg" alt="close" width={24}  height={24} /></button>
      </span>
    )
  );
}

export function toastError(){
  return toast.error( (t) => (
       <span className='toast_content'>
         <span> There was a problem with the transaction </span> 
         <button onClick={() => toast.dismiss(t.id)}><Image src="/icons/cross-default.svg" alt="close" width={24}  height={24} /></button>
       </span>
     )
   );
 }


export default function ToastComponent () {
    return (
      <>
      <Toaster
        position="bottom-left"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: 'toast',
          duration: 3000,
          style: {
            width: '532px',
            maxWidth: '532px',
            background: 'white',
            boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
            fontWeight: '600',
            fontSize: '18px',
            color: `${colors.neutrals.c600}`,
          },
          // SUCCESS
          success: {
            icon : (<span className='icon'><Image src="/icons/system-success.svg" width={32} height={32}/></span>),
            style: {
              border: '2px solid #29CC74',
            }
          },
          // ERROR
          error: {
            icon : (<span className='icon'><Image src="/icons/system-error.svg" width={32} height={32}/></span>),
            style: {
              border: '2px solid #E07F4F',
            }
          },
        }}
      />
      <style jsx global>
      {`
        .toast_content{
          display: flex;
          align-items: center;
          width: 100%;
          justify-content: space-between;
        }

        .toast .name{
          color: ${colors.neutrals.c900};
        }

        .toast button{
          border: 0;
          background: none;
          cursor:pointer;
        }

        .toast .icon{
          width:26px;
          height:26px;
        }

        @media(max-width:400px){
          .toast{
            font-size:16px;
          }
          .toast .icon{
            width:26px;
            height:26px;
          }

        }
      
      `}
      </style>
      </>
      
    )
}