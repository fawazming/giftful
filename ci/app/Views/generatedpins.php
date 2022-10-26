<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>PAWM</title>
</head>
<body style="font-size: 1.5rem;">
	<h4><center><?= $worth ?> <?= $quantity ?> Pins for <?= $agent ?> </center></h4>

	<?php $pns = ''; ?>
	<?php foreach ($pins as $pin):?>
		<?php $pns = $pns.' | '.$pin; ?>
	<p><?=$pin?></p>
	<?php endforeach; ?>


	<small>Powered by Rayyan Technologies</small>
</body>
</html>