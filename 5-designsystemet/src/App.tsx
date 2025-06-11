import {
  DigiBarChart,
  DigiButton,
  DigiLayoutBlock,
  DigiLayoutColumns,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import "./App.css";
import {
  BarChartVariation,
  ButtonSize,
  ButtonVariation,
  LayoutBlockVariation,
  LayoutColumnsElement,
  LayoutColumnsVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";

function App() {
  return (
    <>
      <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
        <DigiTypography afVariation={TypographyVariation.SMALL}>
          <DigiLayoutColumns
            afElement={LayoutColumnsElement.DIV}
            afVariation={LayoutColumnsVariation.THREE}
          >
            <div>
              <DigiButton
                afSize={ButtonSize.MEDIUM}
                afVariation={ButtonVariation.PRIMARY}
              >
                Lorem
              </DigiButton>
            </div>
            <div>
              <DigiButton
                afSize={ButtonSize.SMALL}
                afVariation={ButtonVariation.SECONDARY}
              >
                Ipsum
              </DigiButton>
            </div>
            <div>
              <div style={{ height: "400px", width: "400px" }}>
                <DigiBarChart
                  afVariation={BarChartVariation.Vertical}
                  afChartData={{
                    data: {
                      xValues: [1, 2, 3, 4],
                      series: [
                        { yValues: [10, 20, 30, 40], title: "Studenter" },
                      ],
                      xValueNames: [
                        "Student1",
                        "Student2",
                        "Student3",
                        "Student4",
                      ],
                    },
                    x: "Antal",
                    y: "Studenter",
                    title: "Studenter som klarar sig",
                  }}
                ></DigiBarChart>
              </div>
            </div>
          </DigiLayoutColumns>
        </DigiTypography>
      </DigiLayoutBlock>
    </>
  );
}

export default App;
