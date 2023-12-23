// import React from 'react';
// import { Avatar } from "antd";

// interface UserProps {
//     users: {
//         image: string;
//         name?: string;
//     }[];
// }

// const RenderTooltip = (props: UserProps) => {
//     const { users } = props;

//     const renderTooltipContent = () => {
//         if (users.length === 0) {
//             return <div>No users</div>;
//         }

//         return (
//             <div>
//                 {users.map((user, index) => (
//                     <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
//                         <div>
//                             <Avatar src={user.image} size={18} />
//                         </div>
//                         <div className='text-[11px] text-[#54575c]' style={{ marginLeft: '5px' }}>
//                             {user.name}
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     return renderTooltipContent();
// };

// export default RenderTooltip;

// interface User {
//     image: string;
//     name?: string;
// }

// export const renderTooltip = (users: User[]) => {
//     if (users.length === 0) {
//         return <div>No users</div>;
//     }

//     return (
//         <div>
//             {users.map((user, index) => (
//                 <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
//                     <div>
//                         <Avatar src={user.image} size={18} />
//                     </div>
//                     <div className='text-[11px] text-[#54575c]' style={{ marginLeft: '5px' }}>
//                         {user.name}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };


// import React from 'react';
// import { Avatar } from 'antd';
// import RenderTooltipContent from './customTooltipContent';

// interface User {
//     image: string;
//     name?: string;
// }

// export const renderTooltip = (users: User[], customAvatarComponent: React.ReactElement, customNameComponent: React.ReactElement) => {
//     if (users.length === 0) {
//         return <div>No users</div>;
//     }

//     return (
//         <div>
//             {users.map((user, index) => (
//                 <RenderTooltipContent
//                     key={index}
//                     users={[user]}
//                     avatarComponent={customAvatarComponent}
//                     nameComponent={customNameComponent}
//                 />
//             ))}
//         </div>
//     );
// };
