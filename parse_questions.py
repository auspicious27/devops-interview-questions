#!/usr/bin/env python3
"""
Parse README.md and extract ALL questions and answers into JSON format
This version matches questions from table of contents with actual content
"""
import json
import re

def parse_readme(filename='README.md'):
    # Step 1: Parse table of contents to get question number mappings
    toc_questions = {}  # {question_id: number}
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    in_toc = False
    current_number = 0
    
    for line in lines:
        # Start of table of contents
        if 'Table of Contents' in line or '<details' in line:
            in_toc = True
            continue
        
        if in_toc and line.strip().startswith('|') and '|' in line:
            # Parse table row: | 1   | [What is DevOps?](#what-is-devops) |
            parts = [p.strip() for p in line.split('|')]
            if len(parts) >= 3:
                num_str = parts[1].strip()
                link_text = parts[2].strip()
                
                # Check if it's a number
                if num_str.isdigit():
                    current_number = int(num_str)
                    # Extract question ID from link
                    match = re.search(r'#([^)]+)', link_text)
                    if match:
                        question_id = match.group(1)
                        toc_questions[question_id] = current_number
                elif num_str == '' and link_text.startswith('**'):
                    # Section header, reset or continue
                    continue
    
    # Step 2: Parse actual questions from content
    questions = {}
    current_question = None
    current_answer = []
    in_answer = False
    skip_until_section = False
    
    for i, line in enumerate(lines):
        # Skip until we hit the first section (after table of contents)
        if not skip_until_section:
            if re.match(r'^##\s+', line):
                skip_until_section = True
            continue
        
        # Match question headers: "1. ### What is..." or "### What is..." or just headers
        question_match = re.match(r'^(\d+)\.\s+###\s+(.+)$', line)
        unnumbered_match = None
        
        if not question_match:
            # Try unnumbered format: "### What is..."
            unnumbered_match = re.match(r'^###\s+(.+)$', line)
        
        if question_match or unnumbered_match:
            # Save previous question
            if current_question and current_answer:
                answer_text = '\n'.join(current_answer).strip()
                # Remove "Back to Top" links
                answer_text = re.sub(r'\[⬆ Back to Top\].*', '', answer_text, flags=re.DOTALL)
                answer_text = answer_text.strip()
                
                if answer_text and current_question['number'] > 0:
                    questions[current_question['id']] = {
                        'question': current_question['text'],
                        'answer': answer_text,
                        'number': current_question['number']
                    }
            
            # Start new question
            if question_match:
                question_number = int(question_match.group(1))
                question_text = question_match.group(2).strip()
            else:
                question_number = 0  # Will be looked up from TOC
                question_text = unnumbered_match.group(1).strip()
            
            # Generate question ID
            question_id = re.sub(r'[^a-z0-9]+', '-', question_text.lower()).strip('-')
            
            # Look up number from TOC if not numbered
            if question_number == 0:
                question_number = toc_questions.get(question_id, 0)
                # Try alternative ID formats
                if question_number == 0:
                    # Try with "what-is-" prefix variations
                    alt_id = question_id.replace('what-is-', '')
                    for toc_id, num in toc_questions.items():
                        if toc_id.endswith(question_id) or question_id in toc_id:
                            question_number = num
                            break
            
            # Only process if we have a valid number or it's clearly a question
            if question_number > 0 or question_text.startswith('What'):
                current_question = {
                    'id': question_id,
                    'text': question_text,
                    'number': question_number
                }
                current_answer = []
                in_answer = True
                continue
        
        # Collect answer content
        if in_answer and current_question:
            # Stop at "Back to Top" link
            if '[⬆ Back to Top]' in line:
                continue
            # Stop at section headers (##) but only if we have substantial content
            if re.match(r'^##\s+', line):
                if len(current_answer) > 3:  # Has substantial content
                    in_answer = False
                continue
            
            # Skip empty lines at the very start
            if not current_answer and not line.strip():
                continue
                
            current_answer.append(line.rstrip())
    
    # Save last question
    if current_question and current_answer:
        answer_text = '\n'.join(current_answer).strip()
        answer_text = re.sub(r'\[⬆ Back to Top\].*', '', answer_text, flags=re.DOTALL)
        answer_text = answer_text.strip()
        
        if answer_text and current_question['number'] > 0:
            questions[current_question['id']] = {
                'question': current_question['text'],
                'answer': answer_text,
                'number': current_question['number']
            }
    
    # Step 3: Remove table-of-contents entry if present
    questions.pop('table-of-contents', None)
    
    # Step 4: Create entries for questions in TOC but not found in content
    # Only create if we have the question text from TOC
    for question_id, question_num in toc_questions.items():
        if question_id not in questions and question_id != 'table-of-contents':
            # Extract question text from TOC by searching content
            # This is a fallback for questions that might be in different format
            pass  # Skip placeholders - only include real questions
    
    return questions

if __name__ == '__main__':
    questions = parse_readme()
    
    # Sort by question number
    sorted_questions = dict(sorted(questions.items(), key=lambda x: x[1]['number']))
    
    # Save to JSON file
    with open('questions.json', 'w', encoding='utf-8') as f:
        json.dump(sorted_questions, f, indent=2, ensure_ascii=False)
    
    print(f"Parsed {len(sorted_questions)} questions and saved to questions.json")
    print(f"Question numbers range: {min(q['number'] for q in sorted_questions.values())} to {max(q['number'] for q in sorted_questions.values())}")
