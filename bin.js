#! /usr/bin/env node
const kifli = require('kifli');

const start = async (broker, topic, config, listener) => {
  const client = await kifli(broker, config);
  const topic$ = await client.subscribe(topic);
  topic$.onValue(listener(client));
};

const {
  BROKER = 'mqtt://piserver:1883',
  TOPIC = '/jukebox/i3status'
} = process.env;

start(BROKER, TOPIC, { clientId: 'jukebox-i3status' }, require('.'));
