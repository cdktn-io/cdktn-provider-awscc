# `gameliftFleet` Submodule <a name="`gameliftFleet` Submodule" id="@cdktn/provider-awscc.gameliftFleet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GameliftFleet <a name="GameliftFleet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet awscc_gamelift_fleet}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleet(Construct Scope, string Id, GameliftFleetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig">GameliftFleetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig">GameliftFleetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration">PutAnywhereConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration">PutCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions">PutEc2InboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations">PutLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration">PutPlayerGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy">PutResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration">PutRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies">PutScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetAnywhereConfiguration">ResetAnywhereConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetApplyCapacity">ResetApplyCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetBuildId">ResetBuildId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetCertificateConfiguration">ResetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetComputeType">ResetComputeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDesiredEc2Instances">ResetDesiredEc2Instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InboundPermissions">ResetEc2InboundPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InstanceType">ResetEc2InstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetFleetType">ResetFleetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleArn">ResetInstanceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleCredentialsProvider">ResetInstanceRoleCredentialsProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLocations">ResetLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLogPaths">ResetLogPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMaxSize">ResetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMetricGroups">ResetMetricGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMinSize">ResetMinSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy">ResetNewGameSessionProtectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcAwsAccountId">ResetPeerVpcAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcId">ResetPeerVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayConfiguration">ResetPlayerGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayMode">ResetPlayerGatewayMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy">ResetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetRuntimeConfiguration">ResetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScalingPolicies">ResetScalingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScriptId">ResetScriptId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchParameters">ResetServerLaunchParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchPath">ResetServerLaunchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnywhereConfiguration` <a name="PutAnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration"></a>

