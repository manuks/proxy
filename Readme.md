While developing a facebook page tab we have to specify ssl url of the app. 

Suppose your application is in say
http://yourdomain.com/fb/app/

If you give https://yourdomain.com/fb/app/ it will not work in facebook.

For a sandbox application buying an ssl certificate is not that prcactical.

This proxy can be used in that situation.

Create an application in heroku and find its git url from the settings page. 
It will be like git@heroku.com:your-application-name.git

Then follow this steps

<code>
git clone git@github.com:manuks/proxy.git
git remote add heroku git@heroku.com:your-application-name.git
heroku config:set REDIRECTHOST=yourdomain.com
</code>

This will create a nodejs application in heroku which will proxy yourdomain from an ssl domain.

You can give the following url in facebook app settings.
https://your-application-name.herokuapp.com/fb/app/
