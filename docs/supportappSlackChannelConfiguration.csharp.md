# `supportappSlackChannelConfiguration` Submodule <a name="`supportappSlackChannelConfiguration` Submodule" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SupportappSlackChannelConfiguration <a name="SupportappSlackChannelConfiguration" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration awscc_supportapp_slack_channel_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportappSlackChannelConfiguration(Construct Scope, string Id, SupportappSlackChannelConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig">SupportappSlackChannelConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig">SupportappSlackChannelConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetChannelName">ResetChannelName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnAddCorrespondenceToCase">ResetNotifyOnAddCorrespondenceToCase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnCreateOrReopenCase">ResetNotifyOnCreateOrReopenCase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnResolveCase">ResetNotifyOnResolveCase</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetChannelName"></a>

```csharp
private void ResetChannelName()
```

##### `ResetNotifyOnAddCorrespondenceToCase` <a name="ResetNotifyOnAddCorrespondenceToCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnAddCorrespondenceToCase"></a>

```csharp
private void ResetNotifyOnAddCorrespondenceToCase()
```

##### `ResetNotifyOnCreateOrReopenCase` <a name="ResetNotifyOnCreateOrReopenCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnCreateOrReopenCase"></a>

```csharp
private void ResetNotifyOnCreateOrReopenCase()
```

##### `ResetNotifyOnResolveCase` <a name="ResetNotifyOnResolveCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.resetNotifyOnResolveCase"></a>

```csharp
private void ResetNotifyOnResolveCase()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SupportappSlackChannelConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SupportappSlackChannelConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SupportappSlackChannelConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SupportappSlackChannelConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SupportappSlackChannelConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SupportappSlackChannelConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SupportappSlackChannelConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SupportappSlackChannelConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SupportappSlackChannelConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelNameInput">ChannelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArnInput">ChannelRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCaseInput">NotifyOnAddCorrespondenceToCaseInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverityInput">NotifyOnCaseSeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCaseInput">NotifyOnCreateOrReopenCaseInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCaseInput">NotifyOnResolveCaseInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamIdInput">TeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArn">ChannelRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCase">NotifyOnAddCorrespondenceToCase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverity">NotifyOnCaseSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCase">NotifyOnCreateOrReopenCase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCase">NotifyOnResolveCase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamId">TeamId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelNameInput"></a>

```csharp
public string ChannelNameInput { get; }
```

- *Type:* string

---

##### `ChannelRoleArnInput`<sup>Optional</sup> <a name="ChannelRoleArnInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArnInput"></a>

```csharp
public string ChannelRoleArnInput { get; }
```

- *Type:* string

---

##### `NotifyOnAddCorrespondenceToCaseInput`<sup>Optional</sup> <a name="NotifyOnAddCorrespondenceToCaseInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCaseInput"></a>

```csharp
public bool|IResolvable NotifyOnAddCorrespondenceToCaseInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotifyOnCaseSeverityInput`<sup>Optional</sup> <a name="NotifyOnCaseSeverityInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverityInput"></a>

```csharp
public string NotifyOnCaseSeverityInput { get; }
```

- *Type:* string

---

##### `NotifyOnCreateOrReopenCaseInput`<sup>Optional</sup> <a name="NotifyOnCreateOrReopenCaseInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCaseInput"></a>

```csharp
public bool|IResolvable NotifyOnCreateOrReopenCaseInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotifyOnResolveCaseInput`<sup>Optional</sup> <a name="NotifyOnResolveCaseInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCaseInput"></a>

```csharp
public bool|IResolvable NotifyOnResolveCaseInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamIdInput"></a>

```csharp
public string TeamIdInput { get; }
```

- *Type:* string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `ChannelRoleArn`<sup>Required</sup> <a name="ChannelRoleArn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.channelRoleArn"></a>

```csharp
public string ChannelRoleArn { get; }
```

- *Type:* string

---

##### `NotifyOnAddCorrespondenceToCase`<sup>Required</sup> <a name="NotifyOnAddCorrespondenceToCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnAddCorrespondenceToCase"></a>

```csharp
public bool|IResolvable NotifyOnAddCorrespondenceToCase { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotifyOnCaseSeverity`<sup>Required</sup> <a name="NotifyOnCaseSeverity" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCaseSeverity"></a>

