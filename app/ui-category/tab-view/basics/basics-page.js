const observableModule = require("tns-core-modules/data/observable");
// >> tab-view-basics-code
function onNavigatingTo(args) {
    const page = args.object;
    const sampleText = "NativeScript is a free and open source framework for building native iOS and Android apps using JavaScript and CSS. NativeScript renders UIs with the native platform’s rendering engine—no WebViews—resulting in native-like performance and UX.NativeScript provides a best-of-both-worlds development experience. Our cross-platform JavaScript modules give you the convenience of writing iOS and Android apps from a single JavaScript codebase, while our runtimes give you the power of accessing native APIs, SDKs, and frameworks when you need them—all without needing to open Xcode or Android Studio. NativeScript was created and is supported by Telerik.\n\n\n NativeScript doesn’t require Angular, but it’s even better when you use it. You can fully reuse skills and code from the web to build beautiful, high performance native mobile apps without web views. NativeScript features deep integration with Angular, the latest and greatest (and fastest) Angular framework. Open source and backed by Telerik.";
    const vm = new observableModule.Observable();
    vm.set("content", sampleText);

    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
// << tab-view-basics-code
