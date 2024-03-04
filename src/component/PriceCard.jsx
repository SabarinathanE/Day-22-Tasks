export default function PriceCard(props) {
    return (
      
        <div className="col">
        <div className="card" >
      <div className="card-body">
        <div className="text-center">
        <p>{props.memberShip}</p>
        <h5 className="card-title">{props.plan}</h5>
        </div>
        <hr />
        <div className="'Details'"> 
        <p className="card-text">
        <img src={props.icon} className="imgstyle" /> &nbsp;
            {props.planDetails}</p>
        <p className="card-text">
        <img src={props.icon} className="imgstyle" /> &nbsp;{props.planDetails1}</p>
        <p className="card-text">
        <img src={props.icon} className="imgstyle" /> &nbsp;{props.planDetails2}</p>
        <p className="card-text">
        <img src={props.icon} className="imgstyle" /> &nbsp;{props.planDetails3}</p>
        <p className="card-text">
        <img src={props.icon} className="imgstyle" /> &nbsp;{props.planDetails4}</p>
        <p className="card-text">
        <img src={props.icon} className="imgstyle" /> &nbsp;{props.planDetails5}</p>
        <p className="card-text">
        <img src={props.icon} className="imgstyle" /> &nbsp;{props.planDetails6}</p>
        <p className="card-text">
        <img src={props.icon} className="imgstyle" /> &nbsp;{props.planDetails7}</p>
        <div className="text-center">
        <button href="#" className="btn btn-primary">Button</button>
        </div>
        </div>
      </div>
    </div>
        </div>
   
      )
    }