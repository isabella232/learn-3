(function () {
	var promises = {};

	window.get = function ( url ) {
		if ( !promises[ url ] ) {
			promises[ url ] = new Ractive.Promise( function ( fulfil ) {
				var xhr = new XMLHttpRequest();

				xhr.onload = function () {
					fulfil( xhr.responseText );
				};

				xhr.open( 'GET', url );
				xhr.send();
			});
		}

		return promises[ url ];
	};
}());

window.detail = {
	dendrites: '<strong>Dendrites</strong> conduct electrochemical stimulation from other neurons via synapses. <a href="http://en.wikipedia.org/wiki/Dendrite">Wikipedia article</a>',
	axon_hillock: 'The <strong>axon hillock</strong> is a specialized part of the cell body of a neuron that connects to the axon. <a href="http://en.wikipedia.org/wiki/Axon_hillock">Wikipedia article</a>',
	ranvier: '<strong>Nodes of Ranvier</strong> are 1 micrometer gaps in the myelin sheaths that insulate the axon. These nodes act as signal boosters. <a href="http://en.wikipedia.org/wiki/Nodes_of_Ranvier">Wikipedia article</a>',
	synapse: '<strong>Chemical synapses</strong> transmit signals between cells by releasing neurotransmitter molecules. An adult human brain contains between 100-500 trillion synapses. <a href="http://en.wikipedia.org/wiki/Chemical_synapse">Wikipedia article</a>',

	microtubules: '<strong>Microtubules</strong> and <strong>neurofibrils</strong> are bundles of filaments which, among other things, help maintain cell structure. <a href="https://en.wikipedia.org/wiki/Microtubule">Wikipedia article</a>',
	synaptic_vesicles: '<strong>Synaptic vesicles</strong> store the neurotransmitters that are released at the synapse to propagate signals. They are constantly regenerated by the cell. <a href="http://en.wikipedia.org/wiki/Synaptic_vesicle">Wikipedia article</a>',
	synaptic_cleft: 'The <strong>synaptic cleft</strong> is the small (20-40nm) gap between neurons, across which neurotransmitters are released to propagate signals.',
	neurotransmitter: '<strong>Neurotransmitters</strong> are chemicals stored in the synaptic vesicles, which transmit signals from a neuron to the target cell. <a href="http://en.wikipedia.org/wiki/Neurotransmitter">Wikipedia article</a>',
	receptors: '<strong>Receptors</strong> are molecules that receive chemical signals from outside the cell they inhabit. Specific chemicals bind to specific receptors, like keys and locks. <a href="http://en.wikipedia.org/wiki/Receptor_(biochemistry)">Wikipedia article</a>',

	rough_er: '<strong>Nissl bodies</strong> are rough endoplasmic reticulum granules, whose job it is to manufacture and release proteins. <a href="http://en.wikipedia.org/wiki/Nissl_body">Wikipedia article</a>',
	polyribosomes: '<strong>Polyribosomes</strong>, or polysomes, are clusters of ribosomes. <a href="http://en.wikipedia.org/wiki/Polysome">Wikipedia article</a>',
	ribosomes: '<strong>Ribosomes</strong> are responsible for linking amino acids together according to the genetic instructions carried in messenger RNA',
	golgi: 'The <strong>Golgi apparatus</strong> modifies, sorts, and packages proteins before sending them to their destination. <a href="http://en.wikipedia.org/wiki/Golgi_apparatus">Wikipedia article</a>',
	nucleus: 'The <strong>nucleus</strong> is the control centre of a cell - it contains the bulk of the genetic material, and regulates gene expression. <a href="http://en.wikipedia.org/wiki/Cell_nucleus">Wikipedia article</a>',
	nucleolus: 'The <strong>nucleolus</strong> of a cell is responsible for copying DNA into RNA - the first step of gene expression. <a href="http://en.wikipedia.org/wiki/Nucleolus">Wikipedia article</a>',
	membrane: '<strong>Membranes</strong> are the boundaries between the insides and outsides of cells. They protect the cell, and control the movement of substances (such as ions and organic molecules) in and out of cells. <a href="http://en.wikipedia.org/wiki/Cell_membrane">Wikipedia article</a>',
	smooth_er: '<strong>Smooth endoplasmic reticulum</strong> deals with lipid metabolism, carbohydrate metabolism, and detoxification. <a href="http://en.wikipedia.org/wiki/Endoplasmic_reticulum">Wikipedia article</a>',
	mitochondrion: '<strong>Mitochondria</strong> supply the rest of the cell with energy by generating adenosine triphosphate. They are also involved in signalling and regulating growth, among other things. Not to be confused with midichlorians. <a href="http://en.wikipedia.org/wiki/Mitochondrion">Wikipedia article</a>',

	microfilament: '<strong>Microfilaments</strong> are the thinnest filaments of the cytoskeleton, which provides cells with structure and shape. <a href="http://en.wikipedia.org/wiki/Microfilament">Wikipedia article</a>',
	axon: 'The <strong>axon</strong>, or nerve fibre, is the part of the cell responsible for conducting eletrical impulses away from the neuron\'s body and to other neurons, muscles, and glands. <a href="http://en.wikipedia.org/wiki/Axon">Wikipedia article</a>',
	schwann_cell: '<strong>Schwann cells</strong> form the myelin sheath around myelinated axons. Myelin is an electrically insulating substance, which protects the axon and increases its conduction velocity. <a href="http://en.wikipedia.org/wiki/Schwann_cell">Wikipedia article</a>'
};
