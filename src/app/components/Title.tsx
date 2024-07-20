interface TitleProps{
    title: string, 
    className?: string;
}


function Title({title, className ='font-medium text-lg m-3 mt-4 border-amber-500 border-l-8 p-2'}: TitleProps){
    return(
        <h2 className={className}>
            {title}
        </h2>
    );
}

export default Title;

//!className="font-medium text-lg m-3 border-amber-500 border-l-8 p-2 mt-4"
