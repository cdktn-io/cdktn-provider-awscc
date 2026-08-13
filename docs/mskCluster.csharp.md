# `mskCluster` Submodule <a name="`mskCluster` Submodule" id="@cdktn/provider-awscc.mskCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskCluster <a name="MskCluster" id="@cdktn/provider-awscc.mskCluster.MskCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster awscc_msk_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskCluster(Construct Scope, string Id, MskClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig">MskClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig">MskClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putBrokerNodeGroupInfo">PutBrokerNodeGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putClientAuthentication">PutClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putConfigurationInfo">PutConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putEncryptionInfo">PutEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putLoggingInfo">PutLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putOpenMonitoring">PutOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putRebalancing">PutRebalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putZookeeperAccess">PutZookeeperAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetClientAuthentication">ResetClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetConfigurationInfo">ResetConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetEncryptionInfo">ResetEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetEnhancedMonitoring">ResetEnhancedMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetLoggingInfo">ResetLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetOpenMonitoring">ResetOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetRebalancing">ResetRebalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetStorageMode">ResetStorageMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetZookeeperAccess">ResetZookeeperAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mskCluster.MskCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mskCluster.MskCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mskCluster.MskCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mskCluster.MskCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mskCluster.MskCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mskCluster.MskCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mskCluster.MskCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mskCluster.MskCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mskCluster.MskCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mskCluster.MskCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mskCluster.MskCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mskCluster.MskCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mskCluster.MskCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mskCluster.MskCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mskCluster.MskCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBrokerNodeGroupInfo` <a name="PutBrokerNodeGroupInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.putBrokerNodeGroupInfo"></a>

