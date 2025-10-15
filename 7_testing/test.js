const testResults = document.getElementById('test-results');

function runTest(name, testFn) {
async function runTest(name, testFn) {
    const li = document.createElement('li');
    li.textContent = `${name}: `;
    li.className = 'list-group-item bg-dark text-light border-secondary';
    li.textContent = `${name}: ⏳ PENDING`;
    testResults.appendChild(li);

    try {
        testFn();
        li.textContent += '✅ PASS';
        li.style.color = 'green';
        await testFn();
        li.textContent = `${name}: ✅ PASS`;
        li.classList.remove('text-light');
        li.classList.add('text-success');
    } catch (e) {
        li.textContent += `❌ FAIL - ${e.message}`;
        li.style.color = 'red';
        li.textContent = `${name}: ❌ FAIL - ${e.message}`;
        li.classList.remove('text-light');
        li.classList.add('text-danger');
        console.error(`Test Failed: ${name}`, e);
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
async function runAllTests() {
    const appFrame = document.getElementById('app-frame');

    runTest('Page should load', () => {
        assertEquals(appFrame.contentWindow.document.title, 'Animated Tech Concepts');
    // Wait for the iframe to fully load its content, including the dynamically injected menu
    appFrame.addEventListener('load', () => {
    // Wait for the iframe to fully load its content
    await new Promise(resolve => {
        appFrame.addEventListener('load', resolve, { once: true });
    });

    // --- Start of Tests ---
    await runTest('Main page should load with correct title', () => {
        const appDoc = appFrame.contentWindow.document;
        assertEquals(appDoc.title, 'Animated Tech Concepts');
    });

        runTest('Page should load', () => {
            assertEquals(appDoc.title, 'Animated Tech Concepts');
        });
    await runTest('Menu should have UI Test link in Workflow dropdown', () => {
        const appDoc = appFrame.contentWindow.document;
        const selector = '[aria-labelledby="workflowDropdown"] a[href="../7_testing/index.html"]';
        assertExists(selector, appDoc, 'UI Test link missing from Workflow dropdown');
    });

        runTest('Menu should have UI Test link in Workflow dropdown', () => {
            const selector = '[aria-labelledby="workflowDropdown"] a[href="../7_testing/index.html"]';
            assertExists(selector, appDoc, 'UI Test link missing from Workflow dropdown');
    // --- New Tests for Concept Pages ---
    const appDoc = appFrame.contentWindow.document;
    const conceptLinks = appDoc.querySelectorAll('.list-group a');

    await runTest(`Found ${conceptLinks.length} concept pages to test`, () => {
        if (conceptLinks.length === 0) {
            throw new Error('No concept page links found on the main page.');
        }
    })

    for (const link of conceptLinks) {
        const url = new URL(link.href, appFrame.src).href;
        const pageName = link.textContent.trim();

        await runTest(`Concept Page '${pageName}' should load`, async () => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to load with status ${response.status}`);
            }
        });
    }
}

        runTest('Menu should have UI Test link in Environments dropdown', () => {
            const selector = '[aria-labelledby="envDropdown"] a[href="../7_testing/index.html"]';
            assertExists(selector, appDoc, 'UI Test link missing from Environments dropdown');
        });
    });
});
window.addEventListener('load', runAllTests);