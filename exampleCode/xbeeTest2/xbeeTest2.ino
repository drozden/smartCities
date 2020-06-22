int led = 13;
int received = 0;
int i;
void setup() {
  Serial.begin(9600); 
  pinMode(led, OUTPUT);
}
 
void loop() {
  if (Serial.available() > 0) {
    received = Serial.read();
  
    //if (received == 'a'){
      Serial.println('Start');
      Serial.println(received);
    //}
     //else if (received == 'b'){
      //Serial.println('Hey');
    //} 
  }
}
