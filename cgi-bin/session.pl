#!/usr/bin/perl
# session.pl

use strict;
use warnings;
use CGI;
use CGI::Carp qw(fatalsToBrowser);
use CGI::Session;

my $q = CGI->new;
my $session = new CGI::Session(undef, $q, {Directory=>'/tmp'});

my $cookie = $q->cookie(CGISESSID => $session->id);
print $q->header(-cookie=>$cookie);

my $fname = $q->param("fname");
my $lname = $q->param("lname");

$session->param('fname', $fname);
$session->param('lname', $lname);

$session->save_param($q, ["fname", "lname"]);

# Note there is a newline between 
# this header and Data

# Simple HTML code follows

print "<html> <head>\n";
print "<title>Post Request in Perl!</title>";
print "</head>\n";

print "<body>\n";

my $sFname = $session->param("fname");
my $sLname = $session->param("lname");
if( $sFname eq "" || $sLname eq ""){
  print "<h1>Howdy stranger...tell me your name on page1!</h1>";
} 
else{
  print "<h1>Hi $sFname $sLname nice to meet you!</h1>\n";
}
print("<a href=\"session1.html\" role=\"button\">Go to Page 1</a>\n");

#print submit('button_name','value');
print "</body> </html>\n";