```csharp
private void PutAnywhereConfiguration(GameliftFleetAnywhereConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putAnywhereConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

---

##### `PutCertificateConfiguration` <a name="PutCertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration"></a>

```csharp
private void PutCertificateConfiguration(GameliftFleetCertificateConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putCertificateConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `PutEc2InboundPermissions` <a name="PutEc2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions"></a>

```csharp
private void PutEc2InboundPermissions(IResolvable|GameliftFleetEc2InboundPermissions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putEc2InboundPermissions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]

---

##### `PutLocations` <a name="PutLocations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations"></a>

```csharp
private void PutLocations(IResolvable|GameliftFleetLocations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putLocations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]

---

##### `PutPlayerGatewayConfiguration` <a name="PutPlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration"></a>

```csharp
private void PutPlayerGatewayConfiguration(GameliftFleetPlayerGatewayConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putPlayerGatewayConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

---

##### `PutResourceCreationLimitPolicy` <a name="PutResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy"></a>

```csharp
private void PutResourceCreationLimitPolicy(GameliftFleetResourceCreationLimitPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putResourceCreationLimitPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `PutRuntimeConfiguration` <a name="PutRuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration"></a>

```csharp
private void PutRuntimeConfiguration(GameliftFleetRuntimeConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putRuntimeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `PutScalingPolicies` <a name="PutScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies"></a>

```csharp
private void PutScalingPolicies(IResolvable|GameliftFleetScalingPolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putScalingPolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags"></a>

```csharp
private void PutTags(IResolvable|GameliftFleetTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]

---

##### `ResetAnywhereConfiguration` <a name="ResetAnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetAnywhereConfiguration"></a>

```csharp
private void ResetAnywhereConfiguration()
```

##### `ResetApplyCapacity` <a name="ResetApplyCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetApplyCapacity"></a>

```csharp
private void ResetApplyCapacity()
```

##### `ResetBuildId` <a name="ResetBuildId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetBuildId"></a>

```csharp
private void ResetBuildId()
```

##### `ResetCertificateConfiguration` <a name="ResetCertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetCertificateConfiguration"></a>

```csharp
private void ResetCertificateConfiguration()
```

##### `ResetComputeType` <a name="ResetComputeType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetComputeType"></a>

```csharp
private void ResetComputeType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDesiredEc2Instances` <a name="ResetDesiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetDesiredEc2Instances"></a>

```csharp
private void ResetDesiredEc2Instances()
```

##### `ResetEc2InboundPermissions` <a name="ResetEc2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InboundPermissions"></a>

```csharp
private void ResetEc2InboundPermissions()
```

##### `ResetEc2InstanceType` <a name="ResetEc2InstanceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetEc2InstanceType"></a>

```csharp
private void ResetEc2InstanceType()
```

##### `ResetFleetType` <a name="ResetFleetType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetFleetType"></a>

```csharp
private void ResetFleetType()
```

##### `ResetInstanceRoleArn` <a name="ResetInstanceRoleArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleArn"></a>

```csharp
private void ResetInstanceRoleArn()
```

##### `ResetInstanceRoleCredentialsProvider` <a name="ResetInstanceRoleCredentialsProvider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetInstanceRoleCredentialsProvider"></a>

```csharp
private void ResetInstanceRoleCredentialsProvider()
```

##### `ResetLocations` <a name="ResetLocations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLocations"></a>

```csharp
private void ResetLocations()
```

##### `ResetLogPaths` <a name="ResetLogPaths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetLogPaths"></a>

```csharp
private void ResetLogPaths()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMaxSize"></a>

```csharp
private void ResetMaxSize()
```

##### `ResetMetricGroups` <a name="ResetMetricGroups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMetricGroups"></a>

```csharp
private void ResetMetricGroups()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetMinSize"></a>

```csharp
private void ResetMinSize()
```

##### `ResetNewGameSessionProtectionPolicy` <a name="ResetNewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetNewGameSessionProtectionPolicy"></a>

```csharp
private void ResetNewGameSessionProtectionPolicy()
```

##### `ResetPeerVpcAwsAccountId` <a name="ResetPeerVpcAwsAccountId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcAwsAccountId"></a>

```csharp
private void ResetPeerVpcAwsAccountId()
```

##### `ResetPeerVpcId` <a name="ResetPeerVpcId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPeerVpcId"></a>

```csharp
private void ResetPeerVpcId()
```

##### `ResetPlayerGatewayConfiguration` <a name="ResetPlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayConfiguration"></a>

```csharp
private void ResetPlayerGatewayConfiguration()
```

##### `ResetPlayerGatewayMode` <a name="ResetPlayerGatewayMode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetPlayerGatewayMode"></a>

```csharp
private void ResetPlayerGatewayMode()
```

##### `ResetResourceCreationLimitPolicy` <a name="ResetResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetResourceCreationLimitPolicy"></a>

```csharp
private void ResetResourceCreationLimitPolicy()
```

##### `ResetRuntimeConfiguration` <a name="ResetRuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetRuntimeConfiguration"></a>

```csharp
private void ResetRuntimeConfiguration()
```

##### `ResetScalingPolicies` <a name="ResetScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScalingPolicies"></a>

```csharp
private void ResetScalingPolicies()
```

##### `ResetScriptId` <a name="ResetScriptId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetScriptId"></a>

```csharp
private void ResetScriptId()
```

##### `ResetServerLaunchParameters` <a name="ResetServerLaunchParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchParameters"></a>

```csharp
private void ResetServerLaunchParameters()
```

##### `ResetServerLaunchPath` <a name="ResetServerLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetServerLaunchPath"></a>

```csharp
private void ResetServerLaunchPath()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GameliftFleet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftFleet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftFleet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftFleet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

GameliftFleet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GameliftFleet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GameliftFleet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GameliftFleet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GameliftFleet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfiguration">AnywhereConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference">GameliftFleetAnywhereConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfiguration">CertificateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissions">Ec2InboundPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList">GameliftFleetEc2InboundPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetArn">FleetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetId">FleetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locations">Locations</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList">GameliftFleetLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfiguration">PlayerGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference">GameliftFleetPlayerGatewayConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy">ResourceCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfiguration">RuntimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPolicies">ScalingPolicies</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList">GameliftFleetScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList">GameliftFleetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfigurationInput">AnywhereConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacityInput">ApplyCapacityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildIdInput">BuildIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfigurationInput">CertificateConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeTypeInput">ComputeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2InstancesInput">DesiredEc2InstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissionsInput">Ec2InboundPermissionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput">Ec2InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetTypeInput">FleetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArnInput">InstanceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProviderInput">InstanceRoleCredentialsProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locationsInput">LocationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPathsInput">LogPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSizeInput">MaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroupsInput">MetricGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput">NewGameSessionProtectionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountIdInput">PeerVpcAwsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcIdInput">PeerVpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfigurationInput">PlayerGatewayConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayModeInput">PlayerGatewayModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput">ResourceCreationLimitPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput">RuntimeConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPoliciesInput">ScalingPoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptIdInput">ScriptIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParametersInput">ServerLaunchParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPathInput">ServerLaunchPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacity">ApplyCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildId">BuildId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeType">ComputeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2Instances">DesiredEc2Instances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceType">Ec2InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetType">FleetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArn">InstanceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProvider">InstanceRoleCredentialsProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPaths">LogPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSize">MaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroups">MetricGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy">NewGameSessionProtectionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountId">PeerVpcAwsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcId">PeerVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayMode">PlayerGatewayMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptId">ScriptId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParameters">ServerLaunchParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPath">ServerLaunchPath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AnywhereConfiguration`<sup>Required</sup> <a name="AnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfiguration"></a>

```csharp
public GameliftFleetAnywhereConfigurationOutputReference AnywhereConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference">GameliftFleetAnywhereConfigurationOutputReference</a>

---

##### `CertificateConfiguration`<sup>Required</sup> <a name="CertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfiguration"></a>

```csharp
public GameliftFleetCertificateConfigurationOutputReference CertificateConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference">GameliftFleetCertificateConfigurationOutputReference</a>

---

##### `Ec2InboundPermissions`<sup>Required</sup> <a name="Ec2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissions"></a>

```csharp
public GameliftFleetEc2InboundPermissionsList Ec2InboundPermissions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList">GameliftFleetEc2InboundPermissionsList</a>

---

##### `FleetArn`<sup>Required</sup> <a name="FleetArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetArn"></a>

```csharp
public string FleetArn { get; }
```

- *Type:* string

---

##### `FleetId`<sup>Required</sup> <a name="FleetId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetId"></a>

```csharp
public string FleetId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locations"></a>

```csharp
public GameliftFleetLocationsList Locations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList">GameliftFleetLocationsList</a>

---

##### `PlayerGatewayConfiguration`<sup>Required</sup> <a name="PlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfiguration"></a>

```csharp
public GameliftFleetPlayerGatewayConfigurationOutputReference PlayerGatewayConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference">GameliftFleetPlayerGatewayConfigurationOutputReference</a>

---

##### `ResourceCreationLimitPolicy`<sup>Required</sup> <a name="ResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicy"></a>

```csharp
public GameliftFleetResourceCreationLimitPolicyOutputReference ResourceCreationLimitPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference">GameliftFleetResourceCreationLimitPolicyOutputReference</a>

---

##### `RuntimeConfiguration`<sup>Required</sup> <a name="RuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfiguration"></a>

```csharp
public GameliftFleetRuntimeConfigurationOutputReference RuntimeConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference">GameliftFleetRuntimeConfigurationOutputReference</a>

---

##### `ScalingPolicies`<sup>Required</sup> <a name="ScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPolicies"></a>

```csharp
public GameliftFleetScalingPoliciesList ScalingPolicies { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList">GameliftFleetScalingPoliciesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tags"></a>

```csharp
public GameliftFleetTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList">GameliftFleetTagsList</a>

---

##### `AnywhereConfigurationInput`<sup>Optional</sup> <a name="AnywhereConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.anywhereConfigurationInput"></a>

```csharp
public IResolvable|GameliftFleetAnywhereConfiguration AnywhereConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

---

##### `ApplyCapacityInput`<sup>Optional</sup> <a name="ApplyCapacityInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacityInput"></a>

```csharp
public string ApplyCapacityInput { get; }
```

- *Type:* string

---

##### `BuildIdInput`<sup>Optional</sup> <a name="BuildIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildIdInput"></a>

```csharp
public string BuildIdInput { get; }
```

- *Type:* string

---

##### `CertificateConfigurationInput`<sup>Optional</sup> <a name="CertificateConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.certificateConfigurationInput"></a>

```csharp
public IResolvable|GameliftFleetCertificateConfiguration CertificateConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---

##### `ComputeTypeInput`<sup>Optional</sup> <a name="ComputeTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeTypeInput"></a>

```csharp
public string ComputeTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DesiredEc2InstancesInput`<sup>Optional</sup> <a name="DesiredEc2InstancesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2InstancesInput"></a>

```csharp
public double DesiredEc2InstancesInput { get; }
```

- *Type:* double

---

##### `Ec2InboundPermissionsInput`<sup>Optional</sup> <a name="Ec2InboundPermissionsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InboundPermissionsInput"></a>

```csharp
public IResolvable|GameliftFleetEc2InboundPermissions[] Ec2InboundPermissionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]

---

##### `Ec2InstanceTypeInput`<sup>Optional</sup> <a name="Ec2InstanceTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceTypeInput"></a>

```csharp
public string Ec2InstanceTypeInput { get; }
```

- *Type:* string

---

##### `FleetTypeInput`<sup>Optional</sup> <a name="FleetTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetTypeInput"></a>

```csharp
public string FleetTypeInput { get; }
```

- *Type:* string

---

##### `InstanceRoleArnInput`<sup>Optional</sup> <a name="InstanceRoleArnInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArnInput"></a>

```csharp
public string InstanceRoleArnInput { get; }
```

- *Type:* string

---

##### `InstanceRoleCredentialsProviderInput`<sup>Optional</sup> <a name="InstanceRoleCredentialsProviderInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProviderInput"></a>

```csharp
public string InstanceRoleCredentialsProviderInput { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.locationsInput"></a>

```csharp
public IResolvable|GameliftFleetLocations[] LocationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]

---

##### `LogPathsInput`<sup>Optional</sup> <a name="LogPathsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPathsInput"></a>

```csharp
public string[] LogPathsInput { get; }
```

- *Type:* string[]

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSizeInput"></a>

```csharp
public double MaxSizeInput { get; }
```

- *Type:* double

---

##### `MetricGroupsInput`<sup>Optional</sup> <a name="MetricGroupsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroupsInput"></a>

```csharp
public string[] MetricGroupsInput { get; }
```

- *Type:* string[]

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NewGameSessionProtectionPolicyInput`<sup>Optional</sup> <a name="NewGameSessionProtectionPolicyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicyInput"></a>

```csharp
public string NewGameSessionProtectionPolicyInput { get; }
```

- *Type:* string

---

##### `PeerVpcAwsAccountIdInput`<sup>Optional</sup> <a name="PeerVpcAwsAccountIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountIdInput"></a>

```csharp
public string PeerVpcAwsAccountIdInput { get; }
```

- *Type:* string

---

##### `PeerVpcIdInput`<sup>Optional</sup> <a name="PeerVpcIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcIdInput"></a>

```csharp
public string PeerVpcIdInput { get; }
```

- *Type:* string

---

##### `PlayerGatewayConfigurationInput`<sup>Optional</sup> <a name="PlayerGatewayConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayConfigurationInput"></a>

```csharp
public IResolvable|GameliftFleetPlayerGatewayConfiguration PlayerGatewayConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

---

##### `PlayerGatewayModeInput`<sup>Optional</sup> <a name="PlayerGatewayModeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayModeInput"></a>

```csharp
public string PlayerGatewayModeInput { get; }
```

- *Type:* string

---

##### `ResourceCreationLimitPolicyInput`<sup>Optional</sup> <a name="ResourceCreationLimitPolicyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.resourceCreationLimitPolicyInput"></a>

```csharp
public IResolvable|GameliftFleetResourceCreationLimitPolicy ResourceCreationLimitPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---

##### `RuntimeConfigurationInput`<sup>Optional</sup> <a name="RuntimeConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.runtimeConfigurationInput"></a>

```csharp
public IResolvable|GameliftFleetRuntimeConfiguration RuntimeConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---

##### `ScalingPoliciesInput`<sup>Optional</sup> <a name="ScalingPoliciesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scalingPoliciesInput"></a>

```csharp
public IResolvable|GameliftFleetScalingPolicies[] ScalingPoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]

---

##### `ScriptIdInput`<sup>Optional</sup> <a name="ScriptIdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptIdInput"></a>

```csharp
public string ScriptIdInput { get; }
```

- *Type:* string

---

##### `ServerLaunchParametersInput`<sup>Optional</sup> <a name="ServerLaunchParametersInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParametersInput"></a>

```csharp
public string ServerLaunchParametersInput { get; }
```

- *Type:* string

---

##### `ServerLaunchPathInput`<sup>Optional</sup> <a name="ServerLaunchPathInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPathInput"></a>

```csharp
public string ServerLaunchPathInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tagsInput"></a>

```csharp
public IResolvable|GameliftFleetTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]

---

##### `ApplyCapacity`<sup>Required</sup> <a name="ApplyCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.applyCapacity"></a>

```csharp
public string ApplyCapacity { get; }
```

- *Type:* string

---

##### `BuildId`<sup>Required</sup> <a name="BuildId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.buildId"></a>

```csharp
public string BuildId { get; }
```

- *Type:* string

---

##### `ComputeType`<sup>Required</sup> <a name="ComputeType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.computeType"></a>

```csharp
public string ComputeType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DesiredEc2Instances`<sup>Required</sup> <a name="DesiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.desiredEc2Instances"></a>

```csharp
public double DesiredEc2Instances { get; }
```

- *Type:* double

---

##### `Ec2InstanceType`<sup>Required</sup> <a name="Ec2InstanceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.ec2InstanceType"></a>

```csharp
public string Ec2InstanceType { get; }
```

- *Type:* string

---

##### `FleetType`<sup>Required</sup> <a name="FleetType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.fleetType"></a>

```csharp
public string FleetType { get; }
```

- *Type:* string

---

##### `InstanceRoleArn`<sup>Required</sup> <a name="InstanceRoleArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleArn"></a>

```csharp
public string InstanceRoleArn { get; }
```

- *Type:* string

---

##### `InstanceRoleCredentialsProvider`<sup>Required</sup> <a name="InstanceRoleCredentialsProvider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.instanceRoleCredentialsProvider"></a>

```csharp
public string InstanceRoleCredentialsProvider { get; }
```

- *Type:* string

---

##### `LogPaths`<sup>Required</sup> <a name="LogPaths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.logPaths"></a>

```csharp
public string[] LogPaths { get; }
```

- *Type:* string[]

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.maxSize"></a>

```csharp
public double MaxSize { get; }
```

- *Type:* double

---

##### `MetricGroups`<sup>Required</sup> <a name="MetricGroups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.metricGroups"></a>

```csharp
public string[] MetricGroups { get; }
```

- *Type:* string[]

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NewGameSessionProtectionPolicy`<sup>Required</sup> <a name="NewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.newGameSessionProtectionPolicy"></a>

```csharp
public string NewGameSessionProtectionPolicy { get; }
```

- *Type:* string

---

##### `PeerVpcAwsAccountId`<sup>Required</sup> <a name="PeerVpcAwsAccountId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcAwsAccountId"></a>

```csharp
public string PeerVpcAwsAccountId { get; }
```

- *Type:* string

---

##### `PeerVpcId`<sup>Required</sup> <a name="PeerVpcId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.peerVpcId"></a>

```csharp
public string PeerVpcId { get; }
```

- *Type:* string

---

##### `PlayerGatewayMode`<sup>Required</sup> <a name="PlayerGatewayMode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.playerGatewayMode"></a>

```csharp
public string PlayerGatewayMode { get; }
```

- *Type:* string

---

##### `ScriptId`<sup>Required</sup> <a name="ScriptId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.scriptId"></a>

```csharp
public string ScriptId { get; }
```

- *Type:* string

---

##### `ServerLaunchParameters`<sup>Required</sup> <a name="ServerLaunchParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchParameters"></a>

```csharp
public string ServerLaunchParameters { get; }
```

- *Type:* string

---

##### `ServerLaunchPath`<sup>Required</sup> <a name="ServerLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.serverLaunchPath"></a>

```csharp
public string ServerLaunchPath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GameliftFleetAnywhereConfiguration <a name="GameliftFleetAnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetAnywhereConfiguration {
    string Cost = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.property.cost">Cost</a></code> | <code>string</code> | Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost. |

---

##### `Cost`<sup>Optional</sup> <a name="Cost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration.property.cost"></a>

```csharp
public string Cost { get; set; }
```

- *Type:* string

Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#cost GameliftFleet#cost}

---

### GameliftFleetCertificateConfiguration <a name="GameliftFleetCertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetCertificateConfiguration {
    string CertificateType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType">CertificateType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}. |

---

##### `CertificateType`<sup>Optional</sup> <a name="CertificateType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration.property.certificateType"></a>

```csharp
public string CertificateType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#certificate_type GameliftFleet#certificate_type}.

---

### GameliftFleetConfig <a name="GameliftFleetConfig" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    GameliftFleetAnywhereConfiguration AnywhereConfiguration = null,
    string ApplyCapacity = null,
    string BuildId = null,
    GameliftFleetCertificateConfiguration CertificateConfiguration = null,
    string ComputeType = null,
    string Description = null,
    double DesiredEc2Instances = null,
    IResolvable|GameliftFleetEc2InboundPermissions[] Ec2InboundPermissions = null,
    string Ec2InstanceType = null,
    string FleetType = null,
    string InstanceRoleArn = null,
    string InstanceRoleCredentialsProvider = null,
    IResolvable|GameliftFleetLocations[] Locations = null,
    string[] LogPaths = null,
    double MaxSize = null,
    string[] MetricGroups = null,
    double MinSize = null,
    string NewGameSessionProtectionPolicy = null,
    string PeerVpcAwsAccountId = null,
    string PeerVpcId = null,
    GameliftFleetPlayerGatewayConfiguration PlayerGatewayConfiguration = null,
    string PlayerGatewayMode = null,
    GameliftFleetResourceCreationLimitPolicy ResourceCreationLimitPolicy = null,
    GameliftFleetRuntimeConfiguration RuntimeConfiguration = null,
    IResolvable|GameliftFleetScalingPolicies[] ScalingPolicies = null,
    string ScriptId = null,
    string ServerLaunchParameters = null,
    string ServerLaunchPath = null,
    IResolvable|GameliftFleetTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.name">Name</a></code> | <code>string</code> | A descriptive label that is associated with a fleet. Fleet names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.anywhereConfiguration">AnywhereConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | Configuration for Anywhere fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.applyCapacity">ApplyCapacity</a></code> | <code>string</code> | Determines when and how to apply fleet or location capacities. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.buildId">BuildId</a></code> | <code>string</code> | A unique identifier for a build to be deployed on the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration">CertificateConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | Indicates whether to generate a TLS/SSL certificate for the new fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.computeType">ComputeType</a></code> | <code>string</code> | ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of a fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.desiredEc2Instances">DesiredEc2Instances</a></code> | <code>double</code> | [DEPRECATED] The number of EC2 instances that you want this fleet to host. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermissions">Ec2InboundPermissions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]</code> | A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType">Ec2InstanceType</a></code> | <code>string</code> | The name of an EC2 instance type that is supported in Amazon GameLift. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.fleetType">FleetType</a></code> | <code>string</code> | Indicates whether to use On-Demand instances or Spot instances for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn">InstanceRoleArn</a></code> | <code>string</code> | A unique identifier for an AWS IAM role that manages access to your AWS services. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleCredentialsProvider">InstanceRoleCredentialsProvider</a></code> | <code>string</code> | Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.locations">Locations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.logPaths">LogPaths</a></code> | <code>string[]</code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.maxSize">MaxSize</a></code> | <code>double</code> | [DEPRECATED] The maximum value that is allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.metricGroups">MetricGroups</a></code> | <code>string[]</code> | The name of an Amazon CloudWatch metric group. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.minSize">MinSize</a></code> | <code>double</code> | [DEPRECATED] The minimum value allowed for the fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy">NewGameSessionProtectionPolicy</a></code> | <code>string</code> | A game session protection policy to apply to all game sessions hosted on instances in this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcAwsAccountId">PeerVpcAwsAccountId</a></code> | <code>string</code> | A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcId">PeerVpcId</a></code> | <code>string</code> | A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayConfiguration">PlayerGatewayConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | Configuration for player gateway. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayMode">PlayerGatewayMode</a></code> | <code>string</code> | The player gateway mode for the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy">ResourceCreationLimitPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | A policy that limits the number of game sessions an individual player can create over a span of time for this fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration">RuntimeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | Instructions for launching server processes on each instance in the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scalingPolicies">ScalingPolicies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]</code> | A list of rules that control how a fleet is scaled. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scriptId">ScriptId</a></code> | <code>string</code> | A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchParameters">ServerLaunchParameters</a></code> | <code>string</code> | This parameter is no longer used but is retained for backward compatibility. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchPath">ServerLaunchPath</a></code> | <code>string</code> | This parameter is no longer used. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A descriptive label that is associated with a fleet. Fleet names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#name GameliftFleet#name}

---

##### `AnywhereConfiguration`<sup>Optional</sup> <a name="AnywhereConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.anywhereConfiguration"></a>

```csharp
public GameliftFleetAnywhereConfiguration AnywhereConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

Configuration for Anywhere fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#anywhere_configuration GameliftFleet#anywhere_configuration}

---

##### `ApplyCapacity`<sup>Optional</sup> <a name="ApplyCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.applyCapacity"></a>

```csharp
public string ApplyCapacity { get; set; }
```

- *Type:* string

Determines when and how to apply fleet or location capacities.

Allowed options are ON_UPDATE (default), ON_CREATE_AND_UPDATE and ON_CREATE_AND_UPDATE_WITH_AUTOSCALING. If you choose ON_CREATE_AND_UPDATE_WITH_AUTOSCALING, MinSize and MaxSize will still be applied on creation and on updates, but DesiredEC2Instances will only be applied once on fleet creation and will be ignored during updates to prevent conflicts with auto-scaling. During updates with ON_CREATE_AND_UPDATE_WITH_AUTOSCALING chosen, if current desired instance is lower than the new MinSize, it will be increased to the new MinSize; if current desired instance is larger than the new MaxSize, it will be decreased to the new MaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#apply_capacity GameliftFleet#apply_capacity}

---

##### `BuildId`<sup>Optional</sup> <a name="BuildId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.buildId"></a>

```csharp
public string BuildId { get; set; }
```

- *Type:* string

A unique identifier for a build to be deployed on the new fleet.

If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#build_id GameliftFleet#build_id}

---

##### `CertificateConfiguration`<sup>Optional</sup> <a name="CertificateConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.certificateConfiguration"></a>

```csharp
public GameliftFleetCertificateConfiguration CertificateConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

Indicates whether to generate a TLS/SSL certificate for the new fleet.

TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#certificate_configuration GameliftFleet#certificate_configuration}

---

##### `ComputeType`<sup>Optional</sup> <a name="ComputeType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.computeType"></a>

```csharp
public string ComputeType { get; set; }
```

- *Type:* string

ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#compute_type GameliftFleet#compute_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#description GameliftFleet#description}

---

##### `DesiredEc2Instances`<sup>Optional</sup> <a name="DesiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.desiredEc2Instances"></a>

```csharp
public double DesiredEc2Instances { get; set; }
```

- *Type:* double

[DEPRECATED] The number of EC2 instances that you want this fleet to host.

When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#desired_ec2_instances GameliftFleet#desired_ec2_instances}

---

##### `Ec2InboundPermissions`<sup>Optional</sup> <a name="Ec2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InboundPermissions"></a>

```csharp
public IResolvable|GameliftFleetEc2InboundPermissions[] Ec2InboundPermissions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]

A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#ec2_inbound_permissions GameliftFleet#ec2_inbound_permissions}

---

##### `Ec2InstanceType`<sup>Optional</sup> <a name="Ec2InstanceType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.ec2InstanceType"></a>

```csharp
public string Ec2InstanceType { get; set; }
```

- *Type:* string

The name of an EC2 instance type that is supported in Amazon GameLift.

A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#ec2_instance_type GameliftFleet#ec2_instance_type}

---

##### `FleetType`<sup>Optional</sup> <a name="FleetType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.fleetType"></a>

```csharp
public string FleetType { get; set; }
```

- *Type:* string

Indicates whether to use On-Demand instances or Spot instances for this fleet.

If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#fleet_type GameliftFleet#fleet_type}

---

##### `InstanceRoleArn`<sup>Optional</sup> <a name="InstanceRoleArn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleArn"></a>

```csharp
public string InstanceRoleArn { get; set; }
```

- *Type:* string

A unique identifier for an AWS IAM role that manages access to your AWS services.

With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#instance_role_arn GameliftFleet#instance_role_arn}

---

##### `InstanceRoleCredentialsProvider`<sup>Optional</sup> <a name="InstanceRoleCredentialsProvider" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.instanceRoleCredentialsProvider"></a>

```csharp
public string InstanceRoleCredentialsProvider { get; set; }
```

- *Type:* string

Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#instance_role_credentials_provider GameliftFleet#instance_role_credentials_provider}

---

##### `Locations`<sup>Optional</sup> <a name="Locations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.locations"></a>

```csharp
public IResolvable|GameliftFleetLocations[] Locations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#locations GameliftFleet#locations}.

---

##### `LogPaths`<sup>Optional</sup> <a name="LogPaths" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.logPaths"></a>

```csharp
public string[] LogPaths { get; set; }
```

- *Type:* string[]

This parameter is no longer used.

When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#log_paths GameliftFleet#log_paths}

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.maxSize"></a>

```csharp
public double MaxSize { get; set; }
```

- *Type:* double

[DEPRECATED] The maximum value that is allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#max_size GameliftFleet#max_size}

---

##### `MetricGroups`<sup>Optional</sup> <a name="MetricGroups" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.metricGroups"></a>

```csharp
public string[] MetricGroups { get; set; }
```

- *Type:* string[]

The name of an Amazon CloudWatch metric group.

A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#metric_groups GameliftFleet#metric_groups}

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

[DEPRECATED] The minimum value allowed for the fleet's instance count.

When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#min_size GameliftFleet#min_size}

---

##### `NewGameSessionProtectionPolicy`<sup>Optional</sup> <a name="NewGameSessionProtectionPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.newGameSessionProtectionPolicy"></a>

```csharp
public string NewGameSessionProtectionPolicy { get; set; }
```

- *Type:* string

A game session protection policy to apply to all game sessions hosted on instances in this fleet.

When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}

