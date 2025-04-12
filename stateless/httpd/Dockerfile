FROM ubuntu:latest

LABEL author="Ajin"
LABEL project="http"


RUN apt update && apt install apache2 -y && apt clean

# Set working directory
WORKDIR /var/www/html

# Add your login page
ADD index.html /var/www/html/index.html

# Expose port 80
EXPOSE 80

# Declare a volume (optional, if you want to persist or mount content)
VOLUME ["/var/www/html"]

# Run Apache in foreground
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
