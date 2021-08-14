void setup() {
  Serial.begin(9600); // Starts the serial communication
}
void loop() {
  Serial.println(getJSON());
  delay(1000);
}

String getJSON(){
    String temperatura = "\"temperatura\": ";
    temperatura.concat(random(10, 28));
    String viento = "\"viento-vel\": ";
    viento.concat(random(50, 100));
    String humedad = "\"humedad\": ";
    humedad.concat(random(10, 40));
    return "{"+temperatura+","+viento+","+humedad+"}";
}
