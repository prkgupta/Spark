#!/usr/bin/perl
#clear.pl

use strict;
use warnings;
use CGI;
use CGI::Carp qw(fatalsToBrowser);
use CGI::Session;

my $q = CGI->new;

my $session = new CGI::Session(undef, $q, {Directory=>'/tmp'});

my $cookie = $q->cookie(CGISESSID => $session->id);
print $q->header(-cookie=>$cookie);

# Note there is a newline between 
# this header and Data

# Simple HTML code follows

print "<html> <head>\n";
print "<title>Post Request in Perl!</title>";
print "</head>\n";

$session->delete();

#print $q->redirect(-uri=>'http://198.199.116.102/session.pl');


print "</body> </html>\n";