```csharp
public string NotifyOnCaseSeverity { get; }
```

- *Type:* string

---

##### `NotifyOnCreateOrReopenCase`<sup>Required</sup> <a name="NotifyOnCreateOrReopenCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnCreateOrReopenCase"></a>

```csharp
public bool|IResolvable NotifyOnCreateOrReopenCase { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotifyOnResolveCase`<sup>Required</sup> <a name="NotifyOnResolveCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.notifyOnResolveCase"></a>

```csharp
public bool|IResolvable NotifyOnResolveCase { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.teamId"></a>

```csharp
public string TeamId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SupportappSlackChannelConfigurationConfig <a name="SupportappSlackChannelConfigurationConfig" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SupportappSlackChannelConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ChannelId,
    string ChannelRoleArn,
    string NotifyOnCaseSeverity,
    string TeamId,
    string ChannelName = null,
    bool|IResolvable NotifyOnAddCorrespondenceToCase = null,
    bool|IResolvable NotifyOnCreateOrReopenCase = null,
    bool|IResolvable NotifyOnResolveCase = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelId">ChannelId</a></code> | <code>string</code> | The channel ID in Slack, which identifies a channel within a workspace. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelRoleArn">ChannelRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCaseSeverity">NotifyOnCaseSeverity</a></code> | <code>string</code> | The severity level of a support case that a customer wants to get notified for. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.teamId">TeamId</a></code> | <code>string</code> | The team ID in Slack, which uniquely identifies a workspace. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelName">ChannelName</a></code> | <code>string</code> | The channel name in Slack. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnAddCorrespondenceToCase">NotifyOnAddCorrespondenceToCase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to notify when a correspondence is added to a case. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCreateOrReopenCase">NotifyOnCreateOrReopenCase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to notify when a case is created or reopened. |
| <code><a href="#@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnResolveCase">NotifyOnResolveCase</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to notify when a case is resolved. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

The channel ID in Slack, which identifies a channel within a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#channel_id SupportappSlackChannelConfiguration#channel_id}

---

##### `ChannelRoleArn`<sup>Required</sup> <a name="ChannelRoleArn" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelRoleArn"></a>

```csharp
public string ChannelRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#channel_role_arn SupportappSlackChannelConfiguration#channel_role_arn}

---

##### `NotifyOnCaseSeverity`<sup>Required</sup> <a name="NotifyOnCaseSeverity" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCaseSeverity"></a>

```csharp
public string NotifyOnCaseSeverity { get; set; }
```

- *Type:* string

The severity level of a support case that a customer wants to get notified for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#notify_on_case_severity SupportappSlackChannelConfiguration#notify_on_case_severity}

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.teamId"></a>

```csharp
public string TeamId { get; set; }
```

- *Type:* string

The team ID in Slack, which uniquely identifies a workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#team_id SupportappSlackChannelConfiguration#team_id}

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.channelName"></a>

```csharp
public string ChannelName { get; set; }
```

- *Type:* string

The channel name in Slack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#channel_name SupportappSlackChannelConfiguration#channel_name}

---

##### `NotifyOnAddCorrespondenceToCase`<sup>Optional</sup> <a name="NotifyOnAddCorrespondenceToCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnAddCorrespondenceToCase"></a>

```csharp
public bool|IResolvable NotifyOnAddCorrespondenceToCase { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to notify when a correspondence is added to a case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#notify_on_add_correspondence_to_case SupportappSlackChannelConfiguration#notify_on_add_correspondence_to_case}

---

##### `NotifyOnCreateOrReopenCase`<sup>Optional</sup> <a name="NotifyOnCreateOrReopenCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnCreateOrReopenCase"></a>

```csharp
public bool|IResolvable NotifyOnCreateOrReopenCase { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to notify when a case is created or reopened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#notify_on_create_or_reopen_case SupportappSlackChannelConfiguration#notify_on_create_or_reopen_case}

---

##### `NotifyOnResolveCase`<sup>Optional</sup> <a name="NotifyOnResolveCase" id="@cdktn/provider-awscc.supportappSlackChannelConfiguration.SupportappSlackChannelConfigurationConfig.property.notifyOnResolveCase"></a>

```csharp
public bool|IResolvable NotifyOnResolveCase { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to notify when a case is resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/supportapp_slack_channel_configuration#notify_on_resolve_case SupportappSlackChannelConfiguration#notify_on_resolve_case}

---



