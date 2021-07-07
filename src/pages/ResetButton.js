

export default function ResetButton({children, ...props}){
    return (
      <button
        type="reset"
        {...props}
      >
        {children}
      </button>
    );
}