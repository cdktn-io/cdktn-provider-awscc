# `medialiveSignalMap` Submodule <a name="`medialiveSignalMap` Submodule" id="@cdktn/provider-awscc.medialiveSignalMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveSignalMap <a name="MedialiveSignalMap" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_signal_map awscc_medialive_signal_map}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMap(Construct Scope, string Id, MedialiveSignalMapConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig">MedialiveSignalMapConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig">MedialiveSignalMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetCloudwatchAlarmTemplateGroupIdentifiers">ResetCloudwatchAlarmTemplateGroupIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetEventBridgeRuleTemplateGroupIdentifiers">ResetEventBridgeRuleTemplateGroupIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetForceRediscovery">ResetForceRediscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCloudwatchAlarmTemplateGroupIdentifiers` <a name="ResetCloudwatchAlarmTemplateGroupIdentifiers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetCloudwatchAlarmTemplateGroupIdentifiers"></a>

```csharp
private void ResetCloudwatchAlarmTemplateGroupIdentifiers()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEventBridgeRuleTemplateGroupIdentifiers` <a name="ResetEventBridgeRuleTemplateGroupIdentifiers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetEventBridgeRuleTemplateGroupIdentifiers"></a>

```csharp
private void ResetEventBridgeRuleTemplateGroupIdentifiers()
```

##### `ResetForceRediscovery` <a name="ResetForceRediscovery" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetForceRediscovery"></a>

```csharp
private void ResetForceRediscovery()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveSignalMap resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveSignalMap.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveSignalMap.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveSignalMap.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveSignalMap.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MedialiveSignalMap resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MedialiveSignalMap to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MedialiveSignalMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_signal_map#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveSignalMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIds">CloudwatchAlarmTemplateGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.eventBridgeRuleTemplateGroupIds">EventBridgeRuleTemplateGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.failedMediaResourceMap">FailedMediaResourceMap</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap">MedialiveSignalMapFailedMediaResourceMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.lastDiscoveredAt">LastDiscoveredAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.lastSuccessfulMonitorDeployment">LastSuccessfulMonitorDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference">MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.mediaResourceMap">MediaResourceMap</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap">MedialiveSignalMapMediaResourceMapMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.monitorChangesPendingDeployment">MonitorChangesPendingDeployment</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.monitorDeployment">MonitorDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference">MedialiveSignalMapMonitorDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.signalMapId">SignalMapId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiersInput">CloudwatchAlarmTemplateGroupIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.discoveryEntryPointArnInput">DiscoveryEntryPointArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiersInput">EventBridgeRuleTemplateGroupIdentifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.forceRediscoveryInput">ForceRediscoveryInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiers">CloudwatchAlarmTemplateGroupIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.discoveryEntryPointArn">DiscoveryEntryPointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiers">EventBridgeRuleTemplateGroupIdentifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.forceRediscovery">ForceRediscovery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CloudwatchAlarmTemplateGroupIds`<sup>Required</sup> <a name="CloudwatchAlarmTemplateGroupIds" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIds"></a>

```csharp
public string[] CloudwatchAlarmTemplateGroupIds { get; }
```

