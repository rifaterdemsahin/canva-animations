const testResults = document.getElementById('test-results');

function runTest(name, testFn) {
    const li = document.createElement('li');
    li.textContent = `${name}: `;
    try {
        testFn();
        li.textContent += '✅ PASS';
        li.style.color = 'green';
    } catch (e) {
        li.textContent += `❌ FAIL - ${e.message}`;
        li.style.color = 'red';
    }
    testResults.appendChild(li);
}

function assertEquals(a, b) {
    if (a !== b) {
        throw new Error(`Expected ${b} but got ${a}`);
    }
}

function assertExists(selector, container, message) {
    if (!container.querySelector(selector)) {
        throw new Error(message || `Element matching selector "${selector}" not found`);
    }
}

window.addEventListener('load', () => {
    const appFrame = document.getElementById('app-frame');

    runTest('Page should load', () => {
        assertEquals(appFrame.contentWindow.document.title, 'Animated Tech Concepts');
    // Wait for the iframe to fully load its content, including the dynamically injected menu
    appFrame.addEventListener('load', () => {
        const appDoc = appFrame.contentWindow.document;

        runTest('Page should load', () => {
            assertEquals(appDoc.title, 'Animated Tech Concepts');
        });

        runTest('Menu should have UI Test link in Workflow dropdown', () => {
            const selector = '[aria-labelledby="workflowDropdown"] a[href="../7_testing/index.html"]';
            assertExists(selector, appDoc, 'UI Test link missing from Workflow dropdown');
        });

        runTest('Menu should have UI Test link in Environments dropdown', () => {
            const selector = '[aria-labelledby="envDropdown"] a[href="../7_testing/index.html"]';
            assertExists(selector, appDoc, 'UI Test link missing from Environments dropdown');
        });
    });
});