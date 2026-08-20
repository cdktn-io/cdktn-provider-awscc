# `secretsmanagerSecret` Submodule <a name="`secretsmanagerSecret` Submodule" id="@cdktn/provider-awscc.secretsmanagerSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecretsmanagerSecret <a name="SecretsmanagerSecret" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret awscc_secretsmanager_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecret(Construct Scope, string Id, SecretsmanagerSecretConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig">SecretsmanagerSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig">SecretsmanagerSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString">PutGenerateSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions">PutReplicaRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetGenerateSecretString">ResetGenerateSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetReplicaRegions">ResetReplicaRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetSecretString">ResetSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGenerateSecretString` <a name="PutGenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString"></a>

```csharp
private void PutGenerateSecretString(SecretsmanagerSecretGenerateSecretString Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putGenerateSecretString.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

---

##### `PutReplicaRegions` <a name="PutReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions"></a>

```csharp
private void PutReplicaRegions(IResolvable|SecretsmanagerSecretReplicaRegions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putReplicaRegions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags"></a>

```csharp
private void PutTags(IResolvable|SecretsmanagerSecretTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGenerateSecretString` <a name="ResetGenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetGenerateSecretString"></a>

```csharp
private void ResetGenerateSecretString()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetReplicaRegions` <a name="ResetReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetReplicaRegions"></a>

```csharp
private void ResetReplicaRegions()
```

##### `ResetSecretString` <a name="ResetSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetSecretString"></a>

```csharp
private void ResetSecretString()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecretsmanagerSecret resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerSecret.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerSecret.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecretsmanagerSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecretsmanagerSecret resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecretsmanagerSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecretsmanagerSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecretsmanagerSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretString">GenerateSecretString</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference">SecretsmanagerSecretGenerateSecretStringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegions">ReplicaRegions</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList">SecretsmanagerSecretReplicaRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList">SecretsmanagerSecretTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretStringInput">GenerateSecretStringInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegionsInput">ReplicaRegionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretStringInput">SecretStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretString">SecretString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GenerateSecretString`<sup>Required</sup> <a name="GenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretString"></a>

```csharp
public SecretsmanagerSecretGenerateSecretStringOutputReference GenerateSecretString { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference">SecretsmanagerSecretGenerateSecretStringOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReplicaRegions`<sup>Required</sup> <a name="ReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegions"></a>

```csharp
public SecretsmanagerSecretReplicaRegionsList ReplicaRegions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList">SecretsmanagerSecretReplicaRegionsList</a>

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tags"></a>

```csharp
public SecretsmanagerSecretTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList">SecretsmanagerSecretTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GenerateSecretStringInput`<sup>Optional</sup> <a name="GenerateSecretStringInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.generateSecretStringInput"></a>

```csharp
public IResolvable|SecretsmanagerSecretGenerateSecretString GenerateSecretStringInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ReplicaRegionsInput`<sup>Optional</sup> <a name="ReplicaRegionsInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.replicaRegionsInput"></a>

```csharp
public IResolvable|SecretsmanagerSecretReplicaRegions[] ReplicaRegionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>[]

---

##### `SecretStringInput`<sup>Optional</sup> <a name="SecretStringInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretStringInput"></a>

```csharp
public string SecretStringInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tagsInput"></a>

```csharp
public IResolvable|SecretsmanagerSecretTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecretString`<sup>Required</sup> <a name="SecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.secretString"></a>

```csharp
public string SecretString { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecretsmanagerSecretConfig <a name="SecretsmanagerSecretConfig" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecretConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description = null,
    SecretsmanagerSecretGenerateSecretString GenerateSecretString = null,
    string KmsKeyId = null,
    string Name = null,
    IResolvable|SecretsmanagerSecretReplicaRegions[] ReplicaRegions = null,
    string SecretString = null,
    IResolvable|SecretsmanagerSecretTags[] Tags = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description">Description</a></code> | <code>string</code> | The description of the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.generateSecretString">GenerateSecretString</a></code> | <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | A structure that specifies how to generate a password to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name">Name</a></code> | <code>string</code> | The name of the new secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replicaRegions">ReplicaRegions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>[]</code> | A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.secretString">SecretString</a></code> | <code>string</code> | The text to encrypt and store in the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>[]</code> | A list of tags to attach to the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.type">Type</a></code> | <code>string</code> | The exact string that identifies the third-party partner that holds the external secret. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#description SecretsmanagerSecret#description}

---

##### `GenerateSecretString`<sup>Optional</sup> <a name="GenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.generateSecretString"></a>

```csharp
public SecretsmanagerSecretGenerateSecretString GenerateSecretString { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

A structure that specifies how to generate a password to encrypt and store in the secret.

To include a specific string in the secret, use `SecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.
We recommend that you specify the maximum length and include every character type that the system you are generating a password for can support.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#generate_secret_string SecretsmanagerSecret#generate_secret_string}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The ARN, key ID, or alias of the KMS key that Secrets Manager uses to encrypt the secret value in the secret.

An alias is always prefixed by `alias/`, for example `alias/aws/secretsmanager`. For more information, see [About aliases](https://docs.aws.amazon.com/kms/latest/developerguide/alias-about.html).
To use a KMS key in a different account, use the key ARN or the alias ARN.
If you don't specify this value, then Secrets Manager uses the key `aws/secretsmanager`. If that key doesn't yet exist, then Secrets Manager creates it for you automatically the first time it encrypts the secret value.
If the secret is in a different AWS account from the credentials calling the API, then you can't use `aws/secretsmanager` to encrypt the secret, and you must create and use a customer managed KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the new secret.

The secret name can contain ASCII letters, numbers, and the following characters: /_+=.@-
Do not end your secret name with a hyphen followed by six characters. If you do so, you risk confusion and unexpected results when searching for a secret by partial ARN. Secrets Manager automatically adds a hyphen and six random characters after the secret name at the end of the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#name SecretsmanagerSecret#name}

---

##### `ReplicaRegions`<sup>Optional</sup> <a name="ReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.replicaRegions"></a>

```csharp
public IResolvable|SecretsmanagerSecretReplicaRegions[] ReplicaRegions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>[]

A custom type that specifies a ``Region`` and the ``KmsKeyId`` for a replica secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#replica_regions SecretsmanagerSecret#replica_regions}

---

##### `SecretString`<sup>Optional</sup> <a name="SecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.secretString"></a>

```csharp
public string SecretString { get; set; }
```

- *Type:* string

The text to encrypt and store in the secret.

We recommend you use a JSON structure of key/value pairs for your secret value. To generate a random password, use `GenerateSecretString` instead. If you omit both `GenerateSecretString` and `SecretString`, you create an empty secret. When you make a change to this property, a new secret version is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#secret_string SecretsmanagerSecret#secret_string}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.tags"></a>

```csharp
public IResolvable|SecretsmanagerSecretTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>[]

A list of tags to attach to the secret.

Each tag is a key and value pair of strings in a JSON text string, for example:
`[{"Key":"CostCenter","Value":"12345"},{"Key":"environment","Value":"production"}]`
Secrets Manager tag key names are case sensitive. A tag with the key "ABC" is a different tag from one with key "abc".
Stack-level tags, tags you apply to the CloudFormation stack, are also attached to the secret.
If you check tags in permissions policies as part of your security strategy, then adding or removing a tag can change permissions. If the completion of this operation would result in you losing your permissions for this secret, then Secrets Manager blocks the operation and returns an `Access Denied` error. For more information, see [Control access to secrets using tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#tag-secrets-abac) and [Limit access to identities with tags that match secrets' tags](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_examples.html#auth-and-access_tags2).
For information about how to format a JSON parameter for the various command line tool environments, see [Using JSON for Parameters](https://docs.aws.amazon.com/cli/latest/userguide/cli-using-param.html#cli-using-param-json). If your command-line tool or SDK requires quotation marks around the parameter, you should use single quotes to avoid confusion with the double quotes required in the JSON text.
The following restrictions apply to tags:

* Maximum number of tags per secret: 50
* Maximum key length: 127 Unicode characters in UTF-8
* Maximum value length: 255 Unicode characters in UTF-8
* Tag keys and values are case sensitive.
* Do not use the `aws:` prefix in your tag names or values because AWS reserves it for AWS use. You can't edit or delete tag names or values with this prefix. Tags with this prefix do not count against your tags per secret limit.
* If you use your tagging schema across multiple services and resources, other services might have restrictions on allowed characters. Generally allowed characters: letters, spaces, and numbers representable in UTF-8, plus the following special characters: + - = . _ : /

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The exact string that identifies the third-party partner that holds the external secret.

For more information, see [Managed external secret partners](https://docs.aws.amazon.com/secretsmanager/latest/userguide/mes-partners.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#type SecretsmanagerSecret#type}

---

### SecretsmanagerSecretGenerateSecretString <a name="SecretsmanagerSecretGenerateSecretString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecretGenerateSecretString {
    string ExcludeCharacters = null,
    bool|IResolvable ExcludeLowercase = null,
    bool|IResolvable ExcludeNumbers = null,
    bool|IResolvable ExcludePunctuation = null,
    bool|IResolvable ExcludeUppercase = null,
    string GenerateStringKey = null,
    bool|IResolvable IncludeSpace = null,
    double PasswordLength = null,
    bool|IResolvable RequireEachIncludedType = null,
    string SecretStringTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeCharacters">ExcludeCharacters</a></code> | <code>string</code> | A string of the characters that you don't want in the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeLowercase">ExcludeLowercase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to exclude lowercase letters from the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeNumbers">ExcludeNumbers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludePunctuation">ExcludePunctuation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to exclude the following punctuation characters from the password: ``! |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeUppercase">ExcludeUppercase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to exclude uppercase letters from the password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.generateStringKey">GenerateStringKey</a></code> | <code>string</code> | The JSON key name for the key/value pair, where the value is the generated password. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.includeSpace">IncludeSpace</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to include the space character. If you include this switch, the password can contain space characters. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.passwordLength">PasswordLength</a></code> | <code>double</code> | The length of the password. If you don't include this parameter, the default length is 32 characters. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.requireEachIncludedType">RequireEachIncludedType</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.secretStringTemplate">SecretStringTemplate</a></code> | <code>string</code> | A template that the generated string must match. |

---

##### `ExcludeCharacters`<sup>Optional</sup> <a name="ExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeCharacters"></a>

```csharp
public string ExcludeCharacters { get; set; }
```

- *Type:* string

A string of the characters that you don't want in the password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_characters SecretsmanagerSecret#exclude_characters}

---

##### `ExcludeLowercase`<sup>Optional</sup> <a name="ExcludeLowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeLowercase"></a>

```csharp
public bool|IResolvable ExcludeLowercase { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to exclude lowercase letters from the password.

If you don't include this switch, the password can contain lowercase letters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_lowercase SecretsmanagerSecret#exclude_lowercase}

---

##### `ExcludeNumbers`<sup>Optional</sup> <a name="ExcludeNumbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeNumbers"></a>

```csharp
public bool|IResolvable ExcludeNumbers { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to exclude numbers from the password. If you don't include this switch, the password can contain numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_numbers SecretsmanagerSecret#exclude_numbers}

---

##### `ExcludePunctuation`<sup>Optional</sup> <a name="ExcludePunctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludePunctuation"></a>

```csharp
public bool|IResolvable ExcludePunctuation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to exclude the following punctuation characters from the password: ``!

" # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~``. If you don't include this switch, the password can contain punctuation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_punctuation SecretsmanagerSecret#exclude_punctuation}

---

##### `ExcludeUppercase`<sup>Optional</sup> <a name="ExcludeUppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.excludeUppercase"></a>

```csharp
public bool|IResolvable ExcludeUppercase { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to exclude uppercase letters from the password.

If you don't include this switch, the password can contain uppercase letters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#exclude_uppercase SecretsmanagerSecret#exclude_uppercase}

---

##### `GenerateStringKey`<sup>Optional</sup> <a name="GenerateStringKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.generateStringKey"></a>

```csharp
public string GenerateStringKey { get; set; }
```

- *Type:* string

The JSON key name for the key/value pair, where the value is the generated password.

This pair is added to the JSON structure specified by the `SecretStringTemplate` parameter. If you specify this parameter, then you must also specify `SecretStringTemplate`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#generate_string_key SecretsmanagerSecret#generate_string_key}

---

##### `IncludeSpace`<sup>Optional</sup> <a name="IncludeSpace" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.includeSpace"></a>

```csharp
public bool|IResolvable IncludeSpace { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to include the space character. If you include this switch, the password can contain space characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#include_space SecretsmanagerSecret#include_space}

---

##### `PasswordLength`<sup>Optional</sup> <a name="PasswordLength" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.passwordLength"></a>

```csharp
public double PasswordLength { get; set; }
```

- *Type:* double

The length of the password. If you don't include this parameter, the default length is 32 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#password_length SecretsmanagerSecret#password_length}

---

##### `RequireEachIncludedType`<sup>Optional</sup> <a name="RequireEachIncludedType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.requireEachIncludedType"></a>

```csharp
public bool|IResolvable RequireEachIncludedType { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether to include at least one upper and lowercase letter, one number, and one punctuation.

If you don't include this switch, the password contains at least one of every character type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#require_each_included_type SecretsmanagerSecret#require_each_included_type}

---

##### `SecretStringTemplate`<sup>Optional</sup> <a name="SecretStringTemplate" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString.property.secretStringTemplate"></a>

```csharp
public string SecretStringTemplate { get; set; }
```

- *Type:* string

A template that the generated string must match.

When you make a change to this property, a new secret version is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#secret_string_template SecretsmanagerSecret#secret_string_template}

---

### SecretsmanagerSecretReplicaRegions <a name="SecretsmanagerSecretReplicaRegions" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecretReplicaRegions {
    string KmsKeyId = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The ARN, key ID, or alias of the KMS key to encrypt the secret. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.region">Region</a></code> | <code>string</code> | A string that represents a ``Region``, for example "us-east-1". |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The ARN, key ID, or alias of the KMS key to encrypt the secret.

If you don't include this field, Secrets Manager uses `aws/secretsmanager`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#kms_key_id SecretsmanagerSecret#kms_key_id}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

A string that represents a ``Region``, for example "us-east-1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#region SecretsmanagerSecret#region}

---

### SecretsmanagerSecretTags <a name="SecretsmanagerSecretTags" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecretTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.key">Key</a></code> | <code>string</code> | The key identifier, or name, of the tag. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.value">Value</a></code> | <code>string</code> | The string value associated with the key of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key identifier, or name, of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#key SecretsmanagerSecret#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The string value associated with the key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/secretsmanager_secret#value SecretsmanagerSecret#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecretsmanagerSecretGenerateSecretStringOutputReference <a name="SecretsmanagerSecretGenerateSecretStringOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecretGenerateSecretStringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeCharacters">ResetExcludeCharacters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeLowercase">ResetExcludeLowercase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeNumbers">ResetExcludeNumbers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludePunctuation">ResetExcludePunctuation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeUppercase">ResetExcludeUppercase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetGenerateStringKey">ResetGenerateStringKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetIncludeSpace">ResetIncludeSpace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetPasswordLength">ResetPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetRequireEachIncludedType">ResetRequireEachIncludedType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetSecretStringTemplate">ResetSecretStringTemplate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludeCharacters` <a name="ResetExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeCharacters"></a>

```csharp
private void ResetExcludeCharacters()
```

##### `ResetExcludeLowercase` <a name="ResetExcludeLowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeLowercase"></a>

```csharp
private void ResetExcludeLowercase()
```

##### `ResetExcludeNumbers` <a name="ResetExcludeNumbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeNumbers"></a>

```csharp
private void ResetExcludeNumbers()
```

##### `ResetExcludePunctuation` <a name="ResetExcludePunctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludePunctuation"></a>

```csharp
private void ResetExcludePunctuation()
```

##### `ResetExcludeUppercase` <a name="ResetExcludeUppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetExcludeUppercase"></a>

```csharp
private void ResetExcludeUppercase()
```

##### `ResetGenerateStringKey` <a name="ResetGenerateStringKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetGenerateStringKey"></a>

```csharp
private void ResetGenerateStringKey()
```

##### `ResetIncludeSpace` <a name="ResetIncludeSpace" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetIncludeSpace"></a>

```csharp
private void ResetIncludeSpace()
```

##### `ResetPasswordLength` <a name="ResetPasswordLength" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetPasswordLength"></a>

```csharp
private void ResetPasswordLength()
```

##### `ResetRequireEachIncludedType` <a name="ResetRequireEachIncludedType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetRequireEachIncludedType"></a>

```csharp
private void ResetRequireEachIncludedType()
```

##### `ResetSecretStringTemplate` <a name="ResetSecretStringTemplate" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.resetSecretStringTemplate"></a>

```csharp
private void ResetSecretStringTemplate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharactersInput">ExcludeCharactersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercaseInput">ExcludeLowercaseInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbersInput">ExcludeNumbersInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuationInput">ExcludePunctuationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercaseInput">ExcludeUppercaseInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKeyInput">GenerateStringKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpaceInput">IncludeSpaceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLengthInput">PasswordLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedTypeInput">RequireEachIncludedTypeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplateInput">SecretStringTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharacters">ExcludeCharacters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercase">ExcludeLowercase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbers">ExcludeNumbers</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuation">ExcludePunctuation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercase">ExcludeUppercase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKey">GenerateStringKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpace">IncludeSpace</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLength">PasswordLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedType">RequireEachIncludedType</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplate">SecretStringTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExcludeCharactersInput`<sup>Optional</sup> <a name="ExcludeCharactersInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharactersInput"></a>

```csharp
public string ExcludeCharactersInput { get; }
```

- *Type:* string

---

##### `ExcludeLowercaseInput`<sup>Optional</sup> <a name="ExcludeLowercaseInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercaseInput"></a>

```csharp
public bool|IResolvable ExcludeLowercaseInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExcludeNumbersInput`<sup>Optional</sup> <a name="ExcludeNumbersInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbersInput"></a>

```csharp
public bool|IResolvable ExcludeNumbersInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExcludePunctuationInput`<sup>Optional</sup> <a name="ExcludePunctuationInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuationInput"></a>

```csharp
public bool|IResolvable ExcludePunctuationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExcludeUppercaseInput`<sup>Optional</sup> <a name="ExcludeUppercaseInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercaseInput"></a>

```csharp
public bool|IResolvable ExcludeUppercaseInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GenerateStringKeyInput`<sup>Optional</sup> <a name="GenerateStringKeyInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKeyInput"></a>

```csharp
public string GenerateStringKeyInput { get; }
```

- *Type:* string

---

##### `IncludeSpaceInput`<sup>Optional</sup> <a name="IncludeSpaceInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpaceInput"></a>

```csharp
public bool|IResolvable IncludeSpaceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PasswordLengthInput`<sup>Optional</sup> <a name="PasswordLengthInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLengthInput"></a>

```csharp
public double PasswordLengthInput { get; }
```

- *Type:* double

---

##### `RequireEachIncludedTypeInput`<sup>Optional</sup> <a name="RequireEachIncludedTypeInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedTypeInput"></a>

```csharp
public bool|IResolvable RequireEachIncludedTypeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecretStringTemplateInput`<sup>Optional</sup> <a name="SecretStringTemplateInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplateInput"></a>

```csharp
public string SecretStringTemplateInput { get; }
```

- *Type:* string

---

##### `ExcludeCharacters`<sup>Required</sup> <a name="ExcludeCharacters" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeCharacters"></a>

```csharp
public string ExcludeCharacters { get; }
```

- *Type:* string

---

##### `ExcludeLowercase`<sup>Required</sup> <a name="ExcludeLowercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeLowercase"></a>

```csharp
public bool|IResolvable ExcludeLowercase { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExcludeNumbers`<sup>Required</sup> <a name="ExcludeNumbers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeNumbers"></a>

```csharp
public bool|IResolvable ExcludeNumbers { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExcludePunctuation`<sup>Required</sup> <a name="ExcludePunctuation" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludePunctuation"></a>

```csharp
public bool|IResolvable ExcludePunctuation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ExcludeUppercase`<sup>Required</sup> <a name="ExcludeUppercase" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.excludeUppercase"></a>

```csharp
public bool|IResolvable ExcludeUppercase { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `GenerateStringKey`<sup>Required</sup> <a name="GenerateStringKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.generateStringKey"></a>

```csharp
public string GenerateStringKey { get; }
```

- *Type:* string

---

##### `IncludeSpace`<sup>Required</sup> <a name="IncludeSpace" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.includeSpace"></a>

```csharp
public bool|IResolvable IncludeSpace { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PasswordLength`<sup>Required</sup> <a name="PasswordLength" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.passwordLength"></a>

```csharp
public double PasswordLength { get; }
```

- *Type:* double

---

##### `RequireEachIncludedType`<sup>Required</sup> <a name="RequireEachIncludedType" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.requireEachIncludedType"></a>

```csharp
public bool|IResolvable RequireEachIncludedType { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecretStringTemplate`<sup>Required</sup> <a name="SecretStringTemplate" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.secretStringTemplate"></a>

```csharp
public string SecretStringTemplate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretStringOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecretsmanagerSecretGenerateSecretString InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretGenerateSecretString">SecretsmanagerSecretGenerateSecretString</a>

---


### SecretsmanagerSecretReplicaRegionsList <a name="SecretsmanagerSecretReplicaRegionsList" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecretReplicaRegionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get"></a>

```csharp
private SecretsmanagerSecretReplicaRegionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsList.property.internalValue"></a>

```csharp
public IResolvable|SecretsmanagerSecretReplicaRegions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>[]

---


### SecretsmanagerSecretReplicaRegionsOutputReference <a name="SecretsmanagerSecretReplicaRegionsOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecretReplicaRegionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecretsmanagerSecretReplicaRegions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretReplicaRegions">SecretsmanagerSecretReplicaRegions</a>

---


### SecretsmanagerSecretTagsList <a name="SecretsmanagerSecretTagsList" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecretTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get"></a>

```csharp
private SecretsmanagerSecretTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsList.property.internalValue"></a>

```csharp
public IResolvable|SecretsmanagerSecretTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>[]

---


### SecretsmanagerSecretTagsOutputReference <a name="SecretsmanagerSecretTagsOutputReference" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecretsmanagerSecretTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecretsmanagerSecretTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.secretsmanagerSecret.SecretsmanagerSecretTags">SecretsmanagerSecretTags</a>

---



