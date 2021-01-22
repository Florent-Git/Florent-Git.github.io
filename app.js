(function () {
    const $ = (selector) => document.querySelectorAll(selector);

    let navButtons = $(".nav-buttons");

    const createNode = (el) => () => document.createElement(el);

    const appendTo = (parent) => (child) => {
        let p = parent.cloneNode(true);
        p.appendChild(child);
        return p;
    }

    const addClassToNode = (classType) => (node) => {
        let nodeCopy = node.cloneNode(true);
        nodeCopy.classList.add(classType);
        return nodeCopy;
    };

    const addStackClass = (size) => addClassToNode(`fa-stack-${size}`);

    const createSpanAndAdd2xStackClass = R.pipe(createNode("span"), addStackClass("2x"));

    const appendTo2xStackSpan = appendTo(createSpanAndAdd2xStackClass());

    const createIconAndAppendToStackSpan = (icon) => R.pipe(createNode("i"), addClassToNode("fas"), addClassToNode(icon), appendTo2xStackSpan)();
})();