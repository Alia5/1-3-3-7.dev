import * as isbot from 'isbot'

const printmotd = () => {
    console.log(`
    Roses are red
    Violets are blue
    I'll fucking kill you
    If you write "== true"
    `);
};

const loadGads = () => {
    (document.querySelector('.cookieShit') as HTMLElement).style.display = "none"
    const scripts = document.getElementsByTagName("script");
    Array.from(scripts).forEach((s) => {
        if (s.type === "required") {
            s.remove();
            s.type = '';
            s.removeAttribute('data-type');
            s.removeAttribute('data-name');
            document.getElementsByTagName('head')?.[0]?.appendChild(s);
        }
    })
}

const main = () => {
    printmotd();

    if (isbot(navigator.userAgent)) {
        console.log("isbot");
        window.localStorage.setItem("cookiesAccepted", "true");
        loadGads();
    } else {
        if (window.localStorage.getItem("cookiesAccepted") !== "true") {
            (document.querySelector('.cookieShit') as HTMLElement).style.display = "flex"  
        } else {
            loadGads();
        }
    }

    (document.querySelector('#darkSide') as HTMLButtonElement).onclick = () => {
        window.localStorage.setItem("cookiesAccepted", "true");
        loadGads();
    }
    (document.querySelector('#andYouAreOut') as HTMLButtonElement).onclick = () => {
        open('https://google.com', '_self')
    }
};


main();
