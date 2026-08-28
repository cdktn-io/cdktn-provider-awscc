# `codestarconnectionsSyncConfiguration` Submodule <a name="`codestarconnectionsSyncConfiguration` Submodule" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodestarconnectionsSyncConfiguration <a name="CodestarconnectionsSyncConfiguration" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_sync_configuration awscc_codestarconnections_sync_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodestarconnectionsSyncConfiguration(Construct Scope, string Id, CodestarconnectionsSyncConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig">CodestarconnectionsSyncConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig">CodestarconnectionsSyncConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetPublishDeploymentStatus">ResetPublishDeploymentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetTriggerResourceUpdateOn">ResetTriggerResourceUpdateOn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetPublishDeploymentStatus` <a name="ResetPublishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetPublishDeploymentStatus"></a>

```csharp
private void ResetPublishDeploymentStatus()
```

##### `ResetTriggerResourceUpdateOn` <a name="ResetTriggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.resetTriggerResourceUpdateOn"></a>

```csharp
private void ResetTriggerResourceUpdateOn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodestarconnectionsSyncConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodestarconnectionsSyncConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodestarconnectionsSyncConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodestarconnectionsSyncConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodestarconnectionsSyncConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodestarconnectionsSyncConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodestarconnectionsSyncConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_sync_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodestarconnectionsSyncConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryName">RepositoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branchInput">BranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFileInput">ConfigFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatusInput">PublishDeploymentStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkIdInput">RepositoryLinkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceNameInput">ResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncTypeInput">SyncTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOnInput">TriggerResourceUpdateOnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branch">Branch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFile">ConfigFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatus">PublishDeploymentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkId">RepositoryLinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncType">SyncType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn">TriggerResourceUpdateOn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryName"></a>

```csharp
public string RepositoryName { get; }
```

- *Type:* string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branchInput"></a>

```csharp
public string BranchInput { get; }
```

- *Type:* string

---

##### `ConfigFileInput`<sup>Optional</sup> <a name="ConfigFileInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFileInput"></a>

```csharp
public string ConfigFileInput { get; }
```

- *Type:* string

---

##### `PublishDeploymentStatusInput`<sup>Optional</sup> <a name="PublishDeploymentStatusInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatusInput"></a>

```csharp
public string PublishDeploymentStatusInput { get; }
```

- *Type:* string

---

##### `RepositoryLinkIdInput`<sup>Optional</sup> <a name="RepositoryLinkIdInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkIdInput"></a>

```csharp
public string RepositoryLinkIdInput { get; }
```

- *Type:* string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceNameInput"></a>

```csharp
public string ResourceNameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SyncTypeInput`<sup>Optional</sup> <a name="SyncTypeInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncTypeInput"></a>

```csharp
public string SyncTypeInput { get; }
```

- *Type:* string

---

##### `TriggerResourceUpdateOnInput`<sup>Optional</sup> <a name="TriggerResourceUpdateOnInput" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOnInput"></a>

```csharp
public string TriggerResourceUpdateOnInput { get; }
```

- *Type:* string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.branch"></a>

```csharp
public string Branch { get; }
```

- *Type:* string

---

##### `ConfigFile`<sup>Required</sup> <a name="ConfigFile" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.configFile"></a>

```csharp
public string ConfigFile { get; }
```

- *Type:* string

---

##### `PublishDeploymentStatus`<sup>Required</sup> <a name="PublishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.publishDeploymentStatus"></a>

```csharp
public string PublishDeploymentStatus { get; }
```

- *Type:* string

---

##### `RepositoryLinkId`<sup>Required</sup> <a name="RepositoryLinkId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.repositoryLinkId"></a>

```csharp
public string RepositoryLinkId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SyncType`<sup>Required</sup> <a name="SyncType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.syncType"></a>

```csharp
public string SyncType { get; }
```

- *Type:* string

---

##### `TriggerResourceUpdateOn`<sup>Required</sup> <a name="TriggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.triggerResourceUpdateOn"></a>

```csharp
public string TriggerResourceUpdateOn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodestarconnectionsSyncConfigurationConfig <a name="CodestarconnectionsSyncConfigurationConfig" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodestarconnectionsSyncConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Branch,
    string ConfigFile,
    string RepositoryLinkId,
    string ResourceName,
    string RoleArn,
    string SyncType,
    string PublishDeploymentStatus = null,
    string TriggerResourceUpdateOn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.branch">Branch</a></code> | <code>string</code> | The name of the branch of the repository from which resources are to be synchronized,. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.configFile">ConfigFile</a></code> | <code>string</code> | The source provider repository path of the sync configuration file of the respective SyncType. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.repositoryLinkId">RepositoryLinkId</a></code> | <code>string</code> | A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.resourceName">ResourceName</a></code> | <code>string</code> | The name of the resource that is being synchronized to the repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.syncType">SyncType</a></code> | <code>string</code> | The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.publishDeploymentStatus">PublishDeploymentStatus</a></code> | <code>string</code> | Whether to enable or disable publishing of deployment status to source providers. |
| <code><a href="#@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.triggerResourceUpdateOn">TriggerResourceUpdateOn</a></code> | <code>string</code> | When to trigger Git sync to begin the stack update. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.branch"></a>

```csharp
public string Branch { get; set; }
```

- *Type:* string

The name of the branch of the repository from which resources are to be synchronized,.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_sync_configuration#branch CodestarconnectionsSyncConfiguration#branch}

---

##### `ConfigFile`<sup>Required</sup> <a name="ConfigFile" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.configFile"></a>

```csharp
public string ConfigFile { get; set; }
```

- *Type:* string

The source provider repository path of the sync configuration file of the respective SyncType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_sync_configuration#config_file CodestarconnectionsSyncConfiguration#config_file}

---

##### `RepositoryLinkId`<sup>Required</sup> <a name="RepositoryLinkId" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.repositoryLinkId"></a>

```csharp
public string RepositoryLinkId { get; set; }
```

- *Type:* string

A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_sync_configuration#repository_link_id CodestarconnectionsSyncConfiguration#repository_link_id}

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.resourceName"></a>

```csharp
public string ResourceName { get; set; }
```

- *Type:* string

The name of the resource that is being synchronized to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_sync_configuration#resource_name CodestarconnectionsSyncConfiguration#resource_name}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_sync_configuration#role_arn CodestarconnectionsSyncConfiguration#role_arn}

---

##### `SyncType`<sup>Required</sup> <a name="SyncType" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.syncType"></a>

```csharp
public string SyncType { get; set; }
```

- *Type:* string

The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_sync_configuration#sync_type CodestarconnectionsSyncConfiguration#sync_type}

---

##### `PublishDeploymentStatus`<sup>Optional</sup> <a name="PublishDeploymentStatus" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.publishDeploymentStatus"></a>

```csharp
public string PublishDeploymentStatus { get; set; }
```

- *Type:* string

Whether to enable or disable publishing of deployment status to source providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_sync_configuration#publish_deployment_status CodestarconnectionsSyncConfiguration#publish_deployment_status}

---

##### `TriggerResourceUpdateOn`<sup>Optional</sup> <a name="TriggerResourceUpdateOn" id="@cdktn/provider-awscc.codestarconnectionsSyncConfiguration.CodestarconnectionsSyncConfigurationConfig.property.triggerResourceUpdateOn"></a>

```csharp
public string TriggerResourceUpdateOn { get; set; }
```

- *Type:* string

When to trigger Git sync to begin the stack update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codestarconnections_sync_configuration#trigger_resource_update_on CodestarconnectionsSyncConfiguration#trigger_resource_update_on}

---



