from telethon.sync import TelegramClient, events

# These example values won't work. You must get your own api_id and
# api_hash from https://my.telegram.org, under API Development.
api_id = 00000
api_hash = '00000000000000000000'

with TelegramClient('name', api_id, api_hash) as client:
    client.send_read_acknowledge("@MI6SGK_bot")
    client.send_message('@MI6SGK_bot', '/qd')
    client.send_read_acknowledge("@DogeSGK_bot")
    client.send_message('@DogeSGK_bot', '/sign')
    client.send_read_acknowledge("@sgkvipbot")
    client.send_message('@sgkvipbot', '/sign')
    client.send_read_acknowledge("@DATA_007bot")
    client.send_message('@DATA_007bot', '/sign')
    client.send_read_acknowledge("@aishegongkubot")
    client.send_message('@aishegongkubot', '/sign')
    client.send_read_acknowledge("@sgk007_bot")
    client.send_message('@sgk007_bot', '/sign')
    client.send_read_acknowledge("@HandSGK_BOT")
    client.send_message('@HandSGK_BOT', '/sign')
    client.send_read_acknowledge("@RunawaySGKBot")
    client.send_message('@RunawaySGKBot', '/sign')
    client.send_read_acknowledge("@lvbasgkbot")
    client.send_message('@lvbasgkbot', '/checkin')
