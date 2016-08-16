#!/usr/bin/perl
# env_variables.pl

print "Content-Type: text/html\n\n";
# Note there is a newline between 
# this header and Data

# Simple HTML code follows

print "<html> <head>\n";
print "<title>Environment Variables in Perl!</title>";
print "</head>\n";
print "<body>\n";
print "<h1>Printing all the environment variables using Perl</h1>\n";
print "<pre>\n";

foreach $key (sort keys(%ENV)) {
  print "$key = $ENV{$key}<p>";
}
print "</pre>\n";
print "</body> </html>\n";
