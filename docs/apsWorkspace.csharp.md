# `apsWorkspace` Submodule <a name="`apsWorkspace` Submodule" id="@cdktn/provider-awscc.apsWorkspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApsWorkspace <a name="ApsWorkspace" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace awscc_aps_workspace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspace(Construct Scope, string Id, ApsWorkspaceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig">ApsWorkspaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig">ApsWorkspaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putLoggingConfiguration">PutLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putQueryLoggingConfiguration">PutQueryLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putWorkspaceConfiguration">PutWorkspaceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlertManagerDefinition">ResetAlertManagerDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetLoggingConfiguration">ResetLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetQueryLoggingConfiguration">ResetQueryLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetWorkspaceConfiguration">ResetWorkspaceConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLoggingConfiguration` <a name="PutLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putLoggingConfiguration"></a>

```csharp
private void PutLoggingConfiguration(ApsWorkspaceLoggingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a>

---

##### `PutQueryLoggingConfiguration` <a name="PutQueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putQueryLoggingConfiguration"></a>

```csharp
private void PutQueryLoggingConfiguration(ApsWorkspaceQueryLoggingConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putQueryLoggingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putTags"></a>

```csharp
private void PutTags(IResolvable|ApsWorkspaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>[]

---

##### `PutWorkspaceConfiguration` <a name="PutWorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putWorkspaceConfiguration"></a>

```csharp
private void PutWorkspaceConfiguration(ApsWorkspaceWorkspaceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.putWorkspaceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a>

---

##### `ResetAlertManagerDefinition` <a name="ResetAlertManagerDefinition" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlertManagerDefinition"></a>

```csharp
private void ResetAlertManagerDefinition()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```

##### `ResetLoggingConfiguration` <a name="ResetLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetLoggingConfiguration"></a>

```csharp
private void ResetLoggingConfiguration()
```

##### `ResetQueryLoggingConfiguration` <a name="ResetQueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetQueryLoggingConfiguration"></a>

```csharp
private void ResetQueryLoggingConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWorkspaceConfiguration` <a name="ResetWorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.resetWorkspaceConfiguration"></a>

```csharp
private void ResetWorkspaceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApsWorkspace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsWorkspace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsWorkspace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsWorkspace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApsWorkspace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApsWorkspace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApsWorkspace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApsWorkspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApsWorkspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference">ApsWorkspaceLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.prometheusEndpoint">PrometheusEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfiguration">QueryLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference">ApsWorkspaceQueryLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList">ApsWorkspaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfiguration">WorkspaceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference">ApsWorkspaceWorkspaceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinitionInput">AlertManagerDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfigurationInput">LoggingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfigurationInput">QueryLoggingConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfigurationInput">WorkspaceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinition">AlertManagerDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfiguration"></a>

```csharp
public ApsWorkspaceLoggingConfigurationOutputReference LoggingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference">ApsWorkspaceLoggingConfigurationOutputReference</a>

---

##### `PrometheusEndpoint`<sup>Required</sup> <a name="PrometheusEndpoint" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.prometheusEndpoint"></a>

```csharp
public string PrometheusEndpoint { get; }
```

- *Type:* string

---

##### `QueryLoggingConfiguration`<sup>Required</sup> <a name="QueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfiguration"></a>

```csharp
public ApsWorkspaceQueryLoggingConfigurationOutputReference QueryLoggingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference">ApsWorkspaceQueryLoggingConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tags"></a>

```csharp
public ApsWorkspaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList">ApsWorkspaceTagsList</a>

---

##### `WorkspaceConfiguration`<sup>Required</sup> <a name="WorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfiguration"></a>

```csharp
public ApsWorkspaceWorkspaceConfigurationOutputReference WorkspaceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference">ApsWorkspaceWorkspaceConfigurationOutputReference</a>

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `AlertManagerDefinitionInput`<sup>Optional</sup> <a name="AlertManagerDefinitionInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinitionInput"></a>

```csharp
public string AlertManagerDefinitionInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `LoggingConfigurationInput`<sup>Optional</sup> <a name="LoggingConfigurationInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.loggingConfigurationInput"></a>

```csharp
public IResolvable|ApsWorkspaceLoggingConfiguration LoggingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a>

---

##### `QueryLoggingConfigurationInput`<sup>Optional</sup> <a name="QueryLoggingConfigurationInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.queryLoggingConfigurationInput"></a>

```csharp
public IResolvable|ApsWorkspaceQueryLoggingConfiguration QueryLoggingConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tagsInput"></a>

```csharp
public IResolvable|ApsWorkspaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>[]

---

##### `WorkspaceConfigurationInput`<sup>Optional</sup> <a name="WorkspaceConfigurationInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.workspaceConfigurationInput"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfiguration WorkspaceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a>

---

##### `AlertManagerDefinition`<sup>Required</sup> <a name="AlertManagerDefinition" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alertManagerDefinition"></a>

```csharp
public string AlertManagerDefinition { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApsWorkspaceConfig <a name="ApsWorkspaceConfig" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AlertManagerDefinition = null,
    string Alias = null,
    string KmsKeyArn = null,
    ApsWorkspaceLoggingConfiguration LoggingConfiguration = null,
    ApsWorkspaceQueryLoggingConfiguration QueryLoggingConfiguration = null,
    IResolvable|ApsWorkspaceTags[] Tags = null,
    ApsWorkspaceWorkspaceConfiguration WorkspaceConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alertManagerDefinition">AlertManagerDefinition</a></code> | <code>string</code> | The AMP Workspace alert manager definition data. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alias">Alias</a></code> | <code>string</code> | AMP Workspace alias. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | KMS Key ARN used to encrypt and decrypt AMP workspace data. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a></code> | Logging configuration. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.queryLoggingConfiguration">QueryLoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a></code> | Query logging configuration. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.workspaceConfiguration">WorkspaceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a></code> | Workspace configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlertManagerDefinition`<sup>Optional</sup> <a name="AlertManagerDefinition" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alertManagerDefinition"></a>

```csharp
public string AlertManagerDefinition { get; set; }
```

- *Type:* string

The AMP Workspace alert manager definition data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#alert_manager_definition ApsWorkspace#alert_manager_definition}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

AMP Workspace alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#alias ApsWorkspace#alias}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

KMS Key ARN used to encrypt and decrypt AMP workspace data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#kms_key_arn ApsWorkspace#kms_key_arn}

---

##### `LoggingConfiguration`<sup>Optional</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.loggingConfiguration"></a>

```csharp
public ApsWorkspaceLoggingConfiguration LoggingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a>

Logging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#logging_configuration ApsWorkspace#logging_configuration}

---

##### `QueryLoggingConfiguration`<sup>Optional</sup> <a name="QueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.queryLoggingConfiguration"></a>

```csharp
public ApsWorkspaceQueryLoggingConfiguration QueryLoggingConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a>

Query logging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#query_logging_configuration ApsWorkspace#query_logging_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.tags"></a>

```csharp
public IResolvable|ApsWorkspaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#tags ApsWorkspace#tags}

---

##### `WorkspaceConfiguration`<sup>Optional</sup> <a name="WorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceConfig.property.workspaceConfiguration"></a>

```csharp
public ApsWorkspaceWorkspaceConfiguration WorkspaceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a>

Workspace configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#workspace_configuration ApsWorkspace#workspace_configuration}

---

### ApsWorkspaceLoggingConfiguration <a name="ApsWorkspaceLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceLoggingConfiguration {
    string LogGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | CloudWatch log group ARN. |

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

CloudWatch log group ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#log_group_arn ApsWorkspace#log_group_arn}

---

### ApsWorkspaceQueryLoggingConfiguration <a name="ApsWorkspaceQueryLoggingConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceQueryLoggingConfiguration {
    IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinations[] Destinations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>[]</code> | The destinations configuration for query logging. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration.property.destinations"></a>

```csharp
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>[]

The destinations configuration for query logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#destinations ApsWorkspace#destinations}

---

### ApsWorkspaceQueryLoggingConfigurationDestinations <a name="ApsWorkspaceQueryLoggingConfigurationDestinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceQueryLoggingConfigurationDestinations {
    ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs CloudwatchLogs = null,
    ApsWorkspaceQueryLoggingConfigurationDestinationsFilters Filters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a></code> | Represents a cloudwatch logs destination for query logging. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a></code> | Filters for logging. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.cloudwatchLogs"></a>

```csharp
public ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

Represents a cloudwatch logs destination for query logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#cloudwatch_logs ApsWorkspace#cloudwatch_logs}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations.property.filters"></a>

```csharp
public ApsWorkspaceQueryLoggingConfigurationDestinationsFilters Filters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

Filters for logging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#filters ApsWorkspace#filters}

---

### ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs {
    string LogGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | The ARN of the CloudWatch Logs log group. |

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

The ARN of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#log_group_arn ApsWorkspace#log_group_arn}

---

### ApsWorkspaceQueryLoggingConfigurationDestinationsFilters <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsFilters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceQueryLoggingConfigurationDestinationsFilters {
    double QspThreshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters.property.qspThreshold">QspThreshold</a></code> | <code>double</code> | Query logs with QSP above this limit are vended. |

---

##### `QspThreshold`<sup>Optional</sup> <a name="QspThreshold" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters.property.qspThreshold"></a>

```csharp
public double QspThreshold { get; set; }
```

- *Type:* double

Query logs with QSP above this limit are vended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#qsp_threshold ApsWorkspace#qsp_threshold}

---

### ApsWorkspaceTags <a name="ApsWorkspaceTags" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#key ApsWorkspace#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#value ApsWorkspace#value}

---

### ApsWorkspaceWorkspaceConfiguration <a name="ApsWorkspaceWorkspaceConfiguration" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceWorkspaceConfiguration {
    IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets[] LimitsPerLabelSets = null,
    double OutOfOrderTimeWindowInSeconds = null,
    double RetentionPeriodInDays = null,
    double RuleQueryOffsetInSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.limitsPerLabelSets">LimitsPerLabelSets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>[]</code> | An array of label set and associated limits. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.outOfOrderTimeWindowInSeconds">OutOfOrderTimeWindowInSeconds</a></code> | <code>double</code> | The time window in seconds for accepting out-of-order samples. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | How many days that metrics are retained in the workspace. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.ruleQueryOffsetInSeconds">RuleQueryOffsetInSeconds</a></code> | <code>double</code> | Duration in seconds to offset rule evaluation queries into the past. |

---

##### `LimitsPerLabelSets`<sup>Optional</sup> <a name="LimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.limitsPerLabelSets"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets[] LimitsPerLabelSets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>[]

An array of label set and associated limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#limits_per_label_sets ApsWorkspace#limits_per_label_sets}

---

##### `OutOfOrderTimeWindowInSeconds`<sup>Optional</sup> <a name="OutOfOrderTimeWindowInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.outOfOrderTimeWindowInSeconds"></a>

```csharp
public double OutOfOrderTimeWindowInSeconds { get; set; }
```

- *Type:* double

The time window in seconds for accepting out-of-order samples.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#out_of_order_time_window_in_seconds ApsWorkspace#out_of_order_time_window_in_seconds}

---

##### `RetentionPeriodInDays`<sup>Optional</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; set; }
```

- *Type:* double

How many days that metrics are retained in the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#retention_period_in_days ApsWorkspace#retention_period_in_days}

---

##### `RuleQueryOffsetInSeconds`<sup>Optional</sup> <a name="RuleQueryOffsetInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration.property.ruleQueryOffsetInSeconds"></a>

```csharp
public double RuleQueryOffsetInSeconds { get; set; }
```

- *Type:* double

Duration in seconds to offset rule evaluation queries into the past.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#rule_query_offset_in_seconds ApsWorkspace#rule_query_offset_in_seconds}

---

### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets {
    IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet[] LabelSet = null,
    ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits Limits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.labelSet">LabelSet</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>[]</code> | An array of series labels. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.limits">Limits</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a></code> | Limits that can be applied to a label set. |

---

##### `LabelSet`<sup>Optional</sup> <a name="LabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.labelSet"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet[] LabelSet { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>[]

An array of series labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#label_set ApsWorkspace#label_set}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets.property.limits"></a>

```csharp
public ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits Limits { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

Limits that can be applied to a label set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#limits ApsWorkspace#limits}

---

### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.name">Name</a></code> | <code>string</code> | Name of the label. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.value">Value</a></code> | <code>string</code> | Value of the label. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#name ApsWorkspace#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#value ApsWorkspace#value}

---

### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits {
    double MaxSeries = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.property.maxSeries">MaxSeries</a></code> | <code>double</code> | The maximum number of active series that can be ingested for this label set. |

---

##### `MaxSeries`<sup>Optional</sup> <a name="MaxSeries" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits.property.maxSeries"></a>

```csharp
public double MaxSeries { get; set; }
```

- *Type:* double

The maximum number of active series that can be ingested for this label set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/aps_workspace#max_series ApsWorkspace#max_series}

---

## Classes <a name="Classes" id="Classes"></a>

### ApsWorkspaceLoggingConfigurationOutputReference <a name="ApsWorkspaceLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceLoggingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.resetLogGroupArn"></a>

```csharp
private void ResetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceLoggingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceLoggingConfiguration">ApsWorkspaceLoggingConfiguration</a>

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.resetLogGroupArn"></a>

```csharp
private void ResetLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resetQspThreshold">ResetQspThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQspThreshold` <a name="ResetQspThreshold" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.resetQspThreshold"></a>

```csharp
private void ResetQspThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThresholdInput">QspThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThreshold">QspThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QspThresholdInput`<sup>Optional</sup> <a name="QspThresholdInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThresholdInput"></a>

```csharp
public double QspThresholdInput { get; }
```

- *Type:* double

---

##### `QspThreshold`<sup>Required</sup> <a name="QspThreshold" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.qspThreshold"></a>

```csharp
public double QspThreshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinationsFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsList <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceQueryLoggingConfigurationDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.get"></a>

```csharp
private ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>[]

---


### ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putFilters"></a>

```csharp
private void PutFilters(ApsWorkspaceQueryLoggingConfigurationDestinationsFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.resetFilters"></a>

```csharp
private void ResetFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filtersInput">FiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogs"></a>

```csharp
public ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogsOutputReference</a>

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filters"></a>

```csharp
public ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference">ApsWorkspaceQueryLoggingConfigurationDestinationsFiltersOutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs">ApsWorkspaceQueryLoggingConfigurationDestinationsCloudwatchLogs</a>

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.filtersInput"></a>

```csharp
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinationsFilters FiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsFilters">ApsWorkspaceQueryLoggingConfigurationDestinationsFilters</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>

---


### ApsWorkspaceQueryLoggingConfigurationOutputReference <a name="ApsWorkspaceQueryLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceQueryLoggingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>[]

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList">ApsWorkspaceQueryLoggingConfigurationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinations"></a>

```csharp
public ApsWorkspaceQueryLoggingConfigurationDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinationsList">ApsWorkspaceQueryLoggingConfigurationDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.destinationsInput"></a>

```csharp
public IResolvable|ApsWorkspaceQueryLoggingConfigurationDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationDestinations">ApsWorkspaceQueryLoggingConfigurationDestinations</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceQueryLoggingConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceQueryLoggingConfiguration">ApsWorkspaceQueryLoggingConfiguration</a>

---


### ApsWorkspaceTagsList <a name="ApsWorkspaceTagsList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.get"></a>

```csharp
private ApsWorkspaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>[]

---


### ApsWorkspaceTagsOutputReference <a name="ApsWorkspaceTagsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceTags">ApsWorkspaceTags</a>

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get"></a>

```csharp
private ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>[]

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resetMaxSeries">ResetMaxSeries</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxSeries` <a name="ResetMaxSeries" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.resetMaxSeries"></a>

```csharp
private void ResetMaxSeries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeriesInput">MaxSeriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeries">MaxSeries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxSeriesInput`<sup>Optional</sup> <a name="MaxSeriesInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeriesInput"></a>

```csharp
public double MaxSeriesInput { get; }
```

- *Type:* double

---

##### `MaxSeries`<sup>Required</sup> <a name="MaxSeries" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.maxSeries"></a>

```csharp
public double MaxSeries { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get"></a>

```csharp
private ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>[]

---


### ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference <a name="ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLabelSet">PutLabelSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLabelSet">ResetLabelSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLabelSet` <a name="PutLabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLabelSet"></a>

```csharp
private void PutLabelSet(IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLabelSet.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>[]

---

##### `PutLimits` <a name="PutLimits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLimits"></a>

```csharp
private void PutLimits(ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

---

##### `ResetLabelSet` <a name="ResetLabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLabelSet"></a>

```csharp
private void ResetLabelSet()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.resetLimits"></a>

```csharp
private void ResetLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSet">LabelSet</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSetInput">LabelSetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limitsInput">LimitsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelSet`<sup>Required</sup> <a name="LabelSet" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSet"></a>

```csharp
public ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList LabelSet { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSetList</a>

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limits"></a>

```csharp
public ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference Limits { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimitsOutputReference</a>

---

##### `LabelSetInput`<sup>Optional</sup> <a name="LabelSetInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.labelSetInput"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet[] LabelSetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLabelSet</a>[]

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.limitsInput"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits LimitsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsLimits</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>

---


### ApsWorkspaceWorkspaceConfigurationOutputReference <a name="ApsWorkspaceWorkspaceConfigurationOutputReference" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApsWorkspaceWorkspaceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.putLimitsPerLabelSets">PutLimitsPerLabelSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetLimitsPerLabelSets">ResetLimitsPerLabelSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetOutOfOrderTimeWindowInSeconds">ResetOutOfOrderTimeWindowInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRetentionPeriodInDays">ResetRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRuleQueryOffsetInSeconds">ResetRuleQueryOffsetInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLimitsPerLabelSets` <a name="PutLimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.putLimitsPerLabelSets"></a>

```csharp
private void PutLimitsPerLabelSets(IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.putLimitsPerLabelSets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>[]

---

##### `ResetLimitsPerLabelSets` <a name="ResetLimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetLimitsPerLabelSets"></a>

```csharp
private void ResetLimitsPerLabelSets()
```

##### `ResetOutOfOrderTimeWindowInSeconds` <a name="ResetOutOfOrderTimeWindowInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetOutOfOrderTimeWindowInSeconds"></a>

```csharp
private void ResetOutOfOrderTimeWindowInSeconds()
```

##### `ResetRetentionPeriodInDays` <a name="ResetRetentionPeriodInDays" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRetentionPeriodInDays"></a>

```csharp
private void ResetRetentionPeriodInDays()
```

##### `ResetRuleQueryOffsetInSeconds` <a name="ResetRuleQueryOffsetInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.resetRuleQueryOffsetInSeconds"></a>

```csharp
private void ResetRuleQueryOffsetInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSets">LimitsPerLabelSets</a></code> | <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSetsInput">LimitsPerLabelSetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSecondsInput">OutOfOrderTimeWindowInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDaysInput">RetentionPeriodInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSecondsInput">RuleQueryOffsetInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSeconds">OutOfOrderTimeWindowInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSeconds">RuleQueryOffsetInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LimitsPerLabelSets`<sup>Required</sup> <a name="LimitsPerLabelSets" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSets"></a>

```csharp
public ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList LimitsPerLabelSets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSetsList</a>

---

##### `LimitsPerLabelSetsInput`<sup>Optional</sup> <a name="LimitsPerLabelSetsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.limitsPerLabelSetsInput"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets[] LimitsPerLabelSetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets">ApsWorkspaceWorkspaceConfigurationLimitsPerLabelSets</a>[]

---

##### `OutOfOrderTimeWindowInSecondsInput`<sup>Optional</sup> <a name="OutOfOrderTimeWindowInSecondsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSecondsInput"></a>

```csharp
public double OutOfOrderTimeWindowInSecondsInput { get; }
```

- *Type:* double

---

##### `RetentionPeriodInDaysInput`<sup>Optional</sup> <a name="RetentionPeriodInDaysInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDaysInput"></a>

```csharp
public double RetentionPeriodInDaysInput { get; }
```

- *Type:* double

---

##### `RuleQueryOffsetInSecondsInput`<sup>Optional</sup> <a name="RuleQueryOffsetInSecondsInput" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSecondsInput"></a>

```csharp
public double RuleQueryOffsetInSecondsInput { get; }
```

- *Type:* double

---

##### `OutOfOrderTimeWindowInSeconds`<sup>Required</sup> <a name="OutOfOrderTimeWindowInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.outOfOrderTimeWindowInSeconds"></a>

```csharp
public double OutOfOrderTimeWindowInSeconds { get; }
```

- *Type:* double

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.retentionPeriodInDays"></a>

```csharp
public double RetentionPeriodInDays { get; }
```

- *Type:* double

---

##### `RuleQueryOffsetInSeconds`<sup>Required</sup> <a name="RuleQueryOffsetInSeconds" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.ruleQueryOffsetInSeconds"></a>

```csharp
public double RuleQueryOffsetInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApsWorkspaceWorkspaceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.apsWorkspace.ApsWorkspaceWorkspaceConfiguration">ApsWorkspaceWorkspaceConfiguration</a>

---



