# `lightsailAlarm` Submodule <a name="`lightsailAlarm` Submodule" id="@cdktn/provider-awscc.lightsailAlarm"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailAlarm <a name="LightsailAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm awscc_lightsail_alarm}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailAlarm(Construct Scope, string Id, LightsailAlarmConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig">LightsailAlarmConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig">LightsailAlarmConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetContactProtocols">ResetContactProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetDatapointsToAlarm">ResetDatapointsToAlarm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationEnabled">ResetNotificationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationTriggers">ResetNotificationTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetTreatMissingData">ResetTreatMissingData</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetContactProtocols` <a name="ResetContactProtocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetContactProtocols"></a>

```csharp
private void ResetContactProtocols()
```

##### `ResetDatapointsToAlarm` <a name="ResetDatapointsToAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetDatapointsToAlarm"></a>

```csharp
private void ResetDatapointsToAlarm()
```

##### `ResetNotificationEnabled` <a name="ResetNotificationEnabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationEnabled"></a>

```csharp
private void ResetNotificationEnabled()
```

##### `ResetNotificationTriggers` <a name="ResetNotificationTriggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetNotificationTriggers"></a>

```csharp
private void ResetNotificationTriggers()
```

##### `ResetTreatMissingData` <a name="ResetTreatMissingData" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.resetTreatMissingData"></a>

```csharp
private void ResetTreatMissingData()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailAlarm resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailAlarm.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailAlarm.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailAlarm.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

LightsailAlarm.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a LightsailAlarm resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailAlarm to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailAlarm that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the LightsailAlarm to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmArn">AlarmArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmNameInput">AlarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocolsInput">ContactProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarmInput">DatapointsToAlarmInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceNameInput">MonitoredResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabledInput">NotificationEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggersInput">NotificationTriggersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingDataInput">TreatMissingDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmName">AlarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocols">ContactProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceName">MonitoredResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabled">NotificationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggers">NotificationTriggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingData">TreatMissingData</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlarmArn`<sup>Required</sup> <a name="AlarmArn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmArn"></a>

