var App = function()
{
	this.footerAsText =
    "<div class='footer-content'>" +
        "<div class='name'>Leandro Miranda</div>" +
        "<span class='rights'>All righs go to away.</span>" +
    "</div>";

    this.headerAsText =
    "<div class='nav-bar'>" +
        "<a href='me.html'><h1 class='page-title'>Leandro Miranda</h1></a>" +
        "<nav> " +
            "<ul>" +
                "<a href='me.html'><li>Home</li></a>" +
                "<a href='blog.html'><li>Blog</li></a>" +
                "<a href='assets/files/resume.pdf'><li>Download Resume</li></a>  " +
            "</ul>" +
        "</nav>" +
    "</div> ";

    this.dialogAsText = 
    "<div class='dialog'>" +
        "<div class='dialog-container'>" +
            "<div class='dialog-label'>Prompt</div>" +
            "<p>You are here for ten seconds! Want to continue?</p>" +
            "<div class='button continue-dialog' onclick='app.continueDialogClicked()'>Continue</div>" +
            "<div class='button' onclick='app.leaveDialogClicked()'>Take me to Google, please!</div>" + 
        "</div>" +
    "</div>";

    this.timeoutLength = 10000;

    this.changeTitle = function (title)
    {
        document.title = title;
    }

    this.fillHeader = function()
    {
        this.fillElementWithTagNameWithText("header",this.headerAsText);	
    }

    this.fillFooter = function()
    {
    	this.fillElementWithTagNameWithText("footer",this.footerAsText);
    }

    this.fillElementWithTagNameWithText = function(tagName, text)
    {
		
		var element = document.getElementsByTagName(tagName)[0];

    	element.innerHTML = text;
    }

    this.removeElementsByClass = function (className)
    {
        elements = document.getElementsByClassName(className);
        while(elements.length > 0)
        {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    this.startAnnoyingPrompt = function()
    {
        this.removeElementsByClass("dialog");

        setTimeout(function () 
        {
            document.body.insertAdjacentHTML('beforeend', app.dialogAsText);
        },this.timeoutLength);

    }

    this.continueDialogClicked = this.startAnnoyingPrompt;

    this.leaveDialogClicked = function ()
    {
        window.location.replace("http://google.com");
    }

    this.fillFooter();

    this.fillHeader();

   // this.startAnnoyingPrompt();
}