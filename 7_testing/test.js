const testResults = document.getElementById('test-results');

function runTest(name, testFn) {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'bg-dark', 'text-light');
    li.textContent = `${name}: `;
    try {
        testFn();
        li.textContent += '✅ PASS';
        li.style.color = 'green';
        li.classList.add('text-success');
    } catch (e) {
        li.textContent += `❌ FAIL - ${e.message}`;
        li.style.color = 'red';
        li.classList.add('text-danger');
    }
    testResults.appendChild(li);
}

function assertEquals(a, b) {
    if (a !== b) {
        throw new Error(`Expected ${b} but got ${a}`);
    }
}

window.addEventListener('load', () => {
    const appFrame = document.getElementById('app-frame');

    runTest('Page should load', () => {
        assertEquals(appFrame.contentWindow.document.title, 'Animated Tech Concepts');
    });
});