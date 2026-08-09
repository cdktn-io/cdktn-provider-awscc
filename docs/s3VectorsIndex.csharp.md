# `s3VectorsIndex` Submodule <a name="`s3VectorsIndex` Submodule" id="@cdktn/provider-awscc.s3VectorsIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3VectorsIndex <a name="S3VectorsIndex" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index awscc_s3vectors_index}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3VectorsIndex(Construct Scope, string Id, S3VectorsIndexConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig">S3VectorsIndexConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig">S3VectorsIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration">PutMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetIndexName">ResetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetMetadataConfiguration">ResetMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketArn">ResetVectorBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketName">ResetVectorBucketName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration"></a>

```csharp
private void PutEncryptionConfiguration(S3VectorsIndexEncryptionConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

---

##### `PutMetadataConfiguration` <a name="PutMetadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration"></a>

```csharp
private void PutMetadataConfiguration(S3VectorsIndexMetadataConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putMetadataConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putTags"></a>

```csharp
private void PutTags(IResolvable|S3VectorsIndexTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetEncryptionConfiguration"></a>

```csharp
private void ResetEncryptionConfiguration()
```

##### `ResetIndexName` <a name="ResetIndexName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetIndexName"></a>

```csharp
private void ResetIndexName()
```

##### `ResetMetadataConfiguration` <a name="ResetMetadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetMetadataConfiguration"></a>

```csharp
private void ResetMetadataConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVectorBucketArn` <a name="ResetVectorBucketArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketArn"></a>

```csharp
private void ResetVectorBucketArn()
```

##### `ResetVectorBucketName` <a name="ResetVectorBucketName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.resetVectorBucketName"></a>

```csharp
private void ResetVectorBucketName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3VectorsIndex resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3VectorsIndex.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3VectorsIndex.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3VectorsIndex.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3VectorsIndex.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3VectorsIndex resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3VectorsIndex to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3VectorsIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3VectorsIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference">S3VectorsIndexEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexArn">IndexArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfiguration">MetadataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference">S3VectorsIndexMetadataConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList">S3VectorsIndexTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataTypeInput">DataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimensionInput">DimensionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetricInput">DistanceMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexNameInput">IndexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfigurationInput">MetadataConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArnInput">VectorBucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketNameInput">VectorBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimension">Dimension</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetric">DistanceMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArn">VectorBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketName">VectorBucketName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfiguration"></a>

```csharp
public S3VectorsIndexEncryptionConfigurationOutputReference EncryptionConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference">S3VectorsIndexEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexArn`<sup>Required</sup> <a name="IndexArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexArn"></a>

```csharp
public string IndexArn { get; }
```

- *Type:* string

---

##### `MetadataConfiguration`<sup>Required</sup> <a name="MetadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfiguration"></a>

```csharp
public S3VectorsIndexMetadataConfigurationOutputReference MetadataConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference">S3VectorsIndexMetadataConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tags"></a>

```csharp
public S3VectorsIndexTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList">S3VectorsIndexTagsList</a>

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataTypeInput"></a>

```csharp
public string DataTypeInput { get; }
```

- *Type:* string

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimensionInput"></a>

```csharp
public double DimensionInput { get; }
```

- *Type:* double

---

##### `DistanceMetricInput`<sup>Optional</sup> <a name="DistanceMetricInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetricInput"></a>

```csharp
public string DistanceMetricInput { get; }
```

- *Type:* string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.encryptionConfigurationInput"></a>

```csharp
public IResolvable|S3VectorsIndexEncryptionConfiguration EncryptionConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexNameInput"></a>

```csharp
public string IndexNameInput { get; }
```

- *Type:* string

---

##### `MetadataConfigurationInput`<sup>Optional</sup> <a name="MetadataConfigurationInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.metadataConfigurationInput"></a>

```csharp
public IResolvable|S3VectorsIndexMetadataConfiguration MetadataConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tagsInput"></a>

```csharp
public IResolvable|S3VectorsIndexTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]

---

##### `VectorBucketArnInput`<sup>Optional</sup> <a name="VectorBucketArnInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArnInput"></a>

```csharp
public string VectorBucketArnInput { get; }
```

- *Type:* string

---

##### `VectorBucketNameInput`<sup>Optional</sup> <a name="VectorBucketNameInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketNameInput"></a>

```csharp
public string VectorBucketNameInput { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.dimension"></a>

```csharp
public double Dimension { get; }
```

- *Type:* double

---

##### `DistanceMetric`<sup>Required</sup> <a name="DistanceMetric" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.distanceMetric"></a>

```csharp
public string DistanceMetric { get; }
```

- *Type:* string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `VectorBucketArn`<sup>Required</sup> <a name="VectorBucketArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketArn"></a>

```csharp
public string VectorBucketArn { get; }
```

- *Type:* string

---

##### `VectorBucketName`<sup>Required</sup> <a name="VectorBucketName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.vectorBucketName"></a>

```csharp
public string VectorBucketName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndex.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3VectorsIndexConfig <a name="S3VectorsIndexConfig" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3VectorsIndexConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DataType,
    double Dimension,
    string DistanceMetric,
    S3VectorsIndexEncryptionConfiguration EncryptionConfiguration = null,
    string IndexName = null,
    S3VectorsIndexMetadataConfiguration MetadataConfiguration = null,
    IResolvable|S3VectorsIndexTags[] Tags = null,
    string VectorBucketArn = null,
    string VectorBucketName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dataType">DataType</a></code> | <code>string</code> | The data type of the vectors to be inserted into the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dimension">Dimension</a></code> | <code>double</code> | The dimensions of the vectors to be inserted into the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.distanceMetric">DistanceMetric</a></code> | <code>string</code> | The distance metric to be used for similarity search. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a></code> | The encryption configuration for the index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.indexName">IndexName</a></code> | <code>string</code> | The name of the vector index to create. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.metadataConfiguration">MetadataConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a></code> | The metadata configuration for the vector index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]</code> | User tags (key-value pairs) to associate with the index. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketArn">VectorBucketArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the vector bucket. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketName">VectorBucketName</a></code> | <code>string</code> | The name of the vector bucket that contains the vector index. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dataType"></a>

```csharp
public string DataType { get; set; }
```

- *Type:* string

The data type of the vectors to be inserted into the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#data_type S3VectorsIndex#data_type}

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.dimension"></a>

```csharp
public double Dimension { get; set; }
```

- *Type:* double

The dimensions of the vectors to be inserted into the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#dimension S3VectorsIndex#dimension}

---

##### `DistanceMetric`<sup>Required</sup> <a name="DistanceMetric" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.distanceMetric"></a>

```csharp
public string DistanceMetric { get; set; }
```

- *Type:* string

The distance metric to be used for similarity search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#distance_metric S3VectorsIndex#distance_metric}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.encryptionConfiguration"></a>

```csharp
public S3VectorsIndexEncryptionConfiguration EncryptionConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

The encryption configuration for the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#encryption_configuration S3VectorsIndex#encryption_configuration}

---

##### `IndexName`<sup>Optional</sup> <a name="IndexName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.indexName"></a>

```csharp
public string IndexName { get; set; }
```

- *Type:* string

The name of the vector index to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#index_name S3VectorsIndex#index_name}

---

##### `MetadataConfiguration`<sup>Optional</sup> <a name="MetadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.metadataConfiguration"></a>

```csharp
public S3VectorsIndexMetadataConfiguration MetadataConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

The metadata configuration for the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#metadata_configuration S3VectorsIndex#metadata_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.tags"></a>

```csharp
public IResolvable|S3VectorsIndexTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]

User tags (key-value pairs) to associate with the index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#tags S3VectorsIndex#tags}

---

##### `VectorBucketArn`<sup>Optional</sup> <a name="VectorBucketArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketArn"></a>

```csharp
public string VectorBucketArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the vector bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#vector_bucket_arn S3VectorsIndex#vector_bucket_arn}

---

##### `VectorBucketName`<sup>Optional</sup> <a name="VectorBucketName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexConfig.property.vectorBucketName"></a>

```csharp
public string VectorBucketName { get; set; }
```

- *Type:* string

The name of the vector bucket that contains the vector index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#vector_bucket_name S3VectorsIndex#vector_bucket_name}

---

### S3VectorsIndexEncryptionConfiguration <a name="S3VectorsIndexEncryptionConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3VectorsIndexEncryptionConfiguration {
    string KmsKeyArn = null,
    string SseType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | AWS Key Management Service (KMS) customer managed key ID to use for the encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.sseType">SseType</a></code> | <code>string</code> | Defines the server-side encryption type for index encryption configuration. Defaults to the parent vector bucket's encryption settings when unspecified. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

AWS Key Management Service (KMS) customer managed key ID to use for the encryption configuration.

This parameter is allowed if and only if sseType is set to aws:kms

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#kms_key_arn S3VectorsIndex#kms_key_arn}

---

##### `SseType`<sup>Optional</sup> <a name="SseType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration.property.sseType"></a>

```csharp
public string SseType { get; set; }
```

- *Type:* string

Defines the server-side encryption type for index encryption configuration. Defaults to the parent vector bucket's encryption settings when unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#sse_type S3VectorsIndex#sse_type}

---

### S3VectorsIndexMetadataConfiguration <a name="S3VectorsIndexMetadataConfiguration" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3VectorsIndexMetadataConfiguration {
    string[] NonFilterableMetadataKeys = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.property.nonFilterableMetadataKeys">NonFilterableMetadataKeys</a></code> | <code>string[]</code> | Non-filterable metadata keys allow you to enrich vectors with additional context during storage and retrieval. |

---

##### `NonFilterableMetadataKeys`<sup>Optional</sup> <a name="NonFilterableMetadataKeys" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration.property.nonFilterableMetadataKeys"></a>

```csharp
public string[] NonFilterableMetadataKeys { get; set; }
```

- *Type:* string[]

Non-filterable metadata keys allow you to enrich vectors with additional context during storage and retrieval.

Unlike default metadata keys, these keys cannot be used as query filters. Non-filterable metadata keys can be retrieved but cannot be searched, queried, or filtered. You can access non-filterable metadata keys of your vectors after finding the vectors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/s3vectors_index#non_filterable_metadata_keys S3VectorsIndex#non_filterable_metadata_keys}

---

### S3VectorsIndexTags <a name="S3VectorsIndexTags" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3VectorsIndexTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.key">Key</a></code> | <code>string</code> | Tag key must be between 1 to 128 characters in length. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.value">Value</a></code> | <code>string</code> | Tag value must be between 0 to 256 characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Tag key must be between 1 to 128 characters in length.

Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Tag value must be between 0 to 256 characters in length.

Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

## Classes <a name="Classes" id="Classes"></a>

### S3VectorsIndexEncryptionConfigurationOutputReference <a name="S3VectorsIndexEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3VectorsIndexEncryptionConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetSseType">ResetSseType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetSseType` <a name="ResetSseType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.resetSseType"></a>

```csharp
private void ResetSseType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseTypeInput">SseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseType">SseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `SseTypeInput`<sup>Optional</sup> <a name="SseTypeInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseTypeInput"></a>

```csharp
public string SseTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `SseType`<sup>Required</sup> <a name="SseType" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.sseType"></a>

```csharp
public string SseType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3VectorsIndexEncryptionConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexEncryptionConfiguration">S3VectorsIndexEncryptionConfiguration</a>

---


### S3VectorsIndexMetadataConfigurationOutputReference <a name="S3VectorsIndexMetadataConfigurationOutputReference" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3VectorsIndexMetadataConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resetNonFilterableMetadataKeys">ResetNonFilterableMetadataKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNonFilterableMetadataKeys` <a name="ResetNonFilterableMetadataKeys" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.resetNonFilterableMetadataKeys"></a>

```csharp
private void ResetNonFilterableMetadataKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeysInput">NonFilterableMetadataKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeys">NonFilterableMetadataKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NonFilterableMetadataKeysInput`<sup>Optional</sup> <a name="NonFilterableMetadataKeysInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeysInput"></a>

```csharp
public string[] NonFilterableMetadataKeysInput { get; }
```

- *Type:* string[]

---

##### `NonFilterableMetadataKeys`<sup>Required</sup> <a name="NonFilterableMetadataKeys" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.nonFilterableMetadataKeys"></a>

```csharp
public string[] NonFilterableMetadataKeys { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3VectorsIndexMetadataConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexMetadataConfiguration">S3VectorsIndexMetadataConfiguration</a>

---


### S3VectorsIndexTagsList <a name="S3VectorsIndexTagsList" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3VectorsIndexTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.get"></a>

```csharp
private S3VectorsIndexTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsList.property.internalValue"></a>

```csharp
public IResolvable|S3VectorsIndexTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>[]

---


### S3VectorsIndexTagsOutputReference <a name="S3VectorsIndexTagsOutputReference" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3VectorsIndexTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3VectorsIndexTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3VectorsIndex.S3VectorsIndexTags">S3VectorsIndexTags</a>

---



