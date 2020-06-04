const canvas = document.getElementById('canv');
    const footer = document.getElementById('container-footer')
    const ctx = canvas.getContext('2d');

    const w = canvas.width = document.body.offsetWidth;
    const h = canvas.height = footer.offsetHeight;
    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = 'rgba(37,0,59,1)';
    ctx.fillRect(0, 0, w, h);
    // Draw a semitransparent black rectangle on top of previous drawing
    function matrix() {
        ctx.fillStyle = 'rgba(37,0,59,0.05)';
        ctx.fillRect(0, 0, w, h);

        // Set color to green and font to 15pt monospace in the drawing context
        ctx.fillStyle = '#0f0';
        ctx.font = '15pt monospace';

        // for each column put a random character at the end
        ypos.forEach((y, ind) => {
            // generate a random character
            const text = String.fromCharCode(Math.random() * 128);

            // x coordinate of the column, y coordinate is already given
            const x = ind * 20;
            // render the character at (x, y)
            ctx.fillText(text, x, y);

            // randomly reset the end of the column if it's at least 100px high
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            // otherwise just move the y coordinate for the column 20px down,
            else ypos[ind] = y + 20;
        });
    }

    // render the animation at 10 FPS.
    setInterval(matrix, 100);
