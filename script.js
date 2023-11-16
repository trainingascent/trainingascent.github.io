function jumpToPricing() {
    document.getElementById('Pricing').scrollIntoView({ behavior: 'smooth' });
}
function jumpToProcess() {
    document.getElementById('Process').scrollIntoView({ behavior: 'smooth' });
}
function jumpToWhyUs() {
    document.getElementById('WhyUs').scrollIntoView({ behavior: 'smooth' });
}
function jumpToGetStarted() {
    document.getElementById('GetStarted').scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add("fade-in");
    document.getElementById('endurance').addEventListener('change', function() {
        var endurancesection = document.getElementById('endurancesection');
        endurancesection.classList.toggle('hidden', !this.checked);
    });
    document.getElementById('strength').addEventListener('change', function() {
        var strengthsection = document.getElementById('strengthsection');
        strengthsection.classList.toggle('hidden', !this.checked);
    });
    document.getElementById('nutrition').addEventListener('change', function() {
        var nutritionsection = document.getElementById('nutritionsection');
        nutritionsection.classList.toggle('hidden', !this.checked);
    });
  });