// import React from 'react';
// interface ProjectCardsProps {
//   projectname: string;
//   projectDomain: string;
//   projectyear: string;
//   primaryColor: string;
//   secondaryColor: string;
//   children?: React.ReactNode; // Optional children prop for the JSX content
// }

// // Use the interface with the function component
// export const ProjectCards: React.FC<ProjectCardsProps> = ({
//   projectname,
//   projectDomain,
//   projectyear,
//   primaryColor,
//   secondaryColor,
//   children,
// }) => {
//   return (
//     <div className="group relative rounded overflow-hidden shadow-lg hover:shadow-xl transition-all">
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
//       {/* Color Block */}
//       <div className={`"w-full h-12 bg-${primaryColor} "`}></div>
//       <div className="p-8 relative z-10">
//         <h3 className="text-xl sm:text-2xl font-bold mb-4 dark:text-white">
//           {projectname}
//         </h3>
//         <div className="flex items-center gap-4 mb-6">
//           <span className=" font-sans  inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-${}">
//             {projectDomain}
//           </span>
//           <span className="inline-flex items-center px-3  rounded-full text-sm font-sans  text-green-800 dark:bg-green-900/50 dark:text-green-300 border-2 border-green-800">
//             {projectyear}
//           </span>
//           <span
//             className={`"inline-flex items-center px-3  rounded-full text-sm font-sans  text-${primaryColor}  dark:bg-${primaryColor} dark:text-${primaryColor}  border-2 border-${primaryColor}  "`}
//           >
//             {projectyear}
//           </span>
//         </div>

//         {children}
//       </div>
//     </div>
//   );
// };