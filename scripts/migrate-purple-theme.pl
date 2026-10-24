#!/usr/bin/env perl
# v11 "Putih Terang Ungu" — global palette migration
# Midnight Obsidian & Gold  ->  Royal Amethyst & Pearl (bright white + purple)
use strict;
use warnings;

my @files = glob("/home/z/my-project/src/components/landing/*.tsx");
push @files, "/home/z/my-project/src/app/page.tsx", "/home/z/my-project/src/app/layout.tsx";

# Ordered rules: [regex, replacement, case-insensitive?]
my @rules = (
    # --- Accents: gold -> purple ---
    ['#d4af37', '#7C3AED', 1],
    ['#f1de9b', '#6D28D9', 1],   # light gold (text/star/border) -> violet-700 (readable on white)
    ['#f7ecc9', '#A78BFA', 1],   # pale gold -> light violet (bar gradient tops)
    ['#e9cf7e', '#C4B5FD', 1],
    ['#8a6a1f', '#5B21B6', 1],   # deep gold -> violet-800
    ['#a37e1e', '#6D28D9', 1],
    ['#b08a25', '#6D28D9', 1],
    ['#b8860b', '#8B5CF6', 1],   # aurora blobs
    ['#6b5417', '#7C3AED', 1],
    ['#7a6523', '#8B5CF6', 1],
    ['#6b5c2e', '#7C3AED', 1],
    ['#171203', '#FFFFFF', 1],   # text on gold button -> white on purple button
    # --- Dark backgrounds: obsidian -> pearl/white panels ---
    ['#05060a', '#FBFAFF', 1],
    ['#04050a', '#FBFAFF', 1],
    ['#07080e', '#F6F4FE', 1],
    ['#0a0c14', '#F3F0FE', 1],
    ['#10131f', '#EDE8FC', 1],
    ['#16130a', '#F1ECFE', 1],
    ['#2a2310', '#E9E1FC', 1],
    # --- Gold-tinted gradient ends (avatars/bars) -> deep purples ---
    ['#3a3320', '#4C1D95', 1],
    ['#2a2513', '#4C1D95', 1],
    ['#443a18', '#5B21B6', 1],
    ['#332c14', '#6D28D9', 1],
    # --- Light text (champagne) -> royal ink ---
    ['#ede6d6', '#241A4F', 1],
    ['#fffbe9', '#FFFFFF', 1],
    # --- rgba variants (spaced or not) ---
    [qr/rgba\(\s*212\s*,\s*175\s*,\s*55/,      'rgba(124, 58, 237',  0],
    [qr/rgba\(\s*237\s*,\s*230\s*,\s*214/,     'rgba(36, 26, 79',    0],
    [qr/rgba\(\s*247\s*,\s*236\s*,\s*201/,     'rgba(139, 92, 246',  0],
    [qr/rgba\(\s*241\s*,\s*222\s*,\s*155/,     'rgba(167, 139, 250', 0],
    [qr/rgba\(\s*255\s*,\s*244\s*,\s*214/,     'rgba(255, 255, 255', 0],
    [qr/rgba\(\s*255\s*,\s*248\s*,\s*224/,     'rgba(255, 255, 255', 0],
    [qr/rgba\(\s*253\s*,\s*243\s*,\s*208/,     'rgba(237, 233, 254', 0],
    # --- White-on-light fixes (would be invisible on pearl bg) ---
    ['bg-white/[0.03]',                'bg-[#7C3AED]/[0.05]', 0],
    ['bg-white/[0.02]',                'bg-[#7C3AED]/[0.04]', 0],
    ['hover:bg-white/30',              'hover:bg-[#7C3AED]/30', 0],
    ['bg-white/15',                    'bg-[#7C3AED]/20',   0],
    ['bg-white/10',                    'bg-[#7C3AED]/12',   0],
    [qr/bg-white\/8(?!\d)/,            'bg-[#7C3AED]/10',   0],
    ['border-white/10',                'border-[#7C3AED]/15', 0],
    [qr/border-white\/8(?!\d)/,        'border-[#7C3AED]/12', 0],
    [qr/border-white\/5(?!\d)/,        'border-[#7C3AED]/10', 0],
    ['rounded-full bg-white"',         'rounded-full bg-[#7C3AED]"', 0],
);

my $total = 0;
for my $file (@files) {
    open(my $fh, '<', $file) or die "Cannot read $file: $!";
    local $/;
    my $content = <$fh>;
    close($fh);

    my $changes = 0;
    for my $rule (@rules) {
        my ($pat, $rep, $ci) = @$rule;
        my $re = $ci ? qr/\Q$pat\E/i : $pat;
        $changes++ while $content =~ s/$re/$rep/g;
    }

    if ($changes) {
        open(my $out, '>', $file) or die "Cannot write $file: $!";
        print $out $content;
        close($out);
        printf("%3d  %s\n", $changes, $file);
        $total += $changes;
    }
}
printf("TOTAL replacements: %d\n", $total);