```csharp
private void PutBrokerNodeGroupInfo(MskClusterBrokerNodeGroupInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putBrokerNodeGroupInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---

##### `PutClientAuthentication` <a name="PutClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskCluster.putClientAuthentication"></a>

```csharp
private void PutClientAuthentication(MskClusterClientAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---

##### `PutConfigurationInfo` <a name="PutConfigurationInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.putConfigurationInfo"></a>

```csharp
private void PutConfigurationInfo(MskClusterConfigurationInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putConfigurationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---

##### `PutEncryptionInfo` <a name="PutEncryptionInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.putEncryptionInfo"></a>

```csharp
private void PutEncryptionInfo(MskClusterEncryptionInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putEncryptionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---

##### `PutLoggingInfo` <a name="PutLoggingInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.putLoggingInfo"></a>

```csharp
private void PutLoggingInfo(MskClusterLoggingInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putLoggingInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---

##### `PutOpenMonitoring` <a name="PutOpenMonitoring" id="@cdktn/provider-awscc.mskCluster.MskCluster.putOpenMonitoring"></a>

```csharp
private void PutOpenMonitoring(MskClusterOpenMonitoring Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putOpenMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---

##### `PutRebalancing` <a name="PutRebalancing" id="@cdktn/provider-awscc.mskCluster.MskCluster.putRebalancing"></a>

```csharp
private void PutRebalancing(MskClusterRebalancing Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putRebalancing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a>

---

##### `PutZookeeperAccess` <a name="PutZookeeperAccess" id="@cdktn/provider-awscc.mskCluster.MskCluster.putZookeeperAccess"></a>

```csharp
private void PutZookeeperAccess(MskClusterZookeeperAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putZookeeperAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a>

---

##### `ResetClientAuthentication` <a name="ResetClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetClientAuthentication"></a>

```csharp
private void ResetClientAuthentication()
```

##### `ResetConfigurationInfo` <a name="ResetConfigurationInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetConfigurationInfo"></a>

```csharp
private void ResetConfigurationInfo()
```

##### `ResetEncryptionInfo` <a name="ResetEncryptionInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetEncryptionInfo"></a>

```csharp
private void ResetEncryptionInfo()
```

##### `ResetEnhancedMonitoring` <a name="ResetEnhancedMonitoring" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetEnhancedMonitoring"></a>

```csharp
private void ResetEnhancedMonitoring()
```

##### `ResetLoggingInfo` <a name="ResetLoggingInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetLoggingInfo"></a>

```csharp
private void ResetLoggingInfo()
```

##### `ResetOpenMonitoring` <a name="ResetOpenMonitoring" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetOpenMonitoring"></a>

```csharp
private void ResetOpenMonitoring()
```

##### `ResetRebalancing` <a name="ResetRebalancing" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetRebalancing"></a>

```csharp
private void ResetRebalancing()
```

##### `ResetStorageMode` <a name="ResetStorageMode" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetStorageMode"></a>

```csharp
private void ResetStorageMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetZookeeperAccess` <a name="ResetZookeeperAccess" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetZookeeperAccess"></a>

```csharp
private void ResetZookeeperAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MskCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mskCluster.MskCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MskCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mskCluster.MskCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MskCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MskCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MskCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MskCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MskCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MskCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MskCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.brokerNodeGroupInfo">BrokerNodeGroupInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference">MskClusterBrokerNodeGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference">MskClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.configurationInfo">ConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference">MskClusterConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.currentVersion">CurrentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.encryptionInfo">EncryptionInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference">MskClusterEncryptionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.loggingInfo">LoggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference">MskClusterLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.openMonitoring">OpenMonitoring</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference">MskClusterOpenMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.rebalancing">Rebalancing</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference">MskClusterRebalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.zookeeperAccess">ZookeeperAccess</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference">MskClusterZookeeperAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.brokerNodeGroupInfoInput">BrokerNodeGroupInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.clientAuthenticationInput">ClientAuthenticationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.configurationInfoInput">ConfigurationInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.encryptionInfoInput">EncryptionInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.enhancedMonitoringInput">EnhancedMonitoringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.kafkaVersionInput">KafkaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.loggingInfoInput">LoggingInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.numberOfBrokerNodesInput">NumberOfBrokerNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.openMonitoringInput">OpenMonitoringInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.rebalancingInput">RebalancingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.storageModeInput">StorageModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.zookeeperAccessInput">ZookeeperAccessInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.enhancedMonitoring">EnhancedMonitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.kafkaVersion">KafkaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.numberOfBrokerNodes">NumberOfBrokerNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.storageMode">StorageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BrokerNodeGroupInfo`<sup>Required</sup> <a name="BrokerNodeGroupInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.brokerNodeGroupInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoOutputReference BrokerNodeGroupInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference">MskClusterBrokerNodeGroupInfoOutputReference</a>

---

##### `ClientAuthentication`<sup>Required</sup> <a name="ClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.clientAuthentication"></a>

```csharp
public MskClusterClientAuthenticationOutputReference ClientAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference">MskClusterClientAuthenticationOutputReference</a>

---

##### `ConfigurationInfo`<sup>Required</sup> <a name="ConfigurationInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.configurationInfo"></a>

```csharp
public MskClusterConfigurationInfoOutputReference ConfigurationInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference">MskClusterConfigurationInfoOutputReference</a>

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.currentVersion"></a>

```csharp
public string CurrentVersion { get; }
```

- *Type:* string

---

##### `EncryptionInfo`<sup>Required</sup> <a name="EncryptionInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.encryptionInfo"></a>

```csharp
public MskClusterEncryptionInfoOutputReference EncryptionInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference">MskClusterEncryptionInfoOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoggingInfo`<sup>Required</sup> <a name="LoggingInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.loggingInfo"></a>

```csharp
public MskClusterLoggingInfoOutputReference LoggingInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference">MskClusterLoggingInfoOutputReference</a>

---

##### `OpenMonitoring`<sup>Required</sup> <a name="OpenMonitoring" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.openMonitoring"></a>

```csharp
public MskClusterOpenMonitoringOutputReference OpenMonitoring { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference">MskClusterOpenMonitoringOutputReference</a>

---

##### `Rebalancing`<sup>Required</sup> <a name="Rebalancing" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.rebalancing"></a>

```csharp
public MskClusterRebalancingOutputReference Rebalancing { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference">MskClusterRebalancingOutputReference</a>

---

##### `ZookeeperAccess`<sup>Required</sup> <a name="ZookeeperAccess" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.zookeeperAccess"></a>

```csharp
public MskClusterZookeeperAccessOutputReference ZookeeperAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference">MskClusterZookeeperAccessOutputReference</a>

---

##### `BrokerNodeGroupInfoInput`<sup>Optional</sup> <a name="BrokerNodeGroupInfoInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.brokerNodeGroupInfoInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfo BrokerNodeGroupInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---

##### `ClientAuthenticationInput`<sup>Optional</sup> <a name="ClientAuthenticationInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.clientAuthenticationInput"></a>

```csharp
public IResolvable|MskClusterClientAuthentication ClientAuthenticationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `ConfigurationInfoInput`<sup>Optional</sup> <a name="ConfigurationInfoInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.configurationInfoInput"></a>

```csharp
public IResolvable|MskClusterConfigurationInfo ConfigurationInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---

##### `EncryptionInfoInput`<sup>Optional</sup> <a name="EncryptionInfoInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.encryptionInfoInput"></a>

```csharp
public IResolvable|MskClusterEncryptionInfo EncryptionInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---

##### `EnhancedMonitoringInput`<sup>Optional</sup> <a name="EnhancedMonitoringInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.enhancedMonitoringInput"></a>

```csharp
public string EnhancedMonitoringInput { get; }
```

- *Type:* string

---

##### `KafkaVersionInput`<sup>Optional</sup> <a name="KafkaVersionInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.kafkaVersionInput"></a>

```csharp
public string KafkaVersionInput { get; }
```

- *Type:* string

---

##### `LoggingInfoInput`<sup>Optional</sup> <a name="LoggingInfoInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.loggingInfoInput"></a>

```csharp
public IResolvable|MskClusterLoggingInfo LoggingInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---

##### `NumberOfBrokerNodesInput`<sup>Optional</sup> <a name="NumberOfBrokerNodesInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.numberOfBrokerNodesInput"></a>

```csharp
public double NumberOfBrokerNodesInput { get; }
```

- *Type:* double

---

##### `OpenMonitoringInput`<sup>Optional</sup> <a name="OpenMonitoringInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.openMonitoringInput"></a>

```csharp
public IResolvable|MskClusterOpenMonitoring OpenMonitoringInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---

##### `RebalancingInput`<sup>Optional</sup> <a name="RebalancingInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.rebalancingInput"></a>

```csharp
public IResolvable|MskClusterRebalancing RebalancingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a>

---

##### `StorageModeInput`<sup>Optional</sup> <a name="StorageModeInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.storageModeInput"></a>

```csharp
public string StorageModeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ZookeeperAccessInput`<sup>Optional</sup> <a name="ZookeeperAccessInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.zookeeperAccessInput"></a>

```csharp
public IResolvable|MskClusterZookeeperAccess ZookeeperAccessInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a>

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `EnhancedMonitoring`<sup>Required</sup> <a name="EnhancedMonitoring" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.enhancedMonitoring"></a>

```csharp
public string EnhancedMonitoring { get; }
```

- *Type:* string

---

##### `KafkaVersion`<sup>Required</sup> <a name="KafkaVersion" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.kafkaVersion"></a>

```csharp
public string KafkaVersion { get; }
```

- *Type:* string

---

##### `NumberOfBrokerNodes`<sup>Required</sup> <a name="NumberOfBrokerNodes" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.numberOfBrokerNodes"></a>

```csharp
public double NumberOfBrokerNodes { get; }
```

- *Type:* double

---

##### `StorageMode`<sup>Required</sup> <a name="StorageMode" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.storageMode"></a>

```csharp
public string StorageMode { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskClusterBrokerNodeGroupInfo <a name="MskClusterBrokerNodeGroupInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfo {
    string[] ClientSubnets,
    string InstanceType,
    string BrokerAzDistribution = null,
    MskClusterBrokerNodeGroupInfoConnectivityInfo ConnectivityInfo = null,
    string[] SecurityGroups = null,
    MskClusterBrokerNodeGroupInfoStorageInfo StorageInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.clientSubnets">ClientSubnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#client_subnets MskCluster#client_subnets}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#instance_type MskCluster#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.brokerAzDistribution">BrokerAzDistribution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#broker_az_distribution MskCluster#broker_az_distribution}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.connectivityInfo">ConnectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#connectivity_info MskCluster#connectivity_info}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#security_groups MskCluster#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.storageInfo">StorageInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#storage_info MskCluster#storage_info}. |

---

##### `ClientSubnets`<sup>Required</sup> <a name="ClientSubnets" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.clientSubnets"></a>

```csharp
public string[] ClientSubnets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#client_subnets MskCluster#client_subnets}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#instance_type MskCluster#instance_type}.

---

##### `BrokerAzDistribution`<sup>Optional</sup> <a name="BrokerAzDistribution" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.brokerAzDistribution"></a>

```csharp
public string BrokerAzDistribution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#broker_az_distribution MskCluster#broker_az_distribution}.

---

##### `ConnectivityInfo`<sup>Optional</sup> <a name="ConnectivityInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.connectivityInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfo ConnectivityInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#connectivity_info MskCluster#connectivity_info}.

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#security_groups MskCluster#security_groups}.

---

##### `StorageInfo`<sup>Optional</sup> <a name="StorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.storageInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfo StorageInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#storage_info MskCluster#storage_info}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfo <a name="MskClusterBrokerNodeGroupInfoConnectivityInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfo {
    string NetworkType = null,
    MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess PublicAccess = null,
    MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity VpcConnectivity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.networkType">NetworkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#network_type MskCluster#network_type}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.publicAccess">PublicAccess</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#public_access MskCluster#public_access}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.vpcConnectivity">VpcConnectivity</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#vpc_connectivity MskCluster#vpc_connectivity}. |

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#network_type MskCluster#network_type}.

---

##### `PublicAccess`<sup>Optional</sup> <a name="PublicAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.publicAccess"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess PublicAccess { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#public_access MskCluster#public_access}.

---

##### `VpcConnectivity`<sup>Optional</sup> <a name="VpcConnectivity" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.vpcConnectivity"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity VpcConnectivity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#vpc_connectivity MskCluster#vpc_connectivity}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess {
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#type MskCluster#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#type MskCluster#type}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity {
    MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication ClientAuthentication = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}. |

---

##### `ClientAuthentication`<sup>Optional</sup> <a name="ClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity.property.clientAuthentication"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication ClientAuthentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication {
    MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl Sasl = null,
    MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls Tls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.property.sasl">Sasl</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#sasl MskCluster#sasl}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.property.tls">Tls</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#tls MskCluster#tls}. |

---

##### `Sasl`<sup>Optional</sup> <a name="Sasl" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.property.sasl"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl Sasl { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#sasl MskCluster#sasl}.

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.property.tls"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls Tls { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#tls MskCluster#tls}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl {
    MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam Iam = null,
    MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram Scram = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.property.iam">Iam</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#iam MskCluster#iam}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.property.scram">Scram</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#scram MskCluster#scram}. |

---

##### `Iam`<sup>Optional</sup> <a name="Iam" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.property.iam"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam Iam { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#iam MskCluster#iam}.

---

##### `Scram`<sup>Optional</sup> <a name="Scram" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.property.scram"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram Scram { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#scram MskCluster#scram}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterBrokerNodeGroupInfoStorageInfo <a name="MskClusterBrokerNodeGroupInfoStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoStorageInfo {
    MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo EbsStorageInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.property.ebsStorageInfo">EbsStorageInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#ebs_storage_info MskCluster#ebs_storage_info}. |

---

##### `EbsStorageInfo`<sup>Optional</sup> <a name="EbsStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.property.ebsStorageInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo EbsStorageInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#ebs_storage_info MskCluster#ebs_storage_info}.

---

### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo {
    MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput ProvisionedThroughput = null,
    double VolumeSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#provisioned_throughput MskCluster#provisioned_throughput}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.volumeSize">VolumeSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#volume_size MskCluster#volume_size}. |

---

##### `ProvisionedThroughput`<sup>Optional</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.provisionedThroughput"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput ProvisionedThroughput { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#provisioned_throughput MskCluster#provisioned_throughput}.

---

##### `VolumeSize`<sup>Optional</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.volumeSize"></a>

```csharp
public double VolumeSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#volume_size MskCluster#volume_size}.

---

### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput {
    bool|IResolvable Enabled = null,
    double VolumeThroughput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.volumeThroughput">VolumeThroughput</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#volume_throughput MskCluster#volume_throughput}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

##### `VolumeThroughput`<sup>Optional</sup> <a name="VolumeThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.volumeThroughput"></a>

```csharp
public double VolumeThroughput { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#volume_throughput MskCluster#volume_throughput}.

---

### MskClusterClientAuthentication <a name="MskClusterClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthentication {
    MskClusterClientAuthenticationSasl Sasl = null,
    MskClusterClientAuthenticationTls Tls = null,
    MskClusterClientAuthenticationUnauthenticated Unauthenticated = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.sasl">Sasl</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#sasl MskCluster#sasl}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.tls">Tls</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#tls MskCluster#tls}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.unauthenticated">Unauthenticated</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#unauthenticated MskCluster#unauthenticated}. |

---

##### `Sasl`<sup>Optional</sup> <a name="Sasl" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.sasl"></a>

```csharp
public MskClusterClientAuthenticationSasl Sasl { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#sasl MskCluster#sasl}.

---

##### `Tls`<sup>Optional</sup> <a name="Tls" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.tls"></a>

```csharp
public MskClusterClientAuthenticationTls Tls { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#tls MskCluster#tls}.

---

##### `Unauthenticated`<sup>Optional</sup> <a name="Unauthenticated" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.unauthenticated"></a>

```csharp
public MskClusterClientAuthenticationUnauthenticated Unauthenticated { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#unauthenticated MskCluster#unauthenticated}.

---

### MskClusterClientAuthenticationSasl <a name="MskClusterClientAuthenticationSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthenticationSasl {
    MskClusterClientAuthenticationSaslIam Iam = null,
    MskClusterClientAuthenticationSaslScram Scram = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl.property.iam">Iam</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#iam MskCluster#iam}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl.property.scram">Scram</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#scram MskCluster#scram}. |

---

##### `Iam`<sup>Optional</sup> <a name="Iam" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl.property.iam"></a>

```csharp
public MskClusterClientAuthenticationSaslIam Iam { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#iam MskCluster#iam}.

---

##### `Scram`<sup>Optional</sup> <a name="Scram" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl.property.scram"></a>

```csharp
public MskClusterClientAuthenticationSaslScram Scram { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#scram MskCluster#scram}.

---

### MskClusterClientAuthenticationSaslIam <a name="MskClusterClientAuthenticationSaslIam" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthenticationSaslIam {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterClientAuthenticationSaslScram <a name="MskClusterClientAuthenticationSaslScram" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthenticationSaslScram {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterClientAuthenticationTls <a name="MskClusterClientAuthenticationTls" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthenticationTls {
    string[] CertificateAuthorityArnList = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls.property.certificateAuthorityArnList">CertificateAuthorityArnList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#certificate_authority_arn_list MskCluster#certificate_authority_arn_list}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `CertificateAuthorityArnList`<sup>Optional</sup> <a name="CertificateAuthorityArnList" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls.property.certificateAuthorityArnList"></a>

```csharp
public string[] CertificateAuthorityArnList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#certificate_authority_arn_list MskCluster#certificate_authority_arn_list}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterClientAuthenticationUnauthenticated <a name="MskClusterClientAuthenticationUnauthenticated" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthenticationUnauthenticated {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterConfig <a name="MskClusterConfig" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    MskClusterBrokerNodeGroupInfo BrokerNodeGroupInfo,
    string ClusterName,
    string KafkaVersion,
    double NumberOfBrokerNodes,
    MskClusterClientAuthentication ClientAuthentication = null,
    MskClusterConfigurationInfo ConfigurationInfo = null,
    MskClusterEncryptionInfo EncryptionInfo = null,
    string EnhancedMonitoring = null,
    MskClusterLoggingInfo LoggingInfo = null,
    MskClusterOpenMonitoring OpenMonitoring = null,
    MskClusterRebalancing Rebalancing = null,
    string StorageMode = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    MskClusterZookeeperAccess ZookeeperAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.brokerNodeGroupInfo">BrokerNodeGroupInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#broker_node_group_info MskCluster#broker_node_group_info}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#cluster_name MskCluster#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.kafkaVersion">KafkaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#kafka_version MskCluster#kafka_version}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.numberOfBrokerNodes">NumberOfBrokerNodes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.configurationInfo">ConfigurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#configuration_info MskCluster#configuration_info}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.encryptionInfo">EncryptionInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#encryption_info MskCluster#encryption_info}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.enhancedMonitoring">EnhancedMonitoring</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.loggingInfo">LoggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#logging_info MskCluster#logging_info}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.openMonitoring">OpenMonitoring</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#open_monitoring MskCluster#open_monitoring}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.rebalancing">Rebalancing</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#rebalancing MskCluster#rebalancing}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.storageMode">StorageMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#storage_mode MskCluster#storage_mode}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.zookeeperAccess">ZookeeperAccess</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#zookeeper_access MskCluster#zookeeper_access}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BrokerNodeGroupInfo`<sup>Required</sup> <a name="BrokerNodeGroupInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.brokerNodeGroupInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfo BrokerNodeGroupInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#broker_node_group_info MskCluster#broker_node_group_info}.

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#cluster_name MskCluster#cluster_name}.

---

##### `KafkaVersion`<sup>Required</sup> <a name="KafkaVersion" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.kafkaVersion"></a>

```csharp
public string KafkaVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#kafka_version MskCluster#kafka_version}.

---

##### `NumberOfBrokerNodes`<sup>Required</sup> <a name="NumberOfBrokerNodes" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.numberOfBrokerNodes"></a>

```csharp
public double NumberOfBrokerNodes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}.

---

##### `ClientAuthentication`<sup>Optional</sup> <a name="ClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.clientAuthentication"></a>

```csharp
public MskClusterClientAuthentication ClientAuthentication { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}.

---

##### `ConfigurationInfo`<sup>Optional</sup> <a name="ConfigurationInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.configurationInfo"></a>

```csharp
public MskClusterConfigurationInfo ConfigurationInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#configuration_info MskCluster#configuration_info}.

---

##### `EncryptionInfo`<sup>Optional</sup> <a name="EncryptionInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.encryptionInfo"></a>

```csharp
public MskClusterEncryptionInfo EncryptionInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#encryption_info MskCluster#encryption_info}.

---

##### `EnhancedMonitoring`<sup>Optional</sup> <a name="EnhancedMonitoring" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.enhancedMonitoring"></a>

```csharp
public string EnhancedMonitoring { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}.

---

##### `LoggingInfo`<sup>Optional</sup> <a name="LoggingInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.loggingInfo"></a>

```csharp
public MskClusterLoggingInfo LoggingInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#logging_info MskCluster#logging_info}.

---

##### `OpenMonitoring`<sup>Optional</sup> <a name="OpenMonitoring" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.openMonitoring"></a>

```csharp
public MskClusterOpenMonitoring OpenMonitoring { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#open_monitoring MskCluster#open_monitoring}.

---

##### `Rebalancing`<sup>Optional</sup> <a name="Rebalancing" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.rebalancing"></a>

```csharp
public MskClusterRebalancing Rebalancing { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#rebalancing MskCluster#rebalancing}.

---

##### `StorageMode`<sup>Optional</sup> <a name="StorageMode" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.storageMode"></a>

```csharp
public string StorageMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#storage_mode MskCluster#storage_mode}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#tags MskCluster#tags}

---

##### `ZookeeperAccess`<sup>Optional</sup> <a name="ZookeeperAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.zookeeperAccess"></a>

```csharp
public MskClusterZookeeperAccess ZookeeperAccess { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#zookeeper_access MskCluster#zookeeper_access}.

---

### MskClusterConfigurationInfo <a name="MskClusterConfigurationInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterConfigurationInfo {
    string Arn = null,
    double Revision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo.property.arn">Arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#arn MskCluster#arn}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo.property.revision">Revision</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#revision MskCluster#revision}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo.property.arn"></a>

```csharp
public string Arn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#arn MskCluster#arn}.

---

##### `Revision`<sup>Optional</sup> <a name="Revision" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo.property.revision"></a>

```csharp
public double Revision { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#revision MskCluster#revision}.

---

### MskClusterEncryptionInfo <a name="MskClusterEncryptionInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterEncryptionInfo {
    MskClusterEncryptionInfoEncryptionAtRest EncryptionAtRest = null,
    MskClusterEncryptionInfoEncryptionInTransit EncryptionInTransit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo.property.encryptionAtRest">EncryptionAtRest</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#encryption_at_rest MskCluster#encryption_at_rest}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo.property.encryptionInTransit">EncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#encryption_in_transit MskCluster#encryption_in_transit}. |

---

##### `EncryptionAtRest`<sup>Optional</sup> <a name="EncryptionAtRest" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo.property.encryptionAtRest"></a>

```csharp
public MskClusterEncryptionInfoEncryptionAtRest EncryptionAtRest { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#encryption_at_rest MskCluster#encryption_at_rest}.

---

##### `EncryptionInTransit`<sup>Optional</sup> <a name="EncryptionInTransit" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo.property.encryptionInTransit"></a>

```csharp
public MskClusterEncryptionInfoEncryptionInTransit EncryptionInTransit { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#encryption_in_transit MskCluster#encryption_in_transit}.

---

### MskClusterEncryptionInfoEncryptionAtRest <a name="MskClusterEncryptionInfoEncryptionAtRest" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterEncryptionInfoEncryptionAtRest {
    string DataVolumeKmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest.property.dataVolumeKmsKeyId">DataVolumeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#data_volume_kms_key_id MskCluster#data_volume_kms_key_id}. |

---

##### `DataVolumeKmsKeyId`<sup>Optional</sup> <a name="DataVolumeKmsKeyId" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest.property.dataVolumeKmsKeyId"></a>

```csharp
public string DataVolumeKmsKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#data_volume_kms_key_id MskCluster#data_volume_kms_key_id}.

---

### MskClusterEncryptionInfoEncryptionInTransit <a name="MskClusterEncryptionInfoEncryptionInTransit" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterEncryptionInfoEncryptionInTransit {
    string ClientBroker = null,
    bool|IResolvable InCluster = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.clientBroker">ClientBroker</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#client_broker MskCluster#client_broker}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.inCluster">InCluster</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#in_cluster MskCluster#in_cluster}. |

---

##### `ClientBroker`<sup>Optional</sup> <a name="ClientBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.clientBroker"></a>

```csharp
public string ClientBroker { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#client_broker MskCluster#client_broker}.

---

##### `InCluster`<sup>Optional</sup> <a name="InCluster" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.inCluster"></a>

```csharp
public bool|IResolvable InCluster { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#in_cluster MskCluster#in_cluster}.

---

### MskClusterLoggingInfo <a name="MskClusterLoggingInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfo {
    MskClusterLoggingInfoAuthorizerLogs AuthorizerLogs = null,
    MskClusterLoggingInfoBrokerLogs BrokerLogs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo.property.authorizerLogs">AuthorizerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs">MskClusterLoggingInfoAuthorizerLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#authorizer_logs MskCluster#authorizer_logs}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo.property.brokerLogs">BrokerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#broker_logs MskCluster#broker_logs}. |

---

##### `AuthorizerLogs`<sup>Optional</sup> <a name="AuthorizerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo.property.authorizerLogs"></a>

```csharp
public MskClusterLoggingInfoAuthorizerLogs AuthorizerLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs">MskClusterLoggingInfoAuthorizerLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#authorizer_logs MskCluster#authorizer_logs}.

---

##### `BrokerLogs`<sup>Optional</sup> <a name="BrokerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo.property.brokerLogs"></a>

```csharp
public MskClusterLoggingInfoBrokerLogs BrokerLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#broker_logs MskCluster#broker_logs}.

---

### MskClusterLoggingInfoAuthorizerLogs <a name="MskClusterLoggingInfoAuthorizerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoAuthorizerLogs {
    MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs CloudwatchLogs = null,
    MskClusterLoggingInfoAuthorizerLogsFirehose Firehose = null,
    MskClusterLoggingInfoAuthorizerLogsS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs">MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose">MskClusterLoggingInfoAuthorizerLogsFirehose</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#firehose MskCluster#firehose}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3">MskClusterLoggingInfoAuthorizerLogsS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#s3 MskCluster#s3}. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs.property.cloudwatchLogs"></a>

```csharp
public MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs">MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}.

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs.property.firehose"></a>

```csharp
public MskClusterLoggingInfoAuthorizerLogsFirehose Firehose { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose">MskClusterLoggingInfoAuthorizerLogsFirehose</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#firehose MskCluster#firehose}.

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs.property.s3"></a>

```csharp
public MskClusterLoggingInfoAuthorizerLogsS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3">MskClusterLoggingInfoAuthorizerLogsS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#s3 MskCluster#s3}.

---

### MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs <a name="MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs {
    bool|IResolvable Enabled = null,
    string LogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#log_group MskCluster#log_group}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#log_group MskCluster#log_group}.

---

### MskClusterLoggingInfoAuthorizerLogsFirehose <a name="MskClusterLoggingInfoAuthorizerLogsFirehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoAuthorizerLogsFirehose {
    string DeliveryStream = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#delivery_stream MskCluster#delivery_stream}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#delivery_stream MskCluster#delivery_stream}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterLoggingInfoAuthorizerLogsS3 <a name="MskClusterLoggingInfoAuthorizerLogsS3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoAuthorizerLogsS3 {
    string Bucket = null,
    bool|IResolvable Enabled = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#bucket MskCluster#bucket}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#prefix MskCluster#prefix}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#bucket MskCluster#bucket}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#prefix MskCluster#prefix}.

---

### MskClusterLoggingInfoBrokerLogs <a name="MskClusterLoggingInfoBrokerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoBrokerLogs {
    MskClusterLoggingInfoBrokerLogsCloudwatchLogs CloudwatchLogs = null,
    MskClusterLoggingInfoBrokerLogsFirehose Firehose = null,
    MskClusterLoggingInfoBrokerLogsS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#firehose MskCluster#firehose}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#s3 MskCluster#s3}. |

---

##### `CloudwatchLogs`<sup>Optional</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.cloudwatchLogs"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsCloudwatchLogs CloudwatchLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}.

---

##### `Firehose`<sup>Optional</sup> <a name="Firehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.firehose"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsFirehose Firehose { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#firehose MskCluster#firehose}.

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.s3"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#s3 MskCluster#s3}.

---

### MskClusterLoggingInfoBrokerLogsCloudwatchLogs <a name="MskClusterLoggingInfoBrokerLogsCloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoBrokerLogsCloudwatchLogs {
    bool|IResolvable Enabled = null,
    string LogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.logGroup">LogGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#log_group MskCluster#log_group}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#log_group MskCluster#log_group}.

---

### MskClusterLoggingInfoBrokerLogsFirehose <a name="MskClusterLoggingInfoBrokerLogsFirehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoBrokerLogsFirehose {
    string DeliveryStream = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#delivery_stream MskCluster#delivery_stream}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#delivery_stream MskCluster#delivery_stream}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterLoggingInfoBrokerLogsS3 <a name="MskClusterLoggingInfoBrokerLogsS3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoBrokerLogsS3 {
    string Bucket = null,
    bool|IResolvable Enabled = null,
    string Prefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#bucket MskCluster#bucket}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#prefix MskCluster#prefix}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#bucket MskCluster#bucket}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#prefix MskCluster#prefix}.

---

### MskClusterOpenMonitoring <a name="MskClusterOpenMonitoring" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterOpenMonitoring {
    MskClusterOpenMonitoringPrometheus Prometheus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#prometheus MskCluster#prometheus}. |

---

##### `Prometheus`<sup>Optional</sup> <a name="Prometheus" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring.property.prometheus"></a>

```csharp
public MskClusterOpenMonitoringPrometheus Prometheus { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#prometheus MskCluster#prometheus}.

---

### MskClusterOpenMonitoringPrometheus <a name="MskClusterOpenMonitoringPrometheus" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterOpenMonitoringPrometheus {
    MskClusterOpenMonitoringPrometheusJmxExporter JmxExporter = null,
    MskClusterOpenMonitoringPrometheusNodeExporter NodeExporter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus.property.jmxExporter">JmxExporter</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#jmx_exporter MskCluster#jmx_exporter}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus.property.nodeExporter">NodeExporter</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#node_exporter MskCluster#node_exporter}. |

---

##### `JmxExporter`<sup>Optional</sup> <a name="JmxExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus.property.jmxExporter"></a>

```csharp
public MskClusterOpenMonitoringPrometheusJmxExporter JmxExporter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#jmx_exporter MskCluster#jmx_exporter}.

---

##### `NodeExporter`<sup>Optional</sup> <a name="NodeExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus.property.nodeExporter"></a>

```csharp
public MskClusterOpenMonitoringPrometheusNodeExporter NodeExporter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#node_exporter MskCluster#node_exporter}.

---

### MskClusterOpenMonitoringPrometheusJmxExporter <a name="MskClusterOpenMonitoringPrometheusJmxExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterOpenMonitoringPrometheusJmxExporter {
    bool|IResolvable EnabledInBroker = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.property.enabledInBroker">EnabledInBroker</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}. |

---

##### `EnabledInBroker`<sup>Optional</sup> <a name="EnabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.property.enabledInBroker"></a>

```csharp
public bool|IResolvable EnabledInBroker { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}.

---

### MskClusterOpenMonitoringPrometheusNodeExporter <a name="MskClusterOpenMonitoringPrometheusNodeExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterOpenMonitoringPrometheusNodeExporter {
    bool|IResolvable EnabledInBroker = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.property.enabledInBroker">EnabledInBroker</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}. |

---

##### `EnabledInBroker`<sup>Optional</sup> <a name="EnabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.property.enabledInBroker"></a>

```csharp
public bool|IResolvable EnabledInBroker { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}.

---

### MskClusterRebalancing <a name="MskClusterRebalancing" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancing.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterRebalancing {
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#status MskCluster#status}. |

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancing.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#status MskCluster#status}.

---

### MskClusterZookeeperAccess <a name="MskClusterZookeeperAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterZookeeperAccess {
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess">PutPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putVpcConnectivity">PutVpcConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetPublicAccess">ResetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetVpcConnectivity">ResetVpcConnectivity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublicAccess` <a name="PutPublicAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess"></a>

```csharp
private void PutPublicAccess(MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---

##### `PutVpcConnectivity` <a name="PutVpcConnectivity" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putVpcConnectivity"></a>

```csharp
private void PutVpcConnectivity(MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putVpcConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a>

---

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetPublicAccess` <a name="ResetPublicAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetPublicAccess"></a>

```csharp
private void ResetPublicAccess()
```

##### `ResetVpcConnectivity` <a name="ResetVpcConnectivity" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetVpcConnectivity"></a>

```csharp
private void ResetVpcConnectivity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess">PublicAccess</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivity">VpcConnectivity</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccessInput">PublicAccessInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivityInput">VpcConnectivityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublicAccess`<sup>Required</sup> <a name="PublicAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference PublicAccess { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a>

---

##### `VpcConnectivity`<sup>Required</sup> <a name="VpcConnectivity" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivity"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference VpcConnectivity { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference</a>

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `PublicAccessInput`<sup>Optional</sup> <a name="PublicAccessInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccessInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess PublicAccessInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---

##### `VpcConnectivityInput`<sup>Optional</sup> <a name="VpcConnectivityInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivityInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity VpcConnectivityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a>

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putSasl">PutSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resetSasl">ResetSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resetTls">ResetTls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSasl` <a name="PutSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putSasl"></a>

```csharp
private void PutSasl(MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a>

---

##### `PutTls` <a name="PutTls" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putTls"></a>

```csharp
private void PutTls(MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a>

---

##### `ResetSasl` <a name="ResetSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resetSasl"></a>

```csharp
private void ResetSasl()
```

##### `ResetTls` <a name="ResetTls" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.sasl">Sasl</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.saslInput">SaslInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tlsInput">TlsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.sasl"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference Sasl { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tls"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference Tls { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference</a>

---

##### `SaslInput`<sup>Optional</sup> <a name="SaslInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.saslInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl SaslInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a>

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tlsInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls TlsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putIam">PutIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putScram">PutScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resetIam">ResetIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resetScram">ResetScram</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIam` <a name="PutIam" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putIam"></a>

```csharp
private void PutIam(MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putIam.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a>

---

##### `PutScram` <a name="PutScram" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putScram"></a>

```csharp
private void PutScram(MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putScram.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a>

---

##### `ResetIam` <a name="ResetIam" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resetIam"></a>

```csharp
private void ResetIam()
```

##### `ResetScram` <a name="ResetScram" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resetScram"></a>

```csharp
private void ResetScram()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iam">Iam</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scram">Scram</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iamInput">IamInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scramInput">ScramInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iam"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference Iam { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference</a>

---

##### `Scram`<sup>Required</sup> <a name="Scram" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scram"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference Scram { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference</a>

---

##### `IamInput`<sup>Optional</sup> <a name="IamInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iamInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam IamInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a>

---

##### `ScramInput`<sup>Optional</sup> <a name="ScramInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scramInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram ScramInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.putClientAuthentication">PutClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resetClientAuthentication">ResetClientAuthentication</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientAuthentication` <a name="PutClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.putClientAuthentication"></a>

```csharp
private void PutClientAuthentication(MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a>

---

##### `ResetClientAuthentication` <a name="ResetClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resetClientAuthentication"></a>

```csharp
private void ResetClientAuthentication()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthentication">ClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthenticationInput">ClientAuthenticationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientAuthentication`<sup>Required</sup> <a name="ClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthentication"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference ClientAuthentication { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference</a>

---

##### `ClientAuthenticationInput`<sup>Optional</sup> <a name="ClientAuthenticationInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthenticationInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication ClientAuthenticationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a>

---


### MskClusterBrokerNodeGroupInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo">PutConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo">PutStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetBrokerAzDistribution">ResetBrokerAzDistribution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetConnectivityInfo">ResetConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetStorageInfo">ResetStorageInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnectivityInfo` <a name="PutConnectivityInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo"></a>

```csharp
private void PutConnectivityInfo(MskClusterBrokerNodeGroupInfoConnectivityInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---

##### `PutStorageInfo` <a name="PutStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo"></a>

```csharp
private void PutStorageInfo(MskClusterBrokerNodeGroupInfoStorageInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---

##### `ResetBrokerAzDistribution` <a name="ResetBrokerAzDistribution" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetBrokerAzDistribution"></a>

```csharp
private void ResetBrokerAzDistribution()
```

##### `ResetConnectivityInfo` <a name="ResetConnectivityInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetConnectivityInfo"></a>

```csharp
private void ResetConnectivityInfo()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetSecurityGroups"></a>

```csharp
private void ResetSecurityGroups()
```

##### `ResetStorageInfo` <a name="ResetStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetStorageInfo"></a>

```csharp
private void ResetStorageInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo">ConnectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo">StorageInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.brokerAzDistributionInput">BrokerAzDistributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnetsInput">ClientSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfoInput">ConnectivityInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfoInput">StorageInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.brokerAzDistribution">BrokerAzDistribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets">ClientSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectivityInfo`<sup>Required</sup> <a name="ConnectivityInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference ConnectivityInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a>

---

##### `StorageInfo`<sup>Required</sup> <a name="StorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoOutputReference StorageInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a>

---

##### `BrokerAzDistributionInput`<sup>Optional</sup> <a name="BrokerAzDistributionInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.brokerAzDistributionInput"></a>

```csharp
public string BrokerAzDistributionInput { get; }
```

- *Type:* string

---

##### `ClientSubnetsInput`<sup>Optional</sup> <a name="ClientSubnetsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnetsInput"></a>

```csharp
public string[] ClientSubnetsInput { get; }
```

- *Type:* string[]

---

##### `ConnectivityInfoInput`<sup>Optional</sup> <a name="ConnectivityInfoInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfoInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoConnectivityInfo ConnectivityInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroupsInput"></a>

```csharp
public string[] SecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `StorageInfoInput`<sup>Optional</sup> <a name="StorageInfoInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfoInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoStorageInfo StorageInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---

##### `BrokerAzDistribution`<sup>Required</sup> <a name="BrokerAzDistribution" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.brokerAzDistribution"></a>

```csharp
public string BrokerAzDistribution { get; }
```

- *Type:* string

---

##### `ClientSubnets`<sup>Required</sup> <a name="ClientSubnets" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets"></a>

```csharp
public string[] ClientSubnets { get; }
```

- *Type:* string[]

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput">PutProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetProvisionedThroughput">ResetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetVolumeSize">ResetVolumeSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProvisionedThroughput` <a name="PutProvisionedThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput"></a>

```csharp
private void PutProvisionedThroughput(MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---

##### `ResetProvisionedThroughput` <a name="ResetProvisionedThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetProvisionedThroughput"></a>

```csharp
private void ResetProvisionedThroughput()
```

##### `ResetVolumeSize` <a name="ResetVolumeSize" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetVolumeSize"></a>

```csharp
private void ResetVolumeSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughputInput">ProvisionedThroughputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSizeInput">VolumeSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize">VolumeSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference ProvisionedThroughput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a>

---

##### `ProvisionedThroughputInput`<sup>Optional</sup> <a name="ProvisionedThroughputInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughputInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput ProvisionedThroughputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---

##### `VolumeSizeInput`<sup>Optional</sup> <a name="VolumeSizeInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSizeInput"></a>

```csharp
public double VolumeSizeInput { get; }
```

- *Type:* double

---

##### `VolumeSize`<sup>Required</sup> <a name="VolumeSize" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize"></a>

```csharp
public double VolumeSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetVolumeThroughput">ResetVolumeThroughput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetVolumeThroughput` <a name="ResetVolumeThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetVolumeThroughput"></a>

```csharp
private void ResetVolumeThroughput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughputInput">VolumeThroughputInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput">VolumeThroughput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VolumeThroughputInput`<sup>Optional</sup> <a name="VolumeThroughputInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughputInput"></a>

```csharp
public double VolumeThroughputInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VolumeThroughput`<sup>Required</sup> <a name="VolumeThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput"></a>

```csharp
public double VolumeThroughput { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterBrokerNodeGroupInfoStorageInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo">PutEbsStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resetEbsStorageInfo">ResetEbsStorageInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEbsStorageInfo` <a name="PutEbsStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo"></a>

```csharp
private void PutEbsStorageInfo(MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---

##### `ResetEbsStorageInfo` <a name="ResetEbsStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resetEbsStorageInfo"></a>

```csharp
private void ResetEbsStorageInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo">EbsStorageInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfoInput">EbsStorageInfoInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EbsStorageInfo`<sup>Required</sup> <a name="EbsStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo"></a>

```csharp
public MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference EbsStorageInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a>

---

##### `EbsStorageInfoInput`<sup>Optional</sup> <a name="EbsStorageInfoInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfoInput"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo EbsStorageInfoInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterBrokerNodeGroupInfoStorageInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---


### MskClusterClientAuthenticationOutputReference <a name="MskClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthenticationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl">PutSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putTls">PutTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putUnauthenticated">PutUnauthenticated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetSasl">ResetSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetTls">ResetTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetUnauthenticated">ResetUnauthenticated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSasl` <a name="PutSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl"></a>

```csharp
private void PutSasl(MskClusterClientAuthenticationSasl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---

##### `PutTls` <a name="PutTls" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putTls"></a>

```csharp
private void PutTls(MskClusterClientAuthenticationTls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---

##### `PutUnauthenticated` <a name="PutUnauthenticated" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putUnauthenticated"></a>

```csharp
private void PutUnauthenticated(MskClusterClientAuthenticationUnauthenticated Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putUnauthenticated.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a>

---

##### `ResetSasl` <a name="ResetSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetSasl"></a>

```csharp
private void ResetSasl()
```

##### `ResetTls` <a name="ResetTls" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetTls"></a>

```csharp
private void ResetTls()
```

##### `ResetUnauthenticated` <a name="ResetUnauthenticated" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetUnauthenticated"></a>

```csharp
private void ResetUnauthenticated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.sasl">Sasl</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference">MskClusterClientAuthenticationSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.tls">Tls</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference">MskClusterClientAuthenticationTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticated">Unauthenticated</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference">MskClusterClientAuthenticationUnauthenticatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.saslInput">SaslInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.tlsInput">TlsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticatedInput">UnauthenticatedInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sasl`<sup>Required</sup> <a name="Sasl" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.sasl"></a>

```csharp
public MskClusterClientAuthenticationSaslOutputReference Sasl { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference">MskClusterClientAuthenticationSaslOutputReference</a>

---

##### `Tls`<sup>Required</sup> <a name="Tls" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.tls"></a>

```csharp
public MskClusterClientAuthenticationTlsOutputReference Tls { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference">MskClusterClientAuthenticationTlsOutputReference</a>

---

##### `Unauthenticated`<sup>Required</sup> <a name="Unauthenticated" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticated"></a>

```csharp
public MskClusterClientAuthenticationUnauthenticatedOutputReference Unauthenticated { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference">MskClusterClientAuthenticationUnauthenticatedOutputReference</a>

---

##### `SaslInput`<sup>Optional</sup> <a name="SaslInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.saslInput"></a>

```csharp
public IResolvable|MskClusterClientAuthenticationSasl SaslInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---

##### `TlsInput`<sup>Optional</sup> <a name="TlsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.tlsInput"></a>

```csharp
public IResolvable|MskClusterClientAuthenticationTls TlsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---

##### `UnauthenticatedInput`<sup>Optional</sup> <a name="UnauthenticatedInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticatedInput"></a>

```csharp
public IResolvable|MskClusterClientAuthenticationUnauthenticated UnauthenticatedInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterClientAuthentication InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---


### MskClusterClientAuthenticationSaslIamOutputReference <a name="MskClusterClientAuthenticationSaslIamOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthenticationSaslIamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterClientAuthenticationSaslIam InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a>

---


### MskClusterClientAuthenticationSaslOutputReference <a name="MskClusterClientAuthenticationSaslOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthenticationSaslOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putIam">PutIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putScram">PutScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetIam">ResetIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetScram">ResetScram</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIam` <a name="PutIam" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putIam"></a>

```csharp
private void PutIam(MskClusterClientAuthenticationSaslIam Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putIam.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a>

---

##### `PutScram` <a name="PutScram" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putScram"></a>

```csharp
private void PutScram(MskClusterClientAuthenticationSaslScram Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putScram.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a>

---

##### `ResetIam` <a name="ResetIam" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetIam"></a>

```csharp
private void ResetIam()
```

##### `ResetScram` <a name="ResetScram" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetScram"></a>

```csharp
private void ResetScram()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iam">Iam</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference">MskClusterClientAuthenticationSaslIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scram">Scram</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference">MskClusterClientAuthenticationSaslScramOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iamInput">IamInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scramInput">ScramInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Iam`<sup>Required</sup> <a name="Iam" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iam"></a>

```csharp
public MskClusterClientAuthenticationSaslIamOutputReference Iam { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference">MskClusterClientAuthenticationSaslIamOutputReference</a>

---

##### `Scram`<sup>Required</sup> <a name="Scram" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scram"></a>

```csharp
public MskClusterClientAuthenticationSaslScramOutputReference Scram { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference">MskClusterClientAuthenticationSaslScramOutputReference</a>

---

##### `IamInput`<sup>Optional</sup> <a name="IamInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iamInput"></a>

```csharp
public IResolvable|MskClusterClientAuthenticationSaslIam IamInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a>

---

##### `ScramInput`<sup>Optional</sup> <a name="ScramInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scramInput"></a>

```csharp
public IResolvable|MskClusterClientAuthenticationSaslScram ScramInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterClientAuthenticationSasl InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---


### MskClusterClientAuthenticationSaslScramOutputReference <a name="MskClusterClientAuthenticationSaslScramOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthenticationSaslScramOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterClientAuthenticationSaslScram InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a>

---


### MskClusterClientAuthenticationTlsOutputReference <a name="MskClusterClientAuthenticationTlsOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthenticationTlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetCertificateAuthorityArnList">ResetCertificateAuthorityArnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateAuthorityArnList` <a name="ResetCertificateAuthorityArnList" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetCertificateAuthorityArnList"></a>

```csharp
private void ResetCertificateAuthorityArnList()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnListInput">CertificateAuthorityArnListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnList">CertificateAuthorityArnList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CertificateAuthorityArnListInput`<sup>Optional</sup> <a name="CertificateAuthorityArnListInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnListInput"></a>

```csharp
public string[] CertificateAuthorityArnListInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CertificateAuthorityArnList`<sup>Required</sup> <a name="CertificateAuthorityArnList" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnList"></a>

```csharp
public string[] CertificateAuthorityArnList { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterClientAuthenticationTls InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---


### MskClusterClientAuthenticationUnauthenticatedOutputReference <a name="MskClusterClientAuthenticationUnauthenticatedOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterClientAuthenticationUnauthenticatedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterClientAuthenticationUnauthenticated InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a>

---


### MskClusterConfigurationInfoOutputReference <a name="MskClusterConfigurationInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterConfigurationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resetRevision">ResetRevision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resetArn"></a>

```csharp
private void ResetArn()
```

##### `ResetRevision` <a name="ResetRevision" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resetRevision"></a>

```csharp
private void ResetRevision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.arnInput">ArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.revisionInput">RevisionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.revision">Revision</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.arnInput"></a>

```csharp
public string ArnInput { get; }
```

- *Type:* string

---

##### `RevisionInput`<sup>Optional</sup> <a name="RevisionInput" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.revisionInput"></a>

```csharp
public double RevisionInput { get; }
```

- *Type:* double

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Revision`<sup>Required</sup> <a name="Revision" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.revision"></a>

```csharp
public double Revision { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterConfigurationInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---


### MskClusterEncryptionInfoEncryptionAtRestOutputReference <a name="MskClusterEncryptionInfoEncryptionAtRestOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterEncryptionInfoEncryptionAtRestOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.resetDataVolumeKmsKeyId">ResetDataVolumeKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataVolumeKmsKeyId` <a name="ResetDataVolumeKmsKeyId" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.resetDataVolumeKmsKeyId"></a>

```csharp
private void ResetDataVolumeKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.dataVolumeKmsKeyIdInput">DataVolumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.dataVolumeKmsKeyId">DataVolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataVolumeKmsKeyIdInput`<sup>Optional</sup> <a name="DataVolumeKmsKeyIdInput" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.dataVolumeKmsKeyIdInput"></a>

```csharp
public string DataVolumeKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `DataVolumeKmsKeyId`<sup>Required</sup> <a name="DataVolumeKmsKeyId" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.dataVolumeKmsKeyId"></a>

```csharp
public string DataVolumeKmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterEncryptionInfoEncryptionAtRest InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a>

---


### MskClusterEncryptionInfoEncryptionInTransitOutputReference <a name="MskClusterEncryptionInfoEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterEncryptionInfoEncryptionInTransitOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetClientBroker">ResetClientBroker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetInCluster">ResetInCluster</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientBroker` <a name="ResetClientBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetClientBroker"></a>

```csharp
private void ResetClientBroker()
```

##### `ResetInCluster` <a name="ResetInCluster" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetInCluster"></a>

```csharp
private void ResetInCluster()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBrokerInput">ClientBrokerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inClusterInput">InClusterInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker">ClientBroker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster">InCluster</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientBrokerInput`<sup>Optional</sup> <a name="ClientBrokerInput" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBrokerInput"></a>

```csharp
public string ClientBrokerInput { get; }
```

- *Type:* string

---

##### `InClusterInput`<sup>Optional</sup> <a name="InClusterInput" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inClusterInput"></a>

```csharp
public bool|IResolvable InClusterInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ClientBroker`<sup>Required</sup> <a name="ClientBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker"></a>

```csharp
public string ClientBroker { get; }
```

- *Type:* string

---

##### `InCluster`<sup>Required</sup> <a name="InCluster" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster"></a>

```csharp
public bool|IResolvable InCluster { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterEncryptionInfoEncryptionInTransit InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---


### MskClusterEncryptionInfoOutputReference <a name="MskClusterEncryptionInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterEncryptionInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionAtRest">PutEncryptionAtRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit">PutEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionAtRest">ResetEncryptionAtRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionInTransit">ResetEncryptionInTransit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionAtRest` <a name="PutEncryptionAtRest" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionAtRest"></a>

```csharp
private void PutEncryptionAtRest(MskClusterEncryptionInfoEncryptionAtRest Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionAtRest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a>

---

##### `PutEncryptionInTransit` <a name="PutEncryptionInTransit" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit"></a>

```csharp
private void PutEncryptionInTransit(MskClusterEncryptionInfoEncryptionInTransit Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---

##### `ResetEncryptionAtRest` <a name="ResetEncryptionAtRest" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionAtRest"></a>

```csharp
private void ResetEncryptionAtRest()
```

##### `ResetEncryptionInTransit` <a name="ResetEncryptionInTransit" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionInTransit"></a>

```csharp
private void ResetEncryptionInTransit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRest">EncryptionAtRest</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference">MskClusterEncryptionInfoEncryptionAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransit">EncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference">MskClusterEncryptionInfoEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestInput">EncryptionAtRestInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransitInput">EncryptionInTransitInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionAtRest`<sup>Required</sup> <a name="EncryptionAtRest" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRest"></a>

```csharp
public MskClusterEncryptionInfoEncryptionAtRestOutputReference EncryptionAtRest { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference">MskClusterEncryptionInfoEncryptionAtRestOutputReference</a>

---

##### `EncryptionInTransit`<sup>Required</sup> <a name="EncryptionInTransit" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransit"></a>

```csharp
public MskClusterEncryptionInfoEncryptionInTransitOutputReference EncryptionInTransit { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference">MskClusterEncryptionInfoEncryptionInTransitOutputReference</a>

---

##### `EncryptionAtRestInput`<sup>Optional</sup> <a name="EncryptionAtRestInput" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestInput"></a>

```csharp
public IResolvable|MskClusterEncryptionInfoEncryptionAtRest EncryptionAtRestInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a>

---

##### `EncryptionInTransitInput`<sup>Optional</sup> <a name="EncryptionInTransitInput" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransitInput"></a>

```csharp
public IResolvable|MskClusterEncryptionInfoEncryptionInTransit EncryptionInTransitInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterEncryptionInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---


### MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference <a name="MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs">MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs">MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs</a>

---


### MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference <a name="MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.resetDeliveryStream"></a>

```csharp
private void ResetDeliveryStream()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose">MskClusterLoggingInfoAuthorizerLogsFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.deliveryStreamInput"></a>

```csharp
public string DeliveryStreamInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterLoggingInfoAuthorizerLogsFirehose InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose">MskClusterLoggingInfoAuthorizerLogsFirehose</a>

---


### MskClusterLoggingInfoAuthorizerLogsOutputReference <a name="MskClusterLoggingInfoAuthorizerLogsOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoAuthorizerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs">MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.putFirehose"></a>

```csharp
private void PutFirehose(MskClusterLoggingInfoAuthorizerLogsFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose">MskClusterLoggingInfoAuthorizerLogsFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.putS3"></a>

```csharp
private void PutS3(MskClusterLoggingInfoAuthorizerLogsS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3">MskClusterLoggingInfoAuthorizerLogsS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.resetFirehose"></a>

```csharp
private void ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference">MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference">MskClusterLoggingInfoAuthorizerLogsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs">MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose">MskClusterLoggingInfoAuthorizerLogsFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3">MskClusterLoggingInfoAuthorizerLogsS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs">MskClusterLoggingInfoAuthorizerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.cloudwatchLogs"></a>

```csharp
public MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoAuthorizerLogsCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.firehose"></a>

```csharp
public MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference Firehose { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference">MskClusterLoggingInfoAuthorizerLogsFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.s3"></a>

```csharp
public MskClusterLoggingInfoAuthorizerLogsS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference">MskClusterLoggingInfoAuthorizerLogsS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public IResolvable|MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs">MskClusterLoggingInfoAuthorizerLogsCloudwatchLogs</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.firehoseInput"></a>

```csharp
public IResolvable|MskClusterLoggingInfoAuthorizerLogsFirehose FirehoseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsFirehose">MskClusterLoggingInfoAuthorizerLogsFirehose</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.s3Input"></a>

```csharp
public IResolvable|MskClusterLoggingInfoAuthorizerLogsS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3">MskClusterLoggingInfoAuthorizerLogsS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterLoggingInfoAuthorizerLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs">MskClusterLoggingInfoAuthorizerLogs</a>

---


### MskClusterLoggingInfoAuthorizerLogsS3OutputReference <a name="MskClusterLoggingInfoAuthorizerLogsS3OutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoAuthorizerLogsS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3">MskClusterLoggingInfoAuthorizerLogsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterLoggingInfoAuthorizerLogsS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsS3">MskClusterLoggingInfoAuthorizerLogsS3</a>

---


### MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference <a name="MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterLoggingInfoBrokerLogsCloudwatchLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---


### MskClusterLoggingInfoBrokerLogsFirehoseOutputReference <a name="MskClusterLoggingInfoBrokerLogsFirehoseOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoBrokerLogsFirehoseOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetDeliveryStream"></a>

```csharp
private void ResetDeliveryStream()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStreamInput"></a>

```csharp
public string DeliveryStreamInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterLoggingInfoBrokerLogsFirehose InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---


### MskClusterLoggingInfoBrokerLogsOutputReference <a name="MskClusterLoggingInfoBrokerLogsOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoBrokerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs">PutCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose">PutFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetCloudwatchLogs">ResetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetFirehose">ResetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogs` <a name="PutCloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs"></a>

```csharp
private void PutCloudwatchLogs(MskClusterLoggingInfoBrokerLogsCloudwatchLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---

##### `PutFirehose` <a name="PutFirehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose"></a>

```csharp
private void PutFirehose(MskClusterLoggingInfoBrokerLogsFirehose Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3"></a>

```csharp
private void PutS3(MskClusterLoggingInfoBrokerLogsS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---

##### `ResetCloudwatchLogs` <a name="ResetCloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetCloudwatchLogs"></a>

```csharp
private void ResetCloudwatchLogs()
```

##### `ResetFirehose` <a name="ResetFirehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetFirehose"></a>

```csharp
private void ResetFirehose()
```

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs">CloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehose">Firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference">MskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference">MskClusterLoggingInfoBrokerLogsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogsInput">CloudwatchLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehoseInput">FirehoseInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogs`<sup>Required</sup> <a name="CloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference CloudwatchLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a>

---

##### `Firehose`<sup>Required</sup> <a name="Firehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehose"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsFirehoseOutputReference Firehose { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference">MskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a>

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference">MskClusterLoggingInfoBrokerLogsS3OutputReference</a>

---

##### `CloudwatchLogsInput`<sup>Optional</sup> <a name="CloudwatchLogsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogsInput"></a>

```csharp
public IResolvable|MskClusterLoggingInfoBrokerLogsCloudwatchLogs CloudwatchLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---

##### `FirehoseInput`<sup>Optional</sup> <a name="FirehoseInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehoseInput"></a>

```csharp
public IResolvable|MskClusterLoggingInfoBrokerLogsFirehose FirehoseInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3Input"></a>

```csharp
public IResolvable|MskClusterLoggingInfoBrokerLogsS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterLoggingInfoBrokerLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---


### MskClusterLoggingInfoBrokerLogsS3OutputReference <a name="MskClusterLoggingInfoBrokerLogsS3OutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoBrokerLogsS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterLoggingInfoBrokerLogsS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---


### MskClusterLoggingInfoOutputReference <a name="MskClusterLoggingInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterLoggingInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.putAuthorizerLogs">PutAuthorizerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs">PutBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resetAuthorizerLogs">ResetAuthorizerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resetBrokerLogs">ResetBrokerLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizerLogs` <a name="PutAuthorizerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.putAuthorizerLogs"></a>

```csharp
private void PutAuthorizerLogs(MskClusterLoggingInfoAuthorizerLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.putAuthorizerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs">MskClusterLoggingInfoAuthorizerLogs</a>

---

##### `PutBrokerLogs` <a name="PutBrokerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs"></a>

```csharp
private void PutBrokerLogs(MskClusterLoggingInfoBrokerLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---

##### `ResetAuthorizerLogs` <a name="ResetAuthorizerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resetAuthorizerLogs"></a>

```csharp
private void ResetAuthorizerLogs()
```

##### `ResetBrokerLogs` <a name="ResetBrokerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resetBrokerLogs"></a>

```csharp
private void ResetBrokerLogs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.authorizerLogs">AuthorizerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference">MskClusterLoggingInfoAuthorizerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogs">BrokerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference">MskClusterLoggingInfoBrokerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.authorizerLogsInput">AuthorizerLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs">MskClusterLoggingInfoAuthorizerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogsInput">BrokerLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizerLogs`<sup>Required</sup> <a name="AuthorizerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.authorizerLogs"></a>

```csharp
public MskClusterLoggingInfoAuthorizerLogsOutputReference AuthorizerLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogsOutputReference">MskClusterLoggingInfoAuthorizerLogsOutputReference</a>

---

##### `BrokerLogs`<sup>Required</sup> <a name="BrokerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogs"></a>

```csharp
public MskClusterLoggingInfoBrokerLogsOutputReference BrokerLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference">MskClusterLoggingInfoBrokerLogsOutputReference</a>

---

##### `AuthorizerLogsInput`<sup>Optional</sup> <a name="AuthorizerLogsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.authorizerLogsInput"></a>

```csharp
public IResolvable|MskClusterLoggingInfoAuthorizerLogs AuthorizerLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoAuthorizerLogs">MskClusterLoggingInfoAuthorizerLogs</a>

---

##### `BrokerLogsInput`<sup>Optional</sup> <a name="BrokerLogsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogsInput"></a>

```csharp
public IResolvable|MskClusterLoggingInfoBrokerLogs BrokerLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterLoggingInfo InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---


### MskClusterOpenMonitoringOutputReference <a name="MskClusterOpenMonitoringOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterOpenMonitoringOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus">PutPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.resetPrometheus">ResetPrometheus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrometheus` <a name="PutPrometheus" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus"></a>

```csharp
private void PutPrometheus(MskClusterOpenMonitoringPrometheus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---

##### `ResetPrometheus` <a name="ResetPrometheus" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.resetPrometheus"></a>

```csharp
private void ResetPrometheus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheus">Prometheus</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference">MskClusterOpenMonitoringPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheusInput">PrometheusInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Prometheus`<sup>Required</sup> <a name="Prometheus" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheus"></a>

```csharp
public MskClusterOpenMonitoringPrometheusOutputReference Prometheus { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference">MskClusterOpenMonitoringPrometheusOutputReference</a>

---

##### `PrometheusInput`<sup>Optional</sup> <a name="PrometheusInput" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheusInput"></a>

```csharp
public IResolvable|MskClusterOpenMonitoringPrometheus PrometheusInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterOpenMonitoring InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---


### MskClusterOpenMonitoringPrometheusJmxExporterOutputReference <a name="MskClusterOpenMonitoringPrometheusJmxExporterOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterOpenMonitoringPrometheusJmxExporterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resetEnabledInBroker">ResetEnabledInBroker</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabledInBroker` <a name="ResetEnabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resetEnabledInBroker"></a>

```csharp
private void ResetEnabledInBroker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBrokerInput">EnabledInBrokerInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker">EnabledInBroker</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInBrokerInput`<sup>Optional</sup> <a name="EnabledInBrokerInput" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBrokerInput"></a>

```csharp
public bool|IResolvable EnabledInBrokerInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker"></a>

```csharp
public bool|IResolvable EnabledInBroker { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterOpenMonitoringPrometheusJmxExporter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---


### MskClusterOpenMonitoringPrometheusNodeExporterOutputReference <a name="MskClusterOpenMonitoringPrometheusNodeExporterOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterOpenMonitoringPrometheusNodeExporterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resetEnabledInBroker">ResetEnabledInBroker</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabledInBroker` <a name="ResetEnabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resetEnabledInBroker"></a>

```csharp
private void ResetEnabledInBroker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBrokerInput">EnabledInBrokerInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker">EnabledInBroker</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInBrokerInput`<sup>Optional</sup> <a name="EnabledInBrokerInput" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBrokerInput"></a>

```csharp
public bool|IResolvable EnabledInBrokerInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnabledInBroker`<sup>Required</sup> <a name="EnabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker"></a>

```csharp
public bool|IResolvable EnabledInBroker { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterOpenMonitoringPrometheusNodeExporter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---


### MskClusterOpenMonitoringPrometheusOutputReference <a name="MskClusterOpenMonitoringPrometheusOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterOpenMonitoringPrometheusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter">PutJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter">PutNodeExporter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetJmxExporter">ResetJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetNodeExporter">ResetNodeExporter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJmxExporter` <a name="PutJmxExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter"></a>

```csharp
private void PutJmxExporter(MskClusterOpenMonitoringPrometheusJmxExporter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---

##### `PutNodeExporter` <a name="PutNodeExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter"></a>

```csharp
private void PutNodeExporter(MskClusterOpenMonitoringPrometheusNodeExporter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---

##### `ResetJmxExporter` <a name="ResetJmxExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetJmxExporter"></a>

```csharp
private void ResetJmxExporter()
```

##### `ResetNodeExporter` <a name="ResetNodeExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetNodeExporter"></a>

```csharp
private void ResetNodeExporter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter">JmxExporter</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference">MskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter">NodeExporter</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference">MskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporterInput">JmxExporterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporterInput">NodeExporterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JmxExporter`<sup>Required</sup> <a name="JmxExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter"></a>

```csharp
public MskClusterOpenMonitoringPrometheusJmxExporterOutputReference JmxExporter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference">MskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a>

---

##### `NodeExporter`<sup>Required</sup> <a name="NodeExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter"></a>

```csharp
public MskClusterOpenMonitoringPrometheusNodeExporterOutputReference NodeExporter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference">MskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a>

---

##### `JmxExporterInput`<sup>Optional</sup> <a name="JmxExporterInput" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporterInput"></a>

```csharp
public IResolvable|MskClusterOpenMonitoringPrometheusJmxExporter JmxExporterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---

##### `NodeExporterInput`<sup>Optional</sup> <a name="NodeExporterInput" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporterInput"></a>

```csharp
public IResolvable|MskClusterOpenMonitoringPrometheusNodeExporter NodeExporterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterOpenMonitoringPrometheus InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---


### MskClusterRebalancingOutputReference <a name="MskClusterRebalancingOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterRebalancingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterRebalancing InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a>

---


### MskClusterZookeeperAccessOutputReference <a name="MskClusterZookeeperAccessOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MskClusterZookeeperAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MskClusterZookeeperAccess InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a>

---



