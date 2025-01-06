import React from "react";
import TokenForm from "./components/TokenForm.jsx";
import WalletConnect from "./components/WalletConnect";




const App = () => {
  const TGE = "0xEe74f0D268Dc554252E0cd03b39798B71D323c68";
  return (
    <div style={{ backgroundColor: "#121212", minHeight: "100vh", color: "#fff" }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
          borderBottom: "1px solid #333",
        }}
      >
        {/* Title */}
        <h1 style={{ margin: 0, fontSize: "24px", color: "#fff" }}>Welcome to Trading App</h1>

        
      </header>
      
      
          <WalletConnect/>
          <TokenForm contractAddress={TGE}/>
        
    </div>
  );
};

export default App;





   

//         {/* Title */}
//         <h1 style={{ margin: 0, fontSize: "24px", color: "#fff" }}>Welcome to Trading App</h1>

      
//       {/* Main Content */}
//       <main
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           minHeight: "calc(100vh - 80px)",
//         }}
//       >
//         <p style={{ fontSize: "20px" }}>This is the main content area.</p>
//       </main>
//     </div>
//   );
// };

// export default TradingApp;

