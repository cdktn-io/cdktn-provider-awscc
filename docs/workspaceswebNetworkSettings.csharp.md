# `workspaceswebNetworkSettings` Submodule <a name="`workspaceswebNetworkSettings` Submodule" id="@cdktn/provider-awscc.workspaceswebNetworkSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebNetworkSettings <a name="WorkspaceswebNetworkSettings" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings awscc_workspacesweb_network_settings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebNetworkSettings(Construct Scope, string Id, WorkspaceswebNetworkSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig">WorkspaceswebNetworkSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig">WorkspaceswebNetworkSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.putTags"></a>

```csharp
private void PutTags(IResolvable|WorkspaceswebNetworkSettingsTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspaceswebNetworkSettings resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspaceswebNetworkSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspaceswebNetworkSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspaceswebNetworkSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WorkspaceswebNetworkSettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkspaceswebNetworkSettings resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspaceswebNetworkSettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspaceswebNetworkSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkspaceswebNetworkSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.associatedPortalArns">AssociatedPortalArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.networkSettingsArn">NetworkSettingsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList">WorkspaceswebNetworkSettingsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.vpcIdInput">VpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociatedPortalArns`<sup>Required</sup> <a name="AssociatedPortalArns" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.associatedPortalArns"></a>

```csharp
public string[] AssociatedPortalArns { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkSettingsArn`<sup>Required</sup> <a name="NetworkSettingsArn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.networkSettingsArn"></a>

```csharp
public string NetworkSettingsArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tags"></a>

```csharp
public WorkspaceswebNetworkSettingsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList">WorkspaceswebNetworkSettingsTagsList</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tagsInput"></a>

```csharp
public IResolvable|WorkspaceswebNetworkSettingsTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>[]

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.vpcIdInput"></a>

```csharp
public string VpcIdInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebNetworkSettingsConfig <a name="WorkspaceswebNetworkSettingsConfig" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebNetworkSettingsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string[] SecurityGroupIds,
    string[] SubnetIds,
    string VpcId,
    IResolvable|WorkspaceswebNetworkSettingsTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#security_group_ids WorkspaceswebNetworkSettings#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#subnet_ids WorkspaceswebNetworkSettings#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.vpcId">VpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#vpc_id WorkspaceswebNetworkSettings#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#tags WorkspaceswebNetworkSettings#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#security_group_ids WorkspaceswebNetworkSettings#security_group_ids}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#subnet_ids WorkspaceswebNetworkSettings#subnet_ids}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.vpcId"></a>

```csharp
public string VpcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#vpc_id WorkspaceswebNetworkSettings#vpc_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsConfig.property.tags"></a>

```csharp
public IResolvable|WorkspaceswebNetworkSettingsTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#tags WorkspaceswebNetworkSettings#tags}.

---

### WorkspaceswebNetworkSettingsTags <a name="WorkspaceswebNetworkSettingsTags" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebNetworkSettingsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#key WorkspaceswebNetworkSettings#key}. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#value WorkspaceswebNetworkSettings#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#key WorkspaceswebNetworkSettings#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/workspacesweb_network_settings#value WorkspaceswebNetworkSettings#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceswebNetworkSettingsTagsList <a name="WorkspaceswebNetworkSettingsTagsList" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebNetworkSettingsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.get"></a>

```csharp
private WorkspaceswebNetworkSettingsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsList.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceswebNetworkSettingsTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>[]

---


### WorkspaceswebNetworkSettingsTagsOutputReference <a name="WorkspaceswebNetworkSettingsTagsOutputReference" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WorkspaceswebNetworkSettingsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkspaceswebNetworkSettingsTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.workspaceswebNetworkSettings.WorkspaceswebNetworkSettingsTags">WorkspaceswebNetworkSettingsTags</a>

---



