    // Tema değiştirici: "T" tuşuna basınca light / dark geçişi yapar.
    (function(){
      const body = document.body;
      let light = false;
      document.addEventListener('keydown', (e) => {
        // ignore when kullanıcı bir inputta yazıyorsa
        if (document.activeElement && ['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) return;
        if (e.key.toLowerCase() === 't') {
          light = !light;
          body.classList.toggle('light', light);
        }
      });

      // Basit hata kontrolleri (console'a log at)
      try {
        console.log('CSS Effect Gallery script loaded — ready.');
      } catch(err){
        console.error('Script çalıştı ama hata var:', err);
      }
    })();