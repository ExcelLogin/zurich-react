import { useNavigate, Link } from "react-router-dom";
import logo from '../assets/images.jpeg';
import bg2 from '../assets/bg2.jpeg';
import bg from '../assets/bg.jpg';
import woman from '../assets/woman.png';
import Hamburger from "./HomeComps/hamburger";





const Home = () => {
 const text = "SEAMLESS INFINITE SCROLL";

    return (
<section className="pb-32">
         <div className="text-xs text-center">Experience world-class banking services with Remedy Grand Chase Bank - Your trusted international bank</div>
         <div style={{  backgroundColor: "black" }} className="w-full bg-cover bg-no-repeat bg-center h-100 -z-10">
          <header className="bg-black border-b border-neutral-50 flex justify-between items-center py-1 px-2 z-10">
          <div><img src={logo}  className='w-16 h-10'  alt="logo" /></div>
            <Hamburger/>
          </header>
          <section className="flex flex-row justify-center gap-3 items-end h-screen text-white text-center px-4  overflow-hidden">
            <div className="w-1/3 h-full flex flex-col justify-center items-center space-y-4">
               <div>Welcome to Remedy Grand Chase Bank International Bank</div>
               <div><h1>Empowering your Day to Day Banking</h1></div>
               <div><p>Simple and secure personal banking available in person, online, or on your device.</p></div>
               <div className="border border-red-400"></div>
            </div>
            {/* <div className="w-1/4 h-5/6 border rounded-t-full border-zinc-50"> */}
             <div style={{ backgroundImage: `url(${woman})` }} className="w-1/4 h-5/6  rounded-t-full  bg-cover bg-no-repeat bg-center flex items-end justify-center">
                <div>jelaou</div>
             </div>
            {/* </div> */}
            <div className="w-1/3 h-full flex flex-col justify-center items-center space-y-4">
              <div><h1>13M</h1></div>
              <div><p>The first credit card ever issued was made of cardboard and was introduced by American Express in 1958.</p></div>
              <div><h1>0%</h1></div>
              <div><p>we believe that you should keep more of what you earn. <br/>That's why we're excited to offer a 0% commission.</p></div>
            </div>
          </section>
         </div>
      
      <section>      
          <div className="flex items-center justify-center h-10 overflow-hidden w-full">
              <div className="relative w-full overflow-hidden py-8 bg-slate-900">
                <div className="flex animate-scroll whitespace-nowrap">
                  <span className="text-sm font-bold text-slate-900 mx-8">{text}</span>
                  <span className="text-sm font-bold text-white mx-8">{text}</span>
                  <span className="text-sm font-bold text-white mx-8">{text}</span>
                  <span className="text-sm font-bold text-white mx-8">{text}</span>
                  <span className="text-sm font-bold text-white mx-8">{text}</span>
                  <span className="text-sm font-bold text-white mx-8">{text}</span>
                  <span className="text-sm font-bold text-white mx-8">{text}</span>
                </div>
              </div>
              
              <style>{`
                @keyframes scroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-125%);
                  }
                }
                
                .animate-scroll {
                  animation: scroll 15s linear infinite;
                }
              `}</style>
          </div>
      </section>

       {/* Mobile Banking App */}
      <section className="flex flex-row">
      <div className="w-1/3">
        <h5>Mobile Banking App</h5>
        <div className="text-xl font-extrabold"><h1>Bank anywhere, anytime with our mobile app</h1></div>
        <div><p>Install Remedy Grand Chase Bank mobile banking app on your phone for instant access to your accounts, transfers, bill payments, and more. Available for both Android and iPhone.</p></div>
      </div>

      <div className="w-1/3">

        icon
      </div>
      
      </section>

        {/* about us */}

    <section className="flex flex-col justify-center items-center mt-20 px-10">
      <div className="flex justify-center items-center px-20">
            <span className="w-1/2 text-2xl font-extrabold">Empowering businesses and individuals with experts</span>
            <span className="1/2 text-wrap pl-40">We are dedicated to helping businesses and individuals navigate the complexities of finance with confidence and clarity.<br/> With years of experience in financial planning,<br/> investment management, business consulting.</span>
      </div>


      <div className="flex justify-center items-center px-24 pt-20">
        <div>
          <span>icon</span>
          <span><h1>expertise you can trust</h1></span>
           <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
        </div>
        <div>
          <span>icon</span>
          <span><h1>expertise you can trust</h1></span>
           <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
        </div>
        <div>
          <span>icon</span>
          <span><h1>expertise you can trust</h1></span>
           <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
        </div>
      </div>

      <div className="py-52 w-full border-2 border-red-950 mt-10">theg</div>
      
    </section>
  
    {/* our services */}

    <section className="flex flex-col justify-center items-center mt-20 px-10">
      <div className="flex justify-center items-center px-20">
            <span className="w-1/2 text-2xl font-extrabold">Expert financial services for your needs</span>
            <span className="1/2 text-wrap pl-40">Move funds between your accounts and schedule transfers with ease. View all your account activity and balances, pay bills automatically, set up e-mail alerts, and more.</span>
      </div>

      <div className="flex justify-center items-center px-24 pt-20">
        <div>
          <span>icon</span>
          <span><h1>expertise you can trust</h1></span>
           <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
        </div>
        <div>
          <span>icon</span>
          <span><h1>expertise you can trust</h1></span>
           <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
        </div>
        <div>
          <span>icon</span>
          <span><h1>expertise you can trust</h1></span>
           <span><p>Our experienced team delivers reliable insights and strategies, ensuring your financial decisions are well-informed and secure.</p></span>
        </div>
      </div>

    </section>

    {/* our expertise*/}

    <section className="flex flex-col justify-center items-center mt-20 px-10">
      <div className="flex justify-center items-center px-20">
            <span className="w-1/2 text-2xl font-extrabold">Driving innovation and success in Industry Insights</span>
            <span className="1/2 text-wrap pl-40">Remedy Grand Chase Bank Savings Invent is our enterprise approach to innovation and supports our business strategy as a forward-focused bank. It's about using emerging technology to engage with our customers and exceeding their rapidly evolving expectations.</span>
      </div>

      <div className="flex justify-between items-center w-full px-10 mt-10">
          <span>Financial Planning</span>
          <span>Business consulting</span>
          <span>Risk management</span>
          <span> Invest management</span>
      </div>



      <div className="flex gap-5 mt-10">
         <div className="h-36 border border-gray-950 w-full">
            <div><h1>Benefits of our financial:</h1></div>
            <div>Empower your financial journey with expert advice, personalized strategies, and solutions designed to help you achieve long-term stability, growth, and peace of mind.</div>
         </div> 
         <div className="h-36 border border-gray-950 w-full">Image</div>

      </div>

    </section>


    {/* why choose us */}

    <section  className="flex flex-col justify-center items-center mt-20 px-10">
      <div className="flex justify-center items-center px-20">
            <span className="w-1/2 text-2xl font-extrabold">Expertise and client focused solutions for your success</span>
            <span className="1/2 text-wrap pl-40">Our team of experienced professionals delivers personalized, results-driven financial strategies tailored to your unique goals. We prioritize transparency, trust, and long-term success.</span>
      </div>

      <div className="flex gap-3">
          <div className="p-20">overlay1</div>
          <div className="p-20">overlay1</div>
          <div className="p-20">overlay1</div>
      </div>
    </section>



    {/* our pproach */}



    <section className="flex flex-col justify-center items-center mt-20 px-10">
      <div className="flex justify-center items-center px-20">
            <span className="w-1/2 text-2xl font-extrabold">Client centric strategy for lasting success</span>
            <span className="1/2 text-wrap pl-40">We believe that a successful financial journey starts with understanding your unique needs and aspirations Our approach is built on a foundation of collaboration, transparency, and expertise.</span>
      </div>

      <div className="flex gap-3">
          <div className="p-20">overlay1</div>
          <div className="p-20">overlay1</div>
          <div className="p-20">overlay1</div>
           <div className="p-20">overlay1</div>
      </div>


    </section>


    {/* financial wisdom */}

    <section className="flex flex-col justify-center items-center mt-20 px-10">

      <div className="flex justify-center items-center px-20">
            <span className="w-1/2 text-2xl font-extrabold">Fascinating facts that shapeyour financial knowledge</span>
            <span className="1/2 text-wrap pl-40">Explore fun and surprising facts about the financial world. Learn how history, trends, and innovations have shaped today's finance landscape, making it easier to navigate your financial journey.</span>
     </div>

     <div className="flex flex-col w-full mt-10 gap-2">
        <div className="flex gap-2 border border-gray-950 w-full p-2">
            <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
            <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
            <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
            <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
        </div>

        <div className="flex gap-2 border border-gray-950 w-full p-2">
            <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
            <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
            <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
            <div className="w-1/4 h-56 border border-gray-950">yudhjjodjfdovjodj</div>
        </div>
     </div>
        
    </section>

     {/* fdic section */}

       <section className="flex flex-row justify-center items-center mt-20 px-10 border border-slate-800">
         
         <div className="p-10">
          image
         </div>

         <div>
           <div><p>FDIC-Insured - Backed by the full faith and credit of the U.S. Government</p></div>
           <div><h1 className="font-bold text-xl">Take control of your financial future today!</h1></div>
           <div><p>We’ve made it easy for Remedy Grand Chase Bank employees to harness their creativity,<br/> bring their ideas to life, and solve customer and colleague problems.</p></div>
           <div><button>Get Started Today</button><button>Explore our services</button></div>
         </div>
          
       </section>



       {/* contact section */}
           
    <section  className="flex flex-col justify-center items-center mt-20 px-10">
      <div className="flex justify-center items-center px-20">
            <span className="w-1/2 text-2xl font-extrabold">Common business & finance questions and answers</span>
            <span className="1/2 text-wrap pl-40">Contact now</span>
      </div>
       
      <div className="flex items-center gap-3 w-full mt-10">
          <div className="h-full w-1/2 border border-gray-950">
              <div><span>?icon</span><span>How do I register for mobile banking at Remedy Grand Chase Bank ?</span></div>
              <div className="pl-10">
                <ul>
                    <li>If you are enrolled in Online Banking, simply use your user name and password to log in to your accounts through the Remedy Grand Chase Bank Savings app.</li>
                    <li>After logging in, Android® and iPhone®</li>
                    <li>users may also enroll in the Remedy Grand Chase Bank Savings Mobile Deposit service to deposit checks using the mobile app.</li>
                    <li>To enroll, select Mobile Deposit from the Main Menu, then review and accept the If you are not currently registered for Online Banking, sign up online.</li>
                </ul>
              </div>
          </div>
          <div className="h-full w-1/2 border border-gray-950">
           <div><span>?icon</span><span>How do I register for mobile banking at Remedy Grand Chase Bank ?</span></div>
           <div><p>Our Mobile Deposit allows you to deposit a check through the Remedy Grand Chase Bank Savings mobile app using your internet-enabled iPhone® or Android™ mobile device, provided your device has a camera. You must be an Online or Mobile banking customer, and enrolled in the Remedy Grand Chase Bank Savings Mobile Deposit service. In the Remedy Grand Chase Bank Savings mobile app, select "Mobile Deposit," then follow the steps to enroll or deposit a check.</p></div>
        
          </div>
      </div>
    
    </section>
    

    {/* footer */}

    <footer className="mt-10">
      <div className="flex  px-20">
        <div>
          <img src="" alt="" />
          <span>Our objective is to be a leading and trusted member of the diverse communities we serve. Our goal is to meet the consumer, commercial, and retail needs of individuals and businesses from all ethnic backgrounds. With a diverse team of dedicated professionals, we aim to offer personalized services in multiple languages, delivered in a friendly, efficient, and respectful manner. We uphold the highest standards of soundness, service, and integrity in everything we do.</span>
        </div>
         
        <div className="flex">
            <div className="flex flex-col">
              <span><h1>Solution</h1></span>
              <span>Quick Account Opening</span>
              <span>Contact Us</span>
              <span>Terms of Service</span>
            </div>
            <div className="flex flex-col">
              <span><h1>Loans & Insurance</h1></span>
              <span>Business Loan</span>
              <span>Automobile Refinancing</span>
              <span>Mortgage Plans</span>
              <span>Core Insurance Program</span>
            </div>
            <div className="flex flex-col">
              <span><h1>Solution</h1></span>
              <span>Quick Account Opening</span>
              <span>Contact Us</span>
              <span>Terms of Service</span>
            </div>
        </div>
      </div>
       <hr className="mx-20 border-0.5 border-stone-950" />

      <div className="">
        <span>Copyright © 2025 All Rights Reserved.</span>
      </div>
      
    </footer>

   {/* 
        <div className="hm">
          <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/Userdashboard">Go to the User dash board page</Link>
            <br />
              <Link to="/Admin">Go to the Admin page</Link>
            <br />
            <br/>
             <Link to="/login">Login</Link>
            <br />
            <br/>
               <Link to="/Register">Register</Link>
            <br />
            <br/>
              <Link to="/Adminlogin">Admin Login</Link>
            <br />
            <br/>
            <Link to="/linkpage">Go to the link page</Link>
            <br/>
            <br/>
         
        </div> */}
         
</section>
    )
}

export default Home
