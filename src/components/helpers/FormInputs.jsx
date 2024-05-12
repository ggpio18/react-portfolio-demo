import { useField } from "formik"

export const InputText = ({label, ...props}) => {

    const [field, meta] = useField(props)

    return(
        <>
            <label htmlFor={props.id || props.name}
            className={meta.touched && meta.error ? "error-msg" : ""}
            >{label}</label>

             <input 
                {...field}
                {...props}
                className={meta.touched && meta.error ? "error-msg" : ""}
                autoComplete="off"
             />
             {meta.touched && meta.error ? (<small 
             className='error-msg'>{meta.error}</small>) : null}
        </>
    )
}

export const InputSelect = ({ label, onChange = null, ...props }) => {
    const [field, meta] = useField(props);
  
    return (
      <>
        <label
          htmlFor={props.id || props.name}
          className={meta.touched && meta.error ? "custom error-show" : "custom"}
        >
          {label}
        </label>
  
        <select
          {...field}
          {...props}
          className={meta.touched && meta.error ? "error-show" : null}
          onChange={(e) => {
            onChange !== null && onChange(e);
            field.onChange(e);
          }}
        />
  
        {meta.touched && meta.error ? (
          <span className="error-show">{meta.error}</span>
        ) : null}
      </>
    );
  };

  export const InputTextArea = ({
    label,
    onChange = null,
    className = "",
    ...props
  }) => {
    const [field, meta] = useField(props);
  
    return (
      <>
        <label
          htmlFor={props.id || props.name}
          className={meta.touched && meta.error ? "error-msg" : ""}
        >
          {label}
        </label>
        <textarea
          className={
            meta.touched && meta.error ? `error-msg ${className}` : className
          }
          {...field}
          {...props}
          autoComplete="off"
          onChange={(e) => {
            onChange !== null && onChange(e);
            field.onChange(e);
          }}
        ></textarea>
        {meta.touched && meta.error ? (
          <small className="error-msg">{meta.error}</small>
        ) : null}
      </>
    );
  };