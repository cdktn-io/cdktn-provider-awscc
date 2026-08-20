# `ecsExpressGatewayService` Submodule <a name="`ecsExpressGatewayService` Submodule" id="@cdktn/provider-awscc.ecsExpressGatewayService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcsExpressGatewayService <a name="EcsExpressGatewayService" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service awscc_ecs_express_gateway_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayService(Construct Scope, string Id, EcsExpressGatewayServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig">EcsExpressGatewayServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig">EcsExpressGatewayServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer">PutPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget">PutScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetCluster">ResetCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetExecutionRoleArn">ResetExecutionRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetHealthCheckPath">ResetHealthCheckPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetMemory">ResetMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetPrimaryContainer">ResetPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetScalingTarget">ResetScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskDefinitionArn">ResetTaskDefinitionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskRoleArn">ResetTaskRoleArn</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration"></a>

```csharp
private void PutNetworkConfiguration(EcsExpressGatewayServiceNetworkConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>

---

##### `PutPrimaryContainer` <a name="PutPrimaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer"></a>

```csharp
private void PutPrimaryContainer(EcsExpressGatewayServicePrimaryContainer Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putPrimaryContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>

---

##### `PutScalingTarget` <a name="PutScalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget"></a>

```csharp
private void PutScalingTarget(EcsExpressGatewayServiceScalingTarget Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putScalingTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putTags"></a>

```csharp
private void PutTags(IResolvable|EcsExpressGatewayServiceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>[]

---

##### `ResetCluster` <a name="ResetCluster" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetCluster"></a>

```csharp
private void ResetCluster()
```

##### `ResetCpu` <a name="ResetCpu" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetCpu"></a>

```csharp
private void ResetCpu()
```

##### `ResetExecutionRoleArn` <a name="ResetExecutionRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetExecutionRoleArn"></a>

```csharp
private void ResetExecutionRoleArn()
```

##### `ResetHealthCheckPath` <a name="ResetHealthCheckPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetHealthCheckPath"></a>

```csharp
private void ResetHealthCheckPath()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetMemory"></a>

```csharp
private void ResetMemory()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetNetworkConfiguration"></a>

```csharp
private void ResetNetworkConfiguration()
```

##### `ResetPrimaryContainer` <a name="ResetPrimaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetPrimaryContainer"></a>

```csharp
private void ResetPrimaryContainer()
```

##### `ResetScalingTarget` <a name="ResetScalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetScalingTarget"></a>

```csharp
private void ResetScalingTarget()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTaskDefinitionArn` <a name="ResetTaskDefinitionArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskDefinitionArn"></a>

```csharp
private void ResetTaskDefinitionArn()
```

##### `ResetTaskRoleArn` <a name="ResetTaskRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.resetTaskRoleArn"></a>

```csharp
private void ResetTaskRoleArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcsExpressGatewayService resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsExpressGatewayService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsExpressGatewayService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsExpressGatewayService.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

EcsExpressGatewayService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a EcsExpressGatewayService resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcsExpressGatewayService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcsExpressGatewayService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the EcsExpressGatewayService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.activeConfigurations">ActiveConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList">EcsExpressGatewayServiceActiveConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.ecsManagedResourceArns">EcsManagedResourceArns</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference">EcsExpressGatewayServiceNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference">EcsExpressGatewayServicePrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTarget">ScalingTarget</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference">EcsExpressGatewayServiceScalingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceArn">ServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.status">Status</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference">EcsExpressGatewayServiceStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList">EcsExpressGatewayServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.clusterInput">ClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cpuInput">CpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArnInput">ExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPathInput">HealthCheckPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArnInput">InfrastructureRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainerInput">PrimaryContainerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTargetInput">ScalingTargetInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskDefinitionArnInput">TaskDefinitionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArnInput">TaskRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cpu">Cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArn">InfrastructureRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArn">TaskRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ActiveConfigurations`<sup>Required</sup> <a name="ActiveConfigurations" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.activeConfigurations"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsList ActiveConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList">EcsExpressGatewayServiceActiveConfigurationsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EcsManagedResourceArns`<sup>Required</sup> <a name="EcsManagedResourceArns" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.ecsManagedResourceArns"></a>

```csharp
public EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference EcsManagedResourceArns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfiguration"></a>

```csharp
public EcsExpressGatewayServiceNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference">EcsExpressGatewayServiceNetworkConfigurationOutputReference</a>

---

##### `PrimaryContainer`<sup>Required</sup> <a name="PrimaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainer"></a>

```csharp
public EcsExpressGatewayServicePrimaryContainerOutputReference PrimaryContainer { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference">EcsExpressGatewayServicePrimaryContainerOutputReference</a>

---

##### `ScalingTarget`<sup>Required</sup> <a name="ScalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTarget"></a>

```csharp
public EcsExpressGatewayServiceScalingTargetOutputReference ScalingTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference">EcsExpressGatewayServiceScalingTargetOutputReference</a>

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceArn"></a>

```csharp
public string ServiceArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.status"></a>

```csharp
public EcsExpressGatewayServiceStatusOutputReference Status { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference">EcsExpressGatewayServiceStatusOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tags"></a>

```csharp
public EcsExpressGatewayServiceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList">EcsExpressGatewayServiceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.clusterInput"></a>

```csharp
public string ClusterInput { get; }
```

- *Type:* string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cpuInput"></a>

```csharp
public string CpuInput { get; }
```

- *Type:* string

---

##### `ExecutionRoleArnInput`<sup>Optional</sup> <a name="ExecutionRoleArnInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArnInput"></a>

```csharp
public string ExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `HealthCheckPathInput`<sup>Optional</sup> <a name="HealthCheckPathInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPathInput"></a>

```csharp
public string HealthCheckPathInput { get; }
```

- *Type:* string

---

##### `InfrastructureRoleArnInput`<sup>Optional</sup> <a name="InfrastructureRoleArnInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArnInput"></a>

```csharp
public string InfrastructureRoleArnInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.networkConfigurationInput"></a>

```csharp
public IResolvable|EcsExpressGatewayServiceNetworkConfiguration NetworkConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>

---

##### `PrimaryContainerInput`<sup>Optional</sup> <a name="PrimaryContainerInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.primaryContainerInput"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainer PrimaryContainerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>

---

##### `ScalingTargetInput`<sup>Optional</sup> <a name="ScalingTargetInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.scalingTargetInput"></a>

```csharp
public IResolvable|EcsExpressGatewayServiceScalingTarget ScalingTargetInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tagsInput"></a>

```csharp
public IResolvable|EcsExpressGatewayServiceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>[]

---

##### `TaskDefinitionArnInput`<sup>Optional</sup> <a name="TaskDefinitionArnInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskDefinitionArnInput"></a>

```csharp
public string TaskDefinitionArnInput { get; }
```

- *Type:* string

---

##### `TaskRoleArnInput`<sup>Optional</sup> <a name="TaskRoleArnInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArnInput"></a>

```csharp
public string TaskRoleArnInput { get; }
```

- *Type:* string

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.cpu"></a>

```csharp
public string Cpu { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; }
```

- *Type:* string

---

##### `InfrastructureRoleArn`<sup>Required</sup> <a name="InfrastructureRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.infrastructureRoleArn"></a>

```csharp
public string InfrastructureRoleArn { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `TaskDefinitionArn`<sup>Required</sup> <a name="TaskDefinitionArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskDefinitionArn"></a>

```csharp
public string TaskDefinitionArn { get; }
```

- *Type:* string

---

##### `TaskRoleArn`<sup>Required</sup> <a name="TaskRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.taskRoleArn"></a>

```csharp
public string TaskRoleArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcsExpressGatewayServiceActiveConfigurations <a name="EcsExpressGatewayServiceActiveConfigurations" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurations {

};
```


### EcsExpressGatewayServiceActiveConfigurationsIngressPaths <a name="EcsExpressGatewayServiceActiveConfigurationsIngressPaths" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPaths.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsIngressPaths {

};
```


### EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration <a name="EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration {

};
```


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer {

};
```


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration {

};
```


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment {

};
```


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials {

};
```


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets {

};
```


### EcsExpressGatewayServiceActiveConfigurationsScalingTarget <a name="EcsExpressGatewayServiceActiveConfigurationsScalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsScalingTarget {

};
```


### EcsExpressGatewayServiceConfig <a name="EcsExpressGatewayServiceConfig" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InfrastructureRoleArn,
    string Cluster = null,
    string Cpu = null,
    string ExecutionRoleArn = null,
    string HealthCheckPath = null,
    string Memory = null,
    EcsExpressGatewayServiceNetworkConfiguration NetworkConfiguration = null,
    EcsExpressGatewayServicePrimaryContainer PrimaryContainer = null,
    EcsExpressGatewayServiceScalingTarget ScalingTarget = null,
    string ServiceName = null,
    IResolvable|EcsExpressGatewayServiceTags[] Tags = null,
    string TaskDefinitionArn = null,
    string TaskRoleArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.infrastructureRoleArn">InfrastructureRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cluster">Cluster</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cpu">Cpu</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.memory">Memory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.scalingTarget">ScalingTarget</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.serviceName">ServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#task_definition_arn EcsExpressGatewayService#task_definition_arn}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskRoleArn">TaskRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `InfrastructureRoleArn`<sup>Required</sup> <a name="InfrastructureRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.infrastructureRoleArn"></a>

```csharp
public string InfrastructureRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#infrastructure_role_arn EcsExpressGatewayService#infrastructure_role_arn}.

---

##### `Cluster`<sup>Optional</sup> <a name="Cluster" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cluster"></a>

```csharp
public string Cluster { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#cluster EcsExpressGatewayService#cluster}.

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.cpu"></a>

```csharp
public string Cpu { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#cpu EcsExpressGatewayService#cpu}.

---

##### `ExecutionRoleArn`<sup>Optional</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#execution_role_arn EcsExpressGatewayService#execution_role_arn}.

---

##### `HealthCheckPath`<sup>Optional</sup> <a name="HealthCheckPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#health_check_path EcsExpressGatewayService#health_check_path}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#memory EcsExpressGatewayService#memory}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.networkConfiguration"></a>

```csharp
public EcsExpressGatewayServiceNetworkConfiguration NetworkConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#network_configuration EcsExpressGatewayService#network_configuration}.

---

##### `PrimaryContainer`<sup>Optional</sup> <a name="PrimaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.primaryContainer"></a>

```csharp
public EcsExpressGatewayServicePrimaryContainer PrimaryContainer { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#primary_container EcsExpressGatewayService#primary_container}.

---

##### `ScalingTarget`<sup>Optional</sup> <a name="ScalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.scalingTarget"></a>

```csharp
public EcsExpressGatewayServiceScalingTarget ScalingTarget { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#scaling_target EcsExpressGatewayService#scaling_target}.

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#service_name EcsExpressGatewayService#service_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.tags"></a>

```csharp
public IResolvable|EcsExpressGatewayServiceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#tags EcsExpressGatewayService#tags}.

---

##### `TaskDefinitionArn`<sup>Optional</sup> <a name="TaskDefinitionArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskDefinitionArn"></a>

```csharp
public string TaskDefinitionArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#task_definition_arn EcsExpressGatewayService#task_definition_arn}.

---

##### `TaskRoleArn`<sup>Optional</sup> <a name="TaskRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceConfig.property.taskRoleArn"></a>

```csharp
public string TaskRoleArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#task_role_arn EcsExpressGatewayService#task_role_arn}.

---

### EcsExpressGatewayServiceEcsManagedResourceArns <a name="EcsExpressGatewayServiceEcsManagedResourceArns" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceEcsManagedResourceArns {

};
```


### EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling <a name="EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling {

};
```


### EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath <a name="EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath {

};
```


### EcsExpressGatewayServiceNetworkConfiguration <a name="EcsExpressGatewayServiceNetworkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceNetworkConfiguration {
    string[] SecurityGroups = null,
    string[] Subnets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.subnets">Subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}. |

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#security_groups EcsExpressGatewayService#security_groups}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration.property.subnets"></a>

```csharp
public string[] Subnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#subnets EcsExpressGatewayService#subnets}.

---

### EcsExpressGatewayServicePrimaryContainer <a name="EcsExpressGatewayServicePrimaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainer {
    EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration AwsLogsConfiguration = null,
    string[] Command = null,
    double ContainerPort = null,
    IResolvable|EcsExpressGatewayServicePrimaryContainerEnvironment[] Environment = null,
    string Image = null,
    EcsExpressGatewayServicePrimaryContainerRepositoryCredentials RepositoryCredentials = null,
    IResolvable|EcsExpressGatewayServicePrimaryContainerSecrets[] Secrets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.awsLogsConfiguration">AwsLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.command">Command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.containerPort">ContainerPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.environment">Environment</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#environment EcsExpressGatewayService#environment}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.image">Image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.repositoryCredentials">RepositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#repository_credentials EcsExpressGatewayService#repository_credentials}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.secrets">Secrets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#secrets EcsExpressGatewayService#secrets}. |

---

##### `AwsLogsConfiguration`<sup>Optional</sup> <a name="AwsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.awsLogsConfiguration"></a>

```csharp
public EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration AwsLogsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#aws_logs_configuration EcsExpressGatewayService#aws_logs_configuration}.

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#command EcsExpressGatewayService#command}.

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.containerPort"></a>

```csharp
public double ContainerPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#container_port EcsExpressGatewayService#container_port}.

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.environment"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerEnvironment[] Environment { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#environment EcsExpressGatewayService#environment}.

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.image"></a>

```csharp
public string Image { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#image EcsExpressGatewayService#image}.

---

##### `RepositoryCredentials`<sup>Optional</sup> <a name="RepositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.repositoryCredentials"></a>

```csharp
public EcsExpressGatewayServicePrimaryContainerRepositoryCredentials RepositoryCredentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#repository_credentials EcsExpressGatewayService#repository_credentials}.

---

##### `Secrets`<sup>Optional</sup> <a name="Secrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer.property.secrets"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerSecrets[] Secrets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#secrets EcsExpressGatewayService#secrets}.

---

### EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration {
    string LogGroup = null,
    string LogStreamPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logGroup">LogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logStreamPrefix">LogStreamPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#log_group EcsExpressGatewayService#log_group}.

---

##### `LogStreamPrefix`<sup>Optional</sup> <a name="LogStreamPrefix" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration.property.logStreamPrefix"></a>

```csharp
public string LogStreamPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#log_stream_prefix EcsExpressGatewayService#log_stream_prefix}.

---

### EcsExpressGatewayServicePrimaryContainerEnvironment <a name="EcsExpressGatewayServicePrimaryContainerEnvironment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainerEnvironment {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}.

---

### EcsExpressGatewayServicePrimaryContainerRepositoryCredentials <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainerRepositoryCredentials {
    string CredentialsParameter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.property.credentialsParameter">CredentialsParameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}. |

---

##### `CredentialsParameter`<sup>Optional</sup> <a name="CredentialsParameter" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials.property.credentialsParameter"></a>

```csharp
public string CredentialsParameter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#credentials_parameter EcsExpressGatewayService#credentials_parameter}.

---

### EcsExpressGatewayServicePrimaryContainerSecrets <a name="EcsExpressGatewayServicePrimaryContainerSecrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainerSecrets {
    string Name = null,
    string ValueFrom = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets.property.valueFrom">ValueFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#name EcsExpressGatewayService#name}.

---

##### `ValueFrom`<sup>Optional</sup> <a name="ValueFrom" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets.property.valueFrom"></a>

```csharp
public string ValueFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#value_from EcsExpressGatewayService#value_from}.

---

### EcsExpressGatewayServiceScalingTarget <a name="EcsExpressGatewayServiceScalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceScalingTarget {
    string AutoScalingMetric = null,
    double AutoScalingTargetValue = null,
    double MaxTaskCount = null,
    double MinTaskCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingMetric">AutoScalingMetric</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingTargetValue">AutoScalingTargetValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.maxTaskCount">MaxTaskCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.minTaskCount">MinTaskCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}. |

---

##### `AutoScalingMetric`<sup>Optional</sup> <a name="AutoScalingMetric" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingMetric"></a>

```csharp
public string AutoScalingMetric { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#auto_scaling_metric EcsExpressGatewayService#auto_scaling_metric}.

---

##### `AutoScalingTargetValue`<sup>Optional</sup> <a name="AutoScalingTargetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.autoScalingTargetValue"></a>

```csharp
public double AutoScalingTargetValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#auto_scaling_target_value EcsExpressGatewayService#auto_scaling_target_value}.

---

##### `MaxTaskCount`<sup>Optional</sup> <a name="MaxTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.maxTaskCount"></a>

```csharp
public double MaxTaskCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#max_task_count EcsExpressGatewayService#max_task_count}.

---

##### `MinTaskCount`<sup>Optional</sup> <a name="MinTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget.property.minTaskCount"></a>

```csharp
public double MinTaskCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#min_task_count EcsExpressGatewayService#min_task_count}.

---

### EcsExpressGatewayServiceStatus <a name="EcsExpressGatewayServiceStatus" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceStatus {

};
```


### EcsExpressGatewayServiceTags <a name="EcsExpressGatewayServiceTags" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#key EcsExpressGatewayService#key}. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#key EcsExpressGatewayService#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ecs_express_gateway_service#value EcsExpressGatewayService#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### EcsExpressGatewayServiceActiveConfigurationsIngressPathsList <a name="EcsExpressGatewayServiceActiveConfigurationsIngressPathsList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsIngressPathsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get"></a>

```csharp
private EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPaths">EcsExpressGatewayServiceActiveConfigurationsIngressPaths</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsIngressPaths InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPaths">EcsExpressGatewayServiceActiveConfigurationsIngressPaths</a>

---


### EcsExpressGatewayServiceActiveConfigurationsList <a name="EcsExpressGatewayServiceActiveConfigurationsList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.get"></a>

```csharp
private EcsExpressGatewayServiceActiveConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration">EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration">EcsExpressGatewayServiceActiveConfigurationsNetworkConfiguration</a>

---


### EcsExpressGatewayServiceActiveConfigurationsOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.cpu">Cpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.healthCheckPath">HealthCheckPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.ingressPaths">IngressPaths</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList">EcsExpressGatewayServiceActiveConfigurationsIngressPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference">EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.primaryContainer">PrimaryContainer</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.scalingTarget">ScalingTarget</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference">EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.serviceRevisionArn">ServiceRevisionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskDefinitionArn">TaskDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskRoleArn">TaskRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurations">EcsExpressGatewayServiceActiveConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.cpu"></a>

```csharp
public string Cpu { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.healthCheckPath"></a>

```csharp
public string HealthCheckPath { get; }
```

- *Type:* string

---

##### `IngressPaths`<sup>Required</sup> <a name="IngressPaths" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.ingressPaths"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsIngressPathsList IngressPaths { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsIngressPathsList">EcsExpressGatewayServiceActiveConfigurationsIngressPathsList</a>

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.networkConfiguration"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference">EcsExpressGatewayServiceActiveConfigurationsNetworkConfigurationOutputReference</a>

---

##### `PrimaryContainer`<sup>Required</sup> <a name="PrimaryContainer" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.primaryContainer"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference PrimaryContainer { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference</a>

---

##### `ScalingTarget`<sup>Required</sup> <a name="ScalingTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.scalingTarget"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference ScalingTarget { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference">EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference</a>

---

##### `ServiceRevisionArn`<sup>Required</sup> <a name="ServiceRevisionArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.serviceRevisionArn"></a>

```csharp
public string ServiceRevisionArn { get; }
```

- *Type:* string

---

##### `TaskDefinitionArn`<sup>Required</sup> <a name="TaskDefinitionArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskDefinitionArn"></a>

```csharp
public string TaskDefinitionArn { get; }
```

- *Type:* string

---

##### `TaskRoleArn`<sup>Required</sup> <a name="TaskRoleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.taskRoleArn"></a>

```csharp
public string TaskRoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurations InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurations">EcsExpressGatewayServiceActiveConfigurations</a>

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix">LogStreamPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `LogStreamPrefix`<sup>Required</sup> <a name="LogStreamPrefix" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix"></a>

```csharp
public string LogStreamPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfiguration</a>

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get"></a>

```csharp
private EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironment</a>

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.awsLogsConfiguration">AwsLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.repositoryCredentials">RepositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.secrets">Secrets</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsLogsConfiguration`<sup>Required</sup> <a name="AwsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.awsLogsConfiguration"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference AwsLogsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerAwsLogsConfigurationOutputReference</a>

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.environment"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList Environment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerEnvironmentList</a>

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `RepositoryCredentials`<sup>Required</sup> <a name="RepositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.repositoryCredentials"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference RepositoryCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference</a>

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.secrets"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList Secrets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainer</a>

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter">CredentialsParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```csharp
public string CredentialsParameter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentialsOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerRepositoryCredentials</a>

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get"></a>

```csharp
private EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.valueFrom">ValueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.valueFrom"></a>

```csharp
public string ValueFrom { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecretsOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets">EcsExpressGatewayServiceActiveConfigurationsPrimaryContainerSecrets</a>

---


### EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference <a name="EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingMetric">AutoScalingMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingTargetValue">AutoScalingTargetValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.maxTaskCount">MaxTaskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.minTaskCount">MinTaskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTarget">EcsExpressGatewayServiceActiveConfigurationsScalingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScalingMetric`<sup>Required</sup> <a name="AutoScalingMetric" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingMetric"></a>

```csharp
public string AutoScalingMetric { get; }
```

- *Type:* string

---

##### `AutoScalingTargetValue`<sup>Required</sup> <a name="AutoScalingTargetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.autoScalingTargetValue"></a>

```csharp
public double AutoScalingTargetValue { get; }
```

- *Type:* double

---

##### `MaxTaskCount`<sup>Required</sup> <a name="MaxTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.maxTaskCount"></a>

```csharp
public double MaxTaskCount { get; }
```

- *Type:* double

---

##### `MinTaskCount`<sup>Required</sup> <a name="MinTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.minTaskCount"></a>

```csharp
public double MinTaskCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTargetOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceActiveConfigurationsScalingTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceActiveConfigurationsScalingTarget">EcsExpressGatewayServiceActiveConfigurationsScalingTarget</a>

---


### EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference <a name="EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.applicationAutoScalingPolicies">ApplicationAutoScalingPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.scalableTarget">ScalableTarget</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling">EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationAutoScalingPolicies`<sup>Required</sup> <a name="ApplicationAutoScalingPolicies" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.applicationAutoScalingPolicies"></a>

```csharp
public string[] ApplicationAutoScalingPolicies { get; }
```

- *Type:* string[]

---

##### `ScalableTarget`<sup>Required</sup> <a name="ScalableTarget" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.scalableTarget"></a>

```csharp
public string ScalableTarget { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling">EcsExpressGatewayServiceEcsManagedResourceArnsAutoScaling</a>

---


### EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference <a name="EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.certificateArn">CertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerArn">ListenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerRuleArn">ListenerRuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerSecurityGroups">LoadBalancerSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.targetGroupArns">TargetGroupArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath">EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.certificateArn"></a>

```csharp
public string CertificateArn { get; }
```

- *Type:* string

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerArn"></a>

```csharp
public string ListenerArn { get; }
```

- *Type:* string

---

##### `ListenerRuleArn`<sup>Required</sup> <a name="ListenerRuleArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.listenerRuleArn"></a>

```csharp
public string ListenerRuleArn { get; }
```

- *Type:* string

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerArn"></a>

```csharp
public string LoadBalancerArn { get; }
```

- *Type:* string

---

##### `LoadBalancerSecurityGroups`<sup>Required</sup> <a name="LoadBalancerSecurityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.loadBalancerSecurityGroups"></a>

```csharp
public string[] LoadBalancerSecurityGroups { get; }
```

- *Type:* string[]

---

##### `TargetGroupArns`<sup>Required</sup> <a name="TargetGroupArns" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.targetGroupArns"></a>

```csharp
public string[] TargetGroupArns { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath">EcsExpressGatewayServiceEcsManagedResourceArnsIngressPath</a>

---


### EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference <a name="EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.ingressPath">IngressPath</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.logGroups">LogGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.metricAlarms">MetricAlarms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.serviceSecurityGroups">ServiceSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArns">EcsExpressGatewayServiceEcsManagedResourceArns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.autoScaling"></a>

```csharp
public EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference AutoScaling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsAutoScalingOutputReference</a>

---

##### `IngressPath`<sup>Required</sup> <a name="IngressPath" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.ingressPath"></a>

```csharp
public EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference IngressPath { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference">EcsExpressGatewayServiceEcsManagedResourceArnsIngressPathOutputReference</a>

---

##### `LogGroups`<sup>Required</sup> <a name="LogGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.logGroups"></a>

```csharp
public string[] LogGroups { get; }
```

- *Type:* string[]

---

##### `MetricAlarms`<sup>Required</sup> <a name="MetricAlarms" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.metricAlarms"></a>

```csharp
public string[] MetricAlarms { get; }
```

- *Type:* string[]

---

##### `ServiceSecurityGroups`<sup>Required</sup> <a name="ServiceSecurityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.serviceSecurityGroups"></a>

```csharp
public string[] ServiceSecurityGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArnsOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceEcsManagedResourceArns InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceEcsManagedResourceArns">EcsExpressGatewayServiceEcsManagedResourceArns</a>

---


### EcsExpressGatewayServiceNetworkConfigurationOutputReference <a name="EcsExpressGatewayServiceNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.resetSubnets"></a>

```csharp
private void ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnetsInput"></a>

```csharp
public string[] SubnetsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsExpressGatewayServiceNetworkConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceNetworkConfiguration">EcsExpressGatewayServiceNetworkConfiguration</a>

---


### EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference <a name="EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogStreamPrefix">ResetLogStreamPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```

##### `ResetLogStreamPrefix` <a name="ResetLogStreamPrefix" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.resetLogStreamPrefix"></a>

```csharp
private void ResetLogStreamPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefixInput">LogStreamPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix">LogStreamPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `LogStreamPrefixInput`<sup>Optional</sup> <a name="LogStreamPrefixInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefixInput"></a>

```csharp
public string LogStreamPrefixInput { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `LogStreamPrefix`<sup>Required</sup> <a name="LogStreamPrefix" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.logStreamPrefix"></a>

```csharp
public string LogStreamPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

---


### EcsExpressGatewayServicePrimaryContainerEnvironmentList <a name="EcsExpressGatewayServicePrimaryContainerEnvironmentList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainerEnvironmentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get"></a>

```csharp
private EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList.property.internalValue"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerEnvironment[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]

---


### EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference <a name="EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerEnvironment InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>

---


### EcsExpressGatewayServicePrimaryContainerOutputReference <a name="EcsExpressGatewayServicePrimaryContainerOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration">PutAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials">PutRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecrets">PutSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetAwsLogsConfiguration">ResetAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetRepositoryCredentials">ResetRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetSecrets">ResetSecrets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsLogsConfiguration` <a name="PutAwsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration"></a>

```csharp
private void PutAwsLogsConfiguration(EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putAwsLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

---

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment"></a>

```csharp
private void PutEnvironment(IResolvable|EcsExpressGatewayServicePrimaryContainerEnvironment[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putEnvironment.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]

---

##### `PutRepositoryCredentials` <a name="PutRepositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials"></a>

```csharp
private void PutRepositoryCredentials(EcsExpressGatewayServicePrimaryContainerRepositoryCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putRepositoryCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

---

##### `PutSecrets` <a name="PutSecrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecrets"></a>

```csharp
private void PutSecrets(IResolvable|EcsExpressGatewayServicePrimaryContainerSecrets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.putSecrets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>[]

---

##### `ResetAwsLogsConfiguration` <a name="ResetAwsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetAwsLogsConfiguration"></a>

```csharp
private void ResetAwsLogsConfiguration()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetContainerPort"></a>

```csharp
private void ResetContainerPort()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetImage"></a>

```csharp
private void ResetImage()
```

##### `ResetRepositoryCredentials` <a name="ResetRepositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetRepositoryCredentials"></a>

```csharp
private void ResetRepositoryCredentials()
```

##### `ResetSecrets` <a name="ResetSecrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.resetSecrets"></a>

```csharp
private void ResetSecrets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration">AwsLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference">EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList">EcsExpressGatewayServicePrimaryContainerEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials">RepositoryCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference">EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secrets">Secrets</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList">EcsExpressGatewayServicePrimaryContainerSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfigurationInput">AwsLogsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.imageInput">ImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentialsInput">RepositoryCredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secretsInput">SecretsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort">ContainerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.image">Image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsLogsConfiguration`<sup>Required</sup> <a name="AwsLogsConfiguration" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfiguration"></a>

```csharp
public EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference AwsLogsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference">EcsExpressGatewayServicePrimaryContainerAwsLogsConfigurationOutputReference</a>

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environment"></a>

```csharp
public EcsExpressGatewayServicePrimaryContainerEnvironmentList Environment { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironmentList">EcsExpressGatewayServicePrimaryContainerEnvironmentList</a>

---

##### `RepositoryCredentials`<sup>Required</sup> <a name="RepositoryCredentials" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentials"></a>

```csharp
public EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference RepositoryCredentials { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference">EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference</a>

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secrets"></a>

```csharp
public EcsExpressGatewayServicePrimaryContainerSecretsList Secrets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList">EcsExpressGatewayServicePrimaryContainerSecretsList</a>

---

##### `AwsLogsConfigurationInput`<sup>Optional</sup> <a name="AwsLogsConfigurationInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.awsLogsConfigurationInput"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration AwsLogsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration">EcsExpressGatewayServicePrimaryContainerAwsLogsConfiguration</a>

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPortInput"></a>

```csharp
public double ContainerPortInput { get; }
```

- *Type:* double

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.environmentInput"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerEnvironment[] EnvironmentInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerEnvironment">EcsExpressGatewayServicePrimaryContainerEnvironment</a>[]

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.imageInput"></a>

```csharp
public string ImageInput { get; }
```

- *Type:* string

---

##### `RepositoryCredentialsInput`<sup>Optional</sup> <a name="RepositoryCredentialsInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.repositoryCredentialsInput"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerRepositoryCredentials RepositoryCredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

---

##### `SecretsInput`<sup>Optional</sup> <a name="SecretsInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.secretsInput"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerSecrets[] SecretsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.containerPort"></a>

```csharp
public double ContainerPort { get; }
```

- *Type:* double

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.image"></a>

```csharp
public string Image { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainer InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainer">EcsExpressGatewayServicePrimaryContainer</a>

---


### EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference <a name="EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resetCredentialsParameter">ResetCredentialsParameter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialsParameter` <a name="ResetCredentialsParameter" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.resetCredentialsParameter"></a>

```csharp
private void ResetCredentialsParameter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameterInput">CredentialsParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter">CredentialsParameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialsParameterInput`<sup>Optional</sup> <a name="CredentialsParameterInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameterInput"></a>

```csharp
public string CredentialsParameterInput { get; }
```

- *Type:* string

---

##### `CredentialsParameter`<sup>Required</sup> <a name="CredentialsParameter" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.credentialsParameter"></a>

```csharp
public string CredentialsParameter { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerRepositoryCredentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerRepositoryCredentials">EcsExpressGatewayServicePrimaryContainerRepositoryCredentials</a>

---


### EcsExpressGatewayServicePrimaryContainerSecretsList <a name="EcsExpressGatewayServicePrimaryContainerSecretsList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainerSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.get"></a>

```csharp
private EcsExpressGatewayServicePrimaryContainerSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsList.property.internalValue"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerSecrets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>[]

---


### EcsExpressGatewayServicePrimaryContainerSecretsOutputReference <a name="EcsExpressGatewayServicePrimaryContainerSecretsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServicePrimaryContainerSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resetValueFrom">ResetValueFrom</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValueFrom` <a name="ResetValueFrom" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.resetValueFrom"></a>

```csharp
private void ResetValueFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFromInput">ValueFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFrom">ValueFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueFromInput`<sup>Optional</sup> <a name="ValueFromInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFromInput"></a>

```csharp
public string ValueFromInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ValueFrom`<sup>Required</sup> <a name="ValueFrom" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.valueFrom"></a>

```csharp
public string ValueFrom { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecretsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsExpressGatewayServicePrimaryContainerSecrets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServicePrimaryContainerSecrets">EcsExpressGatewayServicePrimaryContainerSecrets</a>

---


### EcsExpressGatewayServiceScalingTargetOutputReference <a name="EcsExpressGatewayServiceScalingTargetOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceScalingTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingMetric">ResetAutoScalingMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingTargetValue">ResetAutoScalingTargetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMaxTaskCount">ResetMaxTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMinTaskCount">ResetMinTaskCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoScalingMetric` <a name="ResetAutoScalingMetric" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingMetric"></a>

```csharp
private void ResetAutoScalingMetric()
```

##### `ResetAutoScalingTargetValue` <a name="ResetAutoScalingTargetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetAutoScalingTargetValue"></a>

```csharp
private void ResetAutoScalingTargetValue()
```

##### `ResetMaxTaskCount` <a name="ResetMaxTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMaxTaskCount"></a>

```csharp
private void ResetMaxTaskCount()
```

##### `ResetMinTaskCount` <a name="ResetMinTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.resetMinTaskCount"></a>

```csharp
private void ResetMinTaskCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetricInput">AutoScalingMetricInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValueInput">AutoScalingTargetValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCountInput">MaxTaskCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCountInput">MinTaskCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric">AutoScalingMetric</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue">AutoScalingTargetValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount">MaxTaskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount">MinTaskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoScalingMetricInput`<sup>Optional</sup> <a name="AutoScalingMetricInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetricInput"></a>

```csharp
public string AutoScalingMetricInput { get; }
```

- *Type:* string

---

##### `AutoScalingTargetValueInput`<sup>Optional</sup> <a name="AutoScalingTargetValueInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValueInput"></a>

```csharp
public double AutoScalingTargetValueInput { get; }
```

- *Type:* double

---

##### `MaxTaskCountInput`<sup>Optional</sup> <a name="MaxTaskCountInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCountInput"></a>

```csharp
public double MaxTaskCountInput { get; }
```

- *Type:* double

---

##### `MinTaskCountInput`<sup>Optional</sup> <a name="MinTaskCountInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCountInput"></a>

```csharp
public double MinTaskCountInput { get; }
```

- *Type:* double

---

##### `AutoScalingMetric`<sup>Required</sup> <a name="AutoScalingMetric" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingMetric"></a>

```csharp
public string AutoScalingMetric { get; }
```

- *Type:* string

---

##### `AutoScalingTargetValue`<sup>Required</sup> <a name="AutoScalingTargetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.autoScalingTargetValue"></a>

```csharp
public double AutoScalingTargetValue { get; }
```

- *Type:* double

---

##### `MaxTaskCount`<sup>Required</sup> <a name="MaxTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.maxTaskCount"></a>

```csharp
public double MaxTaskCount { get; }
```

- *Type:* double

---

##### `MinTaskCount`<sup>Required</sup> <a name="MinTaskCount" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.minTaskCount"></a>

```csharp
public double MinTaskCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTargetOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsExpressGatewayServiceScalingTarget InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceScalingTarget">EcsExpressGatewayServiceScalingTarget</a>

---


### EcsExpressGatewayServiceStatusOutputReference <a name="EcsExpressGatewayServiceStatusOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatus">EcsExpressGatewayServiceStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatusOutputReference.property.internalValue"></a>

```csharp
public EcsExpressGatewayServiceStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceStatus">EcsExpressGatewayServiceStatus</a>

---


### EcsExpressGatewayServiceTagsList <a name="EcsExpressGatewayServiceTagsList" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.get"></a>

```csharp
private EcsExpressGatewayServiceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsList.property.internalValue"></a>

```csharp
public IResolvable|EcsExpressGatewayServiceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>[]

---


### EcsExpressGatewayServiceTagsOutputReference <a name="EcsExpressGatewayServiceTagsOutputReference" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new EcsExpressGatewayServiceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|EcsExpressGatewayServiceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecsExpressGatewayService.EcsExpressGatewayServiceTags">EcsExpressGatewayServiceTags</a>

---



