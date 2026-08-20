# `gameliftContainerFleet` Submodule <a name="`gameliftContainerFleet` Submodule" id="@cdktn/provider-awscc.gameliftContainerFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftContainerFleet <a name="GameliftContainerFleet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet awscc_gamelift_container_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleet(Construct Scope, string Id, GameliftContainerFleetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig">GameliftContainerFleetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig">GameliftContainerFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration">PutDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy">PutGameSessionCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange">PutInstanceConnectionPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions">PutInstanceInboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations">PutLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration">PutLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies">PutScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetBillingType">ResetBillingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDeploymentConfiguration">ResetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupDefinitionName">ResetGameServerContainerGroupDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupsPerInstance">ResetGameServerContainerGroupsPerInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameSessionCreationLimitPolicy">ResetGameSessionCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceConnectionPortRange">ResetInstanceConnectionPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceInboundPermissions">ResetInstanceInboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLocations">ResetLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLogConfiguration">ResetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetMetricGroups">ResetMetricGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetNewGameSessionProtectionPolicy">ResetNewGameSessionProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPerInstanceContainerGroupDefinitionName">ResetPerInstanceContainerGroupDefinitionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPlayerGatewayMode">ResetPlayerGatewayMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetScalingPolicies">ResetScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeploymentConfiguration` <a name="PutDeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration"></a>

