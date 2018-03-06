import gym
import universe # register the universe environments
env = gym.make('flashgames.NeonRace-v0') # You can run many environment in parallel
env.configure(remotes=1) # automatically creates a local docker container
observation_n = env.reset() # Initiate the environment and get list of observations of its initial state
while True:
 action_n = [[('KeyEvent', 'ArrowUp', True)] for ob in observation_n] # your agent here
 observation_n, reward_n, done_n, info = env.step(action_n) # Reinforcement Learning action by agent
 print ("observation: ", observation_n) # Observation of the environment
 print ("reward: ", reward_n) # If the action had any postive impact +1/-1
 env.render() # Run the agent on the environment