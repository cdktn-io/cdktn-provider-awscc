# `backupTieringConfiguration` Submodule <a name="`backupTieringConfiguration` Submodule" id="@cdktn/provider-awscc.backupTieringConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupTieringConfiguration <a name="BackupTieringConfiguration" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration awscc_backup_tiering_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupTieringConfiguration(Construct Scope, string Id, BackupTieringConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig">BackupTieringConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig">BackupTieringConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection">PutResourceSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetTieringConfigurationTags">ResetTieringConfigurationTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutResourceSelection` <a name="PutResourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection"></a>

```csharp
private void PutResourceSelection(IResolvable|BackupTieringConfigurationResourceSelection[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.putResourceSelection.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]

---

##### `ResetTieringConfigurationTags` <a name="ResetTieringConfigurationTags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.resetTieringConfigurationTags"></a>

```csharp
private void ResetTieringConfigurationTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupTieringConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupTieringConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupTieringConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupTieringConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BackupTieringConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BackupTieringConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BackupTieringConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BackupTieringConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BackupTieringConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelection">ResourceSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList">BackupTieringConfigurationResourceSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationArn">TieringConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultNameInput">BackupVaultNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelectionInput">ResourceSelectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationNameInput">TieringConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTagsInput">TieringConfigurationTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultName">BackupVaultName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationName">TieringConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTags">TieringConfigurationTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.lastUpdatedTime"></a>

```csharp
public string LastUpdatedTime { get; }
```

- *Type:* string

---

##### `ResourceSelection`<sup>Required</sup> <a name="ResourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelection"></a>

```csharp
public BackupTieringConfigurationResourceSelectionList ResourceSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList">BackupTieringConfigurationResourceSelectionList</a>

---

##### `TieringConfigurationArn`<sup>Required</sup> <a name="TieringConfigurationArn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationArn"></a>

```csharp
public string TieringConfigurationArn { get; }
```

- *Type:* string

---

##### `BackupVaultNameInput`<sup>Optional</sup> <a name="BackupVaultNameInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultNameInput"></a>

```csharp
public string BackupVaultNameInput { get; }
```

- *Type:* string

---

##### `ResourceSelectionInput`<sup>Optional</sup> <a name="ResourceSelectionInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.resourceSelectionInput"></a>

```csharp
public IResolvable|BackupTieringConfigurationResourceSelection[] ResourceSelectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]

---

##### `TieringConfigurationNameInput`<sup>Optional</sup> <a name="TieringConfigurationNameInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationNameInput"></a>

```csharp
public string TieringConfigurationNameInput { get; }
```

- *Type:* string

---

##### `TieringConfigurationTagsInput`<sup>Optional</sup> <a name="TieringConfigurationTagsInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TieringConfigurationTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `BackupVaultName`<sup>Required</sup> <a name="BackupVaultName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.backupVaultName"></a>

```csharp
public string BackupVaultName { get; }
```

- *Type:* string

---

##### `TieringConfigurationName`<sup>Required</sup> <a name="TieringConfigurationName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationName"></a>

```csharp
public string TieringConfigurationName { get; }
```

- *Type:* string

---

##### `TieringConfigurationTags`<sup>Required</sup> <a name="TieringConfigurationTags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tieringConfigurationTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TieringConfigurationTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupTieringConfigurationConfig <a name="BackupTieringConfigurationConfig" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupTieringConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string BackupVaultName,
    IResolvable|BackupTieringConfigurationResourceSelection[] ResourceSelection,
    string TieringConfigurationName,
    System.Collections.Generic.IDictionary<string, string> TieringConfigurationTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.backupVaultName">BackupVaultName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.resourceSelection">ResourceSelection</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationName">TieringConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationTags">TieringConfigurationTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BackupVaultName`<sup>Required</sup> <a name="BackupVaultName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.backupVaultName"></a>

```csharp
public string BackupVaultName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#backup_vault_name BackupTieringConfiguration#backup_vault_name}.

---

##### `ResourceSelection`<sup>Required</sup> <a name="ResourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.resourceSelection"></a>

```csharp
public IResolvable|BackupTieringConfigurationResourceSelection[] ResourceSelection { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resource_selection BackupTieringConfiguration#resource_selection}.

---

##### `TieringConfigurationName`<sup>Required</sup> <a name="TieringConfigurationName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationName"></a>

```csharp
public string TieringConfigurationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_configuration_name BackupTieringConfiguration#tiering_configuration_name}.

---

##### `TieringConfigurationTags`<sup>Optional</sup> <a name="TieringConfigurationTags" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationConfig.property.tieringConfigurationTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TieringConfigurationTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_configuration_tags BackupTieringConfiguration#tiering_configuration_tags}.

---

### BackupTieringConfigurationResourceSelection <a name="BackupTieringConfigurationResourceSelection" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupTieringConfigurationResourceSelection {
    string[] Resources,
    string ResourceType,
    double TieringDownSettingsInDays
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resources">Resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resources BackupTieringConfiguration#resources}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resourceType">ResourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resource_type BackupTieringConfiguration#resource_type}. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.tieringDownSettingsInDays">TieringDownSettingsInDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_down_settings_in_days BackupTieringConfiguration#tiering_down_settings_in_days}. |

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resources"></a>

```csharp
public string[] Resources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resources BackupTieringConfiguration#resources}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#resource_type BackupTieringConfiguration#resource_type}.

---

##### `TieringDownSettingsInDays`<sup>Required</sup> <a name="TieringDownSettingsInDays" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection.property.tieringDownSettingsInDays"></a>

```csharp
public double TieringDownSettingsInDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/backup_tiering_configuration#tiering_down_settings_in_days BackupTieringConfiguration#tiering_down_settings_in_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupTieringConfigurationResourceSelectionList <a name="BackupTieringConfigurationResourceSelectionList" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupTieringConfigurationResourceSelectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get"></a>

```csharp
private BackupTieringConfigurationResourceSelectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionList.property.internalValue"></a>

```csharp
public IResolvable|BackupTieringConfigurationResourceSelection[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>[]

---


### BackupTieringConfigurationResourceSelectionOutputReference <a name="BackupTieringConfigurationResourceSelectionOutputReference" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BackupTieringConfigurationResourceSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDaysInput">TieringDownSettingsInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resources">Resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDays">TieringDownSettingsInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourcesInput"></a>

```csharp
public string[] ResourcesInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `TieringDownSettingsInDaysInput`<sup>Optional</sup> <a name="TieringDownSettingsInDaysInput" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDaysInput"></a>

```csharp
public double TieringDownSettingsInDaysInput { get; }
```

- *Type:* double

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resources"></a>

```csharp
public string[] Resources { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `TieringDownSettingsInDays`<sup>Required</sup> <a name="TieringDownSettingsInDays" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.tieringDownSettingsInDays"></a>

```csharp
public double TieringDownSettingsInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BackupTieringConfigurationResourceSelection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.backupTieringConfiguration.BackupTieringConfigurationResourceSelection">BackupTieringConfigurationResourceSelection</a>

---



