import Request from './request'
import Response from './response'

function req (method, url, data) {
	const req = new Request(method, url)
	data && req.send(req, data)
	return req.end(req)
		.then(res => new Response(res, req))
}

export function get (url) {
	return req('GET', url)
}

export function head (url) {
	return req('HEAD', url)
}

export function del (url, data) {
	return req('DELETE', url, data)
}

export function patch (url, data) {
	return req('PATCH', url, data)
}

export function post (url, data) {
	return req('POST', url, data)
}

export function put (url, data) {
	return req('PUT', url, data)
}

/**
 * Upload image to server 'image/jpg'
 * @param {*} url
 * @param {*} param1
 */
export function uploadImage (url, { name, imageURL, fileName }) {
	const req = new Request('POST', url)
	req.attach(req, name, imageURL, fileName, 'image/jpg')
	return req.end(req)
		.then(res => new Response(res, req))
}

export function sendRequestWithCustomHeader (url, header) {
	const req = new Request('GET', url)
	req.set(req, header)
	return req.end(req)
		.then(res => new Response(res, req))
}
