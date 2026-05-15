// Data Ide (50+ Ide Unik)
const ideas = [
    // Bisnis
    { category: "Bisnis", text: "Layanan langganan kopi lokal yang dikirim setiap minggu dengan profil rasa berbeda." },
    { category: "Bisnis", text: "Platform penyewaan peralatan camping dan hiking peer-to-peer." },
    { category: "Bisnis", text: "Aplikasi yang menghubungkan chef lokal dengan orang yang ingin mengadakan private dinner di rumah." },
    { category: "Bisnis", text: "Toko online khusus menjual barang-barang yang terbuat dari bahan daur ulang berkualitas tinggi." },
    { category: "Bisnis", text: "Layanan pembersihan khusus untuk panel surya rumahan." },
    { category: "Bisnis", text: "Platform crowdfunding khusus untuk proyek film pendek lokal." },
    { category: "Bisnis", text: "Kafe dengan konsep 'silent reading', pengunjung tidak boleh berbicara di dalam area utama." },
    { category: "Bisnis", text: "Subscription box untuk makanan ringan tradisional dari berbagai daerah di Indonesia." },
    { category: "Bisnis", text: "Aplikasi manajemen keuangan dengan gamifikasi khusus untuk freelancer dan pekerja lepas." },
    { category: "Bisnis", text: "Layanan asisten virtual khusus untuk lansia yang gagap teknologi (membantu bayar tagihan, pesan makanan)." },
    { category: "Bisnis", text: "Restoran pop-up yang menunya berganti total setiap bulan berdasarkan satu bahan rahasia." },
    { category: "Bisnis", text: "Jasa pemotretan studio profesional khusus untuk hewan peliharaan kesayangan." },
    { category: "Bisnis", text: "Aplikasi pencari 'gym buddy' untuk menghubungkan orang yang butuh teman olahraga di lokasi terdekat." },
    { category: "Bisnis", text: "Platform tukar tambah pakaian bekas berkualitas tinggi (thrifting premium)." },
    { category: "Bisnis", text: "Layanan katering sehat harian yang makanannya disesuaikan dengan hasil tes DNA/darah pelanggan." },
    { category: "Bisnis", text: "Aplikasi rental baju desainer lokal untuk acara pernikahan atau pesta." },
    { category: "Bisnis", text: "Jasa perakitan PC custom yang estetis dan rapi, datang langsung ke rumah klien." },
    
    // Kreatif
    { category: "Kreatif", text: "Buat jurnal harian hanya menggunakan sketsa tanpa kata-kata selama 30 hari penuh." },
    { category: "Kreatif", text: "Desain ulang sampul 5 buku favoritmu dengan gaya minimalis modern." },
    { category: "Kreatif", text: "Ciptakan lagu pendek berdurasi 1 menit menggunakan sampel suara dari benda-benda di dapur." },
    { category: "Kreatif", text: "Buat instalasi seni kecil menggunakan barang bekas dan taruh di sudut kota secara anonim." },
    { category: "Kreatif", text: "Melukis pemandangan abstrak menggunakan kopi, teh, dan kunyit sebagai pewarna alami." },
    { category: "Kreatif", text: "Buat proyek fotografi: potret 100 pintu dengan warna dan bentuk unik di kotamu." },
    { category: "Kreatif", text: "Tulis puisi pendek di atas kertas cantik dan sembunyikan di dalam buku-buku perpustakaan lokal." },
    { category: "Kreatif", text: "Buat diorama miniatur dari adegan film favoritmu di dalam toples selai kaca." },
    { category: "Kreatif", text: "Desain ulang logo merek-merek terkenal seolah-olah dibuat pada tahun 1980-an (retro style)." },
    { category: "Kreatif", text: "Buat video stop-motion pendek menggunakan alat tulis yang ada di meja kerjamu saat ini." },
    { category: "Kreatif", text: "Warnai ulang foto hitam putih bersejarah menggunakan software digital secara detail." },
    { category: "Kreatif", text: "Buat font kustom di komputermu yang didasarkan persis pada tulisan tangan nenek atau kakekmu." },
    { category: "Kreatif", text: "Tulis cerita fiksi singkat (flash fiction) dari sudut pandang seekor semut di dapur." },
    { category: "Kreatif", text: "Gubah puisi dari kumpulan komentar acak di satu video YouTube yang populer." },
    { category: "Kreatif", text: "Gambar peta fantasi dari lingkungan tempat tinggalmu." },
    
    // Konten
    { category: "Konten", text: "Video tutorial 'Cara Memulai Hobi Baru dengan Modal 0 Rupiah'." },
    { category: "Konten", text: "Thread Twitter/X tentang sejarah tersembunyi dari bangunan tua yang sering dilewati di kotamu." },
    { category: "Konten", text: "Podcast mewawancarai orang biasa dengan pekerjaan yang sangat tidak biasa (misal: penguji kasur)." },
    { category: "Konten", text: "Artikel blog membahas secara mendalam tentang bagaimana teknologi mengubah cara kita merasa sepi." },
    { category: "Konten", text: "Seri video pendek yang membongkar mitos-mitos produktivitas modern yang sebenarnya *toxic*." },
    { category: "Konten", text: "Video dokumenter mini tentang pengrajin tua yang keahliannya hampir punah di daerahmu." },
    { category: "Konten", text: "Podcast yang membahas teori konspirasi ringan yang lucu dan sama sekali tidak berbahaya." },
    { category: "Konten", text: "Thread komedi tentang 'Cara bertahan hidup di kantor tanpa meminum kopi seharian'." },
    { category: "Konten", text: "Vlog tantangan 7 hari mencoba rutinitas pagi ekstrem dari tokoh-tokoh sukses." },
    { category: "Konten", text: "Review sangat jujur dan brutal untuk alat-alat unik murah meriah dari marketplace." },
    { category: "Konten", text: "Video timelapse ASMR merakit puzzle 1000 keping tanpa suara bicara." },
    { category: "Konten", text: "Wawancara jalanan (street interview) dengan satu pertanyaan: 'Apa penyesalan terbesar Anda saat remaja?'" },
    { category: "Konten", text: "Vlog eksplorasi kafe-kafe tersembunyi (hidden gem) yang lokasinya ada di dalam gang sempit." },
    { category: "Konten", text: "Tutorial membuat animasi sederhana di HP hanya dalam waktu 5 menit untuk pemula." },
    { category: "Konten", text: "Artikel psikologi populer tentang mengapa otak kita sangat suka menunda pekerjaan sulit." },
    { category: "Konten", text: "Bandingkan 3 merek mie instan lokal dari negara yang berbeda dalam satu video review." },
    { category: "Konten", text: "Konten 'A Day in My Life' tapi dengan voice over bergaya narator film dokumenter hewan liar." }
];

