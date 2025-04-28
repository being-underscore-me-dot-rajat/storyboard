import random
from nltk import pos_tag, word_tokenize
import sys
import json
from textblob import TextBlob

# # nltk.download('punkt_tab')
# # nltk.download('averaged_perceptron_tagger_eng')
# # Storyboard-specific enhancement libraries

STYLE_MODIFIERS = {
    'cinematic': ['lens flare', 'high contrast lighting', 'anamorphic bokeh'],
    'anime': ['vibrant colors', 'emotional expressions', 'speed lines'],
    'pastel': ['soft hues', 'dreamy ambiance', 'delicate lighting'],
    'crayon': ['child-like texture', 'hand-drawn feel', 'waxy outlines'],
    'realistic': ['natural tones', 'accurate shadows', 'fine detail'],
    'normal': ["normal style"]
}


SHOT_TYPES = {
    'character': [
        'close-up', 'medium shot', 'full body shot', 'over-the-shoulder',
        'two shot', 'extreme close-up', 'reaction shot'
    ],
    'action': [
        'tracking shot', 'static frame', 'dolly zoom', 'panning shot',
        'crane shot', 'handheld cam', 'time-lapse', 'whip pan'
    ],
    'emotion': [
        'low angle', 'high angle', 'dutch tilt', 'eye-level',
        'extreme angle', 'soft focus', 'shallow depth of field'
    ]
}

CHARACTER_EMOTIONS = {
    'positive': ['joyful', 'hopeful', 'content', 'curious', 'grateful', 'amused'],
    'negative': ['anxious', 'furious', 'lonely', 'gloomy', 'terrified', 'suspicious'],
    'neutral': ['blank', 'contemplative', 'stoic', 'pensive', 'bored']
}

ACTION_ENHANCERS = {
    'movement': ['dramatic pose', 'mid-action freeze', 'motion blur', 'leap in motion', 'blurred background'],
    'interaction': ['intense eye contact', 'gesture emphasis', 'object exchange', 'emotional outburst', 'power stance']
}

SCENE_TRANSITIONS = [
    "fade-in from black", "cross-dissolve to next scene", "smash cut to contrasting image",
    "match cut with similar composition", "iris in", "fade to white", "graphic match transition"
]

THEME_PACKS = {
    'sci-fi': ['futuristic setting', 'glowing tech elements', 'cyberpunk cityscape', 'AI-controlled environment'],
    'noir': ['high contrast shadows', 'smoky ambiance', 'gritty urban backdrop'],
    'fantasy': ['mystical forest', 'ancient ruins', 'enchanted artifact', 'glowing runes'],
    'horror': ['ominous lighting', 'eerie silence', 'unseen presence', 'bloody handprint'],
    'western': ['dusty plains', 'horseback chase', 'saloon showdown'],
    'random': ['random']
}

def clean_prompt(prompt):
    return str(TextBlob(prompt).correct())

def analyze_narrative_elements(prompt):
    tokens = word_tokenize(prompt)
    tagged = pos_tag(tokens)
    
    elements = {
        'characters': [word for word, pos in tagged if pos in ['NNP', 'NN']],
        'actions': [word for word, pos in tagged if pos in ['VBG', 'VBD']],
        'objects': [word for word, pos in tagged if pos in ['NN', 'NNS']]
    }
    return elements

def select_contextual_modifiers(elements):
    modifiers = []

    # Action/Character shot logic
    if elements['actions']:
        modifiers.append(random.choice(SHOT_TYPES['action']))
    else:
        modifiers.append(random.choice(SHOT_TYPES['character']))

    # Emotion
    emotion_pool = random.choice(list(CHARACTER_EMOTIONS.values()))
    modifiers.append(random.choice(emotion_pool))

    # Additional action enhancers
    if any(verb in ['flying', 'running', 'fighting', 'jumping'] for verb in elements['actions']):
        modifiers.append(random.choice(ACTION_ENHANCERS['movement']))
    if any(obj in elements['objects'] for obj in ['gift', 'book', 'sword', 'map']):
        modifiers.append(random.choice(ACTION_ENHANCERS['interaction']))

    return modifiers

def enhance_storyboard_prompt(prompt, style='cinematic', theme='sci-fi'):
    # corrected_prompt = clean_prompt(prompt)
    elements = analyze_narrative_elements(prompt)
    modifiers = select_contextual_modifiers(elements)

    style_mod = random.choice(STYLE_MODIFIERS.get(style, []))
    theme_element = random.choice(THEME_PACKS.get(theme, []))
    transition = random.choice(SCENE_TRANSITIONS)

    enhanced = (
        f"{random.choice(SHOT_TYPES['character']).title()} of {prompt.capitalize()}, "
        f"featuring {', '.join(modifiers)} with {style_mod} and {theme_element}. "
        f"{transition} to next frame."
    )
    return enhanced


def loader(prompts, style,theme):
    results = []
    for prompt in prompts:
        enhanced = enhance_storyboard_prompt(prompt, style, theme)
        results.append(enhanced)
    return results