- *Type:* string[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `EventBridgeRuleTemplateGroupIds`<sup>Required</sup> <a name="EventBridgeRuleTemplateGroupIds" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.eventBridgeRuleTemplateGroupIds"></a>

```csharp
public string[] EventBridgeRuleTemplateGroupIds { get; }
```

- *Type:* string[]

---

##### `FailedMediaResourceMap`<sup>Required</sup> <a name="FailedMediaResourceMap" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.failedMediaResourceMap"></a>

```csharp
public MedialiveSignalMapFailedMediaResourceMapMap FailedMediaResourceMap { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap">MedialiveSignalMapFailedMediaResourceMapMap</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `LastDiscoveredAt`<sup>Required</sup> <a name="LastDiscoveredAt" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.lastDiscoveredAt"></a>

```csharp
public string LastDiscoveredAt { get; }
```

- *Type:* string

---

##### `LastSuccessfulMonitorDeployment`<sup>Required</sup> <a name="LastSuccessfulMonitorDeployment" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.lastSuccessfulMonitorDeployment"></a>

```csharp
public MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference LastSuccessfulMonitorDeployment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference">MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference</a>

---

##### `MediaResourceMap`<sup>Required</sup> <a name="MediaResourceMap" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.mediaResourceMap"></a>

```csharp
public MedialiveSignalMapMediaResourceMapMap MediaResourceMap { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap">MedialiveSignalMapMediaResourceMapMap</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `MonitorChangesPendingDeployment`<sup>Required</sup> <a name="MonitorChangesPendingDeployment" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.monitorChangesPendingDeployment"></a>

```csharp
public IResolvable MonitorChangesPendingDeployment { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MonitorDeployment`<sup>Required</sup> <a name="MonitorDeployment" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.monitorDeployment"></a>

```csharp
public MedialiveSignalMapMonitorDeploymentOutputReference MonitorDeployment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference">MedialiveSignalMapMonitorDeploymentOutputReference</a>

---

##### `SignalMapId`<sup>Required</sup> <a name="SignalMapId" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.signalMapId"></a>

```csharp
public string SignalMapId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `CloudwatchAlarmTemplateGroupIdentifiersInput`<sup>Optional</sup> <a name="CloudwatchAlarmTemplateGroupIdentifiersInput" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiersInput"></a>

```csharp
public string[] CloudwatchAlarmTemplateGroupIdentifiersInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiscoveryEntryPointArnInput`<sup>Optional</sup> <a name="DiscoveryEntryPointArnInput" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.discoveryEntryPointArnInput"></a>

```csharp
public string DiscoveryEntryPointArnInput { get; }
```

- *Type:* string

---

##### `EventBridgeRuleTemplateGroupIdentifiersInput`<sup>Optional</sup> <a name="EventBridgeRuleTemplateGroupIdentifiersInput" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiersInput"></a>

```csharp
public string[] EventBridgeRuleTemplateGroupIdentifiersInput { get; }
```

- *Type:* string[]

---

##### `ForceRediscoveryInput`<sup>Optional</sup> <a name="ForceRediscoveryInput" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.forceRediscoveryInput"></a>

```csharp
public bool|IResolvable ForceRediscoveryInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `CloudwatchAlarmTemplateGroupIdentifiers`<sup>Required</sup> <a name="CloudwatchAlarmTemplateGroupIdentifiers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.cloudwatchAlarmTemplateGroupIdentifiers"></a>

```csharp
public string[] CloudwatchAlarmTemplateGroupIdentifiers { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DiscoveryEntryPointArn`<sup>Required</sup> <a name="DiscoveryEntryPointArn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.discoveryEntryPointArn"></a>

```csharp
public string DiscoveryEntryPointArn { get; }
```

- *Type:* string

---

##### `EventBridgeRuleTemplateGroupIdentifiers`<sup>Required</sup> <a name="EventBridgeRuleTemplateGroupIdentifiers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.eventBridgeRuleTemplateGroupIdentifiers"></a>

```csharp
public string[] EventBridgeRuleTemplateGroupIdentifiers { get; }
```

- *Type:* string[]

---

##### `ForceRediscovery`<sup>Required</sup> <a name="ForceRediscovery" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.forceRediscovery"></a>

```csharp
public bool|IResolvable ForceRediscovery { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMap.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveSignalMapConfig <a name="MedialiveSignalMapConfig" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DiscoveryEntryPointArn,
    string Name,
    string[] CloudwatchAlarmTemplateGroupIdentifiers = null,
    string Description = null,
    string[] EventBridgeRuleTemplateGroupIdentifiers = null,
    bool|IResolvable ForceRediscovery = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.discoveryEntryPointArn">DiscoveryEntryPointArn</a></code> | <code>string</code> | A top-level supported AWS resource ARN to discovery a signal map from. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.name">Name</a></code> | <code>string</code> | A resource's name. Names must be unique within the scope of a resource type in a specific region. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.cloudwatchAlarmTemplateGroupIdentifiers">CloudwatchAlarmTemplateGroupIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_signal_map#cloudwatch_alarm_template_group_identifiers MedialiveSignalMap#cloudwatch_alarm_template_group_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.description">Description</a></code> | <code>string</code> | A resource's optional description. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.eventBridgeRuleTemplateGroupIdentifiers">EventBridgeRuleTemplateGroupIdentifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_signal_map#event_bridge_rule_template_group_identifiers MedialiveSignalMap#event_bridge_rule_template_group_identifiers}. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.forceRediscovery">ForceRediscovery</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, will force a rediscovery of a signal map if an unchanged discoveryEntryPointArn is provided. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Represents the tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DiscoveryEntryPointArn`<sup>Required</sup> <a name="DiscoveryEntryPointArn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.discoveryEntryPointArn"></a>

```csharp
public string DiscoveryEntryPointArn { get; set; }
```

- *Type:* string

A top-level supported AWS resource ARN to discovery a signal map from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_signal_map#discovery_entry_point_arn MedialiveSignalMap#discovery_entry_point_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A resource's name. Names must be unique within the scope of a resource type in a specific region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_signal_map#name MedialiveSignalMap#name}

---

##### `CloudwatchAlarmTemplateGroupIdentifiers`<sup>Optional</sup> <a name="CloudwatchAlarmTemplateGroupIdentifiers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.cloudwatchAlarmTemplateGroupIdentifiers"></a>

```csharp
public string[] CloudwatchAlarmTemplateGroupIdentifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_signal_map#cloudwatch_alarm_template_group_identifiers MedialiveSignalMap#cloudwatch_alarm_template_group_identifiers}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A resource's optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_signal_map#description MedialiveSignalMap#description}

---

##### `EventBridgeRuleTemplateGroupIdentifiers`<sup>Optional</sup> <a name="EventBridgeRuleTemplateGroupIdentifiers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.eventBridgeRuleTemplateGroupIdentifiers"></a>

```csharp
public string[] EventBridgeRuleTemplateGroupIdentifiers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_signal_map#event_bridge_rule_template_group_identifiers MedialiveSignalMap#event_bridge_rule_template_group_identifiers}.

---

##### `ForceRediscovery`<sup>Optional</sup> <a name="ForceRediscovery" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.forceRediscovery"></a>

```csharp
public bool|IResolvable ForceRediscovery { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, will force a rediscovery of a signal map if an unchanged discoveryEntryPointArn is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_signal_map#force_rediscovery MedialiveSignalMap#force_rediscovery}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Represents the tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_signal_map#tags MedialiveSignalMap#tags}

---

### MedialiveSignalMapFailedMediaResourceMap <a name="MedialiveSignalMapFailedMediaResourceMap" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapFailedMediaResourceMap {

};
```


### MedialiveSignalMapFailedMediaResourceMapDestinations <a name="MedialiveSignalMapFailedMediaResourceMapDestinations" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapFailedMediaResourceMapDestinations {

};
```


### MedialiveSignalMapFailedMediaResourceMapSources <a name="MedialiveSignalMapFailedMediaResourceMapSources" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapFailedMediaResourceMapSources {

};
```


### MedialiveSignalMapLastSuccessfulMonitorDeployment <a name="MedialiveSignalMapLastSuccessfulMonitorDeployment" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapLastSuccessfulMonitorDeployment {

};
```


### MedialiveSignalMapMediaResourceMap <a name="MedialiveSignalMapMediaResourceMap" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapMediaResourceMap {

};
```


