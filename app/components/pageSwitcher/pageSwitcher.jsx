

export default function PageSwitcher({ actualPage, totalPages }) {

    // Number of pages that I will show, for ex: << 1 ... 3 (4) 5 ... 6 >>
    N_PAGES_SHOWN = 5;

    // Array of the pages that i will show
    const numberOfPagesShown = [];

    // As the first page is 0, i will show one number more than the actual page.
    let actualPage = actualPage + 1;

    switch(actualPage){
        case 1 || 2 || 3: 
            numberOfPagesShown = [1, 2, 3, 4, totalPages];
        case actualPage!= 1 && actualPage!=2 && actualPage!=totalPages:
            //Means that it can be any number but the beginning or the end
            if(actualPage-N_PAGES_SHOWN >= -2){
                numberOfPagesShown = [1, actualPage-1, actualPage, actualPage+1, totalPages];
            }
        case totalPages:
            numberOfPagesShown = [1, totalPages-3, totalPages-2, totalPages-1, totalPages];
    }

    return (
      <>
        Page Switcher
      </>
    )
}