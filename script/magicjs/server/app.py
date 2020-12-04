from sanic import Sanic
from sanic.response import json

app = Sanic(__name__)

@app.route("/magicjs",methods=["GET","POST"])
async def test(request):
    try:
        return json({'success': True, 'headers': dict(request.headers), 'body': request.body.decode(), 'msg': '请求成功'})
    except Exception as ex:
        return json({'success': False, 'headers': None, 'body': None, 'msg': ex})

if __name__== '__main__':
    app.run(host="0.0.0.0", port=8989)