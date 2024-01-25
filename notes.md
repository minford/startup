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

 
 
