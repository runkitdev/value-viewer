

const hasSymbol =   typeof global.Symbol === "function" &&
                    typeof Symbol("") === "symbol";

exports.ValueViewerSymbol = hasSymbol ?
    Symbol("RunKit Simple Value Viewer") :
    "@@_RunKit_Simple_Value_Viewer_@@";