---

##### `PeerVpcAwsAccountId`<sup>Optional</sup> <a name="PeerVpcAwsAccountId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcAwsAccountId"></a>

```csharp
public string PeerVpcAwsAccountId { get; set; }
```

- *Type:* string

A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with.

You can find your account ID in the AWS Management Console under account settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#peer_vpc_aws_account_id GameliftFleet#peer_vpc_aws_account_id}

---

##### `PeerVpcId`<sup>Optional</sup> <a name="PeerVpcId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.peerVpcId"></a>

```csharp
public string PeerVpcId { get; set; }
```

- *Type:* string

A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet.

The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#peer_vpc_id GameliftFleet#peer_vpc_id}

---

##### `PlayerGatewayConfiguration`<sup>Optional</sup> <a name="PlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayConfiguration"></a>

```csharp
public GameliftFleetPlayerGatewayConfiguration PlayerGatewayConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

Configuration for player gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#player_gateway_configuration GameliftFleet#player_gateway_configuration}

---

##### `PlayerGatewayMode`<sup>Optional</sup> <a name="PlayerGatewayMode" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.playerGatewayMode"></a>

```csharp
public string PlayerGatewayMode { get; set; }
```

- *Type:* string

The player gateway mode for the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#player_gateway_mode GameliftFleet#player_gateway_mode}

---

##### `ResourceCreationLimitPolicy`<sup>Optional</sup> <a name="ResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.resourceCreationLimitPolicy"></a>

```csharp
public GameliftFleetResourceCreationLimitPolicy ResourceCreationLimitPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}

