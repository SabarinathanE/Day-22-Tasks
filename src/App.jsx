import './App.css'
import PriceCard from './component/PriceCard';

function App() {
  const data = [
    {memberShip: "Free",
    plan: "$0/per Month",
    planDetails: "Single User",
    planDetails1: "50GB Storage",
    planDetails2: "Unlimited Public Objects",
    planDetails3: "Community access",
    planDetails4: "Unlimites Private Projects",
    planDetails5: "Dedicates Phone Support",
    planDetails6: "Free Subdomain",
    planDetails7: "Monthly Status Report",
    icon:"https://img.icons8.com/?size=26&id=27&format=png"
},
{
    memberShip: "Plus",
    plan: "$9/per Month",
    planDetails: "5 User",
    planDetails1: "50GB Storage",
    planDetails2: "Unlimited Public Objects",
    planDetails3: "Community access",
    planDetails4: "Unlimites Private Projects",
    planDetails5: "Dedicates Phone Support",
    planDetails6: "Free Subdomain",
    planDetails7: "Monthly Status Report",
    icon:"https://img.icons8.com/?size=26&id=27&format=png"
},
{
    memberShip: "Pro",
    plan: "$49/per Month",
    planDetails: "Unlimited User",
    planDetails1: "50GB Storage",
    planDetails2: "Unlimited Public Objects",
    planDetails3: "Community access",
    planDetails4: "Unlimites Private Projects",
    planDetails5: "Dedicates Phone Support",
    planDetails6: "Free Subdomain",
    planDetails7: "Monthly Status Report",
    icon:"https://img.icons8.com/?size=26&id=27&format=png"
}
];

  
return (
  <section className='page'>
    <div className='container row'>
  {
data.map((d, index) => (
 <PriceCard key={index} memberShip={d.memberShip} plan={d.plan} planDetails={d.planDetails} planDetails1={d.planDetails1} planDetails2={d.planDetails2} planDetails3={d.planDetails3} planDetails4={d.planDetails4} 
 planDetails5={d.planDetails5} planDetails6={d.planDetails6} planDetails7={d.planDetails7} icon={d.icon} />
))
}
</div>
</section>
)
}
  

export default App
