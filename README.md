sitemap

/ | home.erb
/products | products.erb
/about | about.erb
/contact | contact.erb

#set from, subject, to
require "sendgrid-ruby"
from = SendGrid::Email.new
subject = "Hello"
to = Sendgrid::Email.new

#set content to send in email
content = SendGrid::Content.new(type: "text/plain, value: "Hello")

#set mail attributes
mail = SendGrid::Mail.new(from, subject, to, content)

#pass in the sengrid api ky
sg = SendGrid::API.new(api_key: EW["SENDGRID_API_KEY"])