---

##### `RuntimeConfiguration`<sup>Optional</sup> <a name="RuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.runtimeConfiguration"></a>

```csharp
public GameliftFleetRuntimeConfiguration RuntimeConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

Instructions for launching server processes on each instance in the fleet.

Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.

This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#runtime_configuration GameliftFleet#runtime_configuration}

---

##### `ScalingPolicies`<sup>Optional</sup> <a name="ScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scalingPolicies"></a>

```csharp
public IResolvable|GameliftFleetScalingPolicies[] ScalingPolicies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]

A list of rules that control how a fleet is scaled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#scaling_policies GameliftFleet#scaling_policies}

---

##### `ScriptId`<sup>Optional</sup> <a name="ScriptId" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.scriptId"></a>

```csharp
public string ScriptId { get; set; }
```

- *Type:* string

A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet.

The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.

Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#script_id GameliftFleet#script_id}

---

##### `ServerLaunchParameters`<sup>Optional</sup> <a name="ServerLaunchParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchParameters"></a>

```csharp
public string ServerLaunchParameters { get; set; }
```

- *Type:* string

This parameter is no longer used but is retained for backward compatibility.

Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#server_launch_parameters GameliftFleet#server_launch_parameters}

---

##### `ServerLaunchPath`<sup>Optional</sup> <a name="ServerLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.serverLaunchPath"></a>

```csharp
public string ServerLaunchPath { get; set; }
```

- *Type:* string

This parameter is no longer used.

Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#server_launch_path GameliftFleet#server_launch_path}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetConfig.property.tags"></a>

```csharp
public IResolvable|GameliftFleetTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#tags GameliftFleet#tags}

---

### GameliftFleetEc2InboundPermissions <a name="GameliftFleetEc2InboundPermissions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetEc2InboundPermissions {
    double FromPort = null,
    string IpRange = null,
    string Protocol = null,
    double ToPort = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.fromPort">FromPort</a></code> | <code>double</code> | A starting value for a range of allowed port numbers. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.ipRange">IpRange</a></code> | <code>string</code> | A range of allowed IP addresses. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.protocol">Protocol</a></code> | <code>string</code> | The network communication protocol used by the fleet. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.toPort">ToPort</a></code> | <code>double</code> | An ending value for a range of allowed port numbers. |

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.fromPort"></a>

```csharp
public double FromPort { get; set; }
```

- *Type:* double

A starting value for a range of allowed port numbers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#from_port GameliftFleet#from_port}

---

##### `IpRange`<sup>Optional</sup> <a name="IpRange" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.ipRange"></a>

```csharp
public string IpRange { get; set; }
```

- *Type:* string

A range of allowed IP addresses.

This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#ip_range GameliftFleet#ip_range}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

The network communication protocol used by the fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#protocol GameliftFleet#protocol}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions.property.toPort"></a>

```csharp
public double ToPort { get; set; }
```

- *Type:* double

An ending value for a range of allowed port numbers.

Port numbers are end-inclusive. This value must be higher than FromPort.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#to_port GameliftFleet#to_port}

---

### GameliftFleetLocations <a name="GameliftFleetLocations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetLocations {
    string Location = null,
    GameliftFleetLocationsLocationCapacity LocationCapacity = null,
    string PlayerGatewayStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#location GameliftFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.locationCapacity">LocationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | Current resource capacity settings in a specified fleet or location. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.playerGatewayStatus">PlayerGatewayStatus</a></code> | <code>string</code> | The player gateway status for the location. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#location GameliftFleet#location}.

---

##### `LocationCapacity`<sup>Optional</sup> <a name="LocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.locationCapacity"></a>

```csharp
public GameliftFleetLocationsLocationCapacity LocationCapacity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

Current resource capacity settings in a specified fleet or location.

The location value might refer to a fleet's remote location or its home Region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#location_capacity GameliftFleet#location_capacity}

---

##### `PlayerGatewayStatus`<sup>Optional</sup> <a name="PlayerGatewayStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations.property.playerGatewayStatus"></a>

```csharp
public string PlayerGatewayStatus { get; set; }
```

- *Type:* string

The player gateway status for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#player_gateway_status GameliftFleet#player_gateway_status}

