function openLink(url: string): void {
    window.open(url);
}

function openACLC(): void  {
    if (confirm("You will be redirected to ACLC Malolos Official's Facebook page"))
        openLink("https://www.facebook.com/ACLCMalolosOfficial");
}