### MedialiveSignalMapMediaResourceMapDestinations <a name="MedialiveSignalMapMediaResourceMapDestinations" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapMediaResourceMapDestinations {

};
```


### MedialiveSignalMapMediaResourceMapSources <a name="MedialiveSignalMapMediaResourceMapSources" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapMediaResourceMapSources {

};
```


### MedialiveSignalMapMonitorDeployment <a name="MedialiveSignalMapMonitorDeployment" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapMonitorDeployment {

};
```


## Classes <a name="Classes" id="Classes"></a>

### MedialiveSignalMapFailedMediaResourceMapDestinationsList <a name="MedialiveSignalMapFailedMediaResourceMapDestinationsList" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapFailedMediaResourceMapDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.get"></a>

```csharp
private MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference <a name="MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinations">MedialiveSignalMapFailedMediaResourceMapDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsOutputReference.property.internalValue"></a>

```csharp
public MedialiveSignalMapFailedMediaResourceMapDestinations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinations">MedialiveSignalMapFailedMediaResourceMapDestinations</a>

---


### MedialiveSignalMapFailedMediaResourceMapMap <a name="MedialiveSignalMapFailedMediaResourceMapMap" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapFailedMediaResourceMapMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.get"></a>

```csharp
private MedialiveSignalMapFailedMediaResourceMapOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MedialiveSignalMapFailedMediaResourceMapOutputReference <a name="MedialiveSignalMapFailedMediaResourceMapOutputReference" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapFailedMediaResourceMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList">MedialiveSignalMapFailedMediaResourceMapDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList">MedialiveSignalMapFailedMediaResourceMapSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMap">MedialiveSignalMapFailedMediaResourceMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.destinations"></a>

```csharp
public MedialiveSignalMapFailedMediaResourceMapDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapDestinationsList">MedialiveSignalMapFailedMediaResourceMapDestinationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.sources"></a>

```csharp
public MedialiveSignalMapFailedMediaResourceMapSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList">MedialiveSignalMapFailedMediaResourceMapSourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapOutputReference.property.internalValue"></a>

