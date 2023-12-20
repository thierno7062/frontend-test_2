import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Haptics,ImpactStyle } from '@capacitor/haptics';
import { GestureController } from '@ionic/angular';
import { VoiceRecorder, VoiceRecorderPlugin, RecordingData, GenericResponse, CurrentRecordingStatus } from 'capacitor-voice-recorder';

@Component({
  selector: 'app-audio-record',
  templateUrl: './audio-record.page.html',
  styleUrls: ['./audio-record.page.scss'],
})
export class AudioRecordPage implements OnInit, AfterViewInit {
  recording = false;
  storeFileNames = [];
  durationDisplay = '';
  duration = 0;
  @ViewChild('recordbtn', {read: ElementRef}) recordbtn: ElementRef;

  constructor(private gestureCtrl: GestureController) { }

  ngOnInit() {
    this.loadFiles();
    VoiceRecorder.requestAudioRecordingPermission();
  }

  ngAfterViewInit(){
    const longPress = this.gestureCtrl.create({
      el: this.recordbtn.nativeElement,
      threshold: 0,
      gestureName: 'long-press',
      onStart: ev => {
        Haptics.impact({style: ImpactStyle.Light});
        this.startRecording();
        this.calculateDuration();
      },
      onEnd: ev =>{
        Haptics.impact({style: ImpactStyle.Light});
        this.stopRecording();
      }
    }, true);
    longPress.enable();
  }

  calculateDuration(){
    if(!this.recording){
      this.duration = 0;
      this.durationDisplay = '';
      return;
    }

    this.duration += 1;
    const minute = Math.floor(this.duration / 60);
    const seconds = (this.duration % 60).toString().padStart(2, '0');
    this.durationDisplay = `${minute}:${seconds}`
    setTimeout(() =>{
      this.calculateDuration();
    }, 1000);
  }

  async loadFiles(){
    Filesystem.readdir({
      path: '',
      directory: Directory.Data
    }).then(result =>{

      console.log(result);
      this.storeFileNames = result.files;

    })
  }

  startRecording(){
    if (this.recording) {

    }
    this.recording = true;
    VoiceRecorder.startRecording();
  }

  stopRecording(){
    if (!this.recording) {

    }
    VoiceRecorder.stopRecording().then(async (result: RecordingData) =>{
      this.recording = false;
      if (result.value && result.value.recordDataBase64) {
        const recordingData = result.value.recordDataBase64;
        console.log(" ~ file: audio-record.page.ts~ line 48 ~ audio-record ~ VoiceRecorder.stopRecorder~ recordData ", recordingData);
        const fileName = new Date().getTime() + '.wav';
        await Filesystem.writeFile({
          path: fileName,
          directory: Directory.Data,
          data :recordingData
        });
        this.loadFiles();
      }
    })
  }

  async playFile(fileName){
    const audioFile = await Filesystem.readFile({
      path: fileName,
          directory: Directory.Data,
    });
    console.log("~ file: audio-record.ts ~ line 65 ~ audio-record ~ playFile ~ audioFile ", audioFile);
    const base64Sound = audioFile.data;

    const audioRef = new Audio (`data:audio/aac;base64,${base64Sound}`)
    audioRef.oncanplaythrough = () => audioRef.play();
    audioRef.load();
  }
  async deleteRecording(fileName){
    await Filesystem.deleteFile({
      directory: Directory.Data,
      path: fileName
    });
    this.loadFiles();
  }
}
