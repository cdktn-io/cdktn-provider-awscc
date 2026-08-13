# `ecsTaskSet` Submodule <a name="`ecsTaskSet` Submodule" id="@cdktn/provider-awscc.ecsTaskSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsTaskSet <a name="EcsTaskSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set awscc_ecs_task_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSet(Construct Scope, string Id, EcsTaskSetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig">EcsTaskSetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig">EcsTaskSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy">PutCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putLoadBalancers">PutLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putScale">PutScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putServiceRegistries">PutServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetCapacityProviderStrategy">ResetCapacityProviderStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetExternalId">ResetExternalId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetLaunchType">ResetLaunchType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetLoadBalancers">ResetLoadBalancers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetPlatformVersion">ResetPlatformVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetScale">ResetScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetServiceRegistries">ResetServiceRegistries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCapacityProviderStrategy` <a name="PutCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy"></a>

```csharp
private void PutCapacityProviderStrategy(IResolvable|EcsTaskSetCapacityProviderStrategy[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putCapacityProviderStrategy.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]

---

##### `PutLoadBalancers` <a name="PutLoadBalancers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putLoadBalancers"></a>

```csharp
private void PutLoadBalancers(IResolvable|EcsTaskSetLoadBalancers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putLoadBalancers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>[]

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(EcsTaskSetNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---

##### `PutScale` <a name="PutScale" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putScale"></a>

```csharp
private void PutScale(EcsTaskSetScale Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putScale.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---

##### `PutServiceRegistries` <a name="PutServiceRegistries" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putServiceRegistries"></a>

```csharp
private void PutServiceRegistries(IResolvable|EcsTaskSetServiceRegistries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putServiceRegistries.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putTags"></a>

```csharp
private void PutTags(IResolvable|EcsTaskSetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>[]

---

##### `ResetCapacityProviderStrategy` <a name="ResetCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetCapacityProviderStrategy"></a>

```csharp
private void ResetCapacityProviderStrategy()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetExternalId"></a>

```csharp
private void ResetExternalId()
```

##### `ResetLaunchType` <a name="ResetLaunchType" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetLaunchType"></a>

```csharp
private void ResetLaunchType()
```

##### `ResetLoadBalancers` <a name="ResetLoadBalancers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetLoadBalancers"></a>

```csharp
private void ResetLoadBalancers()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetPlatformVersion` <a name="ResetPlatformVersion" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetPlatformVersion"></a>

```csharp
private void ResetPlatformVersion()
```

##### `ResetScale` <a name="ResetScale" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetScale"></a>

```csharp
private void ResetScale()
```

##### `ResetServiceRegistries` <a name="ResetServiceRegistries" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetServiceRegistries"></a>

```csharp
private void ResetServiceRegistries()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcsTaskSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsTaskSet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsTaskSet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsTaskSet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsTaskSet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EcsTaskSet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsTaskSet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsTaskSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EcsTaskSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList">EcsTaskSetCapacityProviderStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.loadBalancers">LoadBalancers</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList">EcsTaskSetLoadBalancersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference">EcsTaskSetNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.scale">Scale</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference">EcsTaskSetScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceRegistries">ServiceRegistries</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList">EcsTaskSetServiceRegistriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList">EcsTaskSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskSetId">TaskSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategyInput">CapacityProviderStrategyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.launchTypeInput">LaunchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.loadBalancersInput">LoadBalancersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.platformVersionInput">PlatformVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.scaleInput">ScaleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceRegistriesInput">ServiceRegistriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskDefinitionInput">TaskDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.launchType">LaunchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskDefinition">TaskDefinition</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CapacityProviderStrategy`<sup>Required</sup> <a name="CapacityProviderStrategy" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategy"></a>

```csharp
public EcsTaskSetCapacityProviderStrategyList CapacityProviderStrategy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList">EcsTaskSetCapacityProviderStrategyList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancers`<sup>Required</sup> <a name="LoadBalancers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.loadBalancers"></a>

```csharp
public EcsTaskSetLoadBalancersList LoadBalancers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList">EcsTaskSetLoadBalancersList</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.networkConfiguration"></a>

```csharp
public EcsTaskSetNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference">EcsTaskSetNetworkConfigurationOutputReference</a>

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.scale"></a>

```csharp
public EcsTaskSetScaleOutputReference Scale { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference">EcsTaskSetScaleOutputReference</a>

---

##### `ServiceRegistries`<sup>Required</sup> <a name="ServiceRegistries" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceRegistries"></a>

```csharp
public EcsTaskSetServiceRegistriesList ServiceRegistries { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList">EcsTaskSetServiceRegistriesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tags"></a>

```csharp
public EcsTaskSetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList">EcsTaskSetTagsList</a>

---

##### `TaskSetId`<sup>Required</sup> <a name="TaskSetId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskSetId"></a>

```csharp
public string TaskSetId { get; }
```

- *Type:* string

---

##### `CapacityProviderStrategyInput`<sup>Optional</sup> <a name="CapacityProviderStrategyInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.capacityProviderStrategyInput"></a>

```csharp
public IResolvable|EcsTaskSetCapacityProviderStrategy[] CapacityProviderStrategyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `LaunchTypeInput`<sup>Optional</sup> <a name="LaunchTypeInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.launchTypeInput"></a>

```csharp
public string LaunchTypeInput { get; }
```

- *Type:* string

---

##### `LoadBalancersInput`<sup>Optional</sup> <a name="LoadBalancersInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.loadBalancersInput"></a>

```csharp
public IResolvable|EcsTaskSetLoadBalancers[] LoadBalancersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>[]

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.networkConfigurationInput"></a>

```csharp
public IResolvable|EcsTaskSetNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---

##### `PlatformVersionInput`<sup>Optional</sup> <a name="PlatformVersionInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.platformVersionInput"></a>

```csharp
public string PlatformVersionInput { get; }
```

- *Type:* string

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.scaleInput"></a>

```csharp
public IResolvable|EcsTaskSetScale ScaleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ServiceRegistriesInput`<sup>Optional</sup> <a name="ServiceRegistriesInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.serviceRegistriesInput"></a>

```csharp
public IResolvable|EcsTaskSetServiceRegistries[] ServiceRegistriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tagsInput"></a>

```csharp
public IResolvable|EcsTaskSetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>[]

---

##### `TaskDefinitionInput`<sup>Optional</sup> <a name="TaskDefinitionInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskDefinitionInput"></a>

```csharp
public string TaskDefinitionInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `LaunchType`<sup>Required</sup> <a name="LaunchType" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.launchType"></a>

```csharp
public string LaunchType { get; }
```

- *Type:* string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `TaskDefinition`<sup>Required</sup> <a name="TaskDefinition" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.taskDefinition"></a>

```csharp
public string TaskDefinition { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsTaskSetCapacityProviderStrategy <a name="EcsTaskSetCapacityProviderStrategy" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetCapacityProviderStrategy {
    double Base = null,
    string CapacityProvider = null,
    double Weight = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.base">Base</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#base EcsTaskSet#base}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#capacity_provider EcsTaskSet#capacity_provider}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.weight">Weight</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#weight EcsTaskSet#weight}. |

---

##### `Base`<sup>Optional</sup> <a name="Base" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.base"></a>

```csharp
public double Base { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#base EcsTaskSet#base}.

---

##### `CapacityProvider`<sup>Optional</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#capacity_provider EcsTaskSet#capacity_provider}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#weight EcsTaskSet#weight}.

---

### EcsTaskSetConfig <a name="EcsTaskSetConfig" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Cluster,
    string Service,
    string TaskDefinition,
    IResolvable|EcsTaskSetCapacityProviderStrategy[] CapacityProviderStrategy = null,
    string ExternalId = null,
    string LaunchType = null,
    IResolvable|EcsTaskSetLoadBalancers[] LoadBalancers = null,
    EcsTaskSetNetworkConfiguration NetworkConfiguration = null,
    string PlatformVersion = null,
    EcsTaskSetScale Scale = null,
    IResolvable|EcsTaskSetServiceRegistries[] ServiceRegistries = null,
    IResolvable|EcsTaskSetTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.cluster">Cluster</a></code> | <code>string</code> | The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.service">Service</a></code> | <code>string</code> | The short name or full Amazon Resource Name (ARN) of the service to create the task set in. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.taskDefinition">TaskDefinition</a></code> | <code>string</code> | The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.capacityProviderStrategy">CapacityProviderStrategy</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#capacity_provider_strategy EcsTaskSet#capacity_provider_strategy}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.externalId">ExternalId</a></code> | <code>string</code> | An optional non-unique tag that identifies this task set in external systems. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.launchType">LaunchType</a></code> | <code>string</code> | The launch type that new tasks in the task set will use. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.loadBalancers">LoadBalancers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#load_balancers EcsTaskSet#load_balancers}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | An object representing the network configuration for a task or service. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | The platform version that the tasks in the task set should use. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.scale">Scale</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | A floating-point percentage of the desired number of tasks to place and keep running in the task set. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.serviceRegistries">ServiceRegistries</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>[]</code> | The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#tags EcsTaskSet#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#cluster EcsTaskSet#cluster}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The short name or full Amazon Resource Name (ARN) of the service to create the task set in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#service EcsTaskSet#service}

---

##### `TaskDefinition`<sup>Required</sup> <a name="TaskDefinition" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.taskDefinition"></a>

```csharp
public string TaskDefinition { get; set; }
```

- *Type:* string

The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#task_definition EcsTaskSet#task_definition}

---

##### `CapacityProviderStrategy`<sup>Optional</sup> <a name="CapacityProviderStrategy" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.capacityProviderStrategy"></a>

```csharp
public IResolvable|EcsTaskSetCapacityProviderStrategy[] CapacityProviderStrategy { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#capacity_provider_strategy EcsTaskSet#capacity_provider_strategy}.

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

An optional non-unique tag that identifies this task set in external systems.

If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS_TASK_SET_EXTERNAL_ID AWS Cloud Map attribute set to the provided value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#external_id EcsTaskSet#external_id}

---

##### `LaunchType`<sup>Optional</sup> <a name="LaunchType" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.launchType"></a>

```csharp
public string LaunchType { get; set; }
```

- *Type:* string

The launch type that new tasks in the task set will use.

For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html in the Amazon Elastic Container Service Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#launch_type EcsTaskSet#launch_type}

---

##### `LoadBalancers`<sup>Optional</sup> <a name="LoadBalancers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.loadBalancers"></a>

```csharp
public IResolvable|EcsTaskSetLoadBalancers[] LoadBalancers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#load_balancers EcsTaskSet#load_balancers}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.networkConfiguration"></a>

```csharp
public EcsTaskSetNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

An object representing the network configuration for a task or service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#network_configuration EcsTaskSet#network_configuration}

---

##### `PlatformVersion`<sup>Optional</sup> <a name="PlatformVersion" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; set; }
```

- *Type:* string

The platform version that the tasks in the task set should use.

A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#platform_version EcsTaskSet#platform_version}

---

##### `Scale`<sup>Optional</sup> <a name="Scale" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.scale"></a>

```csharp
public EcsTaskSetScale Scale { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

A floating-point percentage of the desired number of tasks to place and keep running in the task set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#scale EcsTaskSet#scale}

---

##### `ServiceRegistries`<sup>Optional</sup> <a name="ServiceRegistries" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.serviceRegistries"></a>

```csharp
public IResolvable|EcsTaskSetServiceRegistries[] ServiceRegistries { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>[]

The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#service_registries EcsTaskSet#service_registries}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetConfig.property.tags"></a>

```csharp
public IResolvable|EcsTaskSetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#tags EcsTaskSet#tags}.

---

### EcsTaskSetLoadBalancers <a name="EcsTaskSetLoadBalancers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetLoadBalancers {
    string ContainerName = null,
    double ContainerPort = null,
    string TargetGroupArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.containerName">ContainerName</a></code> | <code>string</code> | The name of the container (as it appears in a container definition) to associate with the load balancer. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.containerPort">ContainerPort</a></code> | <code>double</code> | The port on the container to associate with the load balancer. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set. |

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

The name of the container (as it appears in a container definition) to associate with the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#container_name EcsTaskSet#container_name}

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

The port on the container to associate with the load balancer.

This port must correspond to a containerPort in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they are launched on must allow ingress traffic on the hostPort of the port mapping.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#container_port EcsTaskSet#container_port}

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; set; }
```

- *Type:* string

The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set.

A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. If you are using a Classic Load Balancer this should be omitted. For services using the ECS deployment controller, you can specify one or multiple target groups. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html in the Amazon Elastic Container Service Developer Guide. For services using the CODE_DEPLOY deployment controller, you are required to define two target groups for the load balancer. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html in the Amazon Elastic Container Service Developer Guide. If your service's task definition uses the awsvpc network mode (which is required for the Fargate launch type), you must choose ip as the target type, not instance, when creating your target groups because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#target_group_arn EcsTaskSet#target_group_arn}

---

### EcsTaskSetNetworkConfiguration <a name="EcsTaskSetNetworkConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetNetworkConfiguration {
    EcsTaskSetNetworkConfigurationAwsVpcConfiguration AwsVpcConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.awsVpcConfiguration">AwsVpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a></code> | The VPC subnets and security groups associated with a task. |

---

##### `AwsVpcConfiguration`<sup>Optional</sup> <a name="AwsVpcConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration.property.awsVpcConfiguration"></a>

```csharp
public EcsTaskSetNetworkConfigurationAwsVpcConfiguration AwsVpcConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a>

The VPC subnets and security groups associated with a task.

All specified subnets and security groups must be from the same VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#aws_vpc_configuration EcsTaskSet#aws_vpc_configuration}

---

### EcsTaskSetNetworkConfigurationAwsVpcConfiguration <a name="EcsTaskSetNetworkConfigurationAwsVpcConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetNetworkConfigurationAwsVpcConfiguration {
    string AssignPublicIp = null,
    string[] SecurityGroups = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.assignPublicIp">AssignPublicIp</a></code> | <code>string</code> | Whether the task's elastic network interface receives a public IP address. The default value is DISABLED. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | The security groups associated with the task or service. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.subnets">Subnets</a></code> | <code>string[]</code> | The subnets associated with the task or service. |

---

##### `AssignPublicIp`<sup>Optional</sup> <a name="AssignPublicIp" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.assignPublicIp"></a>

```csharp
public string AssignPublicIp { get; set; }
```

- *Type:* string

Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#assign_public_ip EcsTaskSet#assign_public_ip}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

The security groups associated with the task or service.

If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#security_groups EcsTaskSet#security_groups}

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

The subnets associated with the task or service.

There is a limit of 16 subnets that can be specified per AwsVpcConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#subnets EcsTaskSet#subnets}

---

### EcsTaskSetScale <a name="EcsTaskSetScale" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetScale {
    string Unit = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale.property.unit">Unit</a></code> | <code>string</code> | The unit of measure for the scale value. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale.property.value">Value</a></code> | <code>double</code> | The value, specified as a percent total of a service's desiredCount, to scale the task set. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The unit of measure for the scale value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#unit EcsTaskSet#unit}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The value, specified as a percent total of a service's desiredCount, to scale the task set.

Accepted values are numbers between 0 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#value EcsTaskSet#value}

---

### EcsTaskSetServiceRegistries <a name="EcsTaskSetServiceRegistries" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetServiceRegistries {
    string ContainerName = null,
    double ContainerPort = null,
    double Port = null,
    string RegistryArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerName">ContainerName</a></code> | <code>string</code> | The container name value, already specified in the task definition, to be used for your service discovery service. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerPort">ContainerPort</a></code> | <code>double</code> | The port value, already specified in the task definition, to be used for your service discovery service. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.port">Port</a></code> | <code>double</code> | The port value used if your service discovery service specified an SRV record. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.registryArn">RegistryArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service registry. |

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerName"></a>

```csharp
public string ContainerName { get; set; }
```

- *Type:* string

The container name value, already specified in the task definition, to be used for your service discovery service.

If the task definition that your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition that your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#container_name EcsTaskSet#container_name}

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

The port value, already specified in the task definition, to be used for your service discovery service.

If the task definition your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#container_port EcsTaskSet#container_port}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port value used if your service discovery service specified an SRV record.

This field may be used if both the awsvpc network mode and SRV records are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#port EcsTaskSet#port}

---

##### `RegistryArn`<sup>Optional</sup> <a name="RegistryArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries.property.registryArn"></a>

```csharp
public string RegistryArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the service registry.

The currently supported service registry is AWS Cloud Map. For more information, see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#registry_arn EcsTaskSet#registry_arn}

---

### EcsTaskSetTags <a name="EcsTaskSetTags" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#key EcsTaskSet#key}. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#value EcsTaskSet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#key EcsTaskSet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecs_task_set#value EcsTaskSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsTaskSetCapacityProviderStrategyList <a name="EcsTaskSetCapacityProviderStrategyList" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetCapacityProviderStrategyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get"></a>

```csharp
private EcsTaskSetCapacityProviderStrategyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyList.property.internalValue"></a>

```csharp
public IResolvable|EcsTaskSetCapacityProviderStrategy[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>[]

---


### EcsTaskSetCapacityProviderStrategyOutputReference <a name="EcsTaskSetCapacityProviderStrategyOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetCapacityProviderStrategyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetBase">ResetBase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetCapacityProvider">ResetCapacityProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBase` <a name="ResetBase" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetBase"></a>

```csharp
private void ResetBase()
```

##### `ResetCapacityProvider` <a name="ResetCapacityProvider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetCapacityProvider"></a>

```csharp
private void ResetCapacityProvider()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.resetWeight"></a>

```csharp
private void ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.baseInput">BaseInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProviderInput">CapacityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.base">Base</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProvider">CapacityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.baseInput"></a>

```csharp
public double BaseInput { get; }
```

- *Type:* double

---

##### `CapacityProviderInput`<sup>Optional</sup> <a name="CapacityProviderInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProviderInput"></a>

```csharp
public string CapacityProviderInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.base"></a>

```csharp
public double Base { get; }
```

- *Type:* double

---

##### `CapacityProvider`<sup>Required</sup> <a name="CapacityProvider" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.capacityProvider"></a>

```csharp
public string CapacityProvider { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsTaskSetCapacityProviderStrategy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetCapacityProviderStrategy">EcsTaskSetCapacityProviderStrategy</a>

---


### EcsTaskSetLoadBalancersList <a name="EcsTaskSetLoadBalancersList" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.get"></a>

```csharp
private EcsTaskSetLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersList.property.internalValue"></a>

```csharp
public IResolvable|EcsTaskSetLoadBalancers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>[]

---


### EcsTaskSetLoadBalancersOutputReference <a name="EcsTaskSetLoadBalancersOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetContainerName"></a>

```csharp
private void ResetContainerName()
```

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetContainerPort"></a>

```csharp
private void ResetContainerPort()
```

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.resetTargetGroupArn"></a>

```csharp
private void ResetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.targetGroupArnInput"></a>

```csharp
public string TargetGroupArnInput { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.targetGroupArn"></a>

```csharp
public string TargetGroupArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsTaskSetLoadBalancers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetLoadBalancers">EcsTaskSetLoadBalancers</a>

---


### EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference <a name="EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetAssignPublicIp">ResetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssignPublicIp` <a name="ResetAssignPublicIp" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetAssignPublicIp"></a>

```csharp
private void ResetAssignPublicIp()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIpInput">AssignPublicIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp">AssignPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssignPublicIpInput`<sup>Optional</sup> <a name="AssignPublicIpInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIpInput"></a>

```csharp
public string AssignPublicIpInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `AssignPublicIp`<sup>Required</sup> <a name="AssignPublicIp" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.assignPublicIp"></a>

```csharp
public string AssignPublicIp { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsTaskSetNetworkConfigurationAwsVpcConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a>

---


### EcsTaskSetNetworkConfigurationOutputReference <a name="EcsTaskSetNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.putAwsVpcConfiguration">PutAwsVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetAwsVpcConfiguration">ResetAwsVpcConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsVpcConfiguration` <a name="PutAwsVpcConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.putAwsVpcConfiguration"></a>

```csharp
private void PutAwsVpcConfiguration(EcsTaskSetNetworkConfigurationAwsVpcConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.putAwsVpcConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a>

---

##### `ResetAwsVpcConfiguration` <a name="ResetAwsVpcConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.resetAwsVpcConfiguration"></a>

```csharp
private void ResetAwsVpcConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.awsVpcConfiguration">AwsVpcConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference">EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.awsVpcConfigurationInput">AwsVpcConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsVpcConfiguration`<sup>Required</sup> <a name="AwsVpcConfiguration" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.awsVpcConfiguration"></a>

```csharp
public EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference AwsVpcConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference">EcsTaskSetNetworkConfigurationAwsVpcConfigurationOutputReference</a>

---

##### `AwsVpcConfigurationInput`<sup>Optional</sup> <a name="AwsVpcConfigurationInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.awsVpcConfigurationInput"></a>

```csharp
public IResolvable|EcsTaskSetNetworkConfigurationAwsVpcConfiguration AwsVpcConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationAwsVpcConfiguration">EcsTaskSetNetworkConfigurationAwsVpcConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsTaskSetNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetNetworkConfiguration">EcsTaskSetNetworkConfiguration</a>

---


### EcsTaskSetScaleOutputReference <a name="EcsTaskSetScaleOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetScaleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScaleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsTaskSetScale InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetScale">EcsTaskSetScale</a>

---


### EcsTaskSetServiceRegistriesList <a name="EcsTaskSetServiceRegistriesList" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetServiceRegistriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.get"></a>

```csharp
private EcsTaskSetServiceRegistriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesList.property.internalValue"></a>

```csharp
public IResolvable|EcsTaskSetServiceRegistries[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>[]

---


### EcsTaskSetServiceRegistriesOutputReference <a name="EcsTaskSetServiceRegistriesOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetServiceRegistriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetRegistryArn">ResetRegistryArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerName"></a>

```csharp
private void ResetContainerName()
```

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetContainerPort"></a>

```csharp
private void ResetContainerPort()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetRegistryArn` <a name="ResetRegistryArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.resetRegistryArn"></a>

```csharp
private void ResetRegistryArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArnInput">RegistryArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerName">ContainerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArn">RegistryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerNameInput"></a>

```csharp
public string ContainerNameInput { get; }
```

- *Type:* string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `RegistryArnInput`<sup>Optional</sup> <a name="RegistryArnInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArnInput"></a>

```csharp
public string RegistryArnInput { get; }
```

- *Type:* string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerName"></a>

```csharp
public string ContainerName { get; }
```

- *Type:* string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `RegistryArn`<sup>Required</sup> <a name="RegistryArn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.registryArn"></a>

```csharp
public string RegistryArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsTaskSetServiceRegistries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetServiceRegistries">EcsTaskSetServiceRegistries</a>

---


### EcsTaskSetTagsList <a name="EcsTaskSetTagsList" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.get"></a>

```csharp
private EcsTaskSetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsList.property.internalValue"></a>

```csharp
public IResolvable|EcsTaskSetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>[]

---


### EcsTaskSetTagsOutputReference <a name="EcsTaskSetTagsOutputReference" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsTaskSetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsTaskSetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsTaskSet.EcsTaskSetTags">EcsTaskSetTags</a>

---



