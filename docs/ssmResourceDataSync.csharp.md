# `ssmResourceDataSync` Submodule <a name="`ssmResourceDataSync` Submodule" id="@cdktn/provider-awscc.ssmResourceDataSync"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmResourceDataSync <a name="SsmResourceDataSync" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync awscc_ssm_resource_data_sync}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmResourceDataSync(Construct Scope, string Id, SsmResourceDataSyncConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig">SsmResourceDataSyncConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig">SsmResourceDataSyncConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination">PutS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource">PutSyncSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketRegion">ResetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetS3Destination">ResetS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncFormat">ResetSyncFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncSource">ResetSyncSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncType">ResetSyncType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination"></a>

```csharp
private void PutS3Destination(SsmResourceDataSyncS3Destination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---

##### `PutSyncSource` <a name="PutSyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource"></a>

```csharp
private void PutSyncSource(SsmResourceDataSyncSyncSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.putSyncSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

---

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketPrefix"></a>

```csharp
private void ResetBucketPrefix()
```

##### `ResetBucketRegion` <a name="ResetBucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetBucketRegion"></a>

```csharp
private void ResetBucketRegion()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetS3Destination` <a name="ResetS3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetS3Destination"></a>

```csharp
private void ResetS3Destination()
```

##### `ResetSyncFormat` <a name="ResetSyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncFormat"></a>

```csharp
private void ResetSyncFormat()
```

##### `ResetSyncSource` <a name="ResetSyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncSource"></a>

```csharp
private void ResetSyncSource()
```

##### `ResetSyncType` <a name="ResetSyncType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.resetSyncType"></a>

```csharp
private void ResetSyncType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmResourceDataSync resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmResourceDataSync.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmResourceDataSync.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmResourceDataSync.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmResourceDataSync.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmResourceDataSync resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmResourceDataSync to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmResourceDataSync that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmResourceDataSync to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSource">SyncSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference">SsmResourceDataSyncSyncSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegionInput">BucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput">S3DestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormatInput">SyncFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncNameInput">SyncNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSourceInput">SyncSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncTypeInput">SyncTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormat">SyncFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncName">SyncName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncType">SyncType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3Destination"></a>

```csharp
public SsmResourceDataSyncS3DestinationOutputReference S3Destination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference">SsmResourceDataSyncS3DestinationOutputReference</a>

---

##### `SyncSource`<sup>Required</sup> <a name="SyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSource"></a>

```csharp
public SsmResourceDataSyncSyncSourceOutputReference SyncSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference">SsmResourceDataSyncSyncSourceOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefixInput"></a>

```csharp
public string BucketPrefixInput { get; }
```

- *Type:* string

---

##### `BucketRegionInput`<sup>Optional</sup> <a name="BucketRegionInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegionInput"></a>

```csharp
public string BucketRegionInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.s3DestinationInput"></a>

```csharp
public IResolvable|SsmResourceDataSyncS3Destination S3DestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---

##### `SyncFormatInput`<sup>Optional</sup> <a name="SyncFormatInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormatInput"></a>

```csharp
public string SyncFormatInput { get; }
```

- *Type:* string

---

##### `SyncNameInput`<sup>Optional</sup> <a name="SyncNameInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncNameInput"></a>

```csharp
public string SyncNameInput { get; }
```

- *Type:* string

---

##### `SyncSourceInput`<sup>Optional</sup> <a name="SyncSourceInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncSourceInput"></a>

```csharp
public IResolvable|SsmResourceDataSyncSyncSource SyncSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

---

##### `SyncTypeInput`<sup>Optional</sup> <a name="SyncTypeInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncTypeInput"></a>

```csharp
public string SyncTypeInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SyncFormat`<sup>Required</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncFormat"></a>

```csharp
public string SyncFormat { get; }
```

- *Type:* string

---

##### `SyncName`<sup>Required</sup> <a name="SyncName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncName"></a>

```csharp
public string SyncName { get; }
```

- *Type:* string

---

##### `SyncType`<sup>Required</sup> <a name="SyncType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.syncType"></a>

```csharp
public string SyncType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSync.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmResourceDataSyncConfig <a name="SsmResourceDataSyncConfig" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmResourceDataSyncConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SyncName,
    string BucketName = null,
    string BucketPrefix = null,
    string BucketRegion = null,
    string KmsKeyArn = null,
    SsmResourceDataSyncS3Destination S3Destination = null,
    string SyncFormat = null,
    SsmResourceDataSyncSyncSource SyncSource = null,
    string SyncType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncName">SyncName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#sync_name SsmResourceDataSync#sync_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncFormat">SyncFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncSource">SyncSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#sync_source SsmResourceDataSync#sync_source}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncType">SyncType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#sync_type SsmResourceDataSync#sync_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SyncName`<sup>Required</sup> <a name="SyncName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncName"></a>

```csharp
public string SyncName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#sync_name SsmResourceDataSync#sync_name}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}.

---

##### `BucketRegion`<sup>Optional</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `S3Destination`<sup>Optional</sup> <a name="S3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.s3Destination"></a>

```csharp
public SsmResourceDataSyncS3Destination S3Destination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#s3_destination SsmResourceDataSync#s3_destination}.

---

##### `SyncFormat`<sup>Optional</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncFormat"></a>

```csharp
public string SyncFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

##### `SyncSource`<sup>Optional</sup> <a name="SyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncSource"></a>

```csharp
public SsmResourceDataSyncSyncSource SyncSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#sync_source SsmResourceDataSync#sync_source}.

---

##### `SyncType`<sup>Optional</sup> <a name="SyncType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncConfig.property.syncType"></a>

```csharp
public string SyncType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#sync_type SsmResourceDataSync#sync_type}.

---

### SsmResourceDataSyncS3Destination <a name="SsmResourceDataSyncS3Destination" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmResourceDataSyncS3Destination {
    string BucketName = null,
    string BucketPrefix = null,
    string BucketRegion = null,
    string KmsKeyArn = null,
    string SyncFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat">SyncFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_name SsmResourceDataSync#bucket_name}.

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_prefix SsmResourceDataSync#bucket_prefix}.

---

##### `BucketRegion`<sup>Optional</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#bucket_region SsmResourceDataSync#bucket_region}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#kms_key_arn SsmResourceDataSync#kms_key_arn}.

---

##### `SyncFormat`<sup>Optional</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination.property.syncFormat"></a>

```csharp
public string SyncFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#sync_format SsmResourceDataSync#sync_format}.

---

### SsmResourceDataSyncSyncSource <a name="SsmResourceDataSyncSyncSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmResourceDataSyncSyncSource {
    SsmResourceDataSyncSyncSourceAwsOrganizationsSource AwsOrganizationsSource = null,
    bool|IResolvable IncludeFutureRegions = null,
    string[] SourceRegions = null,
    string SourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.awsOrganizationsSource">AwsOrganizationsSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#aws_organizations_source SsmResourceDataSync#aws_organizations_source}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.includeFutureRegions">IncludeFutureRegions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#include_future_regions SsmResourceDataSync#include_future_regions}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceRegions">SourceRegions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#source_regions SsmResourceDataSync#source_regions}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceType">SourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#source_type SsmResourceDataSync#source_type}. |

---

##### `AwsOrganizationsSource`<sup>Optional</sup> <a name="AwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.awsOrganizationsSource"></a>

```csharp
public SsmResourceDataSyncSyncSourceAwsOrganizationsSource AwsOrganizationsSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#aws_organizations_source SsmResourceDataSync#aws_organizations_source}.

---

##### `IncludeFutureRegions`<sup>Optional</sup> <a name="IncludeFutureRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.includeFutureRegions"></a>

```csharp
public bool|IResolvable IncludeFutureRegions { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#include_future_regions SsmResourceDataSync#include_future_regions}.

---

##### `SourceRegions`<sup>Optional</sup> <a name="SourceRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceRegions"></a>

```csharp
public string[] SourceRegions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#source_regions SsmResourceDataSync#source_regions}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource.property.sourceType"></a>

```csharp
public string SourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#source_type SsmResourceDataSync#source_type}.

---

### SsmResourceDataSyncSyncSourceAwsOrganizationsSource <a name="SsmResourceDataSyncSyncSourceAwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmResourceDataSyncSyncSourceAwsOrganizationsSource {
    string[] OrganizationalUnits = null,
    string OrganizationSourceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#organizational_units SsmResourceDataSync#organizational_units}. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationSourceType">OrganizationSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#organization_source_type SsmResourceDataSync#organization_source_type}. |

---

##### `OrganizationalUnits`<sup>Optional</sup> <a name="OrganizationalUnits" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#organizational_units SsmResourceDataSync#organizational_units}.

---

##### `OrganizationSourceType`<sup>Optional</sup> <a name="OrganizationSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource.property.organizationSourceType"></a>

```csharp
public string OrganizationSourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssm_resource_data_sync#organization_source_type SsmResourceDataSync#organization_source_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmResourceDataSyncS3DestinationOutputReference <a name="SsmResourceDataSyncS3DestinationOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmResourceDataSyncS3DestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketRegion">ResetBucketRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat">ResetSyncFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketPrefix"></a>

```csharp
private void ResetBucketPrefix()
```

##### `ResetBucketRegion` <a name="ResetBucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetBucketRegion"></a>

```csharp
private void ResetBucketRegion()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetSyncFormat` <a name="ResetSyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.resetSyncFormat"></a>

```csharp
private void ResetSyncFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegionInput">BucketRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput">SyncFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion">BucketRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat">SyncFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefixInput"></a>

```csharp
public string BucketPrefixInput { get; }
```

- *Type:* string

---

##### `BucketRegionInput`<sup>Optional</sup> <a name="BucketRegionInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegionInput"></a>

```csharp
public string BucketRegionInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `SyncFormatInput`<sup>Optional</sup> <a name="SyncFormatInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormatInput"></a>

```csharp
public string SyncFormatInput { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketPrefix"></a>

```csharp
public string BucketPrefix { get; }
```

- *Type:* string

---

##### `BucketRegion`<sup>Required</sup> <a name="BucketRegion" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.bucketRegion"></a>

```csharp
public string BucketRegion { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SyncFormat`<sup>Required</sup> <a name="SyncFormat" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.syncFormat"></a>

```csharp
public string SyncFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3DestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmResourceDataSyncS3Destination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncS3Destination">SsmResourceDataSyncS3Destination</a>

---


### SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference <a name="SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationalUnits">ResetOrganizationalUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationSourceType">ResetOrganizationSourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrganizationalUnits` <a name="ResetOrganizationalUnits" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationalUnits"></a>

```csharp
private void ResetOrganizationalUnits()
```

##### `ResetOrganizationSourceType` <a name="ResetOrganizationSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.resetOrganizationSourceType"></a>

```csharp
private void ResetOrganizationSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnitsInput">OrganizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceTypeInput">OrganizationSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits">OrganizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType">OrganizationSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OrganizationalUnitsInput`<sup>Optional</sup> <a name="OrganizationalUnitsInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnitsInput"></a>

```csharp
public string[] OrganizationalUnitsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationSourceTypeInput`<sup>Optional</sup> <a name="OrganizationSourceTypeInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceTypeInput"></a>

```csharp
public string OrganizationSourceTypeInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnits`<sup>Required</sup> <a name="OrganizationalUnits" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationalUnits"></a>

```csharp
public string[] OrganizationalUnits { get; }
```

- *Type:* string[]

---

##### `OrganizationSourceType`<sup>Required</sup> <a name="OrganizationSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.organizationSourceType"></a>

```csharp
public string OrganizationSourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmResourceDataSyncSyncSourceAwsOrganizationsSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---


### SsmResourceDataSyncSyncSourceOutputReference <a name="SsmResourceDataSyncSyncSourceOutputReference" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmResourceDataSyncSyncSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource">PutAwsOrganizationsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetAwsOrganizationsSource">ResetAwsOrganizationsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetIncludeFutureRegions">ResetIncludeFutureRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceRegions">ResetSourceRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceType">ResetSourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsOrganizationsSource` <a name="PutAwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource"></a>

```csharp
private void PutAwsOrganizationsSource(SsmResourceDataSyncSyncSourceAwsOrganizationsSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.putAwsOrganizationsSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---

##### `ResetAwsOrganizationsSource` <a name="ResetAwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetAwsOrganizationsSource"></a>

```csharp
private void ResetAwsOrganizationsSource()
```

##### `ResetIncludeFutureRegions` <a name="ResetIncludeFutureRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetIncludeFutureRegions"></a>

```csharp
private void ResetIncludeFutureRegions()
```

##### `ResetSourceRegions` <a name="ResetSourceRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceRegions"></a>

```csharp
private void ResetSourceRegions()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.resetSourceType"></a>

```csharp
private void ResetSourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource">AwsOrganizationsSource</a></code> | <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSourceInput">AwsOrganizationsSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegionsInput">IncludeFutureRegionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegionsInput">SourceRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions">IncludeFutureRegions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions">SourceRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsOrganizationsSource`<sup>Required</sup> <a name="AwsOrganizationsSource" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSource"></a>

```csharp
public SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference AwsOrganizationsSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference">SsmResourceDataSyncSyncSourceAwsOrganizationsSourceOutputReference</a>

---

##### `AwsOrganizationsSourceInput`<sup>Optional</sup> <a name="AwsOrganizationsSourceInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.awsOrganizationsSourceInput"></a>

```csharp
public IResolvable|SsmResourceDataSyncSyncSourceAwsOrganizationsSource AwsOrganizationsSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceAwsOrganizationsSource">SsmResourceDataSyncSyncSourceAwsOrganizationsSource</a>

---

##### `IncludeFutureRegionsInput`<sup>Optional</sup> <a name="IncludeFutureRegionsInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegionsInput"></a>

```csharp
public bool|IResolvable IncludeFutureRegionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SourceRegionsInput`<sup>Optional</sup> <a name="SourceRegionsInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegionsInput"></a>

```csharp
public string[] SourceRegionsInput { get; }
```

- *Type:* string[]

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceTypeInput"></a>

```csharp
public string SourceTypeInput { get; }
```

- *Type:* string

---

##### `IncludeFutureRegions`<sup>Required</sup> <a name="IncludeFutureRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.includeFutureRegions"></a>

```csharp
public bool|IResolvable IncludeFutureRegions { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SourceRegions`<sup>Required</sup> <a name="SourceRegions" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceRegions"></a>

```csharp
public string[] SourceRegions { get; }
```

- *Type:* string[]

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmResourceDataSyncSyncSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmResourceDataSync.SsmResourceDataSyncSyncSource">SsmResourceDataSyncSyncSource</a>

---