// DOM Elements
const ideaTextEl = document.getElementById('idea-text');
const ideaCategoryBadge = document.getElementById('idea-category-badge');
const btnGenerate = document.getElementById('btn-generate');
const categorySelect = document.getElementById('category-select');
const btnCopy = document.getElementById('btn-copy');
const btnFavorite = document.getElementById('btn-favorite');
const btnShare = document.getElementById('btn-share');
const toastEl = document.getElementById('toast');
const themeToggle = document.getElementById('theme-toggle');

// Modal Elements
const viewFavoritesBtn = document.getElementById('view-favorites-btn');
const favoritesModal = document.getElementById('favorites-modal');
const closeModalBtn = document.getElementById('close-modal');
const favoritesListEl = document.getElementById('favorites-list');

// State
let currentIdea = null;
let favorites = JSON.parse(localStorage.getItem('idea_favorites')) || [];

// Initialize
function init() {
    // Check saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="ph ph-moon"></i>';
    }

    generateIdea();
    checkIfFavorite();
}

// Generate Logic
function generateIdea() {
    const selectedCategory = categorySelect.value;
    let filteredIdeas = ideas;
    
    if (selectedCategory !== "Semua") {
        filteredIdeas = ideas.filter(idea => idea.category === selectedCategory);
    }
    
    if (filteredIdeas.length === 0) {
        filteredIdeas = ideas;
    }
    
    let randomIndex;
    let newIdea;
    
    // Prevent showing the exact same idea twice in a row
    do {
        randomIndex = Math.floor(Math.random() * filteredIdeas.length);
        newIdea = filteredIdeas[randomIndex];
    } while (filteredIdeas.length > 1 && currentIdea && newIdea.text === currentIdea.text);
    
    currentIdea = newIdea;
    
    // Animate UI
    ideaTextEl.classList.remove('fade-in');
    void ideaTextEl.offsetWidth; // Trigger reflow
    
    ideaTextEl.innerText = `${currentIdea.text}`;
    ideaCategoryBadge.innerText = currentIdea.category;
    ideaTextEl.classList.add('fade-in');
    
    checkIfFavorite();
}

