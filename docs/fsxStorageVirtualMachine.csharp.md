# `fsxStorageVirtualMachine` Submodule <a name="`fsxStorageVirtualMachine` Submodule" id="@cdktn/provider-awscc.fsxStorageVirtualMachine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FsxStorageVirtualMachine <a name="FsxStorageVirtualMachine" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine awscc_fsx_storage_virtual_machine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxStorageVirtualMachine(Construct Scope, string Id, FsxStorageVirtualMachineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig">FsxStorageVirtualMachineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig">FsxStorageVirtualMachineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putActiveDirectoryConfiguration">PutActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetActiveDirectoryConfiguration">ResetActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetRootVolumeSecurityStyle">ResetRootVolumeSecurityStyle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetSvmAdminPassword">ResetSvmAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActiveDirectoryConfiguration` <a name="PutActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putActiveDirectoryConfiguration"></a>

```csharp
private void PutActiveDirectoryConfiguration(FsxStorageVirtualMachineActiveDirectoryConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putActiveDirectoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putTags"></a>

```csharp
private void PutTags(IResolvable|FsxStorageVirtualMachineTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>[]

---

##### `ResetActiveDirectoryConfiguration` <a name="ResetActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetActiveDirectoryConfiguration"></a>

```csharp
private void ResetActiveDirectoryConfiguration()
```

##### `ResetRootVolumeSecurityStyle` <a name="ResetRootVolumeSecurityStyle" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetRootVolumeSecurityStyle"></a>

```csharp
private void ResetRootVolumeSecurityStyle()
```

##### `ResetSvmAdminPassword` <a name="ResetSvmAdminPassword" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetSvmAdminPassword"></a>

```csharp
private void ResetSvmAdminPassword()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FsxStorageVirtualMachine resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxStorageVirtualMachine.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxStorageVirtualMachine.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxStorageVirtualMachine.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

FsxStorageVirtualMachine.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FsxStorageVirtualMachine resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FsxStorageVirtualMachine to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FsxStorageVirtualMachine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FsxStorageVirtualMachine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.activeDirectoryConfiguration">ActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference">FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.storageVirtualMachineId">StorageVirtualMachineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList">FsxStorageVirtualMachineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.activeDirectoryConfigurationInput">ActiveDirectoryConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.rootVolumeSecurityStyleInput">RootVolumeSecurityStyleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.svmAdminPasswordInput">SvmAdminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.rootVolumeSecurityStyle">RootVolumeSecurityStyle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.svmAdminPassword">SvmAdminPassword</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActiveDirectoryConfiguration`<sup>Required</sup> <a name="ActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.activeDirectoryConfiguration"></a>

```csharp
public FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference ActiveDirectoryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference">FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `StorageVirtualMachineId`<sup>Required</sup> <a name="StorageVirtualMachineId" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.storageVirtualMachineId"></a>

```csharp
public string StorageVirtualMachineId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tags"></a>

```csharp
public FsxStorageVirtualMachineTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList">FsxStorageVirtualMachineTagsList</a>

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `ActiveDirectoryConfigurationInput`<sup>Optional</sup> <a name="ActiveDirectoryConfigurationInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.activeDirectoryConfigurationInput"></a>

```csharp
public IResolvable|FsxStorageVirtualMachineActiveDirectoryConfiguration ActiveDirectoryConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a>

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RootVolumeSecurityStyleInput`<sup>Optional</sup> <a name="RootVolumeSecurityStyleInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.rootVolumeSecurityStyleInput"></a>

```csharp
public string RootVolumeSecurityStyleInput { get; }
```

- *Type:* string

---

##### `SvmAdminPasswordInput`<sup>Optional</sup> <a name="SvmAdminPasswordInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.svmAdminPasswordInput"></a>

```csharp
public string SvmAdminPasswordInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tagsInput"></a>

```csharp
public IResolvable|FsxStorageVirtualMachineTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>[]

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RootVolumeSecurityStyle`<sup>Required</sup> <a name="RootVolumeSecurityStyle" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.rootVolumeSecurityStyle"></a>

```csharp
public string RootVolumeSecurityStyle { get; }
```

- *Type:* string

---

##### `SvmAdminPassword`<sup>Required</sup> <a name="SvmAdminPassword" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.svmAdminPassword"></a>

```csharp
public string SvmAdminPassword { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachine.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FsxStorageVirtualMachineActiveDirectoryConfiguration <a name="FsxStorageVirtualMachineActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxStorageVirtualMachineActiveDirectoryConfiguration {
    string NetBiosName = null,
    FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration SelfManagedActiveDirectoryConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration.property.netBiosName">NetBiosName</a></code> | <code>string</code> | The NetBIOS name of the Active Directory computer object that will be created for your SVM. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration.property.selfManagedActiveDirectoryConfiguration">SelfManagedActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory. |

---

##### `NetBiosName`<sup>Optional</sup> <a name="NetBiosName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration.property.netBiosName"></a>

```csharp
public string NetBiosName { get; set; }
```

- *Type:* string

The NetBIOS name of the Active Directory computer object that will be created for your SVM.

Minimum values: 1. Maximum values: 15. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#net_bios_name FsxStorageVirtualMachine#net_bios_name}

---

##### `SelfManagedActiveDirectoryConfiguration`<sup>Optional</sup> <a name="SelfManagedActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration.property.selfManagedActiveDirectoryConfiguration"></a>

```csharp
public FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration SelfManagedActiveDirectoryConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#self_managed_active_directory_configuration FsxStorageVirtualMachine#self_managed_active_directory_configuration}

---

### FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration <a name="FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration {
    string[] DnsIps = null,
    string DomainJoinServiceAccountSecret = null,
    string DomainName = null,
    string FileSystemAdministratorsGroup = null,
    string OrganizationalUnitDistinguishedName = null,
    string Password = null,
    string UserName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps">DnsIps</a></code> | <code>string[]</code> | A list of IP addresses of DNS servers or domain controllers in the self-managed AD directory. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainJoinServiceAccountSecret">DomainJoinServiceAccountSecret</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the self-managed Active Directory domain join service account credentials. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName">DomainName</a></code> | <code>string</code> | The fully qualified domain name of the self-managed AD directory, such as corp.example.com. Minimum: 1. Maximum: 255. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup">FileSystemAdministratorsGroup</a></code> | <code>string</code> | The name of the domain group whose members are granted administrative privileges for the file system. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | The fully qualified distinguished name of the organizational unit within your self-managed AD directory. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.password">Password</a></code> | <code>string</code> | The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.userName">UserName</a></code> | <code>string</code> | The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. |

---

##### `DnsIps`<sup>Optional</sup> <a name="DnsIps" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.dnsIps"></a>

```csharp
public string[] DnsIps { get; set; }
```

- *Type:* string[]

A list of IP addresses of DNS servers or domain controllers in the self-managed AD directory.

Minimum: 1. Maximum: 3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#dns_ips FsxStorageVirtualMachine#dns_ips}

---

##### `DomainJoinServiceAccountSecret`<sup>Optional</sup> <a name="DomainJoinServiceAccountSecret" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainJoinServiceAccountSecret"></a>

```csharp
public string DomainJoinServiceAccountSecret { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the self-managed Active Directory domain join service account credentials.

Minimum: 64. Maximum: 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#domain_join_service_account_secret FsxStorageVirtualMachine#domain_join_service_account_secret}

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The fully qualified domain name of the self-managed AD directory, such as corp.example.com. Minimum: 1. Maximum: 255. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#domain_name FsxStorageVirtualMachine#domain_name}

---

##### `FileSystemAdministratorsGroup`<sup>Optional</sup> <a name="FileSystemAdministratorsGroup" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.fileSystemAdministratorsGroup"></a>

```csharp
public string FileSystemAdministratorsGroup { get; set; }
```

- *Type:* string

The name of the domain group whose members are granted administrative privileges for the file system.

Minimum: 1. Maximum: 256. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#file_system_administrators_group FsxStorageVirtualMachine#file_system_administrators_group}

---

##### `OrganizationalUnitDistinguishedName`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; set; }
```

- *Type:* string

The fully qualified distinguished name of the organizational unit within your self-managed AD directory.

Minimum: 1. Maximum: 2000. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,2000}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#organizational_unit_distinguished_name FsxStorageVirtualMachine#organizational_unit_distinguished_name}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.

