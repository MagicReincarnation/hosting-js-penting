function showNotification(title, message) {
    document.body.classList.add("nqbaoshdneoshxbdsmdnxn");
    const notificationContainer = document.createElement("div");
    notificationContainer.innerHTML = `
        <style>
            .nqbaoshdneoshxbdsmdnxn{overflow:hidden;}
            #notification-overlay {position: fixed!important;z-index: 999999!important;top: 0!important;left: 0!important;width: 100%!important;height: 100%!important;display: flex!important;
            background-color: rgba(0,0,0, 0.6)!important;-webkit-backdrop-filter: blur(5px);backdrop-filter: blur(5px);}
            #notification-box {display: block!important;margin: auto!important;width: 100%!important;max-width: 80%!important;height:100% !important;max-height:80%!important;text-align: center!important;background: #fff!important;color:#222;padding: 40px!important;border-radius: 8px!important;}
            #notification-box h4 {font-size:20px}
            #notification-link {color:#f44336;}
            #notification-countdown {color:#ff950d;}
        </style>
        <div class='nqbaoshdneoshxbdsmdnxnb' id="notification-overlay">
            <div id="notification-box">
                <h4>${title}</h4>
                <p>${message}</p>
                <p>Untuk mengaktifkannya</p>
                <p>Silahkan hubungi Hirutshuji disini "<a id="notification-link" href='https://datakodehiru.blogspot.com'><b>${window.location.hostname}</b></a>"  untuk mendapatkan lisensi script</p>
                <span id="notification-countdown"></span>
            </div>
        </div>`;
    document.body.appendChild(notificationContainer);
    
    let countdown = 30; // Ubah sesuai dengan durasi yang diinginkan
    const countdownElement = document.getElementById('notification-countdown');

    const countdownInterval = setInterval(function () {
        countdown--;
        if (countdown === 0) {
            clearInterval(countdownInterval);             
            window.location.href = "https://datakodehiru.blogspot.com/"; // Ganti dengan URL tujuan Anda
        }
        countdownElement.textContent = countdown;
    }, 1000);
}

showNotification("PERINGATAN!", `lisensi script untuk website ${window.location.hostname} milik Kamu belum aktif`);
