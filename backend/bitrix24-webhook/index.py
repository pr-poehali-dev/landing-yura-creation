import json
import os
import urllib.request
import urllib.parse
from typing import Dict, Any

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send form submissions to Bitrix24 CRM as leads with source BX24-Lending
    Args: event - dict with httpMethod, body (name, phone, email, company, message, tariff)
          context - object with request_id attribute
    Returns: HTTP response dict with status
    '''
    method: str = event.get('httpMethod', 'POST')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Get Bitrix24 webhook URL from environment
    webhook_url = os.environ.get('BITRIX24_WEBHOOK_URL')
    
    if not webhook_url:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Bitrix24 webhook URL not configured'})
        }
    
    # Parse request body
    body_data = json.loads(event.get('body', '{}'))
    
    name = body_data.get('name', '')
    phone = body_data.get('phone', '')
    email = body_data.get('email', '')
    company = body_data.get('company', '')
    message = body_data.get('message', '')
    tariff = body_data.get('tariff', '')
    
    # Build lead title
    if tariff:
        title = f'Заявка на тариф: {tariff}'
        comments = f'Тариф: {tariff}\n'
    else:
        title = 'Обращение с сайта'
        comments = ''
    
    if message:
        comments += f'Комментарий: {message}\n'
    if company:
        comments += f'Организация: {company}'
    
    # Prepare Bitrix24 lead data
    lead_fields = {
        'TITLE': title,
        'NAME': name,
        'COMMENTS': comments.strip(),
        'SOURCE_ID': 'WEB',
        'SOURCE_DESCRIPTION': 'BX24-Lending'
    }
    
    if phone:
        lead_fields['PHONE'] = [{'VALUE': phone, 'VALUE_TYPE': 'WORK'}]
    if email:
        lead_fields['EMAIL'] = [{'VALUE': email, 'VALUE_TYPE': 'WORK'}]
    if company:
        lead_fields['COMPANY_TITLE'] = company
    
    # Prepare POST data for Bitrix24
    post_data = {
        'fields': json.dumps(lead_fields)
    }
    
    data = urllib.parse.urlencode(post_data).encode('utf-8')
    
    try:
        req = urllib.request.Request(webhook_url, data=data, method='POST')
        
        with urllib.request.urlopen(req) as response:
            bitrix_response = json.loads(response.read().decode('utf-8'))
            
        if bitrix_response.get('result'):
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True, 
                    'message': 'Лид создан в Bitrix24',
                    'leadId': bitrix_response.get('result')
                })
            }
        else:
            error_msg = bitrix_response.get('error_description', 'Unknown error')
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'success': False, 'error': f'Bitrix24 API error: {error_msg}'})
            }
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': False, 'error': f'HTTP Error: {e.code} - {error_body}'})
        }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'success': False, 'error': str(e)})
        }