---

### GameliftFleetLocationsLocationCapacity <a name="GameliftFleetLocationsLocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetLocationsLocationCapacity {
    double DesiredEc2Instances = null,
    GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration ManagedCapacityConfiguration = null,
    double MaxSize = null,
    double MinSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.desiredEc2Instances">DesiredEc2Instances</a></code> | <code>double</code> | Defaults to MinSize if not defined. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.managedCapacityConfiguration">ManagedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | Configuration options for Amazon GameLift Servers-managed capacity behavior. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.maxSize">MaxSize</a></code> | <code>double</code> | The maximum value that is allowed for the fleet's instance count for a location. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.minSize">MinSize</a></code> | <code>double</code> | The minimum value allowed for the fleet's instance count for a location. |

---

##### `DesiredEc2Instances`<sup>Optional</sup> <a name="DesiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.desiredEc2Instances"></a>

```csharp
public double DesiredEc2Instances { get; set; }
```

- *Type:* double

Defaults to MinSize if not defined.

The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#desired_ec2_instances GameliftFleet#desired_ec2_instances}

---

##### `ManagedCapacityConfiguration`<sup>Optional</sup> <a name="ManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.managedCapacityConfiguration"></a>

```csharp
public GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration ManagedCapacityConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

Configuration options for Amazon GameLift Servers-managed capacity behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#managed_capacity_configuration GameliftFleet#managed_capacity_configuration}

---

##### `MaxSize`<sup>Optional</sup> <a name="MaxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.maxSize"></a>

```csharp
public double MaxSize { get; set; }
```

- *Type:* double

The maximum value that is allowed for the fleet's instance count for a location.

When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#max_size GameliftFleet#max_size}

---

##### `MinSize`<sup>Optional</sup> <a name="MinSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity.property.minSize"></a>

```csharp
public double MinSize { get; set; }
```

- *Type:* double

The minimum value allowed for the fleet's instance count for a location.

When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#min_size GameliftFleet#min_size}

---

### GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration <a name="GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration {
    double ScaleInAfterInactivityMinutes = null,
    string ZeroCapacityStrategy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes">ScaleInAfterInactivityMinutes</a></code> | <code>double</code> | Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy">ZeroCapacityStrategy</a></code> | <code>string</code> | The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity. |

---

##### `ScaleInAfterInactivityMinutes`<sup>Optional</sup> <a name="ScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.scaleInAfterInactivityMinutes"></a>

```csharp
public double ScaleInAfterInactivityMinutes { get; set; }
```

- *Type:* double

Length of time, in minutes, that Amazon GameLift Servers will wait before scaling in your MinSize and DesiredInstances to 0 after a period with no game session activity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#scale_in_after_inactivity_minutes GameliftFleet#scale_in_after_inactivity_minutes}

---

##### `ZeroCapacityStrategy`<sup>Optional</sup> <a name="ZeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration.property.zeroCapacityStrategy"></a>

```csharp
public string ZeroCapacityStrategy { get; set; }
```

- *Type:* string

The strategy Amazon GameLift Servers will use to automatically scale your capacity to and from zero in response to game session activity.

Game session activity refers to any active running sessions or game session requests. When set to SCALE_TO_AND_FROM_ZERO, MinSize must not be specified and will be managed automatically. When set to MANUAL, MinSize is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#zero_capacity_strategy GameliftFleet#zero_capacity_strategy}

---

### GameliftFleetPlayerGatewayConfiguration <a name="GameliftFleetPlayerGatewayConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetPlayerGatewayConfiguration {
    string GameServerIpProtocolSupported = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.property.gameServerIpProtocolSupported">GameServerIpProtocolSupported</a></code> | <code>string</code> | The IP protocol supported by the game server. |

---

##### `GameServerIpProtocolSupported`<sup>Optional</sup> <a name="GameServerIpProtocolSupported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration.property.gameServerIpProtocolSupported"></a>

```csharp
public string GameServerIpProtocolSupported { get; set; }
```

- *Type:* string

The IP protocol supported by the game server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#game_server_ip_protocol_supported GameliftFleet#game_server_ip_protocol_supported}

---

### GameliftFleetResourceCreationLimitPolicy <a name="GameliftFleetResourceCreationLimitPolicy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetResourceCreationLimitPolicy {
    double NewGameSessionsPerCreator = null,
    double PolicyPeriodInMinutes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator">NewGameSessionsPerCreator</a></code> | <code>double</code> | The maximum number of game sessions that an individual can create during the policy period. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes">PolicyPeriodInMinutes</a></code> | <code>double</code> | The time span used in evaluating the resource creation limit policy. |

---

##### `NewGameSessionsPerCreator`<sup>Optional</sup> <a name="NewGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.newGameSessionsPerCreator"></a>

```csharp
public double NewGameSessionsPerCreator { get; set; }
```

- *Type:* double

The maximum number of game sessions that an individual can create during the policy period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}

---

##### `PolicyPeriodInMinutes`<sup>Optional</sup> <a name="PolicyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy.property.policyPeriodInMinutes"></a>

```csharp
public double PolicyPeriodInMinutes { get; set; }
```

- *Type:* double

The time span used in evaluating the resource creation limit policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}

---

### GameliftFleetRuntimeConfiguration <a name="GameliftFleetRuntimeConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetRuntimeConfiguration {
    double GameSessionActivationTimeoutSeconds = null,
    double MaxConcurrentGameSessionActivations = null,
    IResolvable|GameliftFleetRuntimeConfigurationServerProcesses[] ServerProcesses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds">GameSessionActivationTimeoutSeconds</a></code> | <code>double</code> | The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations">MaxConcurrentGameSessionActivations</a></code> | <code>double</code> | The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcesses">ServerProcesses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]</code> | A collection of server process configurations that describe which server processes to run on each instance in a fleet. |

---

##### `GameSessionActivationTimeoutSeconds`<sup>Optional</sup> <a name="GameSessionActivationTimeoutSeconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.gameSessionActivationTimeoutSeconds"></a>

```csharp
public double GameSessionActivationTimeoutSeconds { get; set; }
```

- *Type:* double

The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING.

If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}

---

##### `MaxConcurrentGameSessionActivations`<sup>Optional</sup> <a name="MaxConcurrentGameSessionActivations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.maxConcurrentGameSessionActivations"></a>

```csharp
public double MaxConcurrentGameSessionActivations { get; set; }
```

- *Type:* double

The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously.

This setting limits the amount of instance resources that can be used for new game activations at any one time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}

---

##### `ServerProcesses`<sup>Optional</sup> <a name="ServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration.property.serverProcesses"></a>

```csharp
public IResolvable|GameliftFleetRuntimeConfigurationServerProcesses[] ServerProcesses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]

A collection of server process configurations that describe which server processes to run on each instance in a fleet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#server_processes GameliftFleet#server_processes}

---

### GameliftFleetRuntimeConfigurationServerProcesses <a name="GameliftFleetRuntimeConfigurationServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetRuntimeConfigurationServerProcesses {
    double ConcurrentExecutions = null,
    string LaunchPath = null,
    string Parameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.concurrentExecutions">ConcurrentExecutions</a></code> | <code>double</code> | The number of server processes that use this configuration to run concurrently on an instance. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.launchPath">LaunchPath</a></code> | <code>string</code> | The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.parameters">Parameters</a></code> | <code>string</code> | An optional list of parameters to pass to the server executable or Realtime script on launch. |

---

##### `ConcurrentExecutions`<sup>Optional</sup> <a name="ConcurrentExecutions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.concurrentExecutions"></a>

```csharp
public double ConcurrentExecutions { get; set; }
```

- *Type:* double

The number of server processes that use this configuration to run concurrently on an instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#concurrent_executions GameliftFleet#concurrent_executions}

---

##### `LaunchPath`<sup>Optional</sup> <a name="LaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.launchPath"></a>

```csharp
public string LaunchPath { get; set; }
```

- *Type:* string

The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function.

Game builds and Realtime scripts are installed on instances at the root:

Windows (for custom game builds only): C:\game. Example: "C:\game\MyGame\server.exe"

Linux: /local/game. Examples: "/local/game/MyGame/server.exe" or "/local/game/MyRealtimeScript.js"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#launch_path GameliftFleet#launch_path}

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses.property.parameters"></a>

```csharp
public string Parameters { get; set; }
```

- *Type:* string

An optional list of parameters to pass to the server executable or Realtime script on launch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#parameters GameliftFleet#parameters}

---