Minimum: 1. Maximum: 256. Pattern: `^.{1,256}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#password FsxStorageVirtualMachine#password}

---

##### `UserName`<sup>Optional</sup> <a name="UserName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.

Minimum: 1. Maximum: 256. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#user_name FsxStorageVirtualMachine#user_name}

---

### FsxStorageVirtualMachineConfig <a name="FsxStorageVirtualMachineConfig" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxStorageVirtualMachineConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FileSystemId,
    string Name,
    FsxStorageVirtualMachineActiveDirectoryConfiguration ActiveDirectoryConfiguration = null,
    string RootVolumeSecurityStyle = null,
    string SvmAdminPassword = null,
    IResolvable|FsxStorageVirtualMachineTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | Specifies the FSx for ONTAP file system on which to create the SVM. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.name">Name</a></code> | <code>string</code> | The name of the SVM. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,47}$`. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.activeDirectoryConfiguration">ActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a></code> | Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.rootVolumeSecurityStyle">RootVolumeSecurityStyle</a></code> | <code>string</code> | The security style of the root volume of the SVM. Allowed values: UNIX \| NTFS \| MIXED. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.svmAdminPassword">SvmAdminPassword</a></code> | <code>string</code> | Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>[]</code> | A list of Tag values, with a maximum of 50 elements. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

