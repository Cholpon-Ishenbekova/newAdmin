import "./widget.scss"
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';

const Widget = (props) => {
    let data;
    let amountStaff = 172;
    let amountIn = 100;
    let amountOut = 68;
    let amountVisits = amountIn - amountOut;
    // let percentageStaff = 100;
    // let percentageIn = Math.round((amountIn*100)/amountStaff);
    // let percentageOut = Math.round((amountOut * 100) / amountStaff);
    // let percentageVisits = percentageIn - percentageOut;


    switch (props.type) {
        case "staff":
            data = {
                title: "Total Staff",
                counter: amountStaff,
                // percentage: percentageStaff,
                icon: (
                    <PeopleAltOutlinedIcon className="icon" style={{
                        color: "blue",
                        backgroundColor:"rgba(0, 0, 255, 0.2)"
                    }} />
                )
            };
            break;
        case "in":
            data = {
                title: "Total IN",
                counter: amountIn,
                // percentage: percentageIn,
                icon: (
                    <ArrowDownwardOutlinedIcon className="icon" style={{
                        color: "green",
                        backgroundColor:"rgba(0, 255, 0, 0.2)",
                    }} />
                )
            };
            break;
        case "out":
            data = {
                title: "Total OUT",
                counter: amountOut,
                // percentage: percentageOut,
                icon: (
                    <ArrowUpwardOutlinedIcon className="icon" style={{
                        color: "red",
                        backgroundColor:"rgba(255, 0, 0, 0.2)"
                    }} />
                )
            };
            break;
        case "visits":
            data = {
                title: "People on campus",
                counter: amountVisits,
                // percentage: percentageVisits,
                icon: (
                    <ExitToAppOutlinedIcon className="icon" style={{
                        color: "goldenrod",
                        backgroundColor:"rgba(218, 165, 32, 0.2)"
                    }} />
                )
            };
            break;
        default:
            break;
    }

  return (
    <div className="widget">
          <div className="left">
              <span className="title">{data.title}</span>
              <span className="counter">{data.counter}</span>
        </div>
          <div className="right">
              {/* <div className="percentage">{data.percentage} %</div> */}
              {data.icon}
        </div>
    </div>
  )
}

export default Widget
