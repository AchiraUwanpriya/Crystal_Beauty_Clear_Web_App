export default function Header(){
    return(
        <header className="w-full h-[100px] bg-accent text-white">
            <div className="w-full h-full flex">
                <img src="/logo.png" className="h-full w-[200px] px-[40px] object-cover" alt="Logo"/>
                <div className="h-full flex items-center justify-center w-full gap-[20px] text-lg">
                    <a href="/">Home</a>
                     <a href="/products">Products</a>
                      <a href="/about">About</a>
                       <a href="/contact">Contact</a>
                </div>
            </div>
        </header>
            
    )
}