```csharp
public string AlarmArn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `AlarmNameInput`<sup>Optional</sup> <a name="AlarmNameInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmNameInput"></a>

```csharp
public string AlarmNameInput { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `ContactProtocolsInput`<sup>Optional</sup> <a name="ContactProtocolsInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocolsInput"></a>

```csharp
public string[] ContactProtocolsInput { get; }
```

- *Type:* string[]

---

##### `DatapointsToAlarmInput`<sup>Optional</sup> <a name="DatapointsToAlarmInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarmInput"></a>

```csharp
public double DatapointsToAlarmInput { get; }
```

- *Type:* double

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriodsInput"></a>

```csharp
public double EvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `MonitoredResourceNameInput`<sup>Optional</sup> <a name="MonitoredResourceNameInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceNameInput"></a>

```csharp
public string MonitoredResourceNameInput { get; }
```

- *Type:* string

---

##### `NotificationEnabledInput`<sup>Optional</sup> <a name="NotificationEnabledInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabledInput"></a>

```csharp
public bool|IResolvable NotificationEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotificationTriggersInput`<sup>Optional</sup> <a name="NotificationTriggersInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggersInput"></a>

```csharp
public string[] NotificationTriggersInput { get; }
```

- *Type:* string[]

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `TreatMissingDataInput`<sup>Optional</sup> <a name="TreatMissingDataInput" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingDataInput"></a>

```csharp
public string TreatMissingDataInput { get; }
```

- *Type:* string

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.alarmName"></a>

```csharp
public string AlarmName { get; }
```

- *Type:* string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `ContactProtocols`<sup>Required</sup> <a name="ContactProtocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.contactProtocols"></a>

```csharp
public string[] ContactProtocols { get; }
```

- *Type:* string[]

---

##### `DatapointsToAlarm`<sup>Required</sup> <a name="DatapointsToAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.datapointsToAlarm"></a>

```csharp
public double DatapointsToAlarm { get; }
```

- *Type:* double

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; }
```

- *Type:* double

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `MonitoredResourceName`<sup>Required</sup> <a name="MonitoredResourceName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.monitoredResourceName"></a>

```csharp
public string MonitoredResourceName { get; }
```

- *Type:* string

---

##### `NotificationEnabled`<sup>Required</sup> <a name="NotificationEnabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationEnabled"></a>

```csharp
public bool|IResolvable NotificationEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NotificationTriggers`<sup>Required</sup> <a name="NotificationTriggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.notificationTriggers"></a>

```csharp
public string[] NotificationTriggers { get; }
```

- *Type:* string[]

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `TreatMissingData`<sup>Required</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.treatMissingData"></a>

```csharp
public string TreatMissingData { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarm.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailAlarmConfig <a name="LightsailAlarmConfig" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new LightsailAlarmConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AlarmName,
    string ComparisonOperator,
    double EvaluationPeriods,
    string MetricName,
    string MonitoredResourceName,
    double Threshold,
    string[] ContactProtocols = null,
    double DatapointsToAlarm = null,
    bool|IResolvable NotificationEnabled = null,
    string[] NotificationTriggers = null,
    string TreatMissingData = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.alarmName">AlarmName</a></code> | <code>string</code> | The name for the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The arithmetic operation to use when comparing the specified statistic to the threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | The number of most recent periods over which data is compared to the specified threshold. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.metricName">MetricName</a></code> | <code>string</code> | The name of the metric to associate with the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.monitoredResourceName">MonitoredResourceName</a></code> | <code>string</code> | The name of the Lightsail resource that the alarm monitors. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.threshold">Threshold</a></code> | <code>double</code> | The value against which the specified statistic is compared. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.contactProtocols">ContactProtocols</a></code> | <code>string[]</code> | The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.datapointsToAlarm">DatapointsToAlarm</a></code> | <code>double</code> | The number of data points that must be not within the specified threshold to trigger the alarm. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationEnabled">NotificationEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationTriggers">NotificationTriggers</a></code> | <code>string[]</code> | The alarm states that trigger a notification. |
| <code><a href="#@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.treatMissingData">TreatMissingData</a></code> | <code>string</code> | Sets how this alarm will handle missing data points. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AlarmName`<sup>Required</sup> <a name="AlarmName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.alarmName"></a>

```csharp
public string AlarmName { get; set; }
```

- *Type:* string

The name for the alarm.

Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#alarm_name LightsailAlarm#alarm_name}

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The arithmetic operation to use when comparing the specified statistic to the threshold.

The specified statistic value is used as the first operand.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#comparison_operator LightsailAlarm#comparison_operator}

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; set; }
```

- *Type:* double

The number of most recent periods over which data is compared to the specified threshold.

If you are setting an "M out of N" alarm, this value (evaluationPeriods) is the N.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#evaluation_periods LightsailAlarm#evaluation_periods}

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

The name of the metric to associate with the alarm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#metric_name LightsailAlarm#metric_name}

---

##### `MonitoredResourceName`<sup>Required</sup> <a name="MonitoredResourceName" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.monitoredResourceName"></a>

```csharp
public string MonitoredResourceName { get; set; }
```

- *Type:* string

The name of the Lightsail resource that the alarm monitors.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#monitored_resource_name LightsailAlarm#monitored_resource_name}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

The value against which the specified statistic is compared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#threshold LightsailAlarm#threshold}

---

##### `ContactProtocols`<sup>Optional</sup> <a name="ContactProtocols" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.contactProtocols"></a>

```csharp
public string[] ContactProtocols { get; set; }
```

- *Type:* string[]

The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#contact_protocols LightsailAlarm#contact_protocols}

---

##### `DatapointsToAlarm`<sup>Optional</sup> <a name="DatapointsToAlarm" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.datapointsToAlarm"></a>

```csharp
public double DatapointsToAlarm { get; set; }
```

- *Type:* double

The number of data points that must be not within the specified threshold to trigger the alarm.

If you are setting an "M out of N" alarm, this value (datapointsToAlarm) is the M.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#datapoints_to_alarm LightsailAlarm#datapoints_to_alarm}

---

##### `NotificationEnabled`<sup>Optional</sup> <a name="NotificationEnabled" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationEnabled"></a>

```csharp
public bool|IResolvable NotificationEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#notification_enabled LightsailAlarm#notification_enabled}

---

##### `NotificationTriggers`<sup>Optional</sup> <a name="NotificationTriggers" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.notificationTriggers"></a>

```csharp
public string[] NotificationTriggers { get; set; }
```

- *Type:* string[]

The alarm states that trigger a notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#notification_triggers LightsailAlarm#notification_triggers}

---

##### `TreatMissingData`<sup>Optional</sup> <a name="TreatMissingData" id="@cdktn/provider-awscc.lightsailAlarm.LightsailAlarmConfig.property.treatMissingData"></a>

```csharp
public string TreatMissingData { get; set; }
```

- *Type:* string

Sets how this alarm will handle missing data points.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_alarm#treat_missing_data LightsailAlarm#treat_missing_data}

---



