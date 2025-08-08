// JavaScript source code
// Display results in results.html
if (window.location.pathname.endsWith("results.html")) {
    function getAllParams(search) {
        let params = {};
        new URLSearchParams(search).forEach((val, key) => {
            if (params[key]) {
                // checkbox: multiple values
                if (Array.isArray(params[key])) {
                    params[key].push(val);
                } else {
                    params[key] = [params[key], val];
                }
            } else {
                params[key] = val;
            }
        });
        return params;
    }

    const box = document.getElementById('results-box');
    const params = getAllParams(window.location.search);

    let html = "<ul>";

    html += `<li><b>Name:</b> ${params.name || ''}</li>`;
    html += `<li><b>Password:</b> •••••••</li>`;
    html += `<li><b>Email:</b> ${params.email || ''}</li>`;
    html += `<li><b>Age:</b> ${params.age || ''}</li>`;
    html += `<li><b>Date of Birth:</b> ${params.dob || ''}</li>`;
    html += `<li><b>Gender:</b> ${params.gender || ''}</li>`;
    html += `<li><b>Courses:</b> ${params.courses
            ? Array.isArray(params.courses)
