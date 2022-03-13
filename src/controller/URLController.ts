import { Request, response, Response } from 'express';
import shortId from 'shortid';
import { config } from '../config/Constants';
import { URLModel } from '../database/model/URL';

export class URLController {
    public async shorten(req: Request, res: Response): Promise<void> {
        // Ver se a URL não existe
        const { originURL } = req.body;
        const url = await URLModel.findOne({ originURL });
        if (url) {
            res.json(url);
            return;
        }
        
        // Criar o hash para essa URL
        const hash = shortId.generate();
        const shortURL = `${config.API_URL}/${hash}`;
        
        // Salvar a URL no banco
        const newURL = await URLModel.create({ hash, shortURL, originURL });
        
        // Retornar a URL que foi salva
        res.json({ newURL });
    }

    public async redirect(req: Request, res: Response): Promise<void> {
        // Pegar o hash da URL
        const { hash } = req.params;
        
        // Encontrar a URL original pelo hash
        const url = await URLModel.findOne({ hash });
        
        // Redirecionar para a URL original a partir do que encontrar no DB
        if (url) {
            res.redirect(url.originURL);
            return;
        }

        res.status(400).json({ error: 'URL not found' });
    }
}