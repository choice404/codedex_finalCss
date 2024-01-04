import { Component } from '@angular/core';
import { Directory2 } from './interfaces/directory2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'css-final';

    project: Directory2 = {
        name: "projects",
        type: "dir",
        items: [
            {
                name: "web",
                type: "dir",
                items: [
                    {
                        name: "pomodoro",
                        type: "dir",
                        items: [
                            {
                                name: "github",
                                type: "file",
                                link: "https://github.com/choisauce/ng_pomodoro",
                                items: [],
                            },
                            {
                                name: "demo",
                                type: "file",
                                link: "https://pomodoro-xi-five.vercel.app/",
                                items: [],
                            },
                        ],
                    },
                ],
            },
            {
                name: "CLI",
                type: "dir",
                items: [
                    {
                        name: "choice-project-manager",
                        type: "dir",
                        items: [
                            {
                                name: "github",
                                type: "file",
                                link: "https://github.com/choisauce/choice-project-manager",
                                items: [],
                            },
                        ],
                    },
                    {
                        name: "TuiToy",
                        type: "dir",
                        items: [
                            {
                                name: "github",
                                type: "file",
                                link: "https://github.com/choisauce/tuitoy",
                                items: [],
                            },
                        ],
                    },
                    {
                        name: "The Great Christmas Rescue",
                        type: "dir",
                        items: [
                            {
                                name: "github",
                                type: "file",
                                link: "https://github.com/choisauce/codedex_holiday_hackathon",
                                items: [],
                            },
                        ],
                    },
                ],
            },
        ],
    }

    socials: Directory2 = {
        name: "socials",
        type: "dir",
        items: [
            {
                name: "github",
                type: "file",
                link: "https://github.com/choisauce",
                items: [],
            },
            {
                name: "linkedin",
                type: "file",
                link: "https://www.linkedin.com/in/choisauce/",
                items: [],
            },
            {
                name: "instagram",
                type: "file",
                link: "https://www.instagram.com/lysus20/",
                items: [],
            },
            {
                name: "twitter",
                type: "file",
                link: "https://twitter.com/lysus20",
                items: [],
            },
            {
                name: "youtube",
                type: "file",
                link: "https://www.youtube.com/channel/UCYwtbThul9_03UhjAvA6Ddg",
                items: [],
            },
        ],
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

    nameInterval: any;

    ngOnInit(): void
    {
        this.typing(this.name, this.fullName, 50);
        this.typing(this.desc, this.fullDescription, 10, true);
    }

    private typing(obj: { startText: string; }, finalText: string, interval: number, finish: boolean = false)
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
              if(totalTime % 400 == 0 && !finish)
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

          if(currentIndex == textArray.length && finish)
          {
              clearInterval(this.nameInterval);
          }
      }, interval);
    }
}
