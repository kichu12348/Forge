import fs from 'fs';
import path from 'path';


export async function sendBundle(req, res,bundle) {
    const dir = bundle[0];
    const fileName = bundle[1];
    const bundlePath = path.resolve(`.forge/pages/${dir}/${fileName}`);
    
    if (!fs.existsSync(bundlePath)) {
        res.status(404).send("due to some unforeseen circumstances i can't find the bundle 🙂 sed lyf");
        return;
    }
    
    res.sendFile(bundlePath);
}