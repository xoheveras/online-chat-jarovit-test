<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ChatEvent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    private $message;
    private $name;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(string $message, string $name)
    {
        $this->message = $message;
        $this->name = $name;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('public.chat.1');
    }

    // Наименование бродкаста

    public function broadcastAs()
    {
        return 'chat-message';
    }

    // 

   public function broadcastWith()
   {
        return [
            'message' => $this->message,
            'name' => $this->name
        ];
   }
}
