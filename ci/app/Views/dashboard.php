<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Dashboard</title>
</head>
<body>
	<center>
		<h1>Dashboard</h1>
		<p><?=$bal?> pts</p>
		<a href="<?=base_url('writesms')?>">SMS</a>
		<br>
		<hr>

		<form action="<?= base_url('pin')?>" method="post">
			<span>For:</span><input type="text" name="phone"><br>
            <input type="number" placeholder="quantity" name="quantity"><br>
			<input type="number" placeholder="worth" name="worth"><br>
			<input type="submit" value="Generate">
		</form>
	</center>

</body>
</html>