### GameliftFleetScalingPolicies <a name="GameliftFleetScalingPolicies" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetScalingPolicies {
    string ComparisonOperator = null,
    double EvaluationPeriods = null,
    string Location = null,
    string MetricName = null,
    string Name = null,
    string PolicyType = null,
    double ScalingAdjustment = null,
    string ScalingAdjustmentType = null,
    string Status = null,
    GameliftFleetScalingPoliciesTargetConfiguration TargetConfiguration = null,
    double Threshold = null,
    string UpdateStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | Comparison operator to use when measuring a metric against the threshold value. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#location GameliftFleet#location}. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.metricName">MetricName</a></code> | <code>string</code> | Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.name">Name</a></code> | <code>string</code> | A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.policyType">PolicyType</a></code> | <code>string</code> | The type of scaling policy to create. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustment">ScalingAdjustment</a></code> | <code>double</code> | Amount of adjustment to make, based on the scaling adjustment type. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustmentType">ScalingAdjustmentType</a></code> | <code>string</code> | The type of adjustment to make to a fleet's instance count. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.status">Status</a></code> | <code>string</code> | Current status of the scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.targetConfiguration">TargetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | An object that contains settings for a target-based scaling policy. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.threshold">Threshold</a></code> | <code>double</code> | Metric value used to trigger a scaling event. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.updateStatus">UpdateStatus</a></code> | <code>string</code> | The current status of the fleet's scaling policies in a requested fleet location. |

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

Comparison operator to use when measuring a metric against the threshold value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#comparison_operator GameliftFleet#comparison_operator}

---

##### `EvaluationPeriods`<sup>Optional</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; set; }
```

- *Type:* double

Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#evaluation_periods GameliftFleet#evaluation_periods}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#location GameliftFleet#location}.

---

##### `MetricName`<sup>Optional</sup> <a name="MetricName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.metricName"></a>

```csharp
public string MetricName { get; set; }
```

- *Type:* string

Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#metric_name GameliftFleet#metric_name}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#name GameliftFleet#name}

---

##### `PolicyType`<sup>Optional</sup> <a name="PolicyType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

The type of scaling policy to create.

For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#policy_type GameliftFleet#policy_type}

---

##### `ScalingAdjustment`<sup>Optional</sup> <a name="ScalingAdjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustment"></a>

```csharp
public double ScalingAdjustment { get; set; }
```

- *Type:* double

Amount of adjustment to make, based on the scaling adjustment type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#scaling_adjustment GameliftFleet#scaling_adjustment}

---

##### `ScalingAdjustmentType`<sup>Optional</sup> <a name="ScalingAdjustmentType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.scalingAdjustmentType"></a>

```csharp
public string ScalingAdjustmentType { get; set; }
```

- *Type:* string

The type of adjustment to make to a fleet's instance count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#scaling_adjustment_type GameliftFleet#scaling_adjustment_type}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Current status of the scaling policy.

The scaling policy can be in force only when in an ACTIVE status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#status GameliftFleet#status}

---

##### `TargetConfiguration`<sup>Optional</sup> <a name="TargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.targetConfiguration"></a>

```csharp
public GameliftFleetScalingPoliciesTargetConfiguration TargetConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

An object that contains settings for a target-based scaling policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#target_configuration GameliftFleet#target_configuration}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.threshold"></a>

```csharp
public double Threshold { get; set; }
```

- *Type:* double

Metric value used to trigger a scaling event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#threshold GameliftFleet#threshold}

---

##### `UpdateStatus`<sup>Optional</sup> <a name="UpdateStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies.property.updateStatus"></a>

```csharp
public string UpdateStatus { get; set; }
```

- *Type:* string

The current status of the fleet's scaling policies in a requested fleet location.

The status PENDING_UPDATE indicates that an update was requested for the fleet but has not yet been completed for the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#update_status GameliftFleet#update_status}

---

### GameliftFleetScalingPoliciesTargetConfiguration <a name="GameliftFleetScalingPoliciesTargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetScalingPoliciesTargetConfiguration {
    double TargetValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.property.targetValue">TargetValue</a></code> | <code>double</code> | Desired value to use with a target-based scaling policy. |

---

##### `TargetValue`<sup>Optional</sup> <a name="TargetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration.property.targetValue"></a>

```csharp
public double TargetValue { get; set; }
```

- *Type:* double

Desired value to use with a target-based scaling policy.

The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#target_value GameliftFleet#target_value}

---

### GameliftFleetTags <a name="GameliftFleetTags" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#key GameliftFleet#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/gamelift_fleet#value GameliftFleet#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GameliftFleetAnywhereConfigurationOutputReference <a name="GameliftFleetAnywhereConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetAnywhereConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resetCost">ResetCost</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCost` <a name="ResetCost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.resetCost"></a>

```csharp
private void ResetCost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.costInput">CostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.cost">Cost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CostInput`<sup>Optional</sup> <a name="CostInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.costInput"></a>

```csharp
public string CostInput { get; }
```

- *Type:* string

---

##### `Cost`<sup>Required</sup> <a name="Cost" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.cost"></a>

```csharp
public string Cost { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetAnywhereConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetAnywhereConfiguration">GameliftFleetAnywhereConfiguration</a>

---


### GameliftFleetCertificateConfigurationOutputReference <a name="GameliftFleetCertificateConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetCertificateConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType">ResetCertificateType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateType` <a name="ResetCertificateType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.resetCertificateType"></a>

```csharp
private void ResetCertificateType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput">CertificateTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType">CertificateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateTypeInput`<sup>Optional</sup> <a name="CertificateTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateTypeInput"></a>

```csharp
public string CertificateTypeInput { get; }
```

- *Type:* string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.certificateType"></a>

```csharp
public string CertificateType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetCertificateConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetCertificateConfiguration">GameliftFleetCertificateConfiguration</a>

---


### GameliftFleetEc2InboundPermissionsList <a name="GameliftFleetEc2InboundPermissionsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetEc2InboundPermissionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get"></a>

```csharp
private GameliftFleetEc2InboundPermissionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsList.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetEc2InboundPermissions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>[]

---


### GameliftFleetEc2InboundPermissionsOutputReference <a name="GameliftFleetEc2InboundPermissionsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetEc2InboundPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetIpRange">ResetIpRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetFromPort"></a>

```csharp
private void ResetFromPort()
```

##### `ResetIpRange` <a name="ResetIpRange" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetIpRange"></a>

```csharp
private void ResetIpRange()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.resetToPort"></a>

```csharp
private void ResetToPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPortInput">FromPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRangeInput">IpRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPortInput">ToPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPort">FromPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRange">IpRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPort">ToPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPortInput"></a>

```csharp
public double FromPortInput { get; }
```

- *Type:* double

---

##### `IpRangeInput`<sup>Optional</sup> <a name="IpRangeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRangeInput"></a>

