const brainHealthTab = document.getElementById('brain-health-tab');
const additionalInfoTab = document.getElementById('additional-info-tab');
const brainHealthSection = document.getElementById('brain-health-content');
const additionalInfoSection = document.getElementById('additional-info-content');
const privacySection = document.getElementById('privacy-policy-content');
const privacyPolicyTab = document.getElementById('privacy-policy-tab');

brainHealthTab.addEventListener('click', () => {
    brainHealthSection.classList.remove("hidden");
    brainHealthTab.classList.add('active');
    // privacySection.classList.add('hidden');
    additionalInfoSection.classList.add('hidden');
    additionalInfoTab.classList.remove('active')
    
});

additionalInfoTab.addEventListener('click', () => {
    brainHealthSection.classList.add('hidden');
    additionalInfoSection.classList.remove('hidden');
    brainHealthTab.classList.remove('active');
    additionalInfoTab.classList.add('active')

    // privacySection.classList.add('hidden');
});

// privacyPolicyTab.addEventListener('click', () => {
//     brainHealthSection.classList.add("hidden");
//     privacySection.classList.remove('hidden');
//     additionalInfoSection.classList.add('hidden');
// });