Specifies the FSx for ONTAP file system on which to create the SVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#file_system_id FsxStorageVirtualMachine#file_system_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the SVM. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,47}$`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#name FsxStorageVirtualMachine#name}

---

##### `ActiveDirectoryConfiguration`<sup>Optional</sup> <a name="ActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.activeDirectoryConfiguration"></a>

```csharp
public FsxStorageVirtualMachineActiveDirectoryConfiguration ActiveDirectoryConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a>

Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#active_directory_configuration FsxStorageVirtualMachine#active_directory_configuration}

---

##### `RootVolumeSecurityStyle`<sup>Optional</sup> <a name="RootVolumeSecurityStyle" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.rootVolumeSecurityStyle"></a>

```csharp
public string RootVolumeSecurityStyle { get; set; }
```

- *Type:* string

The security style of the root volume of the SVM. Allowed values: UNIX | NTFS | MIXED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#root_volume_security_style FsxStorageVirtualMachine#root_volume_security_style}

---

##### `SvmAdminPassword`<sup>Optional</sup> <a name="SvmAdminPassword" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.svmAdminPassword"></a>

```csharp
public string SvmAdminPassword { get; set; }
```

- *Type:* string

Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#svm_admin_password FsxStorageVirtualMachine#svm_admin_password}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineConfig.property.tags"></a>

```csharp
public IResolvable|FsxStorageVirtualMachineTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>[]

A list of Tag values, with a maximum of 50 elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#tags FsxStorageVirtualMachine#tags}

---

### FsxStorageVirtualMachineTags <a name="FsxStorageVirtualMachineTags" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxStorageVirtualMachineTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#key FsxStorageVirtualMachine#key}. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#value FsxStorageVirtualMachine#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#key FsxStorageVirtualMachine#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.107.0/docs/resources/fsx_storage_virtual_machine#value FsxStorageVirtualMachine#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference <a name="FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration">PutSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetNetBiosName">ResetNetBiosName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetSelfManagedActiveDirectoryConfiguration">ResetSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSelfManagedActiveDirectoryConfiguration` <a name="PutSelfManagedActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration"></a>

```csharp
private void PutSelfManagedActiveDirectoryConfiguration(FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.putSelfManagedActiveDirectoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---

##### `ResetNetBiosName` <a name="ResetNetBiosName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetNetBiosName"></a>

```csharp
private void ResetNetBiosName()
```

##### `ResetSelfManagedActiveDirectoryConfiguration` <a name="ResetSelfManagedActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.resetSelfManagedActiveDirectoryConfiguration"></a>

```csharp
private void ResetSelfManagedActiveDirectoryConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration">SelfManagedActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netBiosNameInput">NetBiosNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfigurationInput">SelfManagedActiveDirectoryConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netBiosName">NetBiosName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SelfManagedActiveDirectoryConfiguration`<sup>Required</sup> <a name="SelfManagedActiveDirectoryConfiguration" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfiguration"></a>

```csharp
public FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference SelfManagedActiveDirectoryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference</a>

---

