module.exports = templateData =>{
    console.log(templateData);
    const employees =templateData;
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Portfolio</title>
    </head>

    <body>
      <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1>My Team</h1>
        </div>
       </header>
       
       <main>
            ${employees}
 
       </main>

    </body>
    </html>
    `;
};