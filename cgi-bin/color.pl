#!/usr/bin/perl
# color.pl

use strict;
use warnings;
use CGI;
use CGI::Carp qw(fatalsToBrowser);

my $q = CGI->new;

print "Content-Type: text/html\n\n";
# Note there is a newline between 
# this header and Data

# Simple HTML code follows

print "<html> <head>\n";
print "<title>Post Request in Perl!</title>";
print "</head>\n";

my $fname = $q->param('fname');
my $lname = $q->param('lname');
my $color = $q->param('color');

print "<body>\n";
my $datestring = localtime();
print "<h1>Hello $fname $lname from $datestring!</h1>\n";
print "<body style=\"background-color: $color \">\n";
print "</body> </html>\n";