##### `NetBiosNameInput`<sup>Optional</sup> <a name="NetBiosNameInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netBiosNameInput"></a>

```csharp
public string NetBiosNameInput { get; }
```

- *Type:* string

---

##### `SelfManagedActiveDirectoryConfigurationInput`<sup>Optional</sup> <a name="SelfManagedActiveDirectoryConfigurationInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.selfManagedActiveDirectoryConfigurationInput"></a>

```csharp
public IResolvable|FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration SelfManagedActiveDirectoryConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---

##### `NetBiosName`<sup>Required</sup> <a name="NetBiosName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.netBiosName"></a>

```csharp
public string NetBiosName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxStorageVirtualMachineActiveDirectoryConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfiguration</a>

---


### FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference <a name="FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDnsIps">ResetDnsIps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDomainJoinServiceAccountSecret">ResetDomainJoinServiceAccountSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetFileSystemAdministratorsGroup">ResetFileSystemAdministratorsGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName">ResetOrganizationalUnitDistinguishedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetUserName">ResetUserName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsIps` <a name="ResetDnsIps" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDnsIps"></a>

```csharp
private void ResetDnsIps()
```

##### `ResetDomainJoinServiceAccountSecret` <a name="ResetDomainJoinServiceAccountSecret" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDomainJoinServiceAccountSecret"></a>

```csharp
private void ResetDomainJoinServiceAccountSecret()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetFileSystemAdministratorsGroup` <a name="ResetFileSystemAdministratorsGroup" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetFileSystemAdministratorsGroup"></a>

```csharp
private void ResetFileSystemAdministratorsGroup()
```

##### `ResetOrganizationalUnitDistinguishedName` <a name="ResetOrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```csharp
private void ResetOrganizationalUnitDistinguishedName()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetUserName` <a name="ResetUserName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.resetUserName"></a>

```csharp
private void ResetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIpsInput">DnsIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainJoinServiceAccountSecretInput">DomainJoinServiceAccountSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroupInput">FileSystemAdministratorsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput">OrganizationalUnitDistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps">DnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainJoinServiceAccountSecret">DomainJoinServiceAccountSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup">FileSystemAdministratorsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.userName">UserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsIpsInput`<sup>Optional</sup> <a name="DnsIpsInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIpsInput"></a>

```csharp
public string[] DnsIpsInput { get; }
```

- *Type:* string[]

---

##### `DomainJoinServiceAccountSecretInput`<sup>Optional</sup> <a name="DomainJoinServiceAccountSecretInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainJoinServiceAccountSecretInput"></a>

```csharp
public string DomainJoinServiceAccountSecretInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `FileSystemAdministratorsGroupInput`<sup>Optional</sup> <a name="FileSystemAdministratorsGroupInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroupInput"></a>

```csharp
public string FileSystemAdministratorsGroupInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNameInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```csharp
public string OrganizationalUnitDistinguishedNameInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.dnsIps"></a>

```csharp
public string[] DnsIps { get; }
```

- *Type:* string[]

---

##### `DomainJoinServiceAccountSecret`<sup>Required</sup> <a name="DomainJoinServiceAccountSecret" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainJoinServiceAccountSecret"></a>

```csharp
public string DomainJoinServiceAccountSecret { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `FileSystemAdministratorsGroup`<sup>Required</sup> <a name="FileSystemAdministratorsGroup" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.fileSystemAdministratorsGroup"></a>

```csharp
public string FileSystemAdministratorsGroup { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration">FsxStorageVirtualMachineActiveDirectoryConfigurationSelfManagedActiveDirectoryConfiguration</a>

---


### FsxStorageVirtualMachineTagsList <a name="FsxStorageVirtualMachineTagsList" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxStorageVirtualMachineTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.get"></a>

```csharp
private FsxStorageVirtualMachineTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsList.property.internalValue"></a>

```csharp
public IResolvable|FsxStorageVirtualMachineTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>[]

---


### FsxStorageVirtualMachineTagsOutputReference <a name="FsxStorageVirtualMachineTagsOutputReference" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new FsxStorageVirtualMachineTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FsxStorageVirtualMachineTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.fsxStorageVirtualMachine.FsxStorageVirtualMachineTags">FsxStorageVirtualMachineTags</a>

---



