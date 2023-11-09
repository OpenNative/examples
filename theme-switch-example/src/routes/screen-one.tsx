import { createSignal } from "solid-js";
import switchTheme from "react-native-theme-switch-animation";

if (!global.setImmediate) {
  //@ts-ignore
  global.setImmediate = (cb:any) => setTimeout(cb, 0);
}

export const ScreenOne = () => {
  const [dark, setDark] = createSignal(true);

  return (
    <>
      <actionbar title="Screen One" />
      {/* @ts-ignore */}
      <gridlayout style={{
        backgroundColor: dark() ? 'black' : 'white'
      }} rows="*,auto,*">
        <button
          row="1"
          iosOverflowSafeArea="false"
          text={"Switch theme"}
          on:tap={() => {
            switchTheme({
              switchThemeFunction: () => {
                setDark(!dark());
              },
              animationConfig: {
                type: 'circular',
                duration: 900,
                startingPoint: {
                  cxRatio: 0.5,
                  cyRatio: 0.5
                }
              },
            });
          }}
          style={{
            "background-color": "#446b9e",
            width: 200,
            "border-radius": 10,
            height: 45,
            color: "white"
          }}
          
        />

      </gridlayout>
    </>
  );
};
