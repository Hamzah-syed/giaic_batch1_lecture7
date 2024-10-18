"use client";
interface IProps {
    text:string
}

const Button = (props: IProps ) => {

const handleClick = () => {
    alert('Button clicked');
}

  return (
    <button 
    onClick={ handleClick }
    className="text-white bg-blue-500 px-4 py-2">
        { props.text }
    </button>
  );
};

export default Button;
