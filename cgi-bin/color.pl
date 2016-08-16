#!/usr/bin/perl
# color.pl

use strict;
use warnings;
use CGI;
use CGI::Carp qw(fatalsToBrowser);

my $q = new CGI;

$fname = $q->param('fname');
$lname = $q->param('lname');
$color = $q->param('color');
print "Content-Type: text/html\n\n";
# Note there is a newline between 
# this header and Data

# Simple HTML code follows

print "<html> <head>\n";
print "<title>Post Request in Perl!</title>";
print "</head>\n";
#@colors = ("blue", "white", "red");
#$num = int rand(3);
#print "<body style=\"background-color:$colors[$num]\"">\n";
print "<body>\n";
$datestring = localtime();
print "<h1>Hello $fname $lname from $datestring!</h1>\n";
print "</body> </html>\n";