document.addEventListener('DOMContentLoaded', function() {
    var themeBtn = document.getElementById('themeBtn');
    var currentTheme = localStorage.getItem('user_theme') || 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    themeBtn.textContent = currentTheme === 'dark' ? 'Light' : 'Dark';

    themeBtn.addEventListener('click', function() {
        var activeTheme = document.body.getAttribute('data-theme');
        var nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
        document.body.setAttribute('data-theme', nextTheme);
        localStorage.setItem('user_theme', nextTheme);
        themeBtn.textContent = nextTheme === 'dark' ? 'Light' : 'Dark';
    });

    var menuBtn = document.getElementById('menuBtn');
    var navMenu = document.getElementById('navMenu');
    menuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });

    var projectData = {
        1: "Book Finder System (C++): System implemented for finding books. Used proper class relationships features and object oriented programming for more clean and easy troubleshooting.",
        2: "Restaurant Order Management System (SQL): Database design for collecting and managing orders from customer, with entity relationship usage for communicating between order number, quantity, and table number.",
        3: "Smart Home Application (Python): Assignment requiring research about personalization and preferences of user, used to create a customizable smart home app catering to needs by most users using python.",
        4: "Packet Analyzer & Subnet Calculator (C++): A network utility designed to parse IP addresses, calculate variable-length subnet masks (VLSM), and analyze packet headers to assist in network troubleshooting.",
        5: "Process Memory Allocator Simulator (C): Operating systems lab simulation modeling dynamic memory allocation algorithms (First-Fit, Best-Fit) to analyze memory fragmentation and process execution."
    };

    var modal = document.getElementById('infoModal');
    var popTitle = document.getElementById('popTitle');
    var popBody = document.getElementById('popBody');
    var modalX = document.getElementById('modalX');
    var modalOk = document.getElementById('modalOk');

    document.querySelectorAll('.card-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var id = btn.dataset.id;
            popTitle.textContent = btn.closest('.card').querySelector('h3').textContent;
            popBody.textContent = projectData[id] || "No extra info.";
            modal.classList.add('active');
        });
    });

    function hideModal() {
        modal.classList.remove('active');
    }

    modalX.addEventListener('click', hideModal);
    modalOk.addEventListener('click', hideModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) hideModal();
    });

    var form = document.getElementById('messageForm');
    var nameIn = document.getElementById('usrName');
    var emailIn = document.getElementById('usrEmail');
    var msgIn = document.getElementById('usrMsg');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var valid = true;

        if (!nameIn.value.trim()) {
            document.getElementById('nameErr').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('nameErr').style.display = 'none';
        }

        if (!emailIn.value.trim() || emailIn.value.indexOf('@') === -1) {
            document.getElementById('emailErr').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('emailErr').style.display = 'none';
        }

        if (!msgIn.value.trim()) {
            document.getElementById('msgErr').style.display = 'block';
            valid = false;
        } else {
            document.getElementById('msgErr').style.display = 'none';
        }

        if (valid) {
            popToast('Message sent successfully!');
            form.reset();
        }
    });

    function popToast(msg) {
        var toast = document.getElementById('toast');
        toast.textContent = msg;
        toast.classList.add('active');
        setTimeout(function() {
            toast.classList.remove('active');
        }, 3000);
    }

    function tick() {
        var now = new Date();
        var timeStr = now.toUTCString().split(' ')[4];
        document.getElementById('clock').textContent = 'UTC ' + timeStr;
    }
    setInterval(tick, 1000);
    tick();
});