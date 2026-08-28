# `elasticacheServerlessCacheSnapshot` Submodule <a name="`elasticacheServerlessCacheSnapshot` Submodule" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheServerlessCacheSnapshot <a name="ElasticacheServerlessCacheSnapshot" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot awscc_elasticache_serverless_cache_snapshot}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheSnapshot(Construct Scope, string Id, ElasticacheServerlessCacheSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig">ElasticacheServerlessCacheSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig">ElasticacheServerlessCacheSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.putTags"></a>

```csharp
private void PutTags(IResolvable|ElasticacheServerlessCacheSnapshotTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]

---

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheServerlessCacheSnapshot resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheServerlessCacheSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheServerlessCacheSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheServerlessCacheSnapshot.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheServerlessCacheSnapshot.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ElasticacheServerlessCacheSnapshot resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheServerlessCacheSnapshot to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheServerlessCacheSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheServerlessCacheSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.bytesUsedForCache">BytesUsedForCache</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheConfiguration">ServerlessCacheConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference">ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.snapshotType">SnapshotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList">ElasticacheServerlessCacheSnapshotTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheNameInput">ServerlessCacheNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotNameInput">ServerlessCacheSnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheName">ServerlessCacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotName">ServerlessCacheSnapshotName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BytesUsedForCache`<sup>Required</sup> <a name="BytesUsedForCache" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.bytesUsedForCache"></a>

```csharp
public string BytesUsedForCache { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ServerlessCacheConfiguration`<sup>Required</sup> <a name="ServerlessCacheConfiguration" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheConfiguration"></a>

```csharp
public ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference ServerlessCacheConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference">ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference</a>

---

##### `SnapshotType`<sup>Required</sup> <a name="SnapshotType" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.snapshotType"></a>

```csharp
public string SnapshotType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tags"></a>

```csharp
public ElasticacheServerlessCacheSnapshotTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList">ElasticacheServerlessCacheSnapshotTagsList</a>

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `ServerlessCacheNameInput`<sup>Optional</sup> <a name="ServerlessCacheNameInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheNameInput"></a>

```csharp
public string ServerlessCacheNameInput { get; }
```

- *Type:* string

---

##### `ServerlessCacheSnapshotNameInput`<sup>Optional</sup> <a name="ServerlessCacheSnapshotNameInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotNameInput"></a>

```csharp
public string ServerlessCacheSnapshotNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tagsInput"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheSnapshotTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `ServerlessCacheName`<sup>Required</sup> <a name="ServerlessCacheName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheName"></a>

```csharp
public string ServerlessCacheName { get; }
```

- *Type:* string

---

##### `ServerlessCacheSnapshotName`<sup>Required</sup> <a name="ServerlessCacheSnapshotName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.serverlessCacheSnapshotName"></a>

```csharp
public string ServerlessCacheSnapshotName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheServerlessCacheSnapshotConfig <a name="ElasticacheServerlessCacheSnapshotConfig" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheSnapshotConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ServerlessCacheName,
    string ServerlessCacheSnapshotName,
    string KmsKeyId = null,
    IResolvable|ElasticacheServerlessCacheSnapshotTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheName">ServerlessCacheName</a></code> | <code>string</code> | The name of an existing serverless cache. The snapshot is created from this cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheSnapshotName">ServerlessCacheSnapshotName</a></code> | <code>string</code> | The name of the serverless cache snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the snapshot. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]</code> | A list of tags to be added to the serverless cache snapshot resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ServerlessCacheName`<sup>Required</sup> <a name="ServerlessCacheName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheName"></a>

```csharp
public string ServerlessCacheName { get; set; }
```

- *Type:* string

The name of an existing serverless cache. The snapshot is created from this cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#serverless_cache_name ElasticacheServerlessCacheSnapshot#serverless_cache_name}

---

##### `ServerlessCacheSnapshotName`<sup>Required</sup> <a name="ServerlessCacheSnapshotName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.serverlessCacheSnapshotName"></a>

```csharp
public string ServerlessCacheSnapshotName { get; set; }
```

- *Type:* string

The name of the serverless cache snapshot.

Must be unique for the customer account. This value is stored as a lowercase string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#serverless_cache_snapshot_name ElasticacheServerlessCacheSnapshot#serverless_cache_snapshot_name}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the snapshot.

Provide the key ARN: the resource returns the key ARN on read, so supplying a bare key ID or alias for this createOnly property may be reported as drift by CloudFormation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#kms_key_id ElasticacheServerlessCacheSnapshot#kms_key_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotConfig.property.tags"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheSnapshotTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]

A list of tags to be added to the serverless cache snapshot resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#tags ElasticacheServerlessCacheSnapshot#tags}

---

### ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration <a name="ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration {

};
```


### ElasticacheServerlessCacheSnapshotTags <a name="ElasticacheServerlessCacheSnapshotTags" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheSnapshotTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.key">Key</a></code> | <code>string</code> | The key for the tag. May not be null. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.value">Value</a></code> | <code>string</code> | The tag's value. May be null. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key for the tag. May not be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#key ElasticacheServerlessCacheSnapshot#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag's value. May be null.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_serverless_cache_snapshot#value ElasticacheServerlessCacheSnapshot#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference <a name="ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.majorEngineVersion">MajorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.serverlessCacheName">ServerlessCacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration">ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `MajorEngineVersion`<sup>Required</sup> <a name="MajorEngineVersion" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.majorEngineVersion"></a>

```csharp
public string MajorEngineVersion { get; }
```

- *Type:* string

---

##### `ServerlessCacheName`<sup>Required</sup> <a name="ServerlessCacheName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.serverlessCacheName"></a>

```csharp
public string ServerlessCacheName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfigurationOutputReference.property.internalValue"></a>

```csharp
public ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration">ElasticacheServerlessCacheSnapshotServerlessCacheConfiguration</a>

---


### ElasticacheServerlessCacheSnapshotTagsList <a name="ElasticacheServerlessCacheSnapshotTagsList" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheSnapshotTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.get"></a>

```csharp
private ElasticacheServerlessCacheSnapshotTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsList.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheSnapshotTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>[]

---


### ElasticacheServerlessCacheSnapshotTagsOutputReference <a name="ElasticacheServerlessCacheSnapshotTagsOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheSnapshotTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheSnapshotTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCacheSnapshot.ElasticacheServerlessCacheSnapshotTags">ElasticacheServerlessCacheSnapshotTags</a>

---



