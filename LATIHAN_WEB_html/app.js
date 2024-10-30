
wildan aufax
10:16 AM (0 minutes ago)
to me

// Alert sederhana saat klik tombol beli
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produk ditambahkan ke keranjang!');
    });
});