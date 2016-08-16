#!/usr/local/bin/perl
# hello.pl - My first CGI program

print "Content-Type: text/html\n\n";
# Note there is a newline between 
# this header and Data

# Simple HTML code follows

print "<html> <head>\n";
print "<title>Hello world in Perl!</title>";
print "</head>\n";
print "<body>\n";
$datestring = localtime();
print "<h1>Hello, world from $datestring!</h1>\n";
print "</body> </html>\n";