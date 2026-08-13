# `mediaconnectFlow` Submodule <a name="`mediaconnectFlow` Submodule" id="@cdktn/provider-awscc.mediaconnectFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlow <a name="MediaconnectFlow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow awscc_mediaconnect_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlow(Construct Scope, string Id, MediaconnectFlowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig">MediaconnectFlowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig">MediaconnectFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance">PutMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams">PutMediaStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig">PutSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig">PutSourceMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces">PutVpcInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMaintenance">ResetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMediaStreams">ResetMediaStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceFailoverConfig">ResetSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceMonitoringConfig">ResetSourceMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetVpcInterfaces">ResetVpcInterfaces</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaintenance` <a name="PutMaintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance"></a>

```csharp
private void PutMaintenance(MediaconnectFlowMaintenance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

---

##### `PutMediaStreams` <a name="PutMediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams"></a>

```csharp
private void PutMediaStreams(IResolvable|MediaconnectFlowMediaStreams[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource"></a>

```csharp
private void PutSource(MediaconnectFlowSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

---

##### `PutSourceFailoverConfig` <a name="PutSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig"></a>

```csharp
private void PutSourceFailoverConfig(MediaconnectFlowSourceFailoverConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

---

##### `PutSourceMonitoringConfig` <a name="PutSourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig"></a>

```csharp
private void PutSourceMonitoringConfig(MediaconnectFlowSourceMonitoringConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

---

##### `PutVpcInterfaces` <a name="PutVpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces"></a>

```csharp
private void PutVpcInterfaces(IResolvable|MediaconnectFlowVpcInterfaces[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMaintenance"></a>

```csharp
private void ResetMaintenance()
```

##### `ResetMediaStreams` <a name="ResetMediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMediaStreams"></a>

```csharp
private void ResetMediaStreams()
```

##### `ResetSourceFailoverConfig` <a name="ResetSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceFailoverConfig"></a>

```csharp
private void ResetSourceFailoverConfig()
```

##### `ResetSourceMonitoringConfig` <a name="ResetSourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceMonitoringConfig"></a>

```csharp
private void ResetSourceMonitoringConfig()
```

##### `ResetVpcInterfaces` <a name="ResetVpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetVpcInterfaces"></a>

```csharp
private void ResetVpcInterfaces()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlow.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediaconnectFlow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediaconnectFlow resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectFlow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.egressIp">EgressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowArn">FlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowAvailabilityZone">FlowAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenance">Maintenance</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference">MediaconnectFlowMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreams">MediaStreams</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList">MediaconnectFlowMediaStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference">MediaconnectFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfig">SourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference">MediaconnectFlowSourceFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfig">SourceMonitoringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference">MediaconnectFlowSourceMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfaces">VpcInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList">MediaconnectFlowVpcInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenanceInput">MaintenanceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreamsInput">MediaStreamsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfigInput">SourceFailoverConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceInput">SourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfigInput">SourceMonitoringConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfacesInput">VpcInterfacesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `EgressIp`<sup>Required</sup> <a name="EgressIp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.egressIp"></a>

```csharp
public string EgressIp { get; }
```

- *Type:* string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowArn"></a>

```csharp
public string FlowArn { get; }
```

- *Type:* string

---

##### `FlowAvailabilityZone`<sup>Required</sup> <a name="FlowAvailabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowAvailabilityZone"></a>

```csharp
public string FlowAvailabilityZone { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenance"></a>

```csharp
public MediaconnectFlowMaintenanceOutputReference Maintenance { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference">MediaconnectFlowMaintenanceOutputReference</a>

---

##### `MediaStreams`<sup>Required</sup> <a name="MediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreams"></a>

```csharp
public MediaconnectFlowMediaStreamsList MediaStreams { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList">MediaconnectFlowMediaStreamsList</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.source"></a>

```csharp
public MediaconnectFlowSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference">MediaconnectFlowSourceOutputReference</a>

---

##### `SourceFailoverConfig`<sup>Required</sup> <a name="SourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfig"></a>

```csharp
public MediaconnectFlowSourceFailoverConfigOutputReference SourceFailoverConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference">MediaconnectFlowSourceFailoverConfigOutputReference</a>

---

##### `SourceMonitoringConfig`<sup>Required</sup> <a name="SourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfig"></a>

```csharp
public MediaconnectFlowSourceMonitoringConfigOutputReference SourceMonitoringConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference">MediaconnectFlowSourceMonitoringConfigOutputReference</a>

---

##### `VpcInterfaces`<sup>Required</sup> <a name="VpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfaces"></a>

```csharp
public MediaconnectFlowVpcInterfacesList VpcInterfaces { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList">MediaconnectFlowVpcInterfacesList</a>

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenanceInput"></a>

```csharp
public IResolvable|MediaconnectFlowMaintenance MaintenanceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

---

##### `MediaStreamsInput`<sup>Optional</sup> <a name="MediaStreamsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreamsInput"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreams[] MediaStreamsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SourceFailoverConfigInput`<sup>Optional</sup> <a name="SourceFailoverConfigInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfigInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceFailoverConfig SourceFailoverConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceInput"></a>

```csharp
public IResolvable|MediaconnectFlowSource SourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

---

##### `SourceMonitoringConfigInput`<sup>Optional</sup> <a name="SourceMonitoringConfigInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfigInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfig SourceMonitoringConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

---

##### `VpcInterfacesInput`<sup>Optional</sup> <a name="VpcInterfacesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfacesInput"></a>

```csharp
public IResolvable|MediaconnectFlowVpcInterfaces[] VpcInterfacesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowConfig <a name="MediaconnectFlowConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    MediaconnectFlowSource Source,
    string AvailabilityZone = null,
    MediaconnectFlowMaintenance Maintenance = null,
    IResolvable|MediaconnectFlowMediaStreams[] MediaStreams = null,
    MediaconnectFlowSourceFailoverConfig SourceFailoverConfig = null,
    MediaconnectFlowSourceMonitoringConfig SourceMonitoringConfig = null,
    IResolvable|MediaconnectFlowVpcInterfaces[] VpcInterfaces = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.name">Name</a></code> | <code>string</code> | The name of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a></code> | The source of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | The Availability Zone that you want to create the flow in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.maintenance">Maintenance</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a></code> | The maintenance settings you want to use for the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.mediaStreams">MediaStreams</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]</code> | The media streams associated with the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceFailoverConfig">SourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a></code> | The source failover config of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceMonitoringConfig">SourceMonitoringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a></code> | The source monitoring config of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.vpcInterfaces">VpcInterfaces</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]</code> | The VPC interfaces that you added to this flow. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.source"></a>

```csharp
public MediaconnectFlowSource Source { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

The source of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#source MediaconnectFlow#source}

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

The Availability Zone that you want to create the flow in.

These options are limited to the Availability Zones within the current AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#availability_zone MediaconnectFlow#availability_zone}

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.maintenance"></a>

```csharp
public MediaconnectFlowMaintenance Maintenance { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

The maintenance settings you want to use for the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#maintenance MediaconnectFlow#maintenance}

---

##### `MediaStreams`<sup>Optional</sup> <a name="MediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.mediaStreams"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreams[] MediaStreams { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]

The media streams associated with the flow.

You can associate any of these media streams with sources and outputs on the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#media_streams MediaconnectFlow#media_streams}

---

##### `SourceFailoverConfig`<sup>Optional</sup> <a name="SourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceFailoverConfig"></a>

```csharp
public MediaconnectFlowSourceFailoverConfig SourceFailoverConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

The source failover config of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#source_failover_config MediaconnectFlow#source_failover_config}

---

##### `SourceMonitoringConfig`<sup>Optional</sup> <a name="SourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceMonitoringConfig"></a>

```csharp
public MediaconnectFlowSourceMonitoringConfig SourceMonitoringConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

The source monitoring config of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#source_monitoring_config MediaconnectFlow#source_monitoring_config}

---

##### `VpcInterfaces`<sup>Optional</sup> <a name="VpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.vpcInterfaces"></a>

```csharp
public IResolvable|MediaconnectFlowVpcInterfaces[] VpcInterfaces { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]

The VPC interfaces that you added to this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#vpc_interfaces MediaconnectFlow#vpc_interfaces}

---

### MediaconnectFlowMaintenance <a name="MediaconnectFlowMaintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMaintenance {
    string MaintenanceDay = null,
    string MaintenanceStartHour = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceDay">MaintenanceDay</a></code> | <code>string</code> | A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceStartHour">MaintenanceStartHour</a></code> | <code>string</code> | UTC time when the maintenance will happen. |

---

##### `MaintenanceDay`<sup>Optional</sup> <a name="MaintenanceDay" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceDay"></a>

```csharp
public string MaintenanceDay { get; set; }
```

- *Type:* string

A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#maintenance_day MediaconnectFlow#maintenance_day}

---

##### `MaintenanceStartHour`<sup>Optional</sup> <a name="MaintenanceStartHour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceStartHour"></a>

```csharp
public string MaintenanceStartHour { get; set; }
```

- *Type:* string

UTC time when the maintenance will happen.

Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#maintenance_start_hour MediaconnectFlow#maintenance_start_hour}

---

### MediaconnectFlowMediaStreams <a name="MediaconnectFlowMediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreams {
    MediaconnectFlowMediaStreamsAttributes Attributes = null,
    double ClockRate = null,
    string Description = null,
    double Fmt = null,
    double MediaStreamId = null,
    string MediaStreamName = null,
    string MediaStreamType = null,
    string VideoFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a></code> | Attributes that are related to the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.clockRate">ClockRate</a></code> | <code>double</code> | The sample rate for the stream. This value in measured in kHz. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.description">Description</a></code> | <code>string</code> | A description that can help you quickly identify what your media stream is used for. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.fmt">Fmt</a></code> | <code>double</code> | The format type number (sometimes referred to as RTP payload type) of the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamId">MediaStreamId</a></code> | <code>double</code> | A unique identifier for the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamName">MediaStreamName</a></code> | <code>string</code> | A name that helps you distinguish one media stream from another. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamType">MediaStreamType</a></code> | <code>string</code> | The type of media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.videoFormat">VideoFormat</a></code> | <code>string</code> | The resolution of the video. |

---

##### `Attributes`<sup>Optional</sup> <a name="Attributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.attributes"></a>

```csharp
public MediaconnectFlowMediaStreamsAttributes Attributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

Attributes that are related to the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#attributes MediaconnectFlow#attributes}

---

##### `ClockRate`<sup>Optional</sup> <a name="ClockRate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.clockRate"></a>

```csharp
public double ClockRate { get; set; }
```

- *Type:* double

The sample rate for the stream. This value in measured in kHz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#clock_rate MediaconnectFlow#clock_rate}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description that can help you quickly identify what your media stream is used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#description MediaconnectFlow#description}

---

##### `Fmt`<sup>Optional</sup> <a name="Fmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.fmt"></a>

```csharp
public double Fmt { get; set; }
```

- *Type:* double

The format type number (sometimes referred to as RTP payload type) of the media stream.

MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#fmt MediaconnectFlow#fmt}

---

##### `MediaStreamId`<sup>Optional</sup> <a name="MediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamId"></a>

```csharp
public double MediaStreamId { get; set; }
```

- *Type:* double

A unique identifier for the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#media_stream_id MediaconnectFlow#media_stream_id}

---

##### `MediaStreamName`<sup>Optional</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamName"></a>

```csharp
public string MediaStreamName { get; set; }
```

- *Type:* string

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#media_stream_name MediaconnectFlow#media_stream_name}

---

##### `MediaStreamType`<sup>Optional</sup> <a name="MediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamType"></a>

```csharp
public string MediaStreamType { get; set; }
```

- *Type:* string

The type of media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#media_stream_type MediaconnectFlow#media_stream_type}

---

##### `VideoFormat`<sup>Optional</sup> <a name="VideoFormat" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.videoFormat"></a>

```csharp
public string VideoFormat { get; set; }
```

- *Type:* string

The resolution of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#video_format MediaconnectFlow#video_format}

---

### MediaconnectFlowMediaStreamsAttributes <a name="MediaconnectFlowMediaStreamsAttributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamsAttributes {
    MediaconnectFlowMediaStreamsAttributesFmtp Fmtp = null,
    string Lang = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.fmtp">Fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a></code> | A set of parameters that define the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.lang">Lang</a></code> | <code>string</code> | The audio language, in a format that is recognized by the receiver. |

---

##### `Fmtp`<sup>Optional</sup> <a name="Fmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.fmtp"></a>

```csharp
public MediaconnectFlowMediaStreamsAttributesFmtp Fmtp { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

A set of parameters that define the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#fmtp MediaconnectFlow#fmtp}

---

##### `Lang`<sup>Optional</sup> <a name="Lang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.lang"></a>

```csharp
public string Lang { get; set; }
```

- *Type:* string

The audio language, in a format that is recognized by the receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#lang MediaconnectFlow#lang}

---

### MediaconnectFlowMediaStreamsAttributesFmtp <a name="MediaconnectFlowMediaStreamsAttributesFmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamsAttributesFmtp {
    string ChannelOrder = null,
    string Colorimetry = null,
    string ExactFramerate = null,
    string Par = null,
    string Range = null,
    string ScanMode = null,
    string Tcs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.channelOrder">ChannelOrder</a></code> | <code>string</code> | The format of the audio channel. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.colorimetry">Colorimetry</a></code> | <code>string</code> | The format used for the representation of color. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.exactFramerate">ExactFramerate</a></code> | <code>string</code> | The frame rate for the video stream, in frames/second. For example: 60000/1001. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.par">Par</a></code> | <code>string</code> | The pixel aspect ratio (PAR) of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.range">Range</a></code> | <code>string</code> | The encoding range of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.scanMode">ScanMode</a></code> | <code>string</code> | The type of compression that was used to smooth the video's appearance. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.tcs">Tcs</a></code> | <code>string</code> | The transfer characteristic system (TCS) that is used in the video. |

---

##### `ChannelOrder`<sup>Optional</sup> <a name="ChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.channelOrder"></a>

```csharp
public string ChannelOrder { get; set; }
```

- *Type:* string

The format of the audio channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#channel_order MediaconnectFlow#channel_order}

---

##### `Colorimetry`<sup>Optional</sup> <a name="Colorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.colorimetry"></a>

```csharp
public string Colorimetry { get; set; }
```

- *Type:* string

The format used for the representation of color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#colorimetry MediaconnectFlow#colorimetry}

---

##### `ExactFramerate`<sup>Optional</sup> <a name="ExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.exactFramerate"></a>

```csharp
public string ExactFramerate { get; set; }
```

- *Type:* string

The frame rate for the video stream, in frames/second. For example: 60000/1001.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#exact_framerate MediaconnectFlow#exact_framerate}

---

##### `Par`<sup>Optional</sup> <a name="Par" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.par"></a>

```csharp
public string Par { get; set; }
```

- *Type:* string

The pixel aspect ratio (PAR) of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#par MediaconnectFlow#par}

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.range"></a>

```csharp
public string Range { get; set; }
```

- *Type:* string

The encoding range of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#range MediaconnectFlow#range}

---

##### `ScanMode`<sup>Optional</sup> <a name="ScanMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.scanMode"></a>

```csharp
public string ScanMode { get; set; }
```

- *Type:* string

The type of compression that was used to smooth the video's appearance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#scan_mode MediaconnectFlow#scan_mode}

---

##### `Tcs`<sup>Optional</sup> <a name="Tcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.tcs"></a>

```csharp
public string Tcs { get; set; }
```

- *Type:* string

The transfer characteristic system (TCS) that is used in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#tcs MediaconnectFlow#tcs}

---

### MediaconnectFlowSource <a name="MediaconnectFlowSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSource {
    MediaconnectFlowSourceDecryption Decryption = null,
    string Description = null,
    string EntitlementArn = null,
    MediaconnectFlowSourceGatewayBridgeSource GatewayBridgeSource = null,
    double IngestPort = null,
    double MaxBitrate = null,
    double MaxLatency = null,
    double MaxSyncBuffer = null,
    IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurations[] MediaStreamSourceConfigurations = null,
    double MinLatency = null,
    string Name = null,
    string Protocol = null,
    double SenderControlPort = null,
    string SenderIpAddress = null,
    string SourceListenerAddress = null,
    double SourceListenerPort = null,
    string StreamId = null,
    string VpcInterfaceName = null,
    string WhitelistCidr = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a></code> | The type of decryption that is used on the content ingested from this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.description">Description</a></code> | <code>string</code> | A description for the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.entitlementArn">EntitlementArn</a></code> | <code>string</code> | The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.gatewayBridgeSource">GatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a></code> | The source configuration for cloud flows receiving a stream from a bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.ingestPort">IngestPort</a></code> | <code>double</code> | The port that the flow will be listening on for incoming content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxBitrate">MaxBitrate</a></code> | <code>double</code> | The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxLatency">MaxLatency</a></code> | <code>double</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxSyncBuffer">MaxSyncBuffer</a></code> | <code>double</code> | The size of the buffer (in milliseconds) to use to sync incoming source data. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.mediaStreamSourceConfigurations">MediaStreamSourceConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]</code> | The media stream that is associated with the source, and the parameters for that association. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.minLatency">MinLatency</a></code> | <code>double</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.name">Name</a></code> | <code>string</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.protocol">Protocol</a></code> | <code>string</code> | The protocol that is used by the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderControlPort">SenderControlPort</a></code> | <code>double</code> | The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderIpAddress">SenderIpAddress</a></code> | <code>string</code> | The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerAddress">SourceListenerAddress</a></code> | <code>string</code> | Source IP or domain name for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerPort">SourceListenerPort</a></code> | <code>double</code> | Source port for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.streamId">StreamId</a></code> | <code>string</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>string</code> | The name of the VPC Interface this Source is configured with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.whitelistCidr">WhitelistCidr</a></code> | <code>string</code> | The range of IP addresses that should be allowed to contribute content to your source. |

---

##### `Decryption`<sup>Optional</sup> <a name="Decryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.decryption"></a>

```csharp
public MediaconnectFlowSourceDecryption Decryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

The type of decryption that is used on the content ingested from this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#decryption MediaconnectFlow#decryption}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the source.

This value is not used or seen outside of the current AWS Elemental MediaConnect account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#description MediaconnectFlow#description}

---

##### `EntitlementArn`<sup>Optional</sup> <a name="EntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.entitlementArn"></a>

```csharp
public string EntitlementArn { get; set; }
```

- *Type:* string

The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.

The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#entitlement_arn MediaconnectFlow#entitlement_arn}

---

##### `GatewayBridgeSource`<sup>Optional</sup> <a name="GatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.gatewayBridgeSource"></a>

```csharp
public MediaconnectFlowSourceGatewayBridgeSource GatewayBridgeSource { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

The source configuration for cloud flows receiving a stream from a bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#gateway_bridge_source MediaconnectFlow#gateway_bridge_source}

---

##### `IngestPort`<sup>Optional</sup> <a name="IngestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.ingestPort"></a>

```csharp
public double IngestPort { get; set; }
```

- *Type:* double

The port that the flow will be listening on for incoming content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#ingest_port MediaconnectFlow#ingest_port}

---

##### `MaxBitrate`<sup>Optional</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxBitrate"></a>

```csharp
public double MaxBitrate { get; set; }
```

- *Type:* double

The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#max_bitrate MediaconnectFlow#max_bitrate}

---

##### `MaxLatency`<sup>Optional</sup> <a name="MaxLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxLatency"></a>

```csharp
public double MaxLatency { get; set; }
```

- *Type:* double

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#max_latency MediaconnectFlow#max_latency}

---

##### `MaxSyncBuffer`<sup>Optional</sup> <a name="MaxSyncBuffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxSyncBuffer"></a>

```csharp
public double MaxSyncBuffer { get; set; }
```

- *Type:* double

The size of the buffer (in milliseconds) to use to sync incoming source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#max_sync_buffer MediaconnectFlow#max_sync_buffer}

---

##### `MediaStreamSourceConfigurations`<sup>Optional</sup> <a name="MediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.mediaStreamSourceConfigurations"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurations[] MediaStreamSourceConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]

The media stream that is associated with the source, and the parameters for that association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#media_stream_source_configurations MediaconnectFlow#media_stream_source_configurations}

---

##### `MinLatency`<sup>Optional</sup> <a name="MinLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.minLatency"></a>

```csharp
public double MinLatency { get; set; }
```

- *Type:* double

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#min_latency MediaconnectFlow#min_latency}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The protocol that is used by the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#protocol MediaconnectFlow#protocol}

---

##### `SenderControlPort`<sup>Optional</sup> <a name="SenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderControlPort"></a>

```csharp
public double SenderControlPort { get; set; }
```

- *Type:* double

The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#sender_control_port MediaconnectFlow#sender_control_port}

---

##### `SenderIpAddress`<sup>Optional</sup> <a name="SenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderIpAddress"></a>

```csharp
public string SenderIpAddress { get; set; }
```

- *Type:* string

The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#sender_ip_address MediaconnectFlow#sender_ip_address}

---

##### `SourceListenerAddress`<sup>Optional</sup> <a name="SourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerAddress"></a>

```csharp
public string SourceListenerAddress { get; set; }
```

- *Type:* string

Source IP or domain name for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#source_listener_address MediaconnectFlow#source_listener_address}

---

##### `SourceListenerPort`<sup>Optional</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerPort"></a>

```csharp
public double SourceListenerPort { get; set; }
```

- *Type:* double

Source port for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#source_listener_port MediaconnectFlow#source_listener_port}

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.streamId"></a>

```csharp
public string StreamId { get; set; }
```

- *Type:* string

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#stream_id MediaconnectFlow#stream_id}

---

##### `VpcInterfaceName`<sup>Optional</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.vpcInterfaceName"></a>

```csharp
public string VpcInterfaceName { get; set; }
```

- *Type:* string

The name of the VPC Interface this Source is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}

---

##### `WhitelistCidr`<sup>Optional</sup> <a name="WhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.whitelistCidr"></a>

```csharp
public string WhitelistCidr { get; set; }
```

- *Type:* string

The range of IP addresses that should be allowed to contribute content to your source.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#whitelist_cidr MediaconnectFlow#whitelist_cidr}

---

### MediaconnectFlowSourceDecryption <a name="MediaconnectFlowSourceDecryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceDecryption {
    string Algorithm = null,
    string ConstantInitializationVector = null,
    string DeviceId = null,
    string KeyType = null,
    string Region = null,
    string ResourceId = null,
    string RoleArn = null,
    string SecretArn = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.algorithm">Algorithm</a></code> | <code>string</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>string</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.deviceId">DeviceId</a></code> | <code>string</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.keyType">KeyType</a></code> | <code>string</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.region">Region</a></code> | <code>string</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.resourceId">ResourceId</a></code> | <code>string</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.roleArn">RoleArn</a></code> | <code>string</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.secretArn">SecretArn</a></code> | <code>string</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.url">Url</a></code> | <code>string</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#algorithm MediaconnectFlow#algorithm}

---

##### `ConstantInitializationVector`<sup>Optional</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.constantInitializationVector"></a>

```csharp
public string ConstantInitializationVector { get; set; }
```

- *Type:* string

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#constant_initialization_vector MediaconnectFlow#constant_initialization_vector}

---

##### `DeviceId`<sup>Optional</sup> <a name="DeviceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.deviceId"></a>

```csharp
public string DeviceId { get; set; }
```

- *Type:* string

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#device_id MediaconnectFlow#device_id}

---

##### `KeyType`<sup>Optional</sup> <a name="KeyType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#key_type MediaconnectFlow#key_type}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#region MediaconnectFlow#region}

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.resourceId"></a>

```csharp
public string ResourceId { get; set; }
```

- *Type:* string

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#resource_id MediaconnectFlow#resource_id}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#secret_arn MediaconnectFlow#secret_arn}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#url MediaconnectFlow#url}

---

### MediaconnectFlowSourceFailoverConfig <a name="MediaconnectFlowSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceFailoverConfig {
    string FailoverMode = null,
    double RecoveryWindow = null,
    MediaconnectFlowSourceFailoverConfigSourcePriority SourcePriority = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.failoverMode">FailoverMode</a></code> | <code>string</code> | The type of failover you choose for this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.recoveryWindow">RecoveryWindow</a></code> | <code>double</code> | Search window time to look for dash-7 packets. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.sourcePriority">SourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a></code> | The priority you want to assign to a source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}. |

---

##### `FailoverMode`<sup>Optional</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.failoverMode"></a>

```csharp
public string FailoverMode { get; set; }
```

- *Type:* string

The type of failover you choose for this flow.

MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#failover_mode MediaconnectFlow#failover_mode}

---

##### `RecoveryWindow`<sup>Optional</sup> <a name="RecoveryWindow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.recoveryWindow"></a>

```csharp
public double RecoveryWindow { get; set; }
```

- *Type:* double

Search window time to look for dash-7 packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#recovery_window MediaconnectFlow#recovery_window}

---

##### `SourcePriority`<sup>Optional</sup> <a name="SourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.sourcePriority"></a>

```csharp
public MediaconnectFlowSourceFailoverConfigSourcePriority SourcePriority { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

The priority you want to assign to a source.

You can have a primary stream and a backup stream or two equally prioritized streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#source_priority MediaconnectFlow#source_priority}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}.

---

### MediaconnectFlowSourceFailoverConfigSourcePriority <a name="MediaconnectFlowSourceFailoverConfigSourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceFailoverConfigSourcePriority {
    string PrimarySource = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.property.primarySource">PrimarySource</a></code> | <code>string</code> | The name of the source you choose as the primary source for this flow. |

---

##### `PrimarySource`<sup>Optional</sup> <a name="PrimarySource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.property.primarySource"></a>

```csharp
public string PrimarySource { get; set; }
```

- *Type:* string

The name of the source you choose as the primary source for this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#primary_source MediaconnectFlow#primary_source}

---

### MediaconnectFlowSourceGatewayBridgeSource <a name="MediaconnectFlowSourceGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceGatewayBridgeSource {
    string BridgeArn = null,
    MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment VpcInterfaceAttachment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.bridgeArn">BridgeArn</a></code> | <code>string</code> | The ARN of the bridge feeding this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.vpcInterfaceAttachment">VpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this bridge source. |

---

##### `BridgeArn`<sup>Optional</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.bridgeArn"></a>

```csharp
public string BridgeArn { get; set; }
```

- *Type:* string

The ARN of the bridge feeding this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#bridge_arn MediaconnectFlow#bridge_arn}

---

##### `VpcInterfaceAttachment`<sup>Optional</sup> <a name="VpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.vpcInterfaceAttachment"></a>

```csharp
public MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment VpcInterfaceAttachment { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this bridge source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#vpc_interface_attachment MediaconnectFlow#vpc_interface_attachment}

---

### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment {
    string VpcInterfaceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>string</code> | The name of the VPC interface to use for this resource. |

---

##### `VpcInterfaceName`<sup>Optional</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```csharp
public string VpcInterfaceName { get; set; }
```

- *Type:* string

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurations <a name="MediaconnectFlowSourceMediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMediaStreamSourceConfigurations {
    string EncodingName = null,
    IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[] InputConfigurations = null,
    string MediaStreamName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.encodingName">EncodingName</a></code> | <code>string</code> | The format that was used to encode the data. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.inputConfigurations">InputConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]</code> | The media streams that you want to associate with the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.mediaStreamName">MediaStreamName</a></code> | <code>string</code> | A name that helps you distinguish one media stream from another. |

---

##### `EncodingName`<sup>Optional</sup> <a name="EncodingName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.encodingName"></a>

```csharp
public string EncodingName { get; set; }
```

- *Type:* string

The format that was used to encode the data.

For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#encoding_name MediaconnectFlow#encoding_name}

---

##### `InputConfigurations`<sup>Optional</sup> <a name="InputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.inputConfigurations"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[] InputConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]

The media streams that you want to associate with the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#input_configurations MediaconnectFlow#input_configurations}

---

##### `MediaStreamName`<sup>Optional</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.mediaStreamName"></a>

```csharp
public string MediaStreamName { get; set; }
```

- *Type:* string

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#media_stream_name MediaconnectFlow#media_stream_name}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations {
    double InputPort = null,
    MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface Interface = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.inputPort">InputPort</a></code> | <code>double</code> | The port that the flow listens on for an incoming media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.interface">Interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a></code> | The VPC interface where the media stream comes in from. |

---

##### `InputPort`<sup>Optional</sup> <a name="InputPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.inputPort"></a>

```csharp
public double InputPort { get; set; }
```

- *Type:* double

The port that the flow listens on for an incoming media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#input_port MediaconnectFlow#input_port}

---

##### `Interface`<sup>Optional</sup> <a name="Interface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.interface"></a>

```csharp
public MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface Interface { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

The VPC interface where the media stream comes in from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#interface MediaconnectFlow#interface}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.property.name">Name</a></code> | <code>string</code> | The name of the VPC interface that you want to use for the media stream associated with the output. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the VPC interface that you want to use for the media stream associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

### MediaconnectFlowSourceMonitoringConfig <a name="MediaconnectFlowSourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfig {
    IResolvable|MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[] AudioMonitoringSettings = null,
    string ContentQualityAnalysisState = null,
    string ThumbnailState = null,
    IResolvable|MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[] VideoMonitoringSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.audioMonitoringSettings">AudioMonitoringSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]</code> | Contains the settings for audio stream metrics monitoring. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.contentQualityAnalysisState">ContentQualityAnalysisState</a></code> | <code>string</code> | Indicates whether content quality analysis is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.thumbnailState">ThumbnailState</a></code> | <code>string</code> | The state of thumbnail monitoring. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.videoMonitoringSettings">VideoMonitoringSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]</code> | Contains the settings for video stream metrics monitoring. |

---

##### `AudioMonitoringSettings`<sup>Optional</sup> <a name="AudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.audioMonitoringSettings"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[] AudioMonitoringSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]

Contains the settings for audio stream metrics monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#audio_monitoring_settings MediaconnectFlow#audio_monitoring_settings}

---

##### `ContentQualityAnalysisState`<sup>Optional</sup> <a name="ContentQualityAnalysisState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.contentQualityAnalysisState"></a>

```csharp
public string ContentQualityAnalysisState { get; set; }
```

- *Type:* string

Indicates whether content quality analysis is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#content_quality_analysis_state MediaconnectFlow#content_quality_analysis_state}

---

##### `ThumbnailState`<sup>Optional</sup> <a name="ThumbnailState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.thumbnailState"></a>

```csharp
public string ThumbnailState { get; set; }
```

- *Type:* string

The state of thumbnail monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#thumbnail_state MediaconnectFlow#thumbnail_state}

---

##### `VideoMonitoringSettings`<sup>Optional</sup> <a name="VideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.videoMonitoringSettings"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[] VideoMonitoringSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]

Contains the settings for video stream metrics monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#video_monitoring_settings MediaconnectFlow#video_monitoring_settings}

---

### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings {
    MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio SilentAudio = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.property.silentAudio">SilentAudio</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a></code> | Configures settings for the SilentAudio metric. |

---

##### `SilentAudio`<sup>Optional</sup> <a name="SilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.property.silentAudio"></a>

```csharp
public MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio SilentAudio { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

Configures settings for the SilentAudio metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#silent_audio MediaconnectFlow#silent_audio}

---

### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio {
    string State = null,
    double ThresholdSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.state">State</a></code> | <code>string</code> | Indicates whether the SilentAudio metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>double</code> | Specifies the number of consecutive seconds of silence that triggers an event or alert. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Indicates whether the SilentAudio metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `ThresholdSeconds`<sup>Optional</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.thresholdSeconds"></a>

```csharp
public double ThresholdSeconds { get; set; }
```

- *Type:* double

Specifies the number of consecutive seconds of silence that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings {
    MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames BlackFrames = null,
    MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames FrozenFrames = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.blackFrames">BlackFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a></code> | Configures settings for the BlackFrames metric. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.frozenFrames">FrozenFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a></code> | Configures settings for the FrozenFrames metric. |

---

##### `BlackFrames`<sup>Optional</sup> <a name="BlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.blackFrames"></a>

```csharp
public MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames BlackFrames { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

Configures settings for the BlackFrames metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#black_frames MediaconnectFlow#black_frames}

---

##### `FrozenFrames`<sup>Optional</sup> <a name="FrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.frozenFrames"></a>

```csharp
public MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames FrozenFrames { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

Configures settings for the FrozenFrames metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#frozen_frames MediaconnectFlow#frozen_frames}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames {
    string State = null,
    double ThresholdSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.state">State</a></code> | <code>string</code> | Indicates whether the BlackFrames metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>double</code> | Specifies the number of consecutive seconds of black frames that triggers an event or alert. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Indicates whether the BlackFrames metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `ThresholdSeconds`<sup>Optional</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.thresholdSeconds"></a>

```csharp
public double ThresholdSeconds { get; set; }
```

- *Type:* double

Specifies the number of consecutive seconds of black frames that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames {
    string State = null,
    double ThresholdSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.state">State</a></code> | <code>string</code> | Indicates whether the FrozenFrames metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>double</code> | Specifies the number of consecutive seconds of a static image that triggers an event or alert. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Indicates whether the FrozenFrames metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `ThresholdSeconds`<sup>Optional</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.thresholdSeconds"></a>

```csharp
public double ThresholdSeconds { get; set; }
```

- *Type:* double

Specifies the number of consecutive seconds of a static image that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowVpcInterfaces <a name="MediaconnectFlowVpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowVpcInterfaces {
    string Name = null,
    string[] NetworkInterfaceIds = null,
    string NetworkInterfaceType = null,
    string RoleArn = null,
    string[] SecurityGroupIds = null,
    string SubnetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.name">Name</a></code> | <code>string</code> | Immutable and has to be a unique against other VpcInterfaces in this Flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | IDs of the network interfaces created in customer's account by MediaConnect. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceType">NetworkInterfaceType</a></code> | <code>string</code> | The type of network adapter that you want MediaConnect to use on this interface. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.roleArn">RoleArn</a></code> | <code>string</code> | Role Arn MediaConnect can assume to create ENIs in customer's account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | Security Group IDs to be used on ENI. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.subnetId">SubnetId</a></code> | <code>string</code> | Subnet must be in the AZ of the Flow. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Immutable and has to be a unique against other VpcInterfaces in this Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `NetworkInterfaceIds`<sup>Optional</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; set; }
```

- *Type:* string[]

IDs of the network interfaces created in customer's account by MediaConnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#network_interface_ids MediaconnectFlow#network_interface_ids}

---

##### `NetworkInterfaceType`<sup>Optional</sup> <a name="NetworkInterfaceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceType"></a>

```csharp
public string NetworkInterfaceType { get; set; }
```

- *Type:* string

The type of network adapter that you want MediaConnect to use on this interface.

If you don't set this value, it defaults to ENA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#network_interface_type MediaconnectFlow#network_interface_type}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

Role Arn MediaConnect can assume to create ENIs in customer's account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

Security Group IDs to be used on ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#security_group_ids MediaconnectFlow#security_group_ids}

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Subnet must be in the AZ of the Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow#subnet_id MediaconnectFlow#subnet_id}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowMaintenanceOutputReference <a name="MediaconnectFlowMaintenanceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMaintenanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceDay">ResetMaintenanceDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceStartHour">ResetMaintenanceStartHour</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaintenanceDay` <a name="ResetMaintenanceDay" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceDay"></a>

```csharp
private void ResetMaintenanceDay()
```

##### `ResetMaintenanceStartHour` <a name="ResetMaintenanceStartHour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceStartHour"></a>

```csharp
private void ResetMaintenanceStartHour()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDayInput">MaintenanceDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHourInput">MaintenanceStartHourInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDay">MaintenanceDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHour">MaintenanceStartHour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaintenanceDayInput`<sup>Optional</sup> <a name="MaintenanceDayInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDayInput"></a>

```csharp
public string MaintenanceDayInput { get; }
```

- *Type:* string

---

##### `MaintenanceStartHourInput`<sup>Optional</sup> <a name="MaintenanceStartHourInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHourInput"></a>

```csharp
public string MaintenanceStartHourInput { get; }
```

- *Type:* string

---

##### `MaintenanceDay`<sup>Required</sup> <a name="MaintenanceDay" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDay"></a>

```csharp
public string MaintenanceDay { get; }
```

- *Type:* string

---

##### `MaintenanceStartHour`<sup>Required</sup> <a name="MaintenanceStartHour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHour"></a>

```csharp
public string MaintenanceStartHour { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowMaintenance InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

---


### MediaconnectFlowMediaStreamsAttributesFmtpOutputReference <a name="MediaconnectFlowMediaStreamsAttributesFmtpOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamsAttributesFmtpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetChannelOrder">ResetChannelOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetColorimetry">ResetColorimetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetExactFramerate">ResetExactFramerate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetPar">ResetPar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetScanMode">ResetScanMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetTcs">ResetTcs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelOrder` <a name="ResetChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetChannelOrder"></a>

```csharp
private void ResetChannelOrder()
```

##### `ResetColorimetry` <a name="ResetColorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetColorimetry"></a>

```csharp
private void ResetColorimetry()
```

##### `ResetExactFramerate` <a name="ResetExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetExactFramerate"></a>

```csharp
private void ResetExactFramerate()
```

##### `ResetPar` <a name="ResetPar" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetPar"></a>

```csharp
private void ResetPar()
```

##### `ResetRange` <a name="ResetRange" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetScanMode` <a name="ResetScanMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetScanMode"></a>

```csharp
private void ResetScanMode()
```

##### `ResetTcs` <a name="ResetTcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetTcs"></a>

```csharp
private void ResetTcs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrderInput">ChannelOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetryInput">ColorimetryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerateInput">ExactFramerateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.parInput">ParInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.rangeInput">RangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanModeInput">ScanModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcsInput">TcsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrder">ChannelOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetry">Colorimetry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerate">ExactFramerate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.par">Par</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.range">Range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanMode">ScanMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcs">Tcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelOrderInput`<sup>Optional</sup> <a name="ChannelOrderInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrderInput"></a>

```csharp
public string ChannelOrderInput { get; }
```

- *Type:* string

---

##### `ColorimetryInput`<sup>Optional</sup> <a name="ColorimetryInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetryInput"></a>

```csharp
public string ColorimetryInput { get; }
```

- *Type:* string

---

##### `ExactFramerateInput`<sup>Optional</sup> <a name="ExactFramerateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerateInput"></a>

```csharp
public string ExactFramerateInput { get; }
```

- *Type:* string

---

##### `ParInput`<sup>Optional</sup> <a name="ParInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.parInput"></a>

```csharp
public string ParInput { get; }
```

- *Type:* string

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.rangeInput"></a>

```csharp
public string RangeInput { get; }
```

- *Type:* string

---

##### `ScanModeInput`<sup>Optional</sup> <a name="ScanModeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanModeInput"></a>

```csharp
public string ScanModeInput { get; }
```

- *Type:* string

---

##### `TcsInput`<sup>Optional</sup> <a name="TcsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcsInput"></a>

```csharp
public string TcsInput { get; }
```

- *Type:* string

---

##### `ChannelOrder`<sup>Required</sup> <a name="ChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrder"></a>

```csharp
public string ChannelOrder { get; }
```

- *Type:* string

---

##### `Colorimetry`<sup>Required</sup> <a name="Colorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetry"></a>

```csharp
public string Colorimetry { get; }
```

- *Type:* string

---

##### `ExactFramerate`<sup>Required</sup> <a name="ExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerate"></a>

```csharp
public string ExactFramerate { get; }
```

- *Type:* string

---

##### `Par`<sup>Required</sup> <a name="Par" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.par"></a>

```csharp
public string Par { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.range"></a>

```csharp
public string Range { get; }
```

- *Type:* string

---

##### `ScanMode`<sup>Required</sup> <a name="ScanMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanMode"></a>

```csharp
public string ScanMode { get; }
```

- *Type:* string

---

##### `Tcs`<sup>Required</sup> <a name="Tcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcs"></a>

```csharp
public string Tcs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamsAttributesFmtp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

---


### MediaconnectFlowMediaStreamsAttributesOutputReference <a name="MediaconnectFlowMediaStreamsAttributesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp">PutFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetFmtp">ResetFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetLang">ResetLang</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFmtp` <a name="PutFmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp"></a>

```csharp
private void PutFmtp(MediaconnectFlowMediaStreamsAttributesFmtp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

---

##### `ResetFmtp` <a name="ResetFmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetFmtp"></a>

```csharp
private void ResetFmtp()
```

##### `ResetLang` <a name="ResetLang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetLang"></a>

```csharp
private void ResetLang()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtp">Fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference">MediaconnectFlowMediaStreamsAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtpInput">FmtpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.langInput">LangInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.lang">Lang</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fmtp`<sup>Required</sup> <a name="Fmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtp"></a>

```csharp
public MediaconnectFlowMediaStreamsAttributesFmtpOutputReference Fmtp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference">MediaconnectFlowMediaStreamsAttributesFmtpOutputReference</a>

---

##### `FmtpInput`<sup>Optional</sup> <a name="FmtpInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtpInput"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamsAttributesFmtp FmtpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

---

##### `LangInput`<sup>Optional</sup> <a name="LangInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.langInput"></a>

```csharp
public string LangInput { get; }
```

- *Type:* string

---

##### `Lang`<sup>Required</sup> <a name="Lang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.lang"></a>

```csharp
public string Lang { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamsAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

---


### MediaconnectFlowMediaStreamsList <a name="MediaconnectFlowMediaStreamsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get"></a>

```csharp
private MediaconnectFlowMediaStreamsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreams[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]

---


### MediaconnectFlowMediaStreamsOutputReference <a name="MediaconnectFlowMediaStreamsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowMediaStreamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes">PutAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetAttributes">ResetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetClockRate">ResetClockRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetFmt">ResetFmt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamId">ResetMediaStreamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamName">ResetMediaStreamName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamType">ResetMediaStreamType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetVideoFormat">ResetVideoFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributes` <a name="PutAttributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes"></a>

```csharp
private void PutAttributes(MediaconnectFlowMediaStreamsAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

---

##### `ResetAttributes` <a name="ResetAttributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetAttributes"></a>

```csharp
private void ResetAttributes()
```

##### `ResetClockRate` <a name="ResetClockRate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetClockRate"></a>

```csharp
private void ResetClockRate()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFmt` <a name="ResetFmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetFmt"></a>

```csharp
private void ResetFmt()
```

##### `ResetMediaStreamId` <a name="ResetMediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamId"></a>

```csharp
private void ResetMediaStreamId()
```

##### `ResetMediaStreamName` <a name="ResetMediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamName"></a>

```csharp
private void ResetMediaStreamName()
```

##### `ResetMediaStreamType` <a name="ResetMediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamType"></a>

```csharp
private void ResetMediaStreamType()
```

##### `ResetVideoFormat` <a name="ResetVideoFormat" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetVideoFormat"></a>

```csharp
private void ResetVideoFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference">MediaconnectFlowMediaStreamsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributesInput">AttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRateInput">ClockRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmtInput">FmtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamIdInput">MediaStreamIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamNameInput">MediaStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamTypeInput">MediaStreamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormatInput">VideoFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRate">ClockRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmt">Fmt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamId">MediaStreamId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamName">MediaStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamType">MediaStreamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormat">VideoFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributes"></a>

```csharp
public MediaconnectFlowMediaStreamsAttributesOutputReference Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference">MediaconnectFlowMediaStreamsAttributesOutputReference</a>

---

##### `AttributesInput`<sup>Optional</sup> <a name="AttributesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributesInput"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreamsAttributes AttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

---

##### `ClockRateInput`<sup>Optional</sup> <a name="ClockRateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRateInput"></a>

```csharp
public double ClockRateInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FmtInput`<sup>Optional</sup> <a name="FmtInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmtInput"></a>

```csharp
public double FmtInput { get; }
```

- *Type:* double

---

##### `MediaStreamIdInput`<sup>Optional</sup> <a name="MediaStreamIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamIdInput"></a>

```csharp
public double MediaStreamIdInput { get; }
```

- *Type:* double

---

##### `MediaStreamNameInput`<sup>Optional</sup> <a name="MediaStreamNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamNameInput"></a>

```csharp
public string MediaStreamNameInput { get; }
```

- *Type:* string

---

##### `MediaStreamTypeInput`<sup>Optional</sup> <a name="MediaStreamTypeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamTypeInput"></a>

```csharp
public string MediaStreamTypeInput { get; }
```

- *Type:* string

---

##### `VideoFormatInput`<sup>Optional</sup> <a name="VideoFormatInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormatInput"></a>

```csharp
public string VideoFormatInput { get; }
```

- *Type:* string

---

##### `ClockRate`<sup>Required</sup> <a name="ClockRate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRate"></a>

```csharp
public double ClockRate { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Fmt`<sup>Required</sup> <a name="Fmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmt"></a>

```csharp
public double Fmt { get; }
```

- *Type:* double

---

##### `MediaStreamId`<sup>Required</sup> <a name="MediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamId"></a>

```csharp
public double MediaStreamId { get; }
```

- *Type:* double

---

##### `MediaStreamName`<sup>Required</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamName"></a>

```csharp
public string MediaStreamName { get; }
```

- *Type:* string

---

##### `MediaStreamType`<sup>Required</sup> <a name="MediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamType"></a>

```csharp
public string MediaStreamType { get; }
```

- *Type:* string

---

##### `VideoFormat`<sup>Required</sup> <a name="VideoFormat" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormat"></a>

```csharp
public string VideoFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowMediaStreams InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>

---


### MediaconnectFlowSourceDecryptionOutputReference <a name="MediaconnectFlowSourceDecryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceDecryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetConstantInitializationVector">ResetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetDeviceId">ResetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetKeyType">ResetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetConstantInitializationVector` <a name="ResetConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetConstantInitializationVector"></a>

```csharp
private void ResetConstantInitializationVector()
```

##### `ResetDeviceId` <a name="ResetDeviceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetDeviceId"></a>

```csharp
private void ResetDeviceId()
```

##### `ResetKeyType` <a name="ResetKeyType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetKeyType"></a>

```csharp
private void ResetKeyType()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetResourceId"></a>

```csharp
private void ResetResourceId()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVectorInput">ConstantInitializationVectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceIdInput">DeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceId">DeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `ConstantInitializationVectorInput`<sup>Optional</sup> <a name="ConstantInitializationVectorInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVectorInput"></a>

```csharp
public string ConstantInitializationVectorInput { get; }
```

- *Type:* string

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceIdInput"></a>

```csharp
public string DeviceIdInput { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceIdInput"></a>

```csharp
public string ResourceIdInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVector"></a>

```csharp
public string ConstantInitializationVector { get; }
```

- *Type:* string

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceId"></a>

```csharp
public string DeviceId { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceDecryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

---


### MediaconnectFlowSourceFailoverConfigOutputReference <a name="MediaconnectFlowSourceFailoverConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceFailoverConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority">PutSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetFailoverMode">ResetFailoverMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetRecoveryWindow">ResetRecoveryWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetSourcePriority">ResetSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourcePriority` <a name="PutSourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority"></a>

```csharp
private void PutSourcePriority(MediaconnectFlowSourceFailoverConfigSourcePriority Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

---

##### `ResetFailoverMode` <a name="ResetFailoverMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetFailoverMode"></a>

```csharp
private void ResetFailoverMode()
```

##### `ResetRecoveryWindow` <a name="ResetRecoveryWindow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetRecoveryWindow"></a>

```csharp
private void ResetRecoveryWindow()
```

##### `ResetSourcePriority` <a name="ResetSourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetSourcePriority"></a>

```csharp
private void ResetSourcePriority()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriority">SourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference">MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverModeInput">FailoverModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindowInput">RecoveryWindowInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriorityInput">SourcePriorityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverMode">FailoverMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindow">RecoveryWindow</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourcePriority`<sup>Required</sup> <a name="SourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriority"></a>

```csharp
public MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference SourcePriority { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference">MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference</a>

---

##### `FailoverModeInput`<sup>Optional</sup> <a name="FailoverModeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverModeInput"></a>

```csharp
public string FailoverModeInput { get; }
```

- *Type:* string

---

##### `RecoveryWindowInput`<sup>Optional</sup> <a name="RecoveryWindowInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindowInput"></a>

```csharp
public double RecoveryWindowInput { get; }
```

- *Type:* double

---

##### `SourcePriorityInput`<sup>Optional</sup> <a name="SourcePriorityInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriorityInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceFailoverConfigSourcePriority SourcePriorityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `FailoverMode`<sup>Required</sup> <a name="FailoverMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverMode"></a>

```csharp
public string FailoverMode { get; }
```

- *Type:* string

---

##### `RecoveryWindow`<sup>Required</sup> <a name="RecoveryWindow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindow"></a>

```csharp
public double RecoveryWindow { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceFailoverConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

---


### MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference <a name="MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource">ResetPrimarySource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrimarySource` <a name="ResetPrimarySource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource"></a>

```csharp
private void ResetPrimarySource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput">PrimarySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySource">PrimarySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrimarySourceInput`<sup>Optional</sup> <a name="PrimarySourceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput"></a>

```csharp
public string PrimarySourceInput { get; }
```

- *Type:* string

---

##### `PrimarySource`<sup>Required</sup> <a name="PrimarySource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySource"></a>

```csharp
public string PrimarySource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceFailoverConfigSourcePriority InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceGatewayBridgeSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment">PutVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetBridgeArn">ResetBridgeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetVpcInterfaceAttachment">ResetVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVpcInterfaceAttachment` <a name="PutVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment"></a>

```csharp
private void PutVpcInterfaceAttachment(MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

---

##### `ResetBridgeArn` <a name="ResetBridgeArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetBridgeArn"></a>

```csharp
private void ResetBridgeArn()
```

##### `ResetVpcInterfaceAttachment` <a name="ResetVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetVpcInterfaceAttachment"></a>

```csharp
private void ResetVpcInterfaceAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachment">VpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArnInput">BridgeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachmentInput">VpcInterfaceAttachmentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArn">BridgeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcInterfaceAttachment`<sup>Required</sup> <a name="VpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachment"></a>

```csharp
public MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference VpcInterfaceAttachment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference</a>

---

##### `BridgeArnInput`<sup>Optional</sup> <a name="BridgeArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArnInput"></a>

```csharp
public string BridgeArnInput { get; }
```

- *Type:* string

---

##### `VpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="VpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachmentInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment VpcInterfaceAttachmentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

---

##### `BridgeArn`<sup>Required</sup> <a name="BridgeArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArn"></a>

```csharp
public string BridgeArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceGatewayBridgeSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">ResetVpcInterfaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcInterfaceName` <a name="ResetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```csharp
private void ResetVpcInterfaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">VpcInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `VpcInterfaceNameInput`<sup>Optional</sup> <a name="VpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```csharp
public string VpcInterfaceNameInput { get; }
```

- *Type:* string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```csharp
public string VpcInterfaceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get"></a>

```csharp
private MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface">PutInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInputPort">ResetInputPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInterface">ResetInterface</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInterface` <a name="PutInterface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface"></a>

```csharp
private void PutInterface(MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

---

##### `ResetInputPort` <a name="ResetInputPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInputPort"></a>

```csharp
private void ResetInputPort()
```

##### `ResetInterface` <a name="ResetInterface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInterface"></a>

```csharp
private void ResetInterface()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interface">Interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPortInput">InputPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interfaceInput">InterfaceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPort">InputPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interface"></a>

```csharp
public MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference Interface { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference</a>

---

##### `InputPortInput`<sup>Optional</sup> <a name="InputPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPortInput"></a>

```csharp
public double InputPortInput { get; }
```

- *Type:* double

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interfaceInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface InterfaceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

---

##### `InputPort`<sup>Required</sup> <a name="InputPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPort"></a>

```csharp
public double InputPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsList <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMediaStreamSourceConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get"></a>

```csharp
private MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations">PutInputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetEncodingName">ResetEncodingName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetInputConfigurations">ResetInputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetMediaStreamName">ResetMediaStreamName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputConfigurations` <a name="PutInputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations"></a>

```csharp
private void PutInputConfigurations(IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]

---

##### `ResetEncodingName` <a name="ResetEncodingName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetEncodingName"></a>

```csharp
private void ResetEncodingName()
```

##### `ResetInputConfigurations` <a name="ResetInputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetInputConfigurations"></a>

```csharp
private void ResetInputConfigurations()
```

##### `ResetMediaStreamName` <a name="ResetMediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetMediaStreamName"></a>

```csharp
private void ResetMediaStreamName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurations">InputConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingNameInput">EncodingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurationsInput">InputConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamNameInput">MediaStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingName">EncodingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamName">MediaStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputConfigurations`<sup>Required</sup> <a name="InputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurations"></a>

```csharp
public MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList InputConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList</a>

---

##### `EncodingNameInput`<sup>Optional</sup> <a name="EncodingNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingNameInput"></a>

```csharp
public string EncodingNameInput { get; }
```

- *Type:* string

---

##### `InputConfigurationsInput`<sup>Optional</sup> <a name="InputConfigurationsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurationsInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[] InputConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]

---

##### `MediaStreamNameInput`<sup>Optional</sup> <a name="MediaStreamNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamNameInput"></a>

```csharp
public string MediaStreamNameInput { get; }
```

- *Type:* string

---

##### `EncodingName`<sup>Required</sup> <a name="EncodingName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingName"></a>

```csharp
public string EncodingName { get; }
```

- *Type:* string

---

##### `MediaStreamName`<sup>Required</sup> <a name="MediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamName"></a>

```csharp
public string MediaStreamName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get"></a>

```csharp
private MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio">PutSilentAudio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resetSilentAudio">ResetSilentAudio</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSilentAudio` <a name="PutSilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio"></a>

```csharp
private void PutSilentAudio(MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

---

##### `ResetSilentAudio` <a name="ResetSilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resetSilentAudio"></a>

```csharp
private void ResetSilentAudio()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudio">SilentAudio</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudioInput">SilentAudioInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SilentAudio`<sup>Required</sup> <a name="SilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudio"></a>

```csharp
public MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference SilentAudio { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference</a>

---

##### `SilentAudioInput`<sup>Optional</sup> <a name="SilentAudioInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudioInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio SilentAudioInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetThresholdSeconds">ResetThresholdSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetThresholdSeconds` <a name="ResetThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetThresholdSeconds"></a>

```csharp
private void ResetThresholdSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSecondsInput">ThresholdSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `ThresholdSecondsInput`<sup>Optional</sup> <a name="ThresholdSecondsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSecondsInput"></a>

```csharp
public double ThresholdSecondsInput { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSeconds"></a>

```csharp
public double ThresholdSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

---


### MediaconnectFlowSourceMonitoringConfigOutputReference <a name="MediaconnectFlowSourceMonitoringConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings">PutAudioMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings">PutVideoMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetAudioMonitoringSettings">ResetAudioMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetContentQualityAnalysisState">ResetContentQualityAnalysisState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetThumbnailState">ResetThumbnailState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetVideoMonitoringSettings">ResetVideoMonitoringSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioMonitoringSettings` <a name="PutAudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings"></a>

```csharp
private void PutAudioMonitoringSettings(IResolvable|MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]

---

##### `PutVideoMonitoringSettings` <a name="PutVideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings"></a>

```csharp
private void PutVideoMonitoringSettings(IResolvable|MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]

---

##### `ResetAudioMonitoringSettings` <a name="ResetAudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetAudioMonitoringSettings"></a>

```csharp
private void ResetAudioMonitoringSettings()
```

##### `ResetContentQualityAnalysisState` <a name="ResetContentQualityAnalysisState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetContentQualityAnalysisState"></a>

```csharp
private void ResetContentQualityAnalysisState()
```

##### `ResetThumbnailState` <a name="ResetThumbnailState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetThumbnailState"></a>

```csharp
private void ResetThumbnailState()
```

##### `ResetVideoMonitoringSettings` <a name="ResetVideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetVideoMonitoringSettings"></a>

```csharp
private void ResetVideoMonitoringSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettings">AudioMonitoringSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettings">VideoMonitoringSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettingsInput">AudioMonitoringSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisStateInput">ContentQualityAnalysisStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailStateInput">ThumbnailStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettingsInput">VideoMonitoringSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisState">ContentQualityAnalysisState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailState">ThumbnailState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioMonitoringSettings`<sup>Required</sup> <a name="AudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettings"></a>

```csharp
public MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList AudioMonitoringSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList</a>

---

##### `VideoMonitoringSettings`<sup>Required</sup> <a name="VideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettings"></a>

```csharp
public MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList VideoMonitoringSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList</a>

---

##### `AudioMonitoringSettingsInput`<sup>Optional</sup> <a name="AudioMonitoringSettingsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettingsInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[] AudioMonitoringSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]

---

##### `ContentQualityAnalysisStateInput`<sup>Optional</sup> <a name="ContentQualityAnalysisStateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisStateInput"></a>

```csharp
public string ContentQualityAnalysisStateInput { get; }
```

- *Type:* string

---

##### `ThumbnailStateInput`<sup>Optional</sup> <a name="ThumbnailStateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailStateInput"></a>

```csharp
public string ThumbnailStateInput { get; }
```

- *Type:* string

---

##### `VideoMonitoringSettingsInput`<sup>Optional</sup> <a name="VideoMonitoringSettingsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettingsInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[] VideoMonitoringSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]

---

##### `ContentQualityAnalysisState`<sup>Required</sup> <a name="ContentQualityAnalysisState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisState"></a>

```csharp
public string ContentQualityAnalysisState { get; }
```

- *Type:* string

---

##### `ThumbnailState`<sup>Required</sup> <a name="ThumbnailState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailState"></a>

```csharp
public string ThumbnailState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetThresholdSeconds">ResetThresholdSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetThresholdSeconds` <a name="ResetThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetThresholdSeconds"></a>

```csharp
private void ResetThresholdSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSecondsInput">ThresholdSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `ThresholdSecondsInput`<sup>Optional</sup> <a name="ThresholdSecondsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSecondsInput"></a>

```csharp
public double ThresholdSecondsInput { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSeconds"></a>

```csharp
public double ThresholdSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetThresholdSeconds">ResetThresholdSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetThresholdSeconds` <a name="ResetThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetThresholdSeconds"></a>

```csharp
private void ResetThresholdSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSecondsInput">ThresholdSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSeconds">ThresholdSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `ThresholdSecondsInput`<sup>Optional</sup> <a name="ThresholdSecondsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSecondsInput"></a>

```csharp
public double ThresholdSecondsInput { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `ThresholdSeconds`<sup>Required</sup> <a name="ThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSeconds"></a>

```csharp
public double ThresholdSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get"></a>

```csharp
private MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames">PutBlackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames">PutFrozenFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetBlackFrames">ResetBlackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetFrozenFrames">ResetFrozenFrames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBlackFrames` <a name="PutBlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames"></a>

```csharp
private void PutBlackFrames(MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

---

##### `PutFrozenFrames` <a name="PutFrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames"></a>

```csharp
private void PutFrozenFrames(MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

---

##### `ResetBlackFrames` <a name="ResetBlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetBlackFrames"></a>

```csharp
private void ResetBlackFrames()
```

##### `ResetFrozenFrames` <a name="ResetFrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetFrozenFrames"></a>

```csharp
private void ResetFrozenFrames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFrames">BlackFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFrames">FrozenFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFramesInput">BlackFramesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFramesInput">FrozenFramesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlackFrames`<sup>Required</sup> <a name="BlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFrames"></a>

```csharp
public MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference BlackFrames { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference</a>

---

##### `FrozenFrames`<sup>Required</sup> <a name="FrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFrames"></a>

```csharp
public MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference FrozenFrames { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference</a>

---

##### `BlackFramesInput`<sup>Optional</sup> <a name="BlackFramesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFramesInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames BlackFramesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

---

##### `FrozenFramesInput`<sup>Optional</sup> <a name="FrozenFramesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFramesInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames FrozenFramesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>

---


### MediaconnectFlowSourceOutputReference <a name="MediaconnectFlowSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption">PutDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource">PutGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations">PutMediaStreamSourceConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDecryption">ResetDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetEntitlementArn">ResetEntitlementArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetGatewayBridgeSource">ResetGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetIngestPort">ResetIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxBitrate">ResetMaxBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxLatency">ResetMaxLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxSyncBuffer">ResetMaxSyncBuffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMediaStreamSourceConfigurations">ResetMediaStreamSourceConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMinLatency">ResetMinLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderControlPort">ResetSenderControlPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderIpAddress">ResetSenderIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerAddress">ResetSourceListenerAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerPort">ResetSourceListenerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetStreamId">ResetStreamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetVpcInterfaceName">ResetVpcInterfaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetWhitelistCidr">ResetWhitelistCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDecryption` <a name="PutDecryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption"></a>

```csharp
private void PutDecryption(MediaconnectFlowSourceDecryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

---

##### `PutGatewayBridgeSource` <a name="PutGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource"></a>

```csharp
private void PutGatewayBridgeSource(MediaconnectFlowSourceGatewayBridgeSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

---

##### `PutMediaStreamSourceConfigurations` <a name="PutMediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations"></a>

```csharp
private void PutMediaStreamSourceConfigurations(IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]

---

##### `ResetDecryption` <a name="ResetDecryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDecryption"></a>

```csharp
private void ResetDecryption()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEntitlementArn` <a name="ResetEntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetEntitlementArn"></a>

```csharp
private void ResetEntitlementArn()
```

##### `ResetGatewayBridgeSource` <a name="ResetGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetGatewayBridgeSource"></a>

```csharp
private void ResetGatewayBridgeSource()
```

##### `ResetIngestPort` <a name="ResetIngestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetIngestPort"></a>

```csharp
private void ResetIngestPort()
```

##### `ResetMaxBitrate` <a name="ResetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxBitrate"></a>

```csharp
private void ResetMaxBitrate()
```

##### `ResetMaxLatency` <a name="ResetMaxLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxLatency"></a>

```csharp
private void ResetMaxLatency()
```

##### `ResetMaxSyncBuffer` <a name="ResetMaxSyncBuffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxSyncBuffer"></a>

```csharp
private void ResetMaxSyncBuffer()
```

##### `ResetMediaStreamSourceConfigurations` <a name="ResetMediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMediaStreamSourceConfigurations"></a>

```csharp
private void ResetMediaStreamSourceConfigurations()
```

##### `ResetMinLatency` <a name="ResetMinLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMinLatency"></a>

```csharp
private void ResetMinLatency()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetSenderControlPort` <a name="ResetSenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderControlPort"></a>

```csharp
private void ResetSenderControlPort()
```

##### `ResetSenderIpAddress` <a name="ResetSenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderIpAddress"></a>

```csharp
private void ResetSenderIpAddress()
```

##### `ResetSourceListenerAddress` <a name="ResetSourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerAddress"></a>

```csharp
private void ResetSourceListenerAddress()
```

##### `ResetSourceListenerPort` <a name="ResetSourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerPort"></a>

```csharp
private void ResetSourceListenerPort()
```

##### `ResetStreamId` <a name="ResetStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetStreamId"></a>

```csharp
private void ResetStreamId()
```

##### `ResetVpcInterfaceName` <a name="ResetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetVpcInterfaceName"></a>

```csharp
private void ResetVpcInterfaceName()
```

##### `ResetWhitelistCidr` <a name="ResetWhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetWhitelistCidr"></a>

```csharp
private void ResetWhitelistCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference">MediaconnectFlowSourceDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSource">GatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference">MediaconnectFlowSourceGatewayBridgeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestIp">IngestIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurations">MediaStreamSourceConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceArn">SourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceIngestPort">SourceIngestPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryptionInput">DecryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArnInput">EntitlementArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSourceInput">GatewayBridgeSourceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPortInput">IngestPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrateInput">MaxBitrateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatencyInput">MaxLatencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBufferInput">MaxSyncBufferInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurationsInput">MediaStreamSourceConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatencyInput">MinLatencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPortInput">SenderControlPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddressInput">SenderIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddressInput">SourceListenerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPortInput">SourceListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamIdInput">StreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceNameInput">VpcInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidrInput">WhitelistCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArn">EntitlementArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPort">IngestPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrate">MaxBitrate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatency">MaxLatency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBuffer">MaxSyncBuffer</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatency">MinLatency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPort">SenderControlPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddress">SenderIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddress">SourceListenerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPort">SourceListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceName">VpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidr">WhitelistCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Decryption`<sup>Required</sup> <a name="Decryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryption"></a>

```csharp
public MediaconnectFlowSourceDecryptionOutputReference Decryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference">MediaconnectFlowSourceDecryptionOutputReference</a>

---

##### `GatewayBridgeSource`<sup>Required</sup> <a name="GatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSource"></a>

```csharp
public MediaconnectFlowSourceGatewayBridgeSourceOutputReference GatewayBridgeSource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference">MediaconnectFlowSourceGatewayBridgeSourceOutputReference</a>

---

##### `IngestIp`<sup>Required</sup> <a name="IngestIp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestIp"></a>

```csharp
public string IngestIp { get; }
```

- *Type:* string

---

##### `MediaStreamSourceConfigurations`<sup>Required</sup> <a name="MediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurations"></a>

```csharp
public MediaconnectFlowSourceMediaStreamSourceConfigurationsList MediaStreamSourceConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsList</a>

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceArn"></a>

```csharp
public string SourceArn { get; }
```

- *Type:* string

---

##### `SourceIngestPort`<sup>Required</sup> <a name="SourceIngestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceIngestPort"></a>

```csharp
public string SourceIngestPort { get; }
```

- *Type:* string

---

##### `DecryptionInput`<sup>Optional</sup> <a name="DecryptionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryptionInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceDecryption DecryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EntitlementArnInput`<sup>Optional</sup> <a name="EntitlementArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArnInput"></a>

```csharp
public string EntitlementArnInput { get; }
```

- *Type:* string

---

##### `GatewayBridgeSourceInput`<sup>Optional</sup> <a name="GatewayBridgeSourceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSourceInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceGatewayBridgeSource GatewayBridgeSourceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

---

##### `IngestPortInput`<sup>Optional</sup> <a name="IngestPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPortInput"></a>

```csharp
public double IngestPortInput { get; }
```

- *Type:* double

---

##### `MaxBitrateInput`<sup>Optional</sup> <a name="MaxBitrateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrateInput"></a>

```csharp
public double MaxBitrateInput { get; }
```

- *Type:* double

---

##### `MaxLatencyInput`<sup>Optional</sup> <a name="MaxLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatencyInput"></a>

```csharp
public double MaxLatencyInput { get; }
```

- *Type:* double

---

##### `MaxSyncBufferInput`<sup>Optional</sup> <a name="MaxSyncBufferInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBufferInput"></a>

```csharp
public double MaxSyncBufferInput { get; }
```

- *Type:* double

---

##### `MediaStreamSourceConfigurationsInput`<sup>Optional</sup> <a name="MediaStreamSourceConfigurationsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurationsInput"></a>

```csharp
public IResolvable|MediaconnectFlowSourceMediaStreamSourceConfigurations[] MediaStreamSourceConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]

---

##### `MinLatencyInput`<sup>Optional</sup> <a name="MinLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatencyInput"></a>

```csharp
public double MinLatencyInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `SenderControlPortInput`<sup>Optional</sup> <a name="SenderControlPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPortInput"></a>

```csharp
public double SenderControlPortInput { get; }
```

- *Type:* double

---

##### `SenderIpAddressInput`<sup>Optional</sup> <a name="SenderIpAddressInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddressInput"></a>

```csharp
public string SenderIpAddressInput { get; }
```

- *Type:* string

---

##### `SourceListenerAddressInput`<sup>Optional</sup> <a name="SourceListenerAddressInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddressInput"></a>

```csharp
public string SourceListenerAddressInput { get; }
```

- *Type:* string

---

##### `SourceListenerPortInput`<sup>Optional</sup> <a name="SourceListenerPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPortInput"></a>

```csharp
public double SourceListenerPortInput { get; }
```

- *Type:* double

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamIdInput"></a>

```csharp
public string StreamIdInput { get; }
```

- *Type:* string

---

##### `VpcInterfaceNameInput`<sup>Optional</sup> <a name="VpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceNameInput"></a>

```csharp
public string VpcInterfaceNameInput { get; }
```

- *Type:* string

---

##### `WhitelistCidrInput`<sup>Optional</sup> <a name="WhitelistCidrInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidrInput"></a>

```csharp
public string WhitelistCidrInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EntitlementArn`<sup>Required</sup> <a name="EntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArn"></a>

```csharp
public string EntitlementArn { get; }
```

- *Type:* string

---

##### `IngestPort`<sup>Required</sup> <a name="IngestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPort"></a>

```csharp
public double IngestPort { get; }
```

- *Type:* double

---

##### `MaxBitrate`<sup>Required</sup> <a name="MaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrate"></a>

```csharp
public double MaxBitrate { get; }
```

- *Type:* double

---

##### `MaxLatency`<sup>Required</sup> <a name="MaxLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatency"></a>

```csharp
public double MaxLatency { get; }
```

- *Type:* double

---

##### `MaxSyncBuffer`<sup>Required</sup> <a name="MaxSyncBuffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBuffer"></a>

```csharp
public double MaxSyncBuffer { get; }
```

- *Type:* double

---

##### `MinLatency`<sup>Required</sup> <a name="MinLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatency"></a>

```csharp
public double MinLatency { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SenderControlPort`<sup>Required</sup> <a name="SenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPort"></a>

```csharp
public double SenderControlPort { get; }
```

- *Type:* double

---

##### `SenderIpAddress`<sup>Required</sup> <a name="SenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddress"></a>

```csharp
public string SenderIpAddress { get; }
```

- *Type:* string

---

##### `SourceListenerAddress`<sup>Required</sup> <a name="SourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddress"></a>

```csharp
public string SourceListenerAddress { get; }
```

- *Type:* string

---

##### `SourceListenerPort`<sup>Required</sup> <a name="SourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPort"></a>

```csharp
public double SourceListenerPort { get; }
```

- *Type:* double

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `VpcInterfaceName`<sup>Required</sup> <a name="VpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceName"></a>

```csharp
public string VpcInterfaceName { get; }
```

- *Type:* string

---

##### `WhitelistCidr`<sup>Required</sup> <a name="WhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidr"></a>

```csharp
public string WhitelistCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowSource InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

---


### MediaconnectFlowVpcInterfacesList <a name="MediaconnectFlowVpcInterfacesList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowVpcInterfacesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get"></a>

```csharp
private MediaconnectFlowVpcInterfacesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowVpcInterfaces[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]

---


### MediaconnectFlowVpcInterfacesOutputReference <a name="MediaconnectFlowVpcInterfacesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediaconnectFlowVpcInterfacesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceIds">ResetNetworkInterfaceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceType">ResetNetworkInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNetworkInterfaceIds` <a name="ResetNetworkInterfaceIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceIds"></a>

```csharp
private void ResetNetworkInterfaceIds()
```

##### `ResetNetworkInterfaceType` <a name="ResetNetworkInterfaceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceType"></a>

```csharp
private void ResetNetworkInterfaceType()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIdsInput">NetworkInterfaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceTypeInput">NetworkInterfaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceType">NetworkInterfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdsInput`<sup>Optional</sup> <a name="NetworkInterfaceIdsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIdsInput"></a>

```csharp
public string[] NetworkInterfaceIdsInput { get; }
```

- *Type:* string[]

---

##### `NetworkInterfaceTypeInput`<sup>Optional</sup> <a name="NetworkInterfaceTypeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceTypeInput"></a>

```csharp
public string NetworkInterfaceTypeInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIds"></a>

```csharp
public string[] NetworkInterfaceIds { get; }
```

- *Type:* string[]

---

##### `NetworkInterfaceType`<sup>Required</sup> <a name="NetworkInterfaceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceType"></a>

```csharp
public string NetworkInterfaceType { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediaconnectFlowVpcInterfaces InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>

---



