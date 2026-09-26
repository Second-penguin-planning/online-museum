import json, random, sys
from PIL import Image, ImageFilter, ImageDraw, ImageEnhance

REPO = 'C:/Users/tokun/projects/online-museum/'
BASE = Image.open(sys.argv[1]).convert('RGB')  # original stock photo
OUTDIR = sys.argv[2]
N = int(sys.argv[3])
SS = 4  # supersampling

# canvas quads in the photo (TL, TR, BR, BL); kind = which aspect fits
SLOTS = [
    dict(q=[(78, 418), (259, 475), (259, 826), (80, 873)], kind='portrait'),            # big left wall
    dict(q=[(372, 524), (466, 547), (466, 760), (372, 777)], kind='portrait',
         frame=[(367, 519), (470, 543), (470, 765), (367, 783)]),                        # triptych -> single work
    dict(q=[(521, 626), (538, 629), (538, 685), (521, 689)], kind='portrait'),          # small matted
    dict(q=[(623, 617), (732, 616), (732, 693), (623, 693)], kind='landscape'),         # back wall centre (crow)
    dict(q=[(1093, 598), (1166, 598), (1166, 707), (1093, 707)], kind='portrait'),      # back wall right
    dict(q=[(1259, 597), (1289, 594), (1290, 706), (1260, 704)], kind='portrait'),      # right wall small
    dict(q=[(1333, 550), (1398, 534), (1398, 757), (1333, 745)], kind='portrait'),      # right wall tall
]

arts = json.load(open(REPO + 'src/data/artworks.json', encoding='utf8'))
pool = {'portrait': [], 'landscape': []}
for a in arts:
    if not (a['published'] and a['artistKey']):
        continue
    w, h = Image.open(REPO + 'public/gallery/' + a['file']).size
    r = w / h
    if r <= 0.9:
        pool['portrait'].append(a['file'])
    elif r >= 1.25:
        pool['landscape'].append(a['file'])


def coeffs(dst, src):
    # solve perspective coefficients mapping dst(output) -> src(input)
    A = []
    for (x, y), (u, v) in zip(dst, src):
        A.append([x, y, 1, 0, 0, 0, -u * x, -u * y, u])
        A.append([0, 0, 0, x, y, 1, -v * x, -v * y, v])
    n = 8
    for i in range(n):
        piv = max(range(i, n), key=lambda r: abs(A[r][i]))
        A[i], A[piv] = A[piv], A[i]
        for r in range(n):
            if r != i:
                f = A[r][i] / A[i][i]
                A[r] = [a - f * b for a, b in zip(A[r], A[i])]
    return [A[i][n] / A[i][i] for i in range(n)]


def warp(img, quad, size):
    # warp only inside the quad's bounding box; returns (patch, mask, offset)
    x0 = min(x for x, _ in quad) - 2; y0 = min(y for _, y in quad) - 2
    x1 = max(x for x, _ in quad) + 2; y1 = max(y for _, y in quad) + 2
    W, H = x1 - x0, y1 - y0
    q = [((x - x0) * SS, (y - y0) * SS) for x, y in quad]
    w, h = img.size
    c = coeffs(q, [(0, 0), (w, 0), (w, h), (0, h)])
    out = img.transform((W * SS, H * SS), Image.PERSPECTIVE, c, Image.BICUBIC)
    m = Image.new('L', (W * SS, H * SS), 0)
    ImageDraw.Draw(m).polygon(q, fill=255)
    return out.resize((W, H), Image.LANCZOS), m.resize((W, H), Image.LANCZOS), (x0, y0)


def compose(seed):
    rnd = random.Random(seed)
    im = BASE.copy()
    used, picks = set(), []
    for s in SLOTS:
        f = rnd.choice([p for p in pool[s['kind']] if p not in used])
        used.add(f); picks.append(f)
        art = Image.open(REPO + 'public/gallery/' + f).convert('RGB')
        # match the soft, slightly low-contrast look of the photo
        art = ImageEnhance.Contrast(art).enhance(0.9)
        if 'frame' in s:
            fr = Image.new('RGB', art.size, (228, 226, 220))
            w, m, o = warp(fr, s['frame'], im.size)
            im.paste(w, o, m)
        w, m, o = warp(art, s['q'], im.size)
        w = w.filter(ImageFilter.GaussianBlur(0.5))
        im.paste(w, o, m)
    return im, picks


for i in range(1, N + 1):
    im, picks = compose(1000 + i)
    im.save(f'{OUTDIR}/hero-{i}.jpg', quality=82, optimize=True, progressive=True)
    print(i, picks)
