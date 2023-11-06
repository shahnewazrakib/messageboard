import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="bg-left"></div>
        <div className="bg-right"></div>
        <div className="stars">
          <div className="small"></div>
          <div className="medium"></div>
          <div className="big"></div>
        </div>
        <Main />
        {/* <div id="sound">       
          <audio src="./20160814_service_SICCC.mp3" controls autoPlay loop /> 
        </div>
        <div id="sound-desc">
          <p><small>2016年8月14日, 史德頓島華人基督教會</small></p>   
        </div> */}
        <NextScript />
      </body>
    </Html>
  );
}
