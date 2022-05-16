import { Http, HttpAPI } from "../http_api";

describe('Http', () => {
    const baseURL = 'baseURL';
    let http: HttpAPI;

    beforeEach(() => {
        http = new Http(baseURL);
    });

    it('Creating http instance without params', () => {
        expect(typeof http.cleanAPI).toBe('function');
        expect(typeof http.get).toBe('function');
        expect(typeof http.addParams).toBe('function');
    });

    it('testing clean API', () => {
        expect(http.cleanAPI).toHaveBeenCalledTimes(1);
    })
});