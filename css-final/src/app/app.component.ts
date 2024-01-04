import { Component } from '@angular/core';
import { Directory } from './interfaces/directory';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'css-final';
    audioBool: boolean = false;
    private audio: HTMLAudioElement;

    tree: Directory = {
        name: "/",
        type: "dir",
        collapsed: false,
        items: [
            {
                name: "projects",
                type: "dir",
                collapsed: true,
                items: [
                    {
                        name: "web",
                        type: "dir",
                        collapsed: true,
                        items: [
                            {
                                name: "pomodoro",
                                type: "dir",
                                collapsed: false,
                                items: [
                                    {
                                        name: "github",
                                        type: "file",
                                        link: "https://github.com/choisauce/ng_pomodoro",
                                        collapsed: false,
                                        items: [],
                                    },
                                    {
                                        name: "demo",
                                        type: "file",
                                        link: "https://pomodoro-xi-five.vercel.app/",
                                        collapsed: false,
                                        items: [],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "CLI",
                        type: "dir",
                        collapsed: true,
                        items: [
                            {
                                name: "choice-project-manager",
                                type: "dir",
                                collapsed: false,
                                items: [
                                    {
                                        name: "github",
                                        type: "file",
                                        collapsed: false,
                                        link: "https://github.com/choisauce/choice-project-manager",
                                        items: [],
                                    },
                                ],
                            },
                            {
                                name: "TuiToy",
                                type: "dir",
                                collapsed: false,
                                items: [
                                    {
                                        name: "github",
                                        type: "file",
                                        collapsed: false,
                                        link: "https://github.com/choisauce/tuitoy",
                                        items: [],
                                    },
                                ],
                            },
                            {
                                name: "The Great Christmas Rescue",
                                type: "dir",
                                collapsed: false,
                                items: [
                                    {
                                        name: "github",
                                        type: "file",
                                        collapsed: false,
                                        link: "https://github.com/choisauce/codedex_holiday_hackathon",
                                        items: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "socials",
                type: "dir",
                collapsed: true,
                items: [
                    {
                        name: "github",
                        type: "file",
                        collapsed: false,
                        link: "https://github.com/choisauce",
                        items: [],
                    },
                    {
                        name: "linkedin",
                        type: "file",
                        collapsed: false,
                        link: "https://www.linkedin.com/in/choisauce/",
                        items: [],
                    },
                    {
                        name: "instagram",
                        type: "file",
                        collapsed: false,
                        link: "https://www.instagram.com/lysus20/",
                        items: [],
                    },
                    {
                        name: "twitter",
                        type: "file",
                        collapsed: false,
                        link: "https://twitter.com/lysus20",
                        items: [],
                    },
                    {
                        name: "youtube",
                        type: "file",
                        collapsed: false,
                        link: "https://www.youtube.com/channel/UCYwtbThul9_03UhjAvA6Ddg",
                        items: [],
                    },
                    {
                        name: "twitch",
                        type: "file",
                        collapsed: false,
                        link: "https://www.twitch.tv/lysus20",
                        items: [],
                    },
                ],
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

    constructor()
    {
      this.audio = document.getElementById('audio') as HTMLAudioElement;
    }

    ngOnInit(): void
    {
        this.audio = document.getElementById('sansAudio') as HTMLAudioElement;
        document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
        this.typing(this.name, this.fullName, 50);
        this.typing(this.desc, this.fullDescription, 10, true);
    }

    ngOnDestroy()
    {
        document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    }

    private handleVisibilityChange()
    {
        if(document.hidden)
        {
            this.pauseAudio();
        }
        else
        {
            this.playAudio()
        }
    }

    private playAudio()
    {
        if(this.audio)
        {
            this.audio.play();
        }
    }

    private pauseAudio()
    {
        if(this.audio)
        {
            this.audio.pause()
        }
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

    public special(data: string): void
    {
        console.log(data);
        // this.audio = !this.audio;
        this.audioBool = !this.audioBool;
    }
}
