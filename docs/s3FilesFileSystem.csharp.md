# `s3FilesFileSystem` Submodule <a name="`s3FilesFileSystem` Submodule" id="@cdktn/provider-awscc.s3FilesFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesFileSystem <a name="S3FilesFileSystem" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system awscc_s3files_file_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystem(Construct Scope, string Id, S3FilesFileSystemConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig">S3FilesFileSystemConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig">S3FilesFileSystemConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration">PutSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetAcceptBucketWarning">ResetAcceptBucketWarning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetSynchronizationConfiguration">ResetSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSynchronizationConfiguration` <a name="PutSynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration"></a>

```csharp
private void PutSynchronizationConfiguration(S3FilesFileSystemSynchronizationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putSynchronizationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags"></a>

```csharp
private void PutTags(IResolvable|S3FilesFileSystemTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]

---

##### `ResetAcceptBucketWarning` <a name="ResetAcceptBucketWarning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetAcceptBucketWarning"></a>

```csharp
private void ResetAcceptBucketWarning()
```

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetClientToken"></a>

```csharp
private void ResetClientToken()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetSynchronizationConfiguration` <a name="ResetSynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetSynchronizationConfiguration"></a>

```csharp
private void ResetSynchronizationConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3FilesFileSystem resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3FilesFileSystem.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3FilesFileSystem.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3FilesFileSystem.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

S3FilesFileSystem.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a S3FilesFileSystem resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3FilesFileSystem to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3FilesFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemArn">FileSystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfiguration">SynchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference">S3FilesFileSystemSynchronizationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList">S3FilesFileSystemTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarningInput">AcceptBucketWarningInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientTokenInput">ClientTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfigurationInput">SynchronizationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarning">AcceptBucketWarning</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `FileSystemArn`<sup>Required</sup> <a name="FileSystemArn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemArn"></a>

```csharp
public string FileSystemArn { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `SynchronizationConfiguration`<sup>Required</sup> <a name="SynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfiguration"></a>

```csharp
public S3FilesFileSystemSynchronizationConfigurationOutputReference SynchronizationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference">S3FilesFileSystemSynchronizationConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tags"></a>

```csharp
public S3FilesFileSystemTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList">S3FilesFileSystemTagsList</a>

---

##### `AcceptBucketWarningInput`<sup>Optional</sup> <a name="AcceptBucketWarningInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarningInput"></a>

```csharp
public bool|IResolvable AcceptBucketWarningInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientTokenInput"></a>

```csharp
public string ClientTokenInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SynchronizationConfigurationInput`<sup>Optional</sup> <a name="SynchronizationConfigurationInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.synchronizationConfigurationInput"></a>

```csharp
public IResolvable|S3FilesFileSystemSynchronizationConfiguration SynchronizationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tagsInput"></a>

```csharp
public IResolvable|S3FilesFileSystemTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]

---

##### `AcceptBucketWarning`<sup>Required</sup> <a name="AcceptBucketWarning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.acceptBucketWarning"></a>

```csharp
public bool|IResolvable AcceptBucketWarning { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystem.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesFileSystemConfig <a name="S3FilesFileSystemConfig" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Bucket,
    string RoleArn,
    bool|IResolvable AcceptBucketWarning = null,
    string ClientToken = null,
    string KmsKeyId = null,
    string Prefix = null,
    S3FilesFileSystemSynchronizationConfiguration SynchronizationConfiguration = null,
    IResolvable|S3FilesFileSystemTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#bucket S3FilesFileSystem#bucket}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#role_arn S3FilesFileSystem#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.acceptBucketWarning">AcceptBucketWarning</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#accept_bucket_warning S3FilesFileSystem#accept_bucket_warning}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.clientToken">ClientToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#client_token S3FilesFileSystem#client_token}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#kms_key_id S3FilesFileSystem#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.synchronizationConfiguration">SynchronizationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#synchronization_configuration S3FilesFileSystem#synchronization_configuration}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#tags S3FilesFileSystem#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#bucket S3FilesFileSystem#bucket}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#role_arn S3FilesFileSystem#role_arn}.

---

##### `AcceptBucketWarning`<sup>Optional</sup> <a name="AcceptBucketWarning" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.acceptBucketWarning"></a>

```csharp
public bool|IResolvable AcceptBucketWarning { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#accept_bucket_warning S3FilesFileSystem#accept_bucket_warning}.

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.clientToken"></a>

```csharp
public string ClientToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#client_token S3FilesFileSystem#client_token}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#kms_key_id S3FilesFileSystem#kms_key_id}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}.

---

##### `SynchronizationConfiguration`<sup>Optional</sup> <a name="SynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.synchronizationConfiguration"></a>

```csharp
public S3FilesFileSystemSynchronizationConfiguration SynchronizationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#synchronization_configuration S3FilesFileSystem#synchronization_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemConfig.property.tags"></a>

```csharp
public IResolvable|S3FilesFileSystemTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#tags S3FilesFileSystem#tags}.

---

### S3FilesFileSystemSynchronizationConfiguration <a name="S3FilesFileSystemSynchronizationConfiguration" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemSynchronizationConfiguration {
    IResolvable|S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[] ExpirationDataRules = null,
    IResolvable|S3FilesFileSystemSynchronizationConfigurationImportDataRules[] ImportDataRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.expirationDataRules">ExpirationDataRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#expiration_data_rules S3FilesFileSystem#expiration_data_rules}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.importDataRules">ImportDataRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#import_data_rules S3FilesFileSystem#import_data_rules}. |

---

##### `ExpirationDataRules`<sup>Optional</sup> <a name="ExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.expirationDataRules"></a>

```csharp
public IResolvable|S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[] ExpirationDataRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#expiration_data_rules S3FilesFileSystem#expiration_data_rules}.

---

##### `ImportDataRules`<sup>Optional</sup> <a name="ImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration.property.importDataRules"></a>

```csharp
public IResolvable|S3FilesFileSystemSynchronizationConfigurationImportDataRules[] ImportDataRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#import_data_rules S3FilesFileSystem#import_data_rules}.

---

### S3FilesFileSystemSynchronizationConfigurationExpirationDataRules <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemSynchronizationConfigurationExpirationDataRules {
    double DaysAfterLastAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.property.daysAfterLastAccess">DaysAfterLastAccess</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#days_after_last_access S3FilesFileSystem#days_after_last_access}. |

---

##### `DaysAfterLastAccess`<sup>Optional</sup> <a name="DaysAfterLastAccess" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules.property.daysAfterLastAccess"></a>

```csharp
public double DaysAfterLastAccess { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#days_after_last_access S3FilesFileSystem#days_after_last_access}.

---

### S3FilesFileSystemSynchronizationConfigurationImportDataRules <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemSynchronizationConfigurationImportDataRules {
    string Prefix = null,
    double SizeLessThan = null,
    string Trigger = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.sizeLessThan">SizeLessThan</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#size_less_than S3FilesFileSystem#size_less_than}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.trigger">Trigger</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#trigger S3FilesFileSystem#trigger}. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#prefix S3FilesFileSystem#prefix}.

---

##### `SizeLessThan`<sup>Optional</sup> <a name="SizeLessThan" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.sizeLessThan"></a>

```csharp
public double SizeLessThan { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#size_less_than S3FilesFileSystem#size_less_than}.

---

##### `Trigger`<sup>Optional</sup> <a name="Trigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules.property.trigger"></a>

```csharp
public string Trigger { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#trigger S3FilesFileSystem#trigger}.

---

### S3FilesFileSystemTags <a name="S3FilesFileSystemTags" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#key S3FilesFileSystem#key}. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#value S3FilesFileSystem#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#key S3FilesFileSystem#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3files_file_system#value S3FilesFileSystem#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get"></a>

```csharp
private S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList.property.internalValue"></a>

```csharp
public IResolvable|S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]

---


### S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resetDaysAfterLastAccess">ResetDaysAfterLastAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysAfterLastAccess` <a name="ResetDaysAfterLastAccess" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.resetDaysAfterLastAccess"></a>

```csharp
private void ResetDaysAfterLastAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccessInput">DaysAfterLastAccessInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccess">DaysAfterLastAccess</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysAfterLastAccessInput`<sup>Optional</sup> <a name="DaysAfterLastAccessInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccessInput"></a>

```csharp
public double DaysAfterLastAccessInput { get; }
```

- *Type:* double

---

##### `DaysAfterLastAccess`<sup>Required</sup> <a name="DaysAfterLastAccess" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.daysAfterLastAccess"></a>

```csharp
public double DaysAfterLastAccess { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3FilesFileSystemSynchronizationConfigurationExpirationDataRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>

---


### S3FilesFileSystemSynchronizationConfigurationImportDataRulesList <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRulesList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemSynchronizationConfigurationImportDataRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get"></a>

```csharp
private S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList.property.internalValue"></a>

```csharp
public IResolvable|S3FilesFileSystemSynchronizationConfigurationImportDataRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]

---


### S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetSizeLessThan">ResetSizeLessThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetTrigger">ResetTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetSizeLessThan` <a name="ResetSizeLessThan" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetSizeLessThan"></a>

```csharp
private void ResetSizeLessThan()
```

##### `ResetTrigger` <a name="ResetTrigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.resetTrigger"></a>

```csharp
private void ResetTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThanInput">SizeLessThanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.triggerInput">TriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThan">SizeLessThan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.trigger">Trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `SizeLessThanInput`<sup>Optional</sup> <a name="SizeLessThanInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThanInput"></a>

```csharp
public double SizeLessThanInput { get; }
```

- *Type:* double

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.triggerInput"></a>

```csharp
public string TriggerInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `SizeLessThan`<sup>Required</sup> <a name="SizeLessThan" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.sizeLessThan"></a>

```csharp
public double SizeLessThan { get; }
```

- *Type:* double

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.trigger"></a>

```csharp
public string Trigger { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3FilesFileSystemSynchronizationConfigurationImportDataRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>

---


### S3FilesFileSystemSynchronizationConfigurationOutputReference <a name="S3FilesFileSystemSynchronizationConfigurationOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemSynchronizationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules">PutExpirationDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules">PutImportDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetExpirationDataRules">ResetExpirationDataRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetImportDataRules">ResetImportDataRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExpirationDataRules` <a name="PutExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules"></a>

```csharp
private void PutExpirationDataRules(IResolvable|S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putExpirationDataRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]

---

##### `PutImportDataRules` <a name="PutImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules"></a>

```csharp
private void PutImportDataRules(IResolvable|S3FilesFileSystemSynchronizationConfigurationImportDataRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.putImportDataRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]

---

##### `ResetExpirationDataRules` <a name="ResetExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetExpirationDataRules"></a>

```csharp
private void ResetExpirationDataRules()
```

##### `ResetImportDataRules` <a name="ResetImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.resetImportDataRules"></a>

```csharp
private void ResetImportDataRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRules">ExpirationDataRules</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList">S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRules">ImportDataRules</a></code> | <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList">S3FilesFileSystemSynchronizationConfigurationImportDataRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.latestVersionNumber">LatestVersionNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRulesInput">ExpirationDataRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRulesInput">ImportDataRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExpirationDataRules`<sup>Required</sup> <a name="ExpirationDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRules"></a>

```csharp
public S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList ExpirationDataRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList">S3FilesFileSystemSynchronizationConfigurationExpirationDataRulesList</a>

---

##### `ImportDataRules`<sup>Required</sup> <a name="ImportDataRules" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRules"></a>

```csharp
public S3FilesFileSystemSynchronizationConfigurationImportDataRulesList ImportDataRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRulesList">S3FilesFileSystemSynchronizationConfigurationImportDataRulesList</a>

---

##### `LatestVersionNumber`<sup>Required</sup> <a name="LatestVersionNumber" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.latestVersionNumber"></a>

```csharp
public double LatestVersionNumber { get; }
```

- *Type:* double

---

##### `ExpirationDataRulesInput`<sup>Optional</sup> <a name="ExpirationDataRulesInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.expirationDataRulesInput"></a>

```csharp
public IResolvable|S3FilesFileSystemSynchronizationConfigurationExpirationDataRules[] ExpirationDataRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationExpirationDataRules">S3FilesFileSystemSynchronizationConfigurationExpirationDataRules</a>[]

---

##### `ImportDataRulesInput`<sup>Optional</sup> <a name="ImportDataRulesInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.importDataRulesInput"></a>

```csharp
public IResolvable|S3FilesFileSystemSynchronizationConfigurationImportDataRules[] ImportDataRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationImportDataRules">S3FilesFileSystemSynchronizationConfigurationImportDataRules</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3FilesFileSystemSynchronizationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemSynchronizationConfiguration">S3FilesFileSystemSynchronizationConfiguration</a>

---


### S3FilesFileSystemTagsList <a name="S3FilesFileSystemTagsList" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get"></a>

```csharp
private S3FilesFileSystemTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsList.property.internalValue"></a>

```csharp
public IResolvable|S3FilesFileSystemTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>[]

---


### S3FilesFileSystemTagsOutputReference <a name="S3FilesFileSystemTagsOutputReference" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new S3FilesFileSystemTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3FilesFileSystemTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.s3FilesFileSystem.S3FilesFileSystemTags">S3FilesFileSystemTags</a>

---



