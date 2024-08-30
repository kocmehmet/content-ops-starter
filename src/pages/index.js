import React from 'react';

export default function Home() {
    return (
        <div>
            <header>
                <h1>Hoşgeldiniz</h1>
                <nav>
                    <ul>
                        <li><a href="#about">Hakkımızda</a></li>
                        <li><a href="#projects">Projeler</a></li>
                        <li><a href="#contact">İletişim</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="about">
                    <h2>Hakkımızda</h2>
                    <p>Burada şirketinizin tarihçesini ve misyonunu anlatabilirsiniz.</p>
                </section>

                <section id="projects">
                    <h2>Projelerimiz</h2>
                    <div className="project-list">
                        <div className="project-item">
                            <h3>Proje 1</h3>
                            <p>Proje 1 açıklaması.</p>
                        </div>
                        <div className="project-item">
                            <h3>Proje 2</h3>
                            <p>Proje 2 açıklaması.</p>
                        </div>
                        {/* Daha fazla proje buraya eklenebilir */}
                    </div>
                </section>

                <section id="contact">
                    <h2>İletişim</h2>
                    <p>Bizimle iletişime geçmek için aşağıdaki formu doldurabilirsiniz.</p>
                    <form>
                        <label htmlFor="name">İsim:</label>
                        <input type="text" id="name" name="name" required />

                        <label htmlFor="email">E-posta:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="message">Mesaj:</label>
                        <textarea id="message" name="message" required></textarea>

                        <button type="submit">Gönder</button>
                    </form>
                </section>
            </main>

            <footer>
                <p>&copy; 2024 Şirket Adı. Tüm hakları saklıdır.</p>
            </footer>
        </div>
    );
}