```csharp
public string IpRangeInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPortInput"></a>

```csharp
public double ToPortInput { get; }
```

- *Type:* double

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.fromPort"></a>

```csharp
public double FromPort { get; }
```

- *Type:* double

---

##### `IpRange`<sup>Required</sup> <a name="IpRange" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.ipRange"></a>

```csharp
public string IpRange { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.toPort"></a>

```csharp
public double ToPort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetEc2InboundPermissions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetEc2InboundPermissions">GameliftFleetEc2InboundPermissions</a>

---


### GameliftFleetLocationsList <a name="GameliftFleetLocationsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get"></a>

```csharp
private GameliftFleetLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsList.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetLocations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>[]

---


### GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference <a name="GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes">ResetScaleInAfterInactivityMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy">ResetZeroCapacityStrategy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScaleInAfterInactivityMinutes` <a name="ResetScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetScaleInAfterInactivityMinutes"></a>

```csharp
private void ResetScaleInAfterInactivityMinutes()
```

##### `ResetZeroCapacityStrategy` <a name="ResetZeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.resetZeroCapacityStrategy"></a>

```csharp
private void ResetZeroCapacityStrategy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput">ScaleInAfterInactivityMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput">ZeroCapacityStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes">ScaleInAfterInactivityMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy">ZeroCapacityStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ScaleInAfterInactivityMinutesInput`<sup>Optional</sup> <a name="ScaleInAfterInactivityMinutesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutesInput"></a>

```csharp
public double ScaleInAfterInactivityMinutesInput { get; }
```

- *Type:* double

---

##### `ZeroCapacityStrategyInput`<sup>Optional</sup> <a name="ZeroCapacityStrategyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategyInput"></a>

```csharp
public string ZeroCapacityStrategyInput { get; }
```

- *Type:* string

---

##### `ScaleInAfterInactivityMinutes`<sup>Required</sup> <a name="ScaleInAfterInactivityMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.scaleInAfterInactivityMinutes"></a>

```csharp
public double ScaleInAfterInactivityMinutes { get; }
```

- *Type:* double

---

##### `ZeroCapacityStrategy`<sup>Required</sup> <a name="ZeroCapacityStrategy" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.zeroCapacityStrategy"></a>

```csharp
public string ZeroCapacityStrategy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---


### GameliftFleetLocationsLocationCapacityOutputReference <a name="GameliftFleetLocationsLocationCapacityOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetLocationsLocationCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration">PutManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances">ResetDesiredEc2Instances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration">ResetManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMaxSize">ResetMaxSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMinSize">ResetMinSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedCapacityConfiguration` <a name="PutManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration"></a>

```csharp
private void PutManagedCapacityConfiguration(GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.putManagedCapacityConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `ResetDesiredEc2Instances` <a name="ResetDesiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetDesiredEc2Instances"></a>

```csharp
private void ResetDesiredEc2Instances()
```

##### `ResetManagedCapacityConfiguration` <a name="ResetManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetManagedCapacityConfiguration"></a>

```csharp
private void ResetManagedCapacityConfiguration()
```

##### `ResetMaxSize` <a name="ResetMaxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMaxSize"></a>

```csharp
private void ResetMaxSize()
```

##### `ResetMinSize` <a name="ResetMinSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.resetMinSize"></a>

```csharp
private void ResetMinSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration">ManagedCapacityConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput">DesiredEc2InstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput">ManagedCapacityConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSizeInput">MaxSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSizeInput">MinSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances">DesiredEc2Instances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSize">MaxSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSize">MinSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedCapacityConfiguration`<sup>Required</sup> <a name="ManagedCapacityConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfiguration"></a>

```csharp
public GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference ManagedCapacityConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference">GameliftFleetLocationsLocationCapacityManagedCapacityConfigurationOutputReference</a>

---

##### `DesiredEc2InstancesInput`<sup>Optional</sup> <a name="DesiredEc2InstancesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2InstancesInput"></a>

```csharp
public double DesiredEc2InstancesInput { get; }
```

- *Type:* double

---

##### `ManagedCapacityConfigurationInput`<sup>Optional</sup> <a name="ManagedCapacityConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.managedCapacityConfigurationInput"></a>

```csharp
public IResolvable|GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration ManagedCapacityConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration">GameliftFleetLocationsLocationCapacityManagedCapacityConfiguration</a>

---

##### `MaxSizeInput`<sup>Optional</sup> <a name="MaxSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSizeInput"></a>

```csharp
public double MaxSizeInput { get; }
```

- *Type:* double

---

##### `MinSizeInput`<sup>Optional</sup> <a name="MinSizeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSizeInput"></a>

```csharp
public double MinSizeInput { get; }
```

- *Type:* double

---

##### `DesiredEc2Instances`<sup>Required</sup> <a name="DesiredEc2Instances" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.desiredEc2Instances"></a>

```csharp
public double DesiredEc2Instances { get; }
```

- *Type:* double

---

##### `MaxSize`<sup>Required</sup> <a name="MaxSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.maxSize"></a>

```csharp
public double MaxSize { get; }
```

- *Type:* double

---

##### `MinSize`<sup>Required</sup> <a name="MinSize" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.minSize"></a>

```csharp
public double MinSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetLocationsLocationCapacity InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

---


### GameliftFleetLocationsOutputReference <a name="GameliftFleetLocationsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity">PutLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocationCapacity">ResetLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetPlayerGatewayStatus">ResetPlayerGatewayStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocationCapacity` <a name="PutLocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity"></a>

```csharp
private void PutLocationCapacity(GameliftFleetLocationsLocationCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.putLocationCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

---

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetLocationCapacity` <a name="ResetLocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetLocationCapacity"></a>

```csharp
private void ResetLocationCapacity()
```

##### `ResetPlayerGatewayStatus` <a name="ResetPlayerGatewayStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.resetPlayerGatewayStatus"></a>

```csharp
private void ResetPlayerGatewayStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacity">LocationCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference">GameliftFleetLocationsLocationCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacityInput">LocationCapacityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatusInput">PlayerGatewayStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatus">PlayerGatewayStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocationCapacity`<sup>Required</sup> <a name="LocationCapacity" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacity"></a>

```csharp
public GameliftFleetLocationsLocationCapacityOutputReference LocationCapacity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacityOutputReference">GameliftFleetLocationsLocationCapacityOutputReference</a>

---

##### `LocationCapacityInput`<sup>Optional</sup> <a name="LocationCapacityInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationCapacityInput"></a>

```csharp
public IResolvable|GameliftFleetLocationsLocationCapacity LocationCapacityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsLocationCapacity">GameliftFleetLocationsLocationCapacity</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PlayerGatewayStatusInput`<sup>Optional</sup> <a name="PlayerGatewayStatusInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatusInput"></a>

```csharp
public string PlayerGatewayStatusInput { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PlayerGatewayStatus`<sup>Required</sup> <a name="PlayerGatewayStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.playerGatewayStatus"></a>

```csharp
public string PlayerGatewayStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetLocations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetLocations">GameliftFleetLocations</a>

---


### GameliftFleetPlayerGatewayConfigurationOutputReference <a name="GameliftFleetPlayerGatewayConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetPlayerGatewayConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resetGameServerIpProtocolSupported">ResetGameServerIpProtocolSupported</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGameServerIpProtocolSupported` <a name="ResetGameServerIpProtocolSupported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.resetGameServerIpProtocolSupported"></a>

```csharp
private void ResetGameServerIpProtocolSupported()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupportedInput">GameServerIpProtocolSupportedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupported">GameServerIpProtocolSupported</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GameServerIpProtocolSupportedInput`<sup>Optional</sup> <a name="GameServerIpProtocolSupportedInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupportedInput"></a>

```csharp
public string GameServerIpProtocolSupportedInput { get; }
```

- *Type:* string

---

##### `GameServerIpProtocolSupported`<sup>Required</sup> <a name="GameServerIpProtocolSupported" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.gameServerIpProtocolSupported"></a>

```csharp
public string GameServerIpProtocolSupported { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetPlayerGatewayConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetPlayerGatewayConfiguration">GameliftFleetPlayerGatewayConfiguration</a>

---


### GameliftFleetResourceCreationLimitPolicyOutputReference <a name="GameliftFleetResourceCreationLimitPolicyOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetResourceCreationLimitPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator">ResetNewGameSessionsPerCreator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes">ResetPolicyPeriodInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNewGameSessionsPerCreator` <a name="ResetNewGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetNewGameSessionsPerCreator"></a>

```csharp
private void ResetNewGameSessionsPerCreator()
```

##### `ResetPolicyPeriodInMinutes` <a name="ResetPolicyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.resetPolicyPeriodInMinutes"></a>

```csharp
private void ResetPolicyPeriodInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput">NewGameSessionsPerCreatorInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput">PolicyPeriodInMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator">NewGameSessionsPerCreator</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes">PolicyPeriodInMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NewGameSessionsPerCreatorInput`<sup>Optional</sup> <a name="NewGameSessionsPerCreatorInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreatorInput"></a>

```csharp
public double NewGameSessionsPerCreatorInput { get; }
```

- *Type:* double

---

##### `PolicyPeriodInMinutesInput`<sup>Optional</sup> <a name="PolicyPeriodInMinutesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutesInput"></a>

```csharp
public double PolicyPeriodInMinutesInput { get; }
```

- *Type:* double

---

##### `NewGameSessionsPerCreator`<sup>Required</sup> <a name="NewGameSessionsPerCreator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.newGameSessionsPerCreator"></a>

```csharp
public double NewGameSessionsPerCreator { get; }
```

- *Type:* double

---

##### `PolicyPeriodInMinutes`<sup>Required</sup> <a name="PolicyPeriodInMinutes" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.policyPeriodInMinutes"></a>

```csharp
public double PolicyPeriodInMinutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetResourceCreationLimitPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetResourceCreationLimitPolicy">GameliftFleetResourceCreationLimitPolicy</a>

---


### GameliftFleetRuntimeConfigurationOutputReference <a name="GameliftFleetRuntimeConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetRuntimeConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses">PutServerProcesses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds">ResetGameSessionActivationTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations">ResetMaxConcurrentGameSessionActivations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcesses">ResetServerProcesses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServerProcesses` <a name="PutServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses"></a>

```csharp
private void PutServerProcesses(IResolvable|GameliftFleetRuntimeConfigurationServerProcesses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.putServerProcesses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]

---

##### `ResetGameSessionActivationTimeoutSeconds` <a name="ResetGameSessionActivationTimeoutSeconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetGameSessionActivationTimeoutSeconds"></a>

```csharp
private void ResetGameSessionActivationTimeoutSeconds()
```

##### `ResetMaxConcurrentGameSessionActivations` <a name="ResetMaxConcurrentGameSessionActivations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetMaxConcurrentGameSessionActivations"></a>

```csharp
private void ResetMaxConcurrentGameSessionActivations()
```

##### `ResetServerProcesses` <a name="ResetServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.resetServerProcesses"></a>

```csharp
private void ResetServerProcesses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcesses">ServerProcesses</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList">GameliftFleetRuntimeConfigurationServerProcessesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput">GameSessionActivationTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput">MaxConcurrentGameSessionActivationsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessesInput">ServerProcessesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds">GameSessionActivationTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations">MaxConcurrentGameSessionActivations</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServerProcesses`<sup>Required</sup> <a name="ServerProcesses" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcesses"></a>

```csharp
public GameliftFleetRuntimeConfigurationServerProcessesList ServerProcesses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList">GameliftFleetRuntimeConfigurationServerProcessesList</a>

---

##### `GameSessionActivationTimeoutSecondsInput`<sup>Optional</sup> <a name="GameSessionActivationTimeoutSecondsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSecondsInput"></a>

```csharp
public double GameSessionActivationTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `MaxConcurrentGameSessionActivationsInput`<sup>Optional</sup> <a name="MaxConcurrentGameSessionActivationsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivationsInput"></a>

```csharp
public double MaxConcurrentGameSessionActivationsInput { get; }
```

- *Type:* double

---

##### `ServerProcessesInput`<sup>Optional</sup> <a name="ServerProcessesInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.serverProcessesInput"></a>

```csharp
public IResolvable|GameliftFleetRuntimeConfigurationServerProcesses[] ServerProcessesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]

---

##### `GameSessionActivationTimeoutSeconds`<sup>Required</sup> <a name="GameSessionActivationTimeoutSeconds" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.gameSessionActivationTimeoutSeconds"></a>

```csharp
public double GameSessionActivationTimeoutSeconds { get; }
```

- *Type:* double

---

##### `MaxConcurrentGameSessionActivations`<sup>Required</sup> <a name="MaxConcurrentGameSessionActivations" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.maxConcurrentGameSessionActivations"></a>

```csharp
public double MaxConcurrentGameSessionActivations { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetRuntimeConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfiguration">GameliftFleetRuntimeConfiguration</a>

---


### GameliftFleetRuntimeConfigurationServerProcessesList <a name="GameliftFleetRuntimeConfigurationServerProcessesList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetRuntimeConfigurationServerProcessesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get"></a>

```csharp
private GameliftFleetRuntimeConfigurationServerProcessesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesList.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetRuntimeConfigurationServerProcesses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>[]

---


### GameliftFleetRuntimeConfigurationServerProcessesOutputReference <a name="GameliftFleetRuntimeConfigurationServerProcessesOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetRuntimeConfigurationServerProcessesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetConcurrentExecutions">ResetConcurrentExecutions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetLaunchPath">ResetLaunchPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConcurrentExecutions` <a name="ResetConcurrentExecutions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetConcurrentExecutions"></a>

```csharp
private void ResetConcurrentExecutions()
```

##### `ResetLaunchPath` <a name="ResetLaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetLaunchPath"></a>

```csharp
private void ResetLaunchPath()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.resetParameters"></a>

```csharp
private void ResetParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutionsInput">ConcurrentExecutionsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPathInput">LaunchPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parametersInput">ParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutions">ConcurrentExecutions</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPath">LaunchPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parameters">Parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConcurrentExecutionsInput`<sup>Optional</sup> <a name="ConcurrentExecutionsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutionsInput"></a>

```csharp
public double ConcurrentExecutionsInput { get; }
```

- *Type:* double

---

##### `LaunchPathInput`<sup>Optional</sup> <a name="LaunchPathInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPathInput"></a>

```csharp
public string LaunchPathInput { get; }
```

- *Type:* string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parametersInput"></a>

```csharp
public string ParametersInput { get; }
```

- *Type:* string

---

##### `ConcurrentExecutions`<sup>Required</sup> <a name="ConcurrentExecutions" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.concurrentExecutions"></a>

```csharp
public double ConcurrentExecutions { get; }
```

- *Type:* double

---

##### `LaunchPath`<sup>Required</sup> <a name="LaunchPath" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.launchPath"></a>

```csharp
public string LaunchPath { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.parameters"></a>

```csharp
public string Parameters { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcessesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetRuntimeConfigurationServerProcesses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetRuntimeConfigurationServerProcesses">GameliftFleetRuntimeConfigurationServerProcesses</a>

---


### GameliftFleetScalingPoliciesList <a name="GameliftFleetScalingPoliciesList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetScalingPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get"></a>

```csharp
private GameliftFleetScalingPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesList.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetScalingPolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>[]

---


### GameliftFleetScalingPoliciesOutputReference <a name="GameliftFleetScalingPoliciesOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetScalingPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration">PutTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetEvaluationPeriods">ResetEvaluationPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetMetricName">ResetMetricName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetPolicyType">ResetPolicyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustment">ResetScalingAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustmentType">ResetScalingAdjustmentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetTargetConfiguration">ResetTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetUpdateStatus">ResetUpdateStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetConfiguration` <a name="PutTargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration"></a>

```csharp
private void PutTargetConfiguration(GameliftFleetScalingPoliciesTargetConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.putTargetConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

---

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetComparisonOperator"></a>

```csharp
private void ResetComparisonOperator()
```

##### `ResetEvaluationPeriods` <a name="ResetEvaluationPeriods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetEvaluationPeriods"></a>

```csharp
private void ResetEvaluationPeriods()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetMetricName` <a name="ResetMetricName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetMetricName"></a>

```csharp
private void ResetMetricName()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetPolicyType` <a name="ResetPolicyType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetPolicyType"></a>

```csharp
private void ResetPolicyType()
```

##### `ResetScalingAdjustment` <a name="ResetScalingAdjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustment"></a>

```csharp
private void ResetScalingAdjustment()
```

##### `ResetScalingAdjustmentType` <a name="ResetScalingAdjustmentType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetScalingAdjustmentType"></a>

```csharp
private void ResetScalingAdjustmentType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTargetConfiguration` <a name="ResetTargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetTargetConfiguration"></a>

```csharp
private void ResetTargetConfiguration()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```

##### `ResetUpdateStatus` <a name="ResetUpdateStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.resetUpdateStatus"></a>

```csharp
private void ResetUpdateStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfiguration">TargetConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference">GameliftFleetScalingPoliciesTargetConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput">EvaluationPeriodsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricNameInput">MetricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput">ScalingAdjustmentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput">ScalingAdjustmentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfigurationInput">TargetConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatusInput">UpdateStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriods">EvaluationPeriods</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricName">MetricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustment">ScalingAdjustment</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentType">ScalingAdjustmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.threshold">Threshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatus">UpdateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetConfiguration`<sup>Required</sup> <a name="TargetConfiguration" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfiguration"></a>

```csharp
public GameliftFleetScalingPoliciesTargetConfigurationOutputReference TargetConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference">GameliftFleetScalingPoliciesTargetConfigurationOutputReference</a>

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `EvaluationPeriodsInput`<sup>Optional</sup> <a name="EvaluationPeriodsInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriodsInput"></a>

```csharp
public double EvaluationPeriodsInput { get; }
```

- *Type:* double

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetricNameInput`<sup>Optional</sup> <a name="MetricNameInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricNameInput"></a>

```csharp
public string MetricNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `ScalingAdjustmentInput`<sup>Optional</sup> <a name="ScalingAdjustmentInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentInput"></a>

```csharp
public double ScalingAdjustmentInput { get; }
```

- *Type:* double

---

##### `ScalingAdjustmentTypeInput`<sup>Optional</sup> <a name="ScalingAdjustmentTypeInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentTypeInput"></a>

```csharp
public string ScalingAdjustmentTypeInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TargetConfigurationInput`<sup>Optional</sup> <a name="TargetConfigurationInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.targetConfigurationInput"></a>

```csharp
public IResolvable|GameliftFleetScalingPoliciesTargetConfiguration TargetConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.thresholdInput"></a>

```csharp
public double ThresholdInput { get; }
```

- *Type:* double

---

##### `UpdateStatusInput`<sup>Optional</sup> <a name="UpdateStatusInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatusInput"></a>

```csharp
public string UpdateStatusInput { get; }
```

- *Type:* string

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `EvaluationPeriods`<sup>Required</sup> <a name="EvaluationPeriods" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.evaluationPeriods"></a>

```csharp
public double EvaluationPeriods { get; }
```

- *Type:* double

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MetricName`<sup>Required</sup> <a name="MetricName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.metricName"></a>

```csharp
public string MetricName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `ScalingAdjustment`<sup>Required</sup> <a name="ScalingAdjustment" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustment"></a>

```csharp
public double ScalingAdjustment { get; }
```

- *Type:* double

---

##### `ScalingAdjustmentType`<sup>Required</sup> <a name="ScalingAdjustmentType" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.scalingAdjustmentType"></a>

```csharp
public string ScalingAdjustmentType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.threshold"></a>

```csharp
public double Threshold { get; }
```

- *Type:* double

---

##### `UpdateStatus`<sup>Required</sup> <a name="UpdateStatus" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.updateStatus"></a>

```csharp
public string UpdateStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetScalingPolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPolicies">GameliftFleetScalingPolicies</a>

---


### GameliftFleetScalingPoliciesTargetConfigurationOutputReference <a name="GameliftFleetScalingPoliciesTargetConfigurationOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetScalingPoliciesTargetConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue">ResetTargetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetValue` <a name="ResetTargetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.resetTargetValue"></a>

```csharp
private void ResetTargetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput">TargetValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue">TargetValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetValueInput`<sup>Optional</sup> <a name="TargetValueInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValueInput"></a>

```csharp
public double TargetValueInput { get; }
```

- *Type:* double

---

##### `TargetValue`<sup>Required</sup> <a name="TargetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.targetValue"></a>

```csharp
public double TargetValue { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetScalingPoliciesTargetConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetScalingPoliciesTargetConfiguration">GameliftFleetScalingPoliciesTargetConfiguration</a>

---


### GameliftFleetTagsList <a name="GameliftFleetTagsList" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get"></a>

```csharp
private GameliftFleetTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsList.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>[]

---


### GameliftFleetTagsOutputReference <a name="GameliftFleetTagsOutputReference" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new GameliftFleetTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.gameliftFleet.GameliftFleetTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GameliftFleetTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.gameliftFleet.GameliftFleetTags">GameliftFleetTags</a>

---



