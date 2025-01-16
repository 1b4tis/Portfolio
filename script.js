document.querySelectorAll('.skills-orbit li').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.color = '#39FF14';
        skill.style.transform += ' scale(1.2)';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.color = '#6B52B8';
        skill.style.transform = skill.style.transform.replace(' scale(1.2)', '');
    });
});
// portoflio section

document.addEventListener("DOMContentLoaded", () => {
    const filterToggle = document.querySelector(".filter-toggle");
    const filterMenu = document.querySelector("#filter-menu");
    const applyFilter = document.querySelector("#apply-filter");
    const filterSelect = document.querySelector("#filter-select");
    const projectItems = document.querySelectorAll(".project-item, .project-item-one, .project-item-three, .project-item-five");

    // Show/Hide filter menu
    filterToggle.addEventListener("click", () => {
        filterMenu.style.display =
            filterMenu.style.display === "flex" ? "none" : "flex";
    });

    // Apply filter
    applyFilter.addEventListener("click", () => {
        const selectedCategory = filterSelect.value;

        projectItems.forEach((item) => {
            const category = item.getAttribute("data-category");
            if (selectedCategory === "all" || category === selectedCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        filterMenu.style.display = "none"; // Hide the filter menu after applying
    });
});





    // const url = 'path-to-your-pdf-file.pdf';
    // const viewer = document.getElementById('pdf-viewer');
    
    // pdfjsLib.getDocument(url).promise.then(pdf => {
    //     pdf.getPage(1).then(page => {
    //         const canvas = document.createElement('canvas');
    //         viewer.appendChild(canvas);
    //         const context = canvas.getContext('2d');
    //         const viewport = page.getViewport({ scale: 1 });
    //         canvas.width = viewport.width;
    //         canvas.height = viewport.height;
    //         page.render({ canvasContext: context, viewport: viewport });
    //     });
    // });


    // resume page 
    
        const url = 'pdfs/portfolio_resume.pdf';
        const container = document.getElementById('resume-viewer');
    
        pdfjsLib.getDocument(url).promise.then(pdf => {
            pdf.getPage(1).then(page => {
                const canvas = document.createElement('canvas');
                container.appendChild(canvas);
                const context = canvas.getContext('2d');
                const viewport = page.getViewport({ scale: 1 });
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                page.render({ canvasContext: context, viewport: viewport });
            });
        });