```csharp
public MedialiveSignalMapFailedMediaResourceMap InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMap">MedialiveSignalMapFailedMediaResourceMap</a>

---


### MedialiveSignalMapFailedMediaResourceMapSourcesList <a name="MedialiveSignalMapFailedMediaResourceMapSourcesList" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapFailedMediaResourceMapSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.get"></a>

```csharp
private MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference <a name="MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSources">MedialiveSignalMapFailedMediaResourceMapSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSourcesOutputReference.property.internalValue"></a>

```csharp
public MedialiveSignalMapFailedMediaResourceMapSources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapFailedMediaResourceMapSources">MedialiveSignalMapFailedMediaResourceMapSources</a>

---


### MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference <a name="MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.detailsUri">DetailsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeployment">MedialiveSignalMapLastSuccessfulMonitorDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DetailsUri`<sup>Required</sup> <a name="DetailsUri" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.detailsUri"></a>

```csharp
public string DetailsUri { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeploymentOutputReference.property.internalValue"></a>

```csharp
public MedialiveSignalMapLastSuccessfulMonitorDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapLastSuccessfulMonitorDeployment">MedialiveSignalMapLastSuccessfulMonitorDeployment</a>

---


### MedialiveSignalMapMediaResourceMapDestinationsList <a name="MedialiveSignalMapMediaResourceMapDestinationsList" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapMediaResourceMapDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.get"></a>

```csharp
private MedialiveSignalMapMediaResourceMapDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MedialiveSignalMapMediaResourceMapDestinationsOutputReference <a name="MedialiveSignalMapMediaResourceMapDestinationsOutputReference" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapMediaResourceMapDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinations">MedialiveSignalMapMediaResourceMapDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsOutputReference.property.internalValue"></a>

```csharp
public MedialiveSignalMapMediaResourceMapDestinations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinations">MedialiveSignalMapMediaResourceMapDestinations</a>

---


### MedialiveSignalMapMediaResourceMapMap <a name="MedialiveSignalMapMediaResourceMapMap" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapMediaResourceMapMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.get"></a>

```csharp
private MedialiveSignalMapMediaResourceMapOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MedialiveSignalMapMediaResourceMapOutputReference <a name="MedialiveSignalMapMediaResourceMapOutputReference" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapMediaResourceMapOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList">MedialiveSignalMapMediaResourceMapDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList">MedialiveSignalMapMediaResourceMapSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMap">MedialiveSignalMapMediaResourceMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.destinations"></a>

```csharp
public MedialiveSignalMapMediaResourceMapDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapDestinationsList">MedialiveSignalMapMediaResourceMapDestinationsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.sources"></a>

```csharp
public MedialiveSignalMapMediaResourceMapSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList">MedialiveSignalMapMediaResourceMapSourcesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapOutputReference.property.internalValue"></a>

```csharp
public MedialiveSignalMapMediaResourceMap InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMap">MedialiveSignalMapMediaResourceMap</a>

---


### MedialiveSignalMapMediaResourceMapSourcesList <a name="MedialiveSignalMapMediaResourceMapSourcesList" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapMediaResourceMapSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.get"></a>

```csharp
private MedialiveSignalMapMediaResourceMapSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### MedialiveSignalMapMediaResourceMapSourcesOutputReference <a name="MedialiveSignalMapMediaResourceMapSourcesOutputReference" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapMediaResourceMapSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSources">MedialiveSignalMapMediaResourceMapSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSourcesOutputReference.property.internalValue"></a>

```csharp
public MedialiveSignalMapMediaResourceMapSources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMediaResourceMapSources">MedialiveSignalMapMediaResourceMapSources</a>

---


### MedialiveSignalMapMonitorDeploymentOutputReference <a name="MedialiveSignalMapMonitorDeploymentOutputReference" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveSignalMapMonitorDeploymentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.detailsUri">DetailsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.errorMessage">ErrorMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeployment">MedialiveSignalMapMonitorDeployment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DetailsUri`<sup>Required</sup> <a name="DetailsUri" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.detailsUri"></a>

```csharp
public string DetailsUri { get; }
```

- *Type:* string

---

##### `ErrorMessage`<sup>Required</sup> <a name="ErrorMessage" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.errorMessage"></a>

```csharp
public string ErrorMessage { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeploymentOutputReference.property.internalValue"></a>

```csharp
public MedialiveSignalMapMonitorDeployment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveSignalMap.MedialiveSignalMapMonitorDeployment">MedialiveSignalMapMonitorDeployment</a>

---



