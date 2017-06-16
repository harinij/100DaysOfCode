import gym
import universe # register the universe environments
env = gym.make('flashgames.NeonRace-v0')
env.configure(remotes=1) # automatically creates a local docker container
observation_n = env.reset()
while True:
 action_n = [[('KeyEvent', 'ArrowUp', True)] for ob in observation_n] # your agent here
 observation_n, reward_n, done_n, info = env.step(action_n)
 print ("observation: ", observation_n)
 print ("reward: ", reward_n)
 env.render()