// Favorite Logic
function toggleFavorite() {
    if (!currentIdea) return;
    
    const index = favorites.findIndex(fav => fav.text === currentIdea.text);
    
    if (index === -1) {
        favorites.push(currentIdea);
        btnFavorite.classList.add('active-favorite');
        btnFavorite.querySelector('i').classList.replace('ph', 'ph-fill');
        showToast("✨ Ide berhasil disimpan!");
    } else {
        favorites.splice(index, 1);
        btnFavorite.classList.remove('active-favorite');
        btnFavorite.querySelector('i').classList.replace('ph-fill', 'ph');
        showToast("Ide dihapus dari favorit");
    }
    
    saveFavorites();
}

function checkIfFavorite() {
    if (!currentIdea) return;
    
    const isFav = favorites.some(fav => fav.text === currentIdea.text);
    if (isFav) {
        btnFavorite.classList.add('active-favorite');
        btnFavorite.querySelector('i').classList.replace('ph', 'ph-fill');
    } else {
        btnFavorite.classList.remove('active-favorite');
        btnFavorite.querySelector('i').classList.replace('ph-fill', 'ph');
    }
}

function saveFavorites() {
    localStorage.setItem('idea_favorites', JSON.stringify(favorites));
    renderFavoritesList();
}

// Copy Logic
function copyToClipboard() {
    if (!currentIdea) return;
    
    navigator.clipboard.writeText(currentIdea.text).then(() => {
        showToast("📋 Disalin ke clipboard!");
        
        const icon = btnCopy.querySelector('i');
        icon.className = 'ph ph-check';
        setTimeout(() => {
            icon.className = 'ph ph-copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast("Gagal menyalin text");
    });
}

// Share Logic
function shareIdea() {
    if (!currentIdea) return;
    
    const text = `Lihat ide ini: "${currentIdea.text}"\n\n- Via Generator Ide`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Ide Baru yang Menarik',
            text: text,
            url: window.location.href
        }).catch(err => console.log('Error sharing', err));
    } else {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(twitterUrl, '_blank', 'width=550,height=400');
    }
}

// Toast Notification
let toastTimeout;
function showToast(message) {
    toastEl.innerText = message;
    toastEl.classList.add('show');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastEl.classList.remove('show');
    }, 3000);
}

// Theme Toggle
function toggleTheme() {
    const isLight = document.body.getAttribute('data-theme') === 'light';
    const icon = themeToggle.querySelector('i');
    
    if (isLight) {
        document.body.removeAttribute('data-theme');
        icon.className = 'ph ph-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
        icon.className = 'ph ph-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Modal Logic
function openModal() {
    renderFavoritesList();
    favoritesModal.classList.add('active');
}

function closeModal() {
    favoritesModal.classList.remove('active');
}

function renderFavoritesList() {
    favoritesListEl.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesListEl.innerHTML = '<div style="text-align:center; color: var(--text-muted); padding: 3rem 0;">Belum ada ide yang disimpan. <br> Mulai cari inspirasi!</div>';
        return;
    }
    
    favorites.forEach((fav, index) => {
        const div = document.createElement('div');
        div.className = 'favorite-item';
        div.innerHTML = `
            <span class="badge" style="position:static; font-size: 0.7rem; padding: 0.2rem 0.8rem; transform: none; box-shadow: none;">${fav.category}</span>
            <p style="flex:1; font-size:0.95rem; line-height: 1.4; font-weight:600;">"${fav.text}"</p>
            <button onclick="removeFavoriteByIndex(${index})" title="Hapus" style="background:transparent; border:none; color:var(--text-muted); cursor:pointer; font-size:1.4rem; padding:0.5rem; transition: color 0.3s;" onmouseover="this.style.color='#FF6B6B'" onmouseout="this.style.color='var(--text-muted)'">
                <i class="ph ph-trash"></i>
            </button>
        `;
        favoritesListEl.appendChild(div);
    });
}

window.removeFavoriteByIndex = function(index) {
    favorites.splice(index, 1);
    saveFavorites();
    checkIfFavorite();
}

// Event Listeners
btnGenerate.addEventListener('click', generateIdea);
btnCopy.addEventListener('click', copyToClipboard);
btnFavorite.addEventListener('click', toggleFavorite);
btnShare.addEventListener('click', shareIdea);
themeToggle.addEventListener('click', toggleTheme);
viewFavoritesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});
closeModalBtn.addEventListener('click', closeModal);
favoritesModal.addEventListener('click', (e) => {
    if (e.target === favoritesModal) closeModal();
});

// Init on load
init();
