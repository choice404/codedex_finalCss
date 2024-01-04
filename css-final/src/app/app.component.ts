import { Component } from '@angular/core';
import { Directory } from './interfaces/directory';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'css-final';

    projects: Directory = {
        name: "projects",
        dirList: [
            {
                name: "web",
                dirList: [
                    {
                        name: "pomodoro",
                        dirList: [],
                        fileList: [
                            {
                                name: "github",
                                link: "https://github.com/choisauce/ng_pomodoro",
                            },
                            {
                                name: "demo",
                                link: "https://pomodoro-xi-five.vercel.app/",
                                isFinal: true
                            },
                        ],
                        isFinal: true
                    },

                ],
                fileList: []
            },
            {
                name: "CLI",
                dirList: [
                    {
                        name: "choice-project-manager",
                        dirList: [],
                        fileList: [
                            {
                                name: "github",
                                link: "https://github.com/choisauce/choice-project-manager"
                            },
                        ],
                    },
                    {
                        name: "The Great Christmas Rescue",
                        dirList: [],
                        fileList: [
                            {
                                name: "github",
                                link: "https://github.com/codedex_holidayHackathon",
                                isFinal: true
                            },
                        ],
                        isFinal: true
                    },
                ],
                fileList: [],
                isFinal: true,
            },
        ],
        fileList: [],
        isFinal: true,
    }

    name: any = {
        startText: "> ",
    }
    fullName: string = "AUSTIN CHOI";

    desc1: any = {
        startText: "> ",
    }

    desc2: any = {
        startText: "> ",
    }

    desc3: any = {
        startText: "> ",
    }

    desc: any = {
        startText: "> ",
    }

    fullDescription: string = 'Software Developer, Cybersecurity Enthusiast, Photographer, and so much more!';

    fullDesc: string[] = [
        'I have always been in love with computers. The first time I ever programmed anything was really unusual... It was in Minecraft using redstone. I learned how to take redstone and create various CPU parts, eventually making a functioning CPU and programming it using assembly. Eventually I took a web development class in school which opened myself to a bigger world of programming. My first website was a simple static site using only HTML, CSS, and a little bit of JavaScript. Today I\'m using technologies that I never knew existed like Angular, TypeScript, React, and so much more.',
        'I am currently a 2nd year student at UNLV focusing on front-end web development and low level programming. I am also heavily involved in various cybersecurity related organizations at UNLV such as working in the Software Develpment Committee, Internal Affairs Department, and PR department of the <a href=\"https://freecyberclinic.org/\" target=\"_blank\">Free Cyber Clinic</a> and working as an officer in <a href=\"https://layer-zero.org\" target=\"_blank\">Layer Zero</a>.',
        'Outside of school I also do photography and video production. I enjoy anime and am involved in the Las Vegas anime scene hosting events and panels at various conventions, cosplaying at events, and more! I can also be found playing music, cooking, hiking, and doing many other things as well. '
    ]

    nameInterval: any;

    ngOnInit(): void
    {
        this.typing(this.name, this.fullName, 50);
        this.typing(this.desc, this.fullDescription, 10);
    }

    private typing(obj: { startText: string; }, finalText: string, interval: number)
    {
      const textArray = finalText.split('');
      let currentIndex = 0;
      let totalTime = 0;

      this.nameInterval = setInterval(() =>
      {
          if(currentIndex !== textArray.length)
          {
              obj.startText += textArray[currentIndex];
              currentIndex++;
          }
          else
          {
              if(totalTime % 400 == 0)
              {
                  if(obj.startText[obj.startText.length - 1] == "_")
                  {
                      obj.startText = obj.startText.substring(0, obj.startText.length - 1);
                  }
                  else
                  {
                      obj.startText += "_";
                  }
              }
          }
          totalTime += interval;

          // if(currentIndex == textArray.length)
          // {
          //     clearInterval(this.nameInterval);
          // }
      }, interval);
    }
}
