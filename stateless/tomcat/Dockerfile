FROM tomcat:10.1

LABEL author="Ajin"
LABEL PROJECT="tomcat-login"

RUN rm -rf /usr/local/tomcat/webapps/ROOT

COPY webapps/ROOT /usr/local/tomcat/webapps/ROOT

EXPOSE 8080

CMD ["catalina.sh" ,"run"]
