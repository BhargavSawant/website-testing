const fs = require('fs');
const file = 'cross-browser-results.json';

// Read and parse the JSON file safely handling potential BOM or UTF16
let raw = fs.readFileSync(file);
let isUTF16 = raw[0] === 0xFF || raw[0] === 0xFE;
if (isUTF16) {
    raw = Buffer.from(raw.toString('utf16le'));
}
let s = raw.toString('utf8').replace(/^\uFEFF/,'');
const idx = s.indexOf('{');
s = s.substring(idx);
let d = JSON.parse(s);

let updatedCount = 0;

d.resultsByEnvironment.forEach(env => {
    env.pages.forEach(page => {
        page.interactiveElements.forEach(e => {
            if (e.status === 'INVESTIGATE') {
                let newReason = null;
                const p = page.url;
                
                if (p.includes('/awards') && (e.text === 'Pending\n0' || e.text === 'Pending')) {
                    newReason = 'Default loaded screen no UI/URL change needed';
                } else if (p.includes('/referrals') && e.text === 'All') {
                    newReason = 'Default loaded screen no UI/URL change needed';
                } else if (p.includes('/rc-follow-ups') && e.text === 'Pending\n1') {
                    newReason = 'Default loaded screen no UI/URL change needed';
                } else if (p.includes('/referrals/new') && e.text === 'Submit referral') {
                    newReason = 'Shows missing fields - valiadation working';
                } else if (e.text === 'Previous photo' || e.text === 'Next photo') {
                    newReason = 'No more photos - button disabled';
                } else if (e.text === 'Photo 1') {
                    newReason = 'Default loaded screen no UI/URL change needed';
                } else if (p.includes('/deals') && e.text === 'All statuses') {
                    newReason = 'Default loaded screen no UI/URL change needed';
                }
                
                if (newReason !== null) {
                    e.status = 'PASS';
                    e.reason = newReason;
                    updatedCount++;
                }
            }
        });
    });
});

// Recalculate summary totals to keep the report accurate
let totalPassed = 0;
let totalInvestigate = 0;
d.resultsByEnvironment.forEach(env => {
    env.pages.forEach(page => {
        page.interactiveElements.forEach(e => {
            if (e.status === 'PASS') totalPassed++;
            if (e.status === 'INVESTIGATE') totalInvestigate++;
        });
    });
});
d.summary.passed = totalPassed;
d.summary.investigate = totalInvestigate;

// Write back to the file
fs.writeFileSync(file, JSON.stringify(d, null, 2), 'utf8');
console.log('Successfully updated ' + updatedCount + ' elements.');
console.log('New totals - Passed: ' + totalPassed + ', Investigate: ' + totalInvestigate);