```csharp
private void PutDeploymentConfiguration(GameliftContainerFleetDeploymentConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putDeploymentConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

---

##### `PutGameSessionCreationLimitPolicy` <a name="PutGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy"></a>

```csharp
private void PutGameSessionCreationLimitPolicy(GameliftContainerFleetGameSessionCreationLimitPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putGameSessionCreationLimitPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

---

##### `PutInstanceConnectionPortRange` <a name="PutInstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange"></a>

```csharp
private void PutInstanceConnectionPortRange(GameliftContainerFleetInstanceConnectionPortRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceConnectionPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

---

##### `PutInstanceInboundPermissions` <a name="PutInstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions"></a>

```csharp
private void PutInstanceInboundPermissions(IResolvable|GameliftContainerFleetInstanceInboundPermissions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putInstanceInboundPermissions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]

---

##### `PutLocations` <a name="PutLocations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations"></a>

```csharp
private void PutLocations(IResolvable|GameliftContainerFleetLocations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLocations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]

---

##### `PutLogConfiguration` <a name="PutLogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration"></a>

```csharp
private void PutLogConfiguration(GameliftContainerFleetLogConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putLogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

---

##### `PutScalingPolicies` <a name="PutScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies"></a>

```csharp
private void PutScalingPolicies(IResolvable|GameliftContainerFleetScalingPolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putScalingPolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags"></a>

```csharp
private void PutTags(IResolvable|GameliftContainerFleetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]

---

##### `ResetBillingType` <a name="ResetBillingType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetBillingType"></a>

```csharp
private void ResetBillingType()
```

##### `ResetDeploymentConfiguration` <a name="ResetDeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDeploymentConfiguration"></a>

```csharp
private void ResetDeploymentConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGameServerContainerGroupDefinitionName` <a name="ResetGameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupDefinitionName"></a>

```csharp
private void ResetGameServerContainerGroupDefinitionName()
```

##### `ResetGameServerContainerGroupsPerInstance` <a name="ResetGameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameServerContainerGroupsPerInstance"></a>

```csharp
private void ResetGameServerContainerGroupsPerInstance()
```

##### `ResetGameSessionCreationLimitPolicy` <a name="ResetGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetGameSessionCreationLimitPolicy"></a>

```csharp
private void ResetGameSessionCreationLimitPolicy()
```

##### `ResetInstanceConnectionPortRange` <a name="ResetInstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceConnectionPortRange"></a>

```csharp
private void ResetInstanceConnectionPortRange()
```

##### `ResetInstanceInboundPermissions` <a name="ResetInstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceInboundPermissions"></a>

```csharp
private void ResetInstanceInboundPermissions()
```

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetInstanceType"></a>

```csharp
private void ResetInstanceType()
```

##### `ResetLocations` <a name="ResetLocations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLocations"></a>

```csharp
private void ResetLocations()
```

##### `ResetLogConfiguration` <a name="ResetLogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetLogConfiguration"></a>

```csharp
private void ResetLogConfiguration()
```

##### `ResetMetricGroups` <a name="ResetMetricGroups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetMetricGroups"></a>

```csharp
private void ResetMetricGroups()
```

##### `ResetNewGameSessionProtectionPolicy` <a name="ResetNewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetNewGameSessionProtectionPolicy"></a>

```csharp
private void ResetNewGameSessionProtectionPolicy()
```

##### `ResetPerInstanceContainerGroupDefinitionName` <a name="ResetPerInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPerInstanceContainerGroupDefinitionName"></a>

```csharp
private void ResetPerInstanceContainerGroupDefinitionName()
```

##### `ResetPlayerGatewayMode` <a name="ResetPlayerGatewayMode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetPlayerGatewayMode"></a>

```csharp
private void ResetPlayerGatewayMode()
```

##### `ResetScalingPolicies` <a name="ResetScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetScalingPolicies"></a>

```csharp
private void ResetScalingPolicies()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftContainerFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftContainerFleet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftContainerFleet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftContainerFleet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftContainerFleet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GameliftContainerFleet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GameliftContainerFleet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GameliftContainerFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GameliftContainerFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfiguration">DeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference">GameliftContainerFleetDeploymentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentDetails">DeploymentDetails</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference">GameliftContainerFleetDeploymentDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetArn">FleetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionArn">GameServerContainerGroupDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicy">GameSessionCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRange">InstanceConnectionPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference">GameliftContainerFleetInstanceConnectionPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissions">InstanceInboundPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList">GameliftContainerFleetInstanceInboundPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locations">Locations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList">GameliftContainerFleetLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference">GameliftContainerFleetLogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance">MaximumGameServerContainerGroupsPerInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn">PerInstanceContainerGroupDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPolicies">ScalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList">GameliftContainerFleetScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList">GameliftContainerFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingTypeInput">BillingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfigurationInput">DeploymentConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArnInput">FleetRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionNameInput">GameServerContainerGroupDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstanceInput">GameServerContainerGroupsPerInstanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicyInput">GameSessionCreationLimitPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRangeInput">InstanceConnectionPortRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissionsInput">InstanceInboundPermissionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locationsInput">LocationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfigurationInput">LogConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroupsInput">MetricGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicyInput">NewGameSessionProtectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionNameInput">PerInstanceContainerGroupDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayModeInput">PlayerGatewayModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPoliciesInput">ScalingPoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingType">BillingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArn">FleetRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionName">GameServerContainerGroupDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstance">GameServerContainerGroupsPerInstance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroups">MetricGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicy">NewGameSessionProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionName">PerInstanceContainerGroupDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayMode">PlayerGatewayMode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DeploymentConfiguration`<sup>Required</sup> <a name="DeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfiguration"></a>

```csharp
public GameliftContainerFleetDeploymentConfigurationOutputReference DeploymentConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference">GameliftContainerFleetDeploymentConfigurationOutputReference</a>

---

##### `DeploymentDetails`<sup>Required</sup> <a name="DeploymentDetails" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentDetails"></a>

```csharp
public GameliftContainerFleetDeploymentDetailsOutputReference DeploymentDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference">GameliftContainerFleetDeploymentDetailsOutputReference</a>

---

##### `FleetArn`<sup>Required</sup> <a name="FleetArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetArn"></a>

```csharp
public string FleetArn { get; }
```

- *Type:* string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `GameServerContainerGroupDefinitionArn`<sup>Required</sup> <a name="GameServerContainerGroupDefinitionArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionArn"></a>

```csharp
public string GameServerContainerGroupDefinitionArn { get; }
```

- *Type:* string

---

##### `GameSessionCreationLimitPolicy`<sup>Required</sup> <a name="GameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicy"></a>

```csharp
public GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference GameSessionCreationLimitPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference">GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceConnectionPortRange`<sup>Required</sup> <a name="InstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRange"></a>

```csharp
public GameliftContainerFleetInstanceConnectionPortRangeOutputReference InstanceConnectionPortRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference">GameliftContainerFleetInstanceConnectionPortRangeOutputReference</a>

---

##### `InstanceInboundPermissions`<sup>Required</sup> <a name="InstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissions"></a>

```csharp
public GameliftContainerFleetInstanceInboundPermissionsList InstanceInboundPermissions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList">GameliftContainerFleetInstanceInboundPermissionsList</a>

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locations"></a>

```csharp
public GameliftContainerFleetLocationsList Locations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList">GameliftContainerFleetLocationsList</a>

---

##### `LogConfiguration`<sup>Required</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfiguration"></a>

```csharp
public GameliftContainerFleetLogConfigurationOutputReference LogConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference">GameliftContainerFleetLogConfigurationOutputReference</a>

---

##### `MaximumGameServerContainerGroupsPerInstance`<sup>Required</sup> <a name="MaximumGameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.maximumGameServerContainerGroupsPerInstance"></a>

```csharp
public double MaximumGameServerContainerGroupsPerInstance { get; }
```

- *Type:* double

---

##### `PerInstanceContainerGroupDefinitionArn`<sup>Required</sup> <a name="PerInstanceContainerGroupDefinitionArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionArn"></a>

```csharp
public string PerInstanceContainerGroupDefinitionArn { get; }
```

- *Type:* string

---

##### `ScalingPolicies`<sup>Required</sup> <a name="ScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPolicies"></a>

```csharp
public GameliftContainerFleetScalingPoliciesList ScalingPolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList">GameliftContainerFleetScalingPoliciesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tags"></a>

```csharp
public GameliftContainerFleetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList">GameliftContainerFleetTagsList</a>

---

##### `BillingTypeInput`<sup>Optional</sup> <a name="BillingTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingTypeInput"></a>

```csharp
public string BillingTypeInput { get; }
```

- *Type:* string

---

##### `DeploymentConfigurationInput`<sup>Optional</sup> <a name="DeploymentConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.deploymentConfigurationInput"></a>

```csharp
public IResolvable|GameliftContainerFleetDeploymentConfiguration DeploymentConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FleetRoleArnInput`<sup>Optional</sup> <a name="FleetRoleArnInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArnInput"></a>

```csharp
public string FleetRoleArnInput { get; }
```

- *Type:* string

---

##### `GameServerContainerGroupDefinitionNameInput`<sup>Optional</sup> <a name="GameServerContainerGroupDefinitionNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionNameInput"></a>

```csharp
public string GameServerContainerGroupDefinitionNameInput { get; }
```

- *Type:* string

---

##### `GameServerContainerGroupsPerInstanceInput`<sup>Optional</sup> <a name="GameServerContainerGroupsPerInstanceInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstanceInput"></a>

```csharp
public double GameServerContainerGroupsPerInstanceInput { get; }
```

- *Type:* double

---

##### `GameSessionCreationLimitPolicyInput`<sup>Optional</sup> <a name="GameSessionCreationLimitPolicyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameSessionCreationLimitPolicyInput"></a>

```csharp
public IResolvable|GameliftContainerFleetGameSessionCreationLimitPolicy GameSessionCreationLimitPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

---

##### `InstanceConnectionPortRangeInput`<sup>Optional</sup> <a name="InstanceConnectionPortRangeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceConnectionPortRangeInput"></a>

```csharp
public IResolvable|GameliftContainerFleetInstanceConnectionPortRange InstanceConnectionPortRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

---

##### `InstanceInboundPermissionsInput`<sup>Optional</sup> <a name="InstanceInboundPermissionsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceInboundPermissionsInput"></a>

```csharp
public IResolvable|GameliftContainerFleetInstanceInboundPermissions[] InstanceInboundPermissionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.locationsInput"></a>

```csharp
public IResolvable|GameliftContainerFleetLocations[] LocationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]

---

##### `LogConfigurationInput`<sup>Optional</sup> <a name="LogConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.logConfigurationInput"></a>

```csharp
public IResolvable|GameliftContainerFleetLogConfiguration LogConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

---

##### `MetricGroupsInput`<sup>Optional</sup> <a name="MetricGroupsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroupsInput"></a>

```csharp
public string[] MetricGroupsInput { get; }
```

- *Type:* string[]

---

##### `NewGameSessionProtectionPolicyInput`<sup>Optional</sup> <a name="NewGameSessionProtectionPolicyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicyInput"></a>

```csharp
public string NewGameSessionProtectionPolicyInput { get; }
```

- *Type:* string

---

##### `PerInstanceContainerGroupDefinitionNameInput`<sup>Optional</sup> <a name="PerInstanceContainerGroupDefinitionNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionNameInput"></a>

```csharp
public string PerInstanceContainerGroupDefinitionNameInput { get; }
```

- *Type:* string

---

##### `PlayerGatewayModeInput`<sup>Optional</sup> <a name="PlayerGatewayModeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayModeInput"></a>

```csharp
public string PlayerGatewayModeInput { get; }
```

- *Type:* string

---

##### `ScalingPoliciesInput`<sup>Optional</sup> <a name="ScalingPoliciesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.scalingPoliciesInput"></a>

```csharp
public IResolvable|GameliftContainerFleetScalingPolicies[] ScalingPoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tagsInput"></a>

```csharp
public IResolvable|GameliftContainerFleetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.billingType"></a>

```csharp
public string BillingType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FleetRoleArn`<sup>Required</sup> <a name="FleetRoleArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.fleetRoleArn"></a>

```csharp
public string FleetRoleArn { get; }
```

- *Type:* string

---

##### `GameServerContainerGroupDefinitionName`<sup>Required</sup> <a name="GameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupDefinitionName"></a>

```csharp
public string GameServerContainerGroupDefinitionName { get; }
```

- *Type:* string

---

##### `GameServerContainerGroupsPerInstance`<sup>Required</sup> <a name="GameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.gameServerContainerGroupsPerInstance"></a>

```csharp
public double GameServerContainerGroupsPerInstance { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `MetricGroups`<sup>Required</sup> <a name="MetricGroups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.metricGroups"></a>

```csharp
public string[] MetricGroups { get; }
```

- *Type:* string[]

---

##### `NewGameSessionProtectionPolicy`<sup>Required</sup> <a name="NewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.newGameSessionProtectionPolicy"></a>

```csharp
public string NewGameSessionProtectionPolicy { get; }
```

- *Type:* string

---

##### `PerInstanceContainerGroupDefinitionName`<sup>Required</sup> <a name="PerInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.perInstanceContainerGroupDefinitionName"></a>

```csharp
public string PerInstanceContainerGroupDefinitionName { get; }
```

- *Type:* string

---

##### `PlayerGatewayMode`<sup>Required</sup> <a name="PlayerGatewayMode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.playerGatewayMode"></a>

```csharp
public string PlayerGatewayMode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftContainerFleetConfig <a name="GameliftContainerFleetConfig" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FleetRoleArn,
    string BillingType = null,
    GameliftContainerFleetDeploymentConfiguration DeploymentConfiguration = null,
    string Description = null,
    string GameServerContainerGroupDefinitionName = null,
    double GameServerContainerGroupsPerInstance = null,
    GameliftContainerFleetGameSessionCreationLimitPolicy GameSessionCreationLimitPolicy = null,
    GameliftContainerFleetInstanceConnectionPortRange InstanceConnectionPortRange = null,
    IResolvable|GameliftContainerFleetInstanceInboundPermissions[] InstanceInboundPermissions = null,
    string InstanceType = null,
    IResolvable|GameliftContainerFleetLocations[] Locations = null,
    GameliftContainerFleetLogConfiguration LogConfiguration = null,
    string[] MetricGroups = null,
    string NewGameSessionProtectionPolicy = null,
    string PerInstanceContainerGroupDefinitionName = null,
    string PlayerGatewayMode = null,
    IResolvable|GameliftContainerFleetScalingPolicies[] ScalingPolicies = null,
    IResolvable|GameliftContainerFleetTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.fleetRoleArn">FleetRoleArn</a></code> | <code>string</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.billingType">BillingType</a></code> | <code>string</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.deploymentConfiguration">DeploymentConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | Provides details about how to drain old tasks and replace them with new updated tasks. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupDefinitionName">GameServerContainerGroupDefinitionName</a></code> | <code>string</code> | The name of the container group definition that will be created per game server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupsPerInstance">GameServerContainerGroupsPerInstance</a></code> | <code>double</code> | The number of desired game server container groups per instance, a number between 1-5000. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameSessionCreationLimitPolicy">GameSessionCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceConnectionPortRange">InstanceConnectionPortRange</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceInboundPermissions">InstanceInboundPermissions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]</code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceType">InstanceType</a></code> | <code>string</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.locations">Locations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.logConfiguration">LogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | A policy the location and provider of logs from the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.metricGroups">MetricGroups</a></code> | <code>string[]</code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.newGameSessionProtectionPolicy">NewGameSessionProtectionPolicy</a></code> | <code>string</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.perInstanceContainerGroupDefinitionName">PerInstanceContainerGroupDefinitionName</a></code> | <code>string</code> | The name of the container group definition that will be created per instance. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.playerGatewayMode">PlayerGatewayMode</a></code> | <code>string</code> | The player gateway mode for the container fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.scalingPolicies">ScalingPolicies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]</code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `FleetRoleArn`<sup>Required</sup> <a name="FleetRoleArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.fleetRoleArn"></a>

```csharp
public string FleetRoleArn { get; set; }
```

- *Type:* string

A unique identifier for an AWS IAM role that manages access to your AWS services.

Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#fleet_role_arn GameliftContainerFleet#fleet_role_arn}

---

##### `BillingType`<sup>Optional</sup> <a name="BillingType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.billingType"></a>

```csharp
public string BillingType { get; set; }
```

- *Type:* string

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#billing_type GameliftContainerFleet#billing_type}

---

##### `DeploymentConfiguration`<sup>Optional</sup> <a name="DeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.deploymentConfiguration"></a>

```csharp
public GameliftContainerFleetDeploymentConfiguration DeploymentConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

Provides details about how to drain old tasks and replace them with new updated tasks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#deployment_configuration GameliftContainerFleet#deployment_configuration}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#description GameliftContainerFleet#description}

---

##### `GameServerContainerGroupDefinitionName`<sup>Optional</sup> <a name="GameServerContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupDefinitionName"></a>

```csharp
public string GameServerContainerGroupDefinitionName { get; set; }
```

- *Type:* string

The name of the container group definition that will be created per game server.

You must specify GAME_SERVER container group. You have the option to also specify one PER_INSTANCE container group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#game_server_container_group_definition_name GameliftContainerFleet#game_server_container_group_definition_name}

---

##### `GameServerContainerGroupsPerInstance`<sup>Optional</sup> <a name="GameServerContainerGroupsPerInstance" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameServerContainerGroupsPerInstance"></a>

```csharp
public double GameServerContainerGroupsPerInstance { get; set; }
```

- *Type:* double

The number of desired game server container groups per instance, a number between 1-5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#game_server_container_groups_per_instance GameliftContainerFleet#game_server_container_groups_per_instance}

---

##### `GameSessionCreationLimitPolicy`<sup>Optional</sup> <a name="GameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.gameSessionCreationLimitPolicy"></a>

```csharp
public GameliftContainerFleetGameSessionCreationLimitPolicy GameSessionCreationLimitPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#game_session_creation_limit_policy GameliftContainerFleet#game_session_creation_limit_policy}

---

##### `InstanceConnectionPortRange`<sup>Optional</sup> <a name="InstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceConnectionPortRange"></a>

```csharp
public GameliftContainerFleetInstanceConnectionPortRange InstanceConnectionPortRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

Defines the range of ports on the instance that allow inbound traffic to connect with containers in a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#instance_connection_port_range GameliftContainerFleet#instance_connection_port_range}

---

##### `InstanceInboundPermissions`<sup>Optional</sup> <a name="InstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceInboundPermissions"></a>

```csharp
public IResolvable|GameliftContainerFleetInstanceInboundPermissions[] InstanceInboundPermissions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#instance_inbound_permissions GameliftContainerFleet#instance_inbound_permissions}

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#instance_type GameliftContainerFleet#instance_type}

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.locations"></a>

```csharp
public IResolvable|GameliftContainerFleetLocations[] Locations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#locations GameliftContainerFleet#locations}.

---

##### `LogConfiguration`<sup>Optional</sup> <a name="LogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.logConfiguration"></a>

```csharp
public GameliftContainerFleetLogConfiguration LogConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

A policy the location and provider of logs from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#log_configuration GameliftContainerFleet#log_configuration}

---

##### `MetricGroups`<sup>Optional</sup> <a name="MetricGroups" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.metricGroups"></a>

```csharp
public string[] MetricGroups { get; set; }
```

- *Type:* string[]

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#metric_groups GameliftContainerFleet#metric_groups}

---

##### `NewGameSessionProtectionPolicy`<sup>Optional</sup> <a name="NewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.newGameSessionProtectionPolicy"></a>

```csharp
public string NewGameSessionProtectionPolicy { get; set; }
```

- *Type:* string

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#new_game_session_protection_policy GameliftContainerFleet#new_game_session_protection_policy}

---

##### `PerInstanceContainerGroupDefinitionName`<sup>Optional</sup> <a name="PerInstanceContainerGroupDefinitionName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.perInstanceContainerGroupDefinitionName"></a>

```csharp
public string PerInstanceContainerGroupDefinitionName { get; set; }
```

- *Type:* string

The name of the container group definition that will be created per instance.

This field is optional if you specify GameServerContainerGroupDefinitionName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#per_instance_container_group_definition_name GameliftContainerFleet#per_instance_container_group_definition_name}

---

##### `PlayerGatewayMode`<sup>Optional</sup> <a name="PlayerGatewayMode" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.playerGatewayMode"></a>

```csharp
public string PlayerGatewayMode { get; set; }
```

- *Type:* string

The player gateway mode for the container fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#player_gateway_mode GameliftContainerFleet#player_gateway_mode}

---

##### `ScalingPolicies`<sup>Optional</sup> <a name="ScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.scalingPolicies"></a>

```csharp
public IResolvable|GameliftContainerFleetScalingPolicies[] ScalingPolicies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#scaling_policies GameliftContainerFleet#scaling_policies}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetConfig.property.tags"></a>

```csharp
public IResolvable|GameliftContainerFleetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#tags GameliftContainerFleet#tags}

---

### GameliftContainerFleetDeploymentConfiguration <a name="GameliftContainerFleetDeploymentConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetDeploymentConfiguration {
    string ImpairmentStrategy = null,
    double MinimumHealthyPercentage = null,
    string ProtectionStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.impairmentStrategy">ImpairmentStrategy</a></code> | <code>string</code> | The strategy to apply in case of impairment; defaults to MAINTAIN. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.minimumHealthyPercentage">MinimumHealthyPercentage</a></code> | <code>double</code> | The minimum percentage of healthy required; defaults to 75. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.protectionStrategy">ProtectionStrategy</a></code> | <code>string</code> | The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION. |

---

##### `ImpairmentStrategy`<sup>Optional</sup> <a name="ImpairmentStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.impairmentStrategy"></a>

```csharp
public string ImpairmentStrategy { get; set; }
```

- *Type:* string

The strategy to apply in case of impairment; defaults to MAINTAIN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#impairment_strategy GameliftContainerFleet#impairment_strategy}

---

##### `MinimumHealthyPercentage`<sup>Optional</sup> <a name="MinimumHealthyPercentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.minimumHealthyPercentage"></a>

```csharp
public double MinimumHealthyPercentage { get; set; }
```

- *Type:* double

The minimum percentage of healthy required; defaults to 75.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#minimum_healthy_percentage GameliftContainerFleet#minimum_healthy_percentage}

---

##### `ProtectionStrategy`<sup>Optional</sup> <a name="ProtectionStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration.property.protectionStrategy"></a>

```csharp
public string ProtectionStrategy { get; set; }
```

- *Type:* string

The protection strategy for deployment on the container fleet; defaults to WITH_PROTECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#protection_strategy GameliftContainerFleet#protection_strategy}

---

### GameliftContainerFleetDeploymentDetails <a name="GameliftContainerFleetDeploymentDetails" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetDeploymentDetails {

};
```


### GameliftContainerFleetGameSessionCreationLimitPolicy <a name="GameliftContainerFleetGameSessionCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetGameSessionCreationLimitPolicy {
    double NewGameSessionsPerCreator = null,
    double PolicyPeriodInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.newGameSessionsPerCreator">NewGameSessionsPerCreator</a></code> | <code>double</code> | The maximum number of game sessions that an individual can create during the policy period. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.policyPeriodInMinutes">PolicyPeriodInMinutes</a></code> | <code>double</code> | The time span used in evaluating the resource creation limit policy. |

---

##### `NewGameSessionsPerCreator`<sup>Optional</sup> <a name="NewGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

```csharp
public double NewGameSessionsPerCreator { get; set; }
```

- *Type:* double

The maximum number of game sessions that an individual can create during the policy period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#new_game_sessions_per_creator GameliftContainerFleet#new_game_sessions_per_creator}

---

##### `PolicyPeriodInMinutes`<sup>Optional</sup> <a name="PolicyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy.property.policyPeriodInMinutes"></a>

```csharp
public double PolicyPeriodInMinutes { get; set; }
```

- *Type:* double

The time span used in evaluating the resource creation limit policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#policy_period_in_minutes GameliftContainerFleet#policy_period_in_minutes}

---

### GameliftContainerFleetInstanceConnectionPortRange <a name="GameliftContainerFleetInstanceConnectionPortRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetInstanceConnectionPortRange {
    double FromPort = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.fromPort">FromPort</a></code> | <code>double</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.toPort">ToPort</a></code> | <code>double</code> | An ending value for a range of allowed port numbers. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#from_port GameliftContainerFleet#from_port}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#to_port GameliftContainerFleet#to_port}

---

### GameliftContainerFleetInstanceInboundPermissions <a name="GameliftContainerFleetInstanceInboundPermissions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetInstanceInboundPermissions {
    double FromPort = null,
    string IpRange = null,
    string Protocol = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.fromPort">FromPort</a></code> | <code>double</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.ipRange">IpRange</a></code> | <code>string</code> | A range of allowed IP addresses. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.protocol">Protocol</a></code> | <code>string</code> | The network communication protocol used by the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.toPort">ToPort</a></code> | <code>double</code> | An ending value for a range of allowed port numbers. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#from_port GameliftContainerFleet#from_port}

---

##### `IpRange`<sup>Optional</sup> <a name="IpRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.ipRange"></a>

```csharp
public string IpRange { get; set; }
```

- *Type:* string

A range of allowed IP addresses.

This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#ip_range GameliftContainerFleet#ip_range}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The network communication protocol used by the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#protocol GameliftContainerFleet#protocol}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#to_port GameliftContainerFleet#to_port}

---

### GameliftContainerFleetLocations <a name="GameliftContainerFleetLocations" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetLocations {
    string Location = null,
    GameliftContainerFleetLocationsLocationCapacity LocationCapacity = null,
    string PlayerGatewayStatus = null,
    string[] StoppedActions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#location GameliftContainerFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.locationCapacity">LocationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | Current resource capacity settings in a specified fleet or location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.playerGatewayStatus">PlayerGatewayStatus</a></code> | <code>string</code> | The player gateway status for the location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.stoppedActions">StoppedActions</a></code> | <code>string[]</code> | A list of fleet actions that have been suspended in the fleet location. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#location GameliftContainerFleet#location}.

---

##### `LocationCapacity`<sup>Optional</sup> <a name="LocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.locationCapacity"></a>

```csharp
public GameliftContainerFleetLocationsLocationCapacity LocationCapacity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

Current resource capacity settings in a specified fleet or location.

The location value might refer to a fleet's remote location or its home Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#location_capacity GameliftContainerFleet#location_capacity}

---

##### `PlayerGatewayStatus`<sup>Optional</sup> <a name="PlayerGatewayStatus" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.playerGatewayStatus"></a>

```csharp
public string PlayerGatewayStatus { get; set; }
```

- *Type:* string

The player gateway status for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#player_gateway_status GameliftContainerFleet#player_gateway_status}

---

##### `StoppedActions`<sup>Optional</sup> <a name="StoppedActions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations.property.stoppedActions"></a>

```csharp
public string[] StoppedActions { get; set; }
```

- *Type:* string[]

A list of fleet actions that have been suspended in the fleet location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#stopped_actions GameliftContainerFleet#stopped_actions}

---

### GameliftContainerFleetLocationsLocationCapacity <a name="GameliftContainerFleetLocationsLocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetLocationsLocationCapacity {
    double DesiredEc2Instances = null,
    GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration ManagedCapacityConfiguration = null,
    double MaxSize = null,
    double MinSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.desiredEc2Instances">DesiredEc2Instances</a></code> | <code>double</code> | Defaults to MinSize if not defined. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.managedCapacityConfiguration">ManagedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | Configuration options for Amazon GameLift Servers-managed capacity behavior. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.maxSize">MaxSize</a></code> | <code>double</code> | The maximum value that is allowed for the fleet's instance count for a location. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.minSize">MinSize</a></code> | <code>double</code> | The minimum value allowed for the fleet's instance count for a location. |

---

##### `DesiredEc2Instances`<sup>Optional</sup> <a name="DesiredEc2Instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.desiredEc2Instances"></a>

```csharp
public double DesiredEc2Instances { get; set; }
```

- *Type:* double

Defaults to MinSize if not defined.

The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits. If any auto-scaling policy is defined for the container fleet, the desired instance will only be applied once during fleet creation and will be ignored in updates to avoid conflicts with auto-scaling. During updates with any auto-scaling policy defined, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#desired_ec2_instances GameliftContainerFleet#desired_ec2_instances}

---

##### `ManagedCapacityConfiguration`<sup>Optional</sup> <a name="ManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.managedCapacityConfiguration"></a>

```csharp
public GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration ManagedCapacityConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

Configuration options for Amazon GameLift Servers-managed capacity behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#managed_capacity_configuration GameliftContainerFleet#managed_capacity_configuration}

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.maxSize"></a>

```csharp
public double MaxSize { get; set; }
```

- *Type:* double

The maximum value that is allowed for the fleet's instance count for a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#max_size GameliftContainerFleet#max_size}

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

The minimum value allowed for the fleet's instance count for a location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#min_size GameliftContainerFleet#min_size}

---

### GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration <a name="GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration {
    double ScaleInAfterInactivityMinutes = null,
    string ZeroCapacityStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes">ScaleInAfterInactivityMinutes</a></code> | <code>double</code> | Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy">ZeroCapacityStrategy</a></code> | <code>string</code> | The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity. |

---

##### `ScaleInAfterInactivityMinutes`<sup>Optional</sup> <a name="ScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes"></a>

```csharp
public double ScaleInAfterInactivityMinutes { get; set; }
```

- *Type:* double

Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#scale_in_after_inactivity_minutes GameliftContainerFleet#scale_in_after_inactivity_minutes}

---

##### `ZeroCapacityStrategy`<sup>Optional</sup> <a name="ZeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy"></a>

```csharp
public string ZeroCapacityStrategy { get; set; }
```

- *Type:* string

The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity.

Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#zero_capacity_strategy GameliftContainerFleet#zero_capacity_strategy}

---

### GameliftContainerFleetLogConfiguration <a name="GameliftContainerFleetLogConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetLogConfiguration {
    string LogDestination = null,
    string LogGroupArn = null,
    string S3BucketName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logDestination">LogDestination</a></code> | <code>string</code> | Configures the service that provides logs. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | The name of the S3 bucket to pull logs from if S3 is the LogDestination. |

---

##### `LogDestination`<sup>Optional</sup> <a name="LogDestination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logDestination"></a>

```csharp
public string LogDestination { get; set; }
```

- *Type:* string

Configures the service that provides logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#log_destination GameliftContainerFleet#log_destination}

---

##### `LogGroupArn`<sup>Optional</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; set; }
```

- *Type:* string

If log destination is CLOUDWATCH, logs are sent to the specified log group in Amazon CloudWatch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#log_group_arn GameliftContainerFleet#log_group_arn}

---

##### `S3BucketName`<sup>Optional</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; set; }
```

- *Type:* string

The name of the S3 bucket to pull logs from if S3 is the LogDestination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#s3_bucket_name GameliftContainerFleet#s3_bucket_name}

---

### GameliftContainerFleetScalingPolicies <a name="GameliftContainerFleetScalingPolicies" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetScalingPolicies {
    string ComparisonOperator = null,
    double EvaluationPeriods = null,
    string MetricName = null,
    string Name = null,
    string PolicyType = null,
    double ScalingAdjustment = null,
    string ScalingAdjustmentType = null,
    GameliftContainerFleetScalingPoliciesTargetConfiguration TargetConfiguration = null,
    double Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | Comparison operator to use when measuring a metric against the threshold value. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.metricName">MetricName</a></code> | <code>string</code> | Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.name">Name</a></code> | <code>string</code> | A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.policyType">PolicyType</a></code> | <code>string</code> | The type of scaling policy to create. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustment">ScalingAdjustment</a></code> | <code>double</code> | Amount of adjustment to make, based on the scaling adjustment type. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustmentType">ScalingAdjustmentType</a></code> | <code>string</code> | The type of adjustment to make to a fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.targetConfiguration">TargetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | An object that contains settings for a target-based scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.threshold">Threshold</a></code> | <code>double</code> | Metric value used to trigger a scaling event. |

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

Comparison operator to use when measuring a metric against the threshold value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#comparison_operator GameliftContainerFleet#comparison_operator}

---

##### `EvaluationPeriods`<sup>Optional</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; set; }
```

- *Type:* double

Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#evaluation_periods GameliftContainerFleet#evaluation_periods}

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#metric_name GameliftContainerFleet#metric_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#name GameliftContainerFleet#name}

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

The type of scaling policy to create.

For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#policy_type GameliftContainerFleet#policy_type}

---

##### `ScalingAdjustment`<sup>Optional</sup> <a name="ScalingAdjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustment"></a>

```csharp
public double ScalingAdjustment { get; set; }
```

- *Type:* double

Amount of adjustment to make, based on the scaling adjustment type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#scaling_adjustment GameliftContainerFleet#scaling_adjustment}

---

##### `ScalingAdjustmentType`<sup>Optional</sup> <a name="ScalingAdjustmentType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.scalingAdjustmentType"></a>

```csharp
public string ScalingAdjustmentType { get; set; }
```

- *Type:* string

The type of adjustment to make to a fleet's instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#scaling_adjustment_type GameliftContainerFleet#scaling_adjustment_type}

---

##### `TargetConfiguration`<sup>Optional</sup> <a name="TargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.targetConfiguration"></a>

```csharp
public GameliftContainerFleetScalingPoliciesTargetConfiguration TargetConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

An object that contains settings for a target-based scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#target_configuration GameliftContainerFleet#target_configuration}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Metric value used to trigger a scaling event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#threshold GameliftContainerFleet#threshold}

---

### GameliftContainerFleetScalingPoliciesTargetConfiguration <a name="GameliftContainerFleetScalingPoliciesTargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetScalingPoliciesTargetConfiguration {
    double TargetValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.property.targetValue">TargetValue</a></code> | <code>double</code> | Desired value to use with a target-based scaling policy. |

---

##### `TargetValue`<sup>Optional</sup> <a name="TargetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration.property.targetValue"></a>

```csharp
public double TargetValue { get; set; }
```

- *Type:* double

Desired value to use with a target-based scaling policy.

The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#target_value GameliftContainerFleet#target_value}

---

### GameliftContainerFleetTags <a name="GameliftContainerFleetTags" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#key GameliftContainerFleet#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_container_fleet#value GameliftContainerFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftContainerFleetDeploymentConfigurationOutputReference <a name="GameliftContainerFleetDeploymentConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetDeploymentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetImpairmentStrategy">ResetImpairmentStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetMinimumHealthyPercentage">ResetMinimumHealthyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetProtectionStrategy">ResetProtectionStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImpairmentStrategy` <a name="ResetImpairmentStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetImpairmentStrategy"></a>

```csharp
private void ResetImpairmentStrategy()
```

##### `ResetMinimumHealthyPercentage` <a name="ResetMinimumHealthyPercentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetMinimumHealthyPercentage"></a>

```csharp
private void ResetMinimumHealthyPercentage()
```

##### `ResetProtectionStrategy` <a name="ResetProtectionStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.resetProtectionStrategy"></a>

```csharp
private void ResetProtectionStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategyInput">ImpairmentStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentageInput">MinimumHealthyPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategyInput">ProtectionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy">ImpairmentStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage">MinimumHealthyPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy">ProtectionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ImpairmentStrategyInput`<sup>Optional</sup> <a name="ImpairmentStrategyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategyInput"></a>

```csharp
public string ImpairmentStrategyInput { get; }
```

- *Type:* string

---

##### `MinimumHealthyPercentageInput`<sup>Optional</sup> <a name="MinimumHealthyPercentageInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentageInput"></a>

```csharp
public double MinimumHealthyPercentageInput { get; }
```

- *Type:* double

---

##### `ProtectionStrategyInput`<sup>Optional</sup> <a name="ProtectionStrategyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategyInput"></a>

```csharp
public string ProtectionStrategyInput { get; }
```

- *Type:* string

---

##### `ImpairmentStrategy`<sup>Required</sup> <a name="ImpairmentStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.impairmentStrategy"></a>

```csharp
public string ImpairmentStrategy { get; }
```

- *Type:* string

---

##### `MinimumHealthyPercentage`<sup>Required</sup> <a name="MinimumHealthyPercentage" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.minimumHealthyPercentage"></a>

```csharp
public double MinimumHealthyPercentage { get; }
```

- *Type:* double

---

##### `ProtectionStrategy`<sup>Required</sup> <a name="ProtectionStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.protectionStrategy"></a>

```csharp
public string ProtectionStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetDeploymentConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentConfiguration">GameliftContainerFleetDeploymentConfiguration</a>

---


### GameliftContainerFleetDeploymentDetailsOutputReference <a name="GameliftContainerFleetDeploymentDetailsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetDeploymentDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId">LatestDeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails">GameliftContainerFleetDeploymentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LatestDeploymentId`<sup>Required</sup> <a name="LatestDeploymentId" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.latestDeploymentId"></a>

```csharp
public string LatestDeploymentId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetailsOutputReference.property.internalValue"></a>

```csharp
public GameliftContainerFleetDeploymentDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetDeploymentDetails">GameliftContainerFleetDeploymentDetails</a>

---


### GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference <a name="GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator">ResetNewGameSessionsPerCreator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes">ResetPolicyPeriodInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNewGameSessionsPerCreator` <a name="ResetNewGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator"></a>

```csharp
private void ResetNewGameSessionsPerCreator()
```

##### `ResetPolicyPeriodInMinutes` <a name="ResetPolicyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes"></a>

```csharp
private void ResetPolicyPeriodInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput">NewGameSessionsPerCreatorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput">PolicyPeriodInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">NewGameSessionsPerCreator</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">PolicyPeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NewGameSessionsPerCreatorInput`<sup>Optional</sup> <a name="NewGameSessionsPerCreatorInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput"></a>

```csharp
public double NewGameSessionsPerCreatorInput { get; }
```

- *Type:* double

---

##### `PolicyPeriodInMinutesInput`<sup>Optional</sup> <a name="PolicyPeriodInMinutesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput"></a>

```csharp
public double PolicyPeriodInMinutesInput { get; }
```

- *Type:* double

---

##### `NewGameSessionsPerCreator`<sup>Required</sup> <a name="NewGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```csharp
public double NewGameSessionsPerCreator { get; }
```

- *Type:* double

---

##### `PolicyPeriodInMinutes`<sup>Required</sup> <a name="PolicyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```csharp
public double PolicyPeriodInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetGameSessionCreationLimitPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetGameSessionCreationLimitPolicy">GameliftContainerFleetGameSessionCreationLimitPolicy</a>

---


### GameliftContainerFleetInstanceConnectionPortRangeOutputReference <a name="GameliftContainerFleetInstanceConnectionPortRangeOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetInstanceConnectionPortRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetInstanceConnectionPortRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceConnectionPortRange">GameliftContainerFleetInstanceConnectionPortRange</a>

---


### GameliftContainerFleetInstanceInboundPermissionsList <a name="GameliftContainerFleetInstanceInboundPermissionsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetInstanceInboundPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get"></a>

```csharp
private GameliftContainerFleetInstanceInboundPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsList.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetInstanceInboundPermissions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>[]

---


### GameliftContainerFleetInstanceInboundPermissionsOutputReference <a name="GameliftContainerFleetInstanceInboundPermissionsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetInstanceInboundPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetIpRange">ResetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetIpRange` <a name="ResetIpRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetIpRange"></a>

```csharp
private void ResetIpRange()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRangeInput">IpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange">IpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRangeInput"></a>

```csharp
public string IpRangeInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.ipRange"></a>

```csharp
public string IpRange { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetInstanceInboundPermissions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetInstanceInboundPermissions">GameliftContainerFleetInstanceInboundPermissions</a>

---


### GameliftContainerFleetLocationsList <a name="GameliftContainerFleetLocationsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get"></a>

```csharp
private GameliftContainerFleetLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsList.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetLocations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>[]

---


### GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference <a name="GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes">ResetScaleInAfterInactivityMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy">ResetZeroCapacityStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScaleInAfterInactivityMinutes` <a name="ResetScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes"></a>

```csharp
private void ResetScaleInAfterInactivityMinutes()
```

##### `ResetZeroCapacityStrategy` <a name="ResetZeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy"></a>

```csharp
private void ResetZeroCapacityStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput">ScaleInAfterInactivityMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput">ZeroCapacityStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes">ScaleInAfterInactivityMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy">ZeroCapacityStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleInAfterInactivityMinutesInput`<sup>Optional</sup> <a name="ScaleInAfterInactivityMinutesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput"></a>

```csharp
public double ScaleInAfterInactivityMinutesInput { get; }
```

- *Type:* double

---

##### `ZeroCapacityStrategyInput`<sup>Optional</sup> <a name="ZeroCapacityStrategyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput"></a>

```csharp
public string ZeroCapacityStrategyInput { get; }
```

- *Type:* string

---

##### `ScaleInAfterInactivityMinutes`<sup>Required</sup> <a name="ScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes"></a>

```csharp
public double ScaleInAfterInactivityMinutes { get; }
```

- *Type:* double

---

##### `ZeroCapacityStrategy`<sup>Required</sup> <a name="ZeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy"></a>

```csharp
public string ZeroCapacityStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---


### GameliftContainerFleetLocationsLocationCapacityOutputReference <a name="GameliftContainerFleetLocationsLocationCapacityOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetLocationsLocationCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration">PutManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances">ResetDesiredEc2Instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration">ResetManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMaxSize">ResetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMinSize">ResetMinSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedCapacityConfiguration` <a name="PutManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration"></a>

```csharp
private void PutManagedCapacityConfiguration(GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `ResetDesiredEc2Instances` <a name="ResetDesiredEc2Instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances"></a>

```csharp
private void ResetDesiredEc2Instances()
```

##### `ResetManagedCapacityConfiguration` <a name="ResetManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration"></a>

```csharp
private void ResetManagedCapacityConfiguration()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMaxSize"></a>

```csharp
private void ResetMaxSize()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.resetMinSize"></a>

```csharp
private void ResetMinSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration">ManagedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput">DesiredEc2InstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput">ManagedCapacityConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSizeInput">MaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances">DesiredEc2Instances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize">MaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedCapacityConfiguration`<sup>Required</sup> <a name="ManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration"></a>

```csharp
public GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference ManagedCapacityConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a>

---

##### `DesiredEc2InstancesInput`<sup>Optional</sup> <a name="DesiredEc2InstancesInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput"></a>

```csharp
public double DesiredEc2InstancesInput { get; }
```

- *Type:* double

---

##### `ManagedCapacityConfigurationInput`<sup>Optional</sup> <a name="ManagedCapacityConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput"></a>

```csharp
public IResolvable|GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration ManagedCapacityConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftContainerFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSizeInput"></a>

```csharp
public double MaxSizeInput { get; }
```

- *Type:* double

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `DesiredEc2Instances`<sup>Required</sup> <a name="DesiredEc2Instances" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances"></a>

```csharp
public double DesiredEc2Instances { get; }
```

- *Type:* double

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.maxSize"></a>

```csharp
public double MaxSize { get; }
```

- *Type:* double

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetLocationsLocationCapacity InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

---


### GameliftContainerFleetLocationsOutputReference <a name="GameliftContainerFleetLocationsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity">PutLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocationCapacity">ResetLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetPlayerGatewayStatus">ResetPlayerGatewayStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetStoppedActions">ResetStoppedActions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocationCapacity` <a name="PutLocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity"></a>

```csharp
private void PutLocationCapacity(GameliftContainerFleetLocationsLocationCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.putLocationCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

---

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetLocationCapacity` <a name="ResetLocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetLocationCapacity"></a>

```csharp
private void ResetLocationCapacity()
```

##### `ResetPlayerGatewayStatus` <a name="ResetPlayerGatewayStatus" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetPlayerGatewayStatus"></a>

```csharp
private void ResetPlayerGatewayStatus()
```

##### `ResetStoppedActions` <a name="ResetStoppedActions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.resetStoppedActions"></a>

```csharp
private void ResetStoppedActions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacity">LocationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference">GameliftContainerFleetLocationsLocationCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacityInput">LocationCapacityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatusInput">PlayerGatewayStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActionsInput">StoppedActionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus">PlayerGatewayStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActions">StoppedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationCapacity`<sup>Required</sup> <a name="LocationCapacity" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacity"></a>

```csharp
public GameliftContainerFleetLocationsLocationCapacityOutputReference LocationCapacity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacityOutputReference">GameliftContainerFleetLocationsLocationCapacityOutputReference</a>

---

##### `LocationCapacityInput`<sup>Optional</sup> <a name="LocationCapacityInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationCapacityInput"></a>

```csharp
public IResolvable|GameliftContainerFleetLocationsLocationCapacity LocationCapacityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsLocationCapacity">GameliftContainerFleetLocationsLocationCapacity</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PlayerGatewayStatusInput`<sup>Optional</sup> <a name="PlayerGatewayStatusInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatusInput"></a>

```csharp
public string PlayerGatewayStatusInput { get; }
```

- *Type:* string

---

##### `StoppedActionsInput`<sup>Optional</sup> <a name="StoppedActionsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActionsInput"></a>

```csharp
public string[] StoppedActionsInput { get; }
```

- *Type:* string[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PlayerGatewayStatus`<sup>Required</sup> <a name="PlayerGatewayStatus" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.playerGatewayStatus"></a>

```csharp
public string PlayerGatewayStatus { get; }
```

- *Type:* string

---

##### `StoppedActions`<sup>Required</sup> <a name="StoppedActions" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.stoppedActions"></a>

```csharp
public string[] StoppedActions { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetLocations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLocations">GameliftContainerFleetLocations</a>

---


### GameliftContainerFleetLogConfigurationOutputReference <a name="GameliftContainerFleetLogConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetLogConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogDestination">ResetLogDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogGroupArn">ResetLogGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetS3BucketName">ResetS3BucketName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogDestination` <a name="ResetLogDestination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogDestination"></a>

```csharp
private void ResetLogDestination()
```

##### `ResetLogGroupArn` <a name="ResetLogGroupArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetLogGroupArn"></a>

```csharp
private void ResetLogGroupArn()
```

##### `ResetS3BucketName` <a name="ResetS3BucketName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.resetS3BucketName"></a>

```csharp
private void ResetS3BucketName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestinationInput">LogDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArnInput">LogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketNameInput">S3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestination">LogDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn">LogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName">S3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogDestinationInput`<sup>Optional</sup> <a name="LogDestinationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestinationInput"></a>

```csharp
public string LogDestinationInput { get; }
```

- *Type:* string

---

##### `LogGroupArnInput`<sup>Optional</sup> <a name="LogGroupArnInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArnInput"></a>

```csharp
public string LogGroupArnInput { get; }
```

- *Type:* string

---

##### `S3BucketNameInput`<sup>Optional</sup> <a name="S3BucketNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketNameInput"></a>

```csharp
public string S3BucketNameInput { get; }
```

- *Type:* string

---

##### `LogDestination`<sup>Required</sup> <a name="LogDestination" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logDestination"></a>

```csharp
public string LogDestination { get; }
```

- *Type:* string

---

##### `LogGroupArn`<sup>Required</sup> <a name="LogGroupArn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.logGroupArn"></a>

```csharp
public string LogGroupArn { get; }
```

- *Type:* string

---

##### `S3BucketName`<sup>Required</sup> <a name="S3BucketName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.s3BucketName"></a>

```csharp
public string S3BucketName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetLogConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetLogConfiguration">GameliftContainerFleetLogConfiguration</a>

---


### GameliftContainerFleetScalingPoliciesList <a name="GameliftContainerFleetScalingPoliciesList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetScalingPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get"></a>

```csharp
private GameliftContainerFleetScalingPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesList.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetScalingPolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>[]

---


### GameliftContainerFleetScalingPoliciesOutputReference <a name="GameliftContainerFleetScalingPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetScalingPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration">PutTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetEvaluationPeriods">ResetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetPolicyType">ResetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustment">ResetScalingAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustmentType">ResetScalingAdjustmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetTargetConfiguration">ResetTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetConfiguration` <a name="PutTargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration"></a>

```csharp
private void PutTargetConfiguration(GameliftContainerFleetScalingPoliciesTargetConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.putTargetConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetComparisonOperator"></a>

```csharp
private void ResetComparisonOperator()
```

##### `ResetEvaluationPeriods` <a name="ResetEvaluationPeriods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetEvaluationPeriods"></a>

```csharp
private void ResetEvaluationPeriods()
```

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetMetricName"></a>

```csharp
private void ResetMetricName()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetPolicyType"></a>

```csharp
private void ResetPolicyType()
```

##### `ResetScalingAdjustment` <a name="ResetScalingAdjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustment"></a>

```csharp
private void ResetScalingAdjustment()
```

##### `ResetScalingAdjustmentType` <a name="ResetScalingAdjustmentType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetScalingAdjustmentType"></a>

```csharp
private void ResetScalingAdjustmentType()
```

##### `ResetTargetConfiguration` <a name="ResetTargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetTargetConfiguration"></a>

```csharp
private void ResetTargetConfiguration()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration">TargetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput">ScalingAdjustmentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput">ScalingAdjustmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfigurationInput">TargetConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment">ScalingAdjustment</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType">ScalingAdjustmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetConfiguration`<sup>Required</sup> <a name="TargetConfiguration" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfiguration"></a>

```csharp
public GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference TargetConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference">GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference</a>

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput"></a>

```csharp
public double EvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `ScalingAdjustmentInput`<sup>Optional</sup> <a name="ScalingAdjustmentInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput"></a>

```csharp
public double ScalingAdjustmentInput { get; }
```

- *Type:* double

---

##### `ScalingAdjustmentTypeInput`<sup>Optional</sup> <a name="ScalingAdjustmentTypeInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput"></a>

```csharp
public string ScalingAdjustmentTypeInput { get; }
```

- *Type:* string

---

##### `TargetConfigurationInput`<sup>Optional</sup> <a name="TargetConfigurationInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.targetConfigurationInput"></a>

```csharp
public IResolvable|GameliftContainerFleetScalingPoliciesTargetConfiguration TargetConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; }
```

- *Type:* double

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `ScalingAdjustment`<sup>Required</sup> <a name="ScalingAdjustment" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustment"></a>

```csharp
public double ScalingAdjustment { get; }
```

- *Type:* double

---

##### `ScalingAdjustmentType`<sup>Required</sup> <a name="ScalingAdjustmentType" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.scalingAdjustmentType"></a>

```csharp
public string ScalingAdjustmentType { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetScalingPolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPolicies">GameliftContainerFleetScalingPolicies</a>

---


### GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference <a name="GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue">ResetTargetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetValue` <a name="ResetTargetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue"></a>

```csharp
private void ResetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput">TargetValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetValueInput`<sup>Optional</sup> <a name="TargetValueInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput"></a>

```csharp
public double TargetValueInput { get; }
```

- *Type:* double

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue"></a>

```csharp
public double TargetValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetScalingPoliciesTargetConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetScalingPoliciesTargetConfiguration">GameliftContainerFleetScalingPoliciesTargetConfiguration</a>

---


### GameliftContainerFleetTagsList <a name="GameliftContainerFleetTagsList" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get"></a>

```csharp
private GameliftContainerFleetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsList.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>[]

---


### GameliftContainerFleetTagsOutputReference <a name="GameliftContainerFleetTagsOutputReference" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftContainerFleetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftContainerFleetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftContainerFleet.GameliftContainerFleetTags">GameliftContainerFleetTags</a>

---



