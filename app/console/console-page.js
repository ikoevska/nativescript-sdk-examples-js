const ListViewLinksModel = require("../links-view-model");
const link = require("../link");
const navigationLinks = [
    new link("Basics", "console/basics/basics-page")
];
function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new ListViewLinksModel({
        links: navigationLinks,
        actionBarTitle: args.context.title
    });
}
exports.onNavigatingTo = onNavigatingTo;
