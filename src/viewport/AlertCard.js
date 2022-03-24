// import React, { useEffect } from "react";

// const AlertCard = ({ auth }) => {
//   useEffect(() => {
//     console.log(auth.meta.breachedAccounts);
//   }, [auth]);

//   const breaches = auth.meta.breachedAccounts.map((breach) => (
//     <li key={breach.addedDate}>
//       {breach.addedDate} - {breach.name}
//     </li>
//   ));

//   return (
//     <div>
//       {auth && (
//         <div>
//           <h5> Alerts</h5>
//           <div className="row">
//             <div className="col-12">
//               Your email was involved in a breach on the following sites:
//             </div>
//             <div className="col-12">
//               <ul>{breaches}</ul>
//             </div>
//             <div className="col-12">
//               Although your information on our site is safe, we recommend you
//               change your password in case your AppCo account shares a password
//               with any of the sites above.
//             </div>
//           </div>
//           <div className="row">
//             <button className="col-2">Change Password</button>
//             <button className="col-2">Dismiss</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AlertCard;
