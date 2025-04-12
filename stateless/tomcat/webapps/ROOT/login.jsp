<html>
  <head>
    <title>Tomcat Login Page</title>
  </head>
  <body>
    <h2>Login Page (Tomcat - JSP)</h2>
    <form method="post" action="login.jsp">
      Username: <input type="text" name="username" /><br/>
      Password: <input type="password" name="password" /><br/>
      <input type="submit" value="Login" />
    </form>

    <%
      String user = request.getParameter("username");
      String pass = request.getParameter("password");
      if (user != null && pass != null) {
    %>
      <p>Welcome, <%= user %>!</p>
    <%
      }
    %>
  </body>
</html>
