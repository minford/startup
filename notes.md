# 01.12.2024
### First .md file, Forking a file allows for suggested edits - similar to cloning

# 01.22.2024
Elastic IP: http://34.226.101.5/
Remote Shell command: ssh -i /Users/rental/Documents/'CS 260'/startup/keys/production.pem ubuntu@34.226.101.5
Run ls -l 
to see the Caddyfile is the configuration file for your web service gateway. The public_html directory contains all of the static files that you are serving up directly through Caddy when using it as a web service. The services directory is the place where you are going to install all of your web services once you build them.

# 01.24.2024
To get to the Caddy file:
ssh -i rental$ ssh -i/Users/rental/Documents/'CS 260'/startup/keys/production.pem ubuntu@lavocado.click
 Edit the Caddy's configuration
> cd ~
> 
> vi Caddyfile

 save the file and exit by editting the file and then press esc and type :wq

 restart Caddy with 
 > sudo service Caddy restart

 Let's Encrypt generates a web certificate which enables HTTPS
 Domain Names allow fro a specifc naming convention using the IP Adress, connected on Route 53
 Owning lavocado.click allows subdoimains such as ford.lavocado.click

 New Website: https://lavocado.click or http://lavocado.click or http://startup.lavocado.click

 **BOLD**
 _Italicized_

 01.26.2024
 Example Code Pen
 <body>
  <p>Body</p>
  <header>
    <p><span>Minami Ford</span></p>
    <nav>Navigation
      <div><a href ="https://www.byu.edu/">BYU</a></div>
      <div><a href ="https://www.familysearch.org/en/united-states/">FamilySearch</a></div>
        </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>apples</li>
        <li>bananas</li>
        <li>oranges</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
        <tr>
          <td>HTML</td>
          <td>CSS</td>
          <td>JavaScript</td>
        </tr>
      </table>
    </section>
    <aside>
      <p><img src = "https://img.freepik.com/free-photo/view-majestic-jellyfish-ocean_23-2150720122.jpg" width="100"></p>
    </aside>
  </main>

  <footer>
    <div><span><a href = "https://github.com/minford/startup">My GitHub repo</a></span></div>
  </footer>
</body>

<a href =" for a link

<img src =" for an image
<p> is a new paragraph
<div is a child
<h1 is a section heading

Top of all html files
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <!-- Tell browsers not to scale the viewport automatically -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lavocado</title>
  <link rel="icon" href="Logo.jpg" />
</head>


./deployFiles.sh -k /Users/rental/Documents/'CS 260'/startup/keys/production.pem -h lavocado.click -s startup

 
 
