# `elasticacheCacheCluster` Submodule <a name="`elasticacheCacheCluster` Submodule" id="@cdktn/provider-awscc.elasticacheCacheCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheCacheCluster <a name="ElasticacheCacheCluster" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster awscc_elasticache_cache_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheCluster(Construct Scope, string Id, ElasticacheCacheClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig">ElasticacheCacheClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig">ElasticacheCacheClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putLogDeliveryConfigurations">PutLogDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetAutoMinorVersionUpgrade">ResetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetAzMode">ResetAzMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheParameterGroupName">ResetCacheParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheSecurityGroupNames">ResetCacheSecurityGroupNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheSubnetGroupName">ResetCacheSubnetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetIpDiscovery">ResetIpDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetLogDeliveryConfigurations">ResetLogDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetNetworkType">ResetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetNotificationTopicArn">ResetNotificationTopicArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredAvailabilityZone">ResetPreferredAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredAvailabilityZones">ResetPreferredAvailabilityZones</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotArns">ResetSnapshotArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotName">ResetSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotRetentionLimit">ResetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotWindow">ResetSnapshotWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetTransitEncryptionEnabled">ResetTransitEncryptionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetVpcSecurityGroupIds">ResetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLogDeliveryConfigurations` <a name="PutLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putLogDeliveryConfigurations"></a>

```csharp
private void PutLogDeliveryConfigurations(IResolvable|ElasticacheCacheClusterLogDeliveryConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putLogDeliveryConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations">ElasticacheCacheClusterLogDeliveryConfigurations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putTags"></a>

```csharp
private void PutTags(IResolvable|ElasticacheCacheClusterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags">ElasticacheCacheClusterTags</a>[]

---

##### `ResetAutoMinorVersionUpgrade` <a name="ResetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetAutoMinorVersionUpgrade"></a>

```csharp
private void ResetAutoMinorVersionUpgrade()
```

##### `ResetAzMode` <a name="ResetAzMode" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetAzMode"></a>

```csharp
private void ResetAzMode()
```

##### `ResetCacheParameterGroupName` <a name="ResetCacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheParameterGroupName"></a>

```csharp
private void ResetCacheParameterGroupName()
```

##### `ResetCacheSecurityGroupNames` <a name="ResetCacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheSecurityGroupNames"></a>

```csharp
private void ResetCacheSecurityGroupNames()
```

##### `ResetCacheSubnetGroupName` <a name="ResetCacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetCacheSubnetGroupName"></a>

```csharp
private void ResetCacheSubnetGroupName()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetClusterName"></a>

```csharp
private void ResetClusterName()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetIpDiscovery` <a name="ResetIpDiscovery" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetIpDiscovery"></a>

```csharp
private void ResetIpDiscovery()
```

##### `ResetLogDeliveryConfigurations` <a name="ResetLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetLogDeliveryConfigurations"></a>

```csharp
private void ResetLogDeliveryConfigurations()
```

##### `ResetNetworkType` <a name="ResetNetworkType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetNetworkType"></a>

```csharp
private void ResetNetworkType()
```

##### `ResetNotificationTopicArn` <a name="ResetNotificationTopicArn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetNotificationTopicArn"></a>

```csharp
private void ResetNotificationTopicArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPreferredAvailabilityZone` <a name="ResetPreferredAvailabilityZone" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredAvailabilityZone"></a>

```csharp
private void ResetPreferredAvailabilityZone()
```

##### `ResetPreferredAvailabilityZones` <a name="ResetPreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredAvailabilityZones"></a>

```csharp
private void ResetPreferredAvailabilityZones()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetPreferredMaintenanceWindow"></a>

```csharp
private void ResetPreferredMaintenanceWindow()
```

##### `ResetSnapshotArns` <a name="ResetSnapshotArns" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotArns"></a>

```csharp
private void ResetSnapshotArns()
```

##### `ResetSnapshotName` <a name="ResetSnapshotName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotName"></a>

```csharp
private void ResetSnapshotName()
```

##### `ResetSnapshotRetentionLimit` <a name="ResetSnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotRetentionLimit"></a>

```csharp
private void ResetSnapshotRetentionLimit()
```

##### `ResetSnapshotWindow` <a name="ResetSnapshotWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetSnapshotWindow"></a>

```csharp
private void ResetSnapshotWindow()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTransitEncryptionEnabled` <a name="ResetTransitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetTransitEncryptionEnabled"></a>

```csharp
private void ResetTransitEncryptionEnabled()
```

##### `ResetVpcSecurityGroupIds` <a name="ResetVpcSecurityGroupIds" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.resetVpcSecurityGroupIds"></a>

```csharp
private void ResetVpcSecurityGroupIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheCacheCluster resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheCacheCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheCacheCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheCacheCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheCacheCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ElasticacheCacheCluster resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheCacheCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheCacheCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheCacheCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.configurationEndpoint">ConfigurationEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference">ElasticacheCacheClusterConfigurationEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.logDeliveryConfigurations">LogDeliveryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList">ElasticacheCacheClusterLogDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.redisEndpoint">RedisEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference">ElasticacheCacheClusterRedisEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList">ElasticacheCacheClusterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.autoMinorVersionUpgradeInput">AutoMinorVersionUpgradeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.azModeInput">AzModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheNodeTypeInput">CacheNodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheParameterGroupNameInput">CacheParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSecurityGroupNamesInput">CacheSecurityGroupNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSubnetGroupNameInput">CacheSubnetGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.clusterNameInput">ClusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.ipDiscoveryInput">IpDiscoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.logDeliveryConfigurationsInput">LogDeliveryConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations">ElasticacheCacheClusterLogDeliveryConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.networkTypeInput">NetworkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.notificationTopicArnInput">NotificationTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.numCacheNodesInput">NumCacheNodesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZoneInput">PreferredAvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZonesInput">PreferredAvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotArnsInput">SnapshotArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotNameInput">SnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotRetentionLimitInput">SnapshotRetentionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotWindowInput">SnapshotWindowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags">ElasticacheCacheClusterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.transitEncryptionEnabledInput">TransitEncryptionEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.vpcSecurityGroupIdsInput">VpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.azMode">AzMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheNodeType">CacheNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSecurityGroupNames">CacheSecurityGroupNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSubnetGroupName">CacheSubnetGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.clusterName">ClusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.ipDiscovery">IpDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.networkType">NetworkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.numCacheNodes">NumCacheNodes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZone">PreferredAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotArns">SnapshotArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotName">SnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotWindow">SnapshotWindow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationEndpoint`<sup>Required</sup> <a name="ConfigurationEndpoint" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.configurationEndpoint"></a>

```csharp
public ElasticacheCacheClusterConfigurationEndpointOutputReference ConfigurationEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference">ElasticacheCacheClusterConfigurationEndpointOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LogDeliveryConfigurations`<sup>Required</sup> <a name="LogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.logDeliveryConfigurations"></a>

```csharp
public ElasticacheCacheClusterLogDeliveryConfigurationsList LogDeliveryConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList">ElasticacheCacheClusterLogDeliveryConfigurationsList</a>

---

##### `RedisEndpoint`<sup>Required</sup> <a name="RedisEndpoint" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.redisEndpoint"></a>

```csharp
public ElasticacheCacheClusterRedisEndpointOutputReference RedisEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference">ElasticacheCacheClusterRedisEndpointOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tags"></a>

```csharp
public ElasticacheCacheClusterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList">ElasticacheCacheClusterTagsList</a>

---

##### `AutoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="AutoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.autoMinorVersionUpgradeInput"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgradeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AzModeInput`<sup>Optional</sup> <a name="AzModeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.azModeInput"></a>

```csharp
public string AzModeInput { get; }
```

- *Type:* string

---

##### `CacheNodeTypeInput`<sup>Optional</sup> <a name="CacheNodeTypeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheNodeTypeInput"></a>

```csharp
public string CacheNodeTypeInput { get; }
```

- *Type:* string

---

##### `CacheParameterGroupNameInput`<sup>Optional</sup> <a name="CacheParameterGroupNameInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheParameterGroupNameInput"></a>

```csharp
public string CacheParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `CacheSecurityGroupNamesInput`<sup>Optional</sup> <a name="CacheSecurityGroupNamesInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSecurityGroupNamesInput"></a>

```csharp
public string[] CacheSecurityGroupNamesInput { get; }
```

- *Type:* string[]

---

##### `CacheSubnetGroupNameInput`<sup>Optional</sup> <a name="CacheSubnetGroupNameInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSubnetGroupNameInput"></a>

```csharp
public string CacheSubnetGroupNameInput { get; }
```

- *Type:* string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.clusterNameInput"></a>

```csharp
public string ClusterNameInput { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `IpDiscoveryInput`<sup>Optional</sup> <a name="IpDiscoveryInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.ipDiscoveryInput"></a>

```csharp
public string IpDiscoveryInput { get; }
```

- *Type:* string

---

##### `LogDeliveryConfigurationsInput`<sup>Optional</sup> <a name="LogDeliveryConfigurationsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.logDeliveryConfigurationsInput"></a>

```csharp
public IResolvable|ElasticacheCacheClusterLogDeliveryConfigurations[] LogDeliveryConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations">ElasticacheCacheClusterLogDeliveryConfigurations</a>[]

---

##### `NetworkTypeInput`<sup>Optional</sup> <a name="NetworkTypeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.networkTypeInput"></a>

```csharp
public string NetworkTypeInput { get; }
```

- *Type:* string

---

##### `NotificationTopicArnInput`<sup>Optional</sup> <a name="NotificationTopicArnInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.notificationTopicArnInput"></a>

```csharp
public string NotificationTopicArnInput { get; }
```

- *Type:* string

---

##### `NumCacheNodesInput`<sup>Optional</sup> <a name="NumCacheNodesInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.numCacheNodesInput"></a>

```csharp
public double NumCacheNodesInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PreferredAvailabilityZoneInput`<sup>Optional</sup> <a name="PreferredAvailabilityZoneInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZoneInput"></a>

```csharp
public string PreferredAvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `PreferredAvailabilityZonesInput`<sup>Optional</sup> <a name="PreferredAvailabilityZonesInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZonesInput"></a>

```csharp
public string[] PreferredAvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredMaintenanceWindowInput"></a>

```csharp
public string PreferredMaintenanceWindowInput { get; }
```

- *Type:* string

---

##### `SnapshotArnsInput`<sup>Optional</sup> <a name="SnapshotArnsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotArnsInput"></a>

```csharp
public string[] SnapshotArnsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotNameInput`<sup>Optional</sup> <a name="SnapshotNameInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotNameInput"></a>

```csharp
public string SnapshotNameInput { get; }
```

- *Type:* string

---

##### `SnapshotRetentionLimitInput`<sup>Optional</sup> <a name="SnapshotRetentionLimitInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotRetentionLimitInput"></a>

```csharp
public double SnapshotRetentionLimitInput { get; }
```

- *Type:* double

---

##### `SnapshotWindowInput`<sup>Optional</sup> <a name="SnapshotWindowInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotWindowInput"></a>

```csharp
public string SnapshotWindowInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tagsInput"></a>

```csharp
public IResolvable|ElasticacheCacheClusterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags">ElasticacheCacheClusterTags</a>[]

---

##### `TransitEncryptionEnabledInput`<sup>Optional</sup> <a name="TransitEncryptionEnabledInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.transitEncryptionEnabledInput"></a>

```csharp
public bool|IResolvable TransitEncryptionEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="VpcSecurityGroupIdsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.vpcSecurityGroupIdsInput"></a>

```csharp
public string[] VpcSecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `AutoMinorVersionUpgrade`<sup>Required</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.autoMinorVersionUpgrade"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgrade { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AzMode`<sup>Required</sup> <a name="AzMode" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.azMode"></a>

```csharp
public string AzMode { get; }
```

- *Type:* string

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheNodeType"></a>

```csharp
public string CacheNodeType { get; }
```

- *Type:* string

---

##### `CacheParameterGroupName`<sup>Required</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheParameterGroupName"></a>

```csharp
public string CacheParameterGroupName { get; }
```

- *Type:* string

---

##### `CacheSecurityGroupNames`<sup>Required</sup> <a name="CacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSecurityGroupNames"></a>

```csharp
public string[] CacheSecurityGroupNames { get; }
```

- *Type:* string[]

---

##### `CacheSubnetGroupName`<sup>Required</sup> <a name="CacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.cacheSubnetGroupName"></a>

```csharp
public string CacheSubnetGroupName { get; }
```

- *Type:* string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.clusterName"></a>

```csharp
public string ClusterName { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `IpDiscovery`<sup>Required</sup> <a name="IpDiscovery" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.ipDiscovery"></a>

```csharp
public string IpDiscovery { get; }
```

- *Type:* string

---

##### `NetworkType`<sup>Required</sup> <a name="NetworkType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.networkType"></a>

```csharp
public string NetworkType { get; }
```

- *Type:* string

---

##### `NotificationTopicArn`<sup>Required</sup> <a name="NotificationTopicArn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.notificationTopicArn"></a>

```csharp
public string NotificationTopicArn { get; }
```

- *Type:* string

---

##### `NumCacheNodes`<sup>Required</sup> <a name="NumCacheNodes" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.numCacheNodes"></a>

```csharp
public double NumCacheNodes { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PreferredAvailabilityZone`<sup>Required</sup> <a name="PreferredAvailabilityZone" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZone"></a>

```csharp
public string PreferredAvailabilityZone { get; }
```

- *Type:* string

---

##### `PreferredAvailabilityZones`<sup>Required</sup> <a name="PreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredAvailabilityZones"></a>

```csharp
public string[] PreferredAvailabilityZones { get; }
```

- *Type:* string[]

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; }
```

- *Type:* string

---

##### `SnapshotArns`<sup>Required</sup> <a name="SnapshotArns" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotArns"></a>

```csharp
public string[] SnapshotArns { get; }
```

- *Type:* string[]

---

##### `SnapshotName`<sup>Required</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotName"></a>

```csharp
public string SnapshotName { get; }
```

- *Type:* string

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; }
```

- *Type:* double

---

##### `SnapshotWindow`<sup>Required</sup> <a name="SnapshotWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.snapshotWindow"></a>

```csharp
public string SnapshotWindow { get; }
```

- *Type:* string

---

##### `TransitEncryptionEnabled`<sup>Required</sup> <a name="TransitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.transitEncryptionEnabled"></a>

```csharp
public bool|IResolvable TransitEncryptionEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `VpcSecurityGroupIds`<sup>Required</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheCacheClusterConfig <a name="ElasticacheCacheClusterConfig" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CacheNodeType,
    string Engine,
    double NumCacheNodes,
    bool|IResolvable AutoMinorVersionUpgrade = null,
    string AzMode = null,
    string CacheParameterGroupName = null,
    string[] CacheSecurityGroupNames = null,
    string CacheSubnetGroupName = null,
    string ClusterName = null,
    string EngineVersion = null,
    string IpDiscovery = null,
    IResolvable|ElasticacheCacheClusterLogDeliveryConfigurations[] LogDeliveryConfigurations = null,
    string NetworkType = null,
    string NotificationTopicArn = null,
    double Port = null,
    string PreferredAvailabilityZone = null,
    string[] PreferredAvailabilityZones = null,
    string PreferredMaintenanceWindow = null,
    string[] SnapshotArns = null,
    string SnapshotName = null,
    double SnapshotRetentionLimit = null,
    string SnapshotWindow = null,
    IResolvable|ElasticacheCacheClusterTags[] Tags = null,
    bool|IResolvable TransitEncryptionEnabled = null,
    string[] VpcSecurityGroupIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheNodeType">CacheNodeType</a></code> | <code>string</code> | The compute and memory capacity of the nodes in the node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.engine">Engine</a></code> | <code>string</code> | The name of the cache engine to be used for this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.numCacheNodes">NumCacheNodes</a></code> | <code>double</code> | The number of cache nodes that the cache cluster should have. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.autoMinorVersionUpgrade">AutoMinorVersionUpgrade</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.azMode">AzMode</a></code> | <code>string</code> | Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>string</code> | The name of the parameter group to associate with this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheSecurityGroupNames">CacheSecurityGroupNames</a></code> | <code>string[]</code> | A list of security group names to associate with this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheSubnetGroupName">CacheSubnetGroupName</a></code> | <code>string</code> | The name of the subnet group to be used for the cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.clusterName">ClusterName</a></code> | <code>string</code> | A name for the cache cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | The version number of the cache engine to be used for this cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.ipDiscovery">IpDiscovery</a></code> | <code>string</code> | The Ip Discovery parameter for cachecluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.logDeliveryConfigurations">LogDeliveryConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations">ElasticacheCacheClusterLogDeliveryConfigurations</a>[]</code> | Specifies the destination, format and type of the logs. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.networkType">NetworkType</a></code> | <code>string</code> | The network type parameter for cachecluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.notificationTopicArn">NotificationTopicArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.port">Port</a></code> | <code>double</code> | The port number on which each of the cache nodes accepts connections. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredAvailabilityZone">PreferredAvailabilityZone</a></code> | <code>string</code> | The EC2 Availability Zone in which the cluster is created. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>string[]</code> | A list of the Availability Zones in which cache nodes are created. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>string</code> | Specifies the weekly time range during which maintenance on the cluster is performed. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotArns">SnapshotArns</a></code> | <code>string[]</code> | A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotName">SnapshotName</a></code> | <code>string</code> | The name of a Redis snapshot from which to restore data into the new node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | The number of days for which ElastiCache retains automatic snapshots before deleting them. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotWindow">SnapshotWindow</a></code> | <code>string</code> | The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard). |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags">ElasticacheCacheClusterTags</a>[]</code> | A list of tags to be added to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.transitEncryptionEnabled">TransitEncryptionEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A flag that enables in-transit encryption when set to true. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.vpcSecurityGroupIds">VpcSecurityGroupIds</a></code> | <code>string[]</code> | One or more VPC security groups associated with the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheNodeType"></a>

```csharp
public string CacheNodeType { get; set; }
```

- *Type:* string

The compute and memory capacity of the nodes in the node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#cache_node_type ElasticacheCacheCluster#cache_node_type}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

The name of the cache engine to be used for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#engine ElasticacheCacheCluster#engine}

---

##### `NumCacheNodes`<sup>Required</sup> <a name="NumCacheNodes" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.numCacheNodes"></a>

```csharp
public double NumCacheNodes { get; set; }
```

- *Type:* double

The number of cache nodes that the cache cluster should have.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#num_cache_nodes ElasticacheCacheCluster#num_cache_nodes}

---

##### `AutoMinorVersionUpgrade`<sup>Optional</sup> <a name="AutoMinorVersionUpgrade" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.autoMinorVersionUpgrade"></a>

```csharp
public bool|IResolvable AutoMinorVersionUpgrade { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#auto_minor_version_upgrade ElasticacheCacheCluster#auto_minor_version_upgrade}

---

##### `AzMode`<sup>Optional</sup> <a name="AzMode" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.azMode"></a>

```csharp
public string AzMode { get; set; }
```

- *Type:* string

Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#az_mode ElasticacheCacheCluster#az_mode}

---

##### `CacheParameterGroupName`<sup>Optional</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheParameterGroupName"></a>

```csharp
public string CacheParameterGroupName { get; set; }
```

- *Type:* string

The name of the parameter group to associate with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#cache_parameter_group_name ElasticacheCacheCluster#cache_parameter_group_name}

---

##### `CacheSecurityGroupNames`<sup>Optional</sup> <a name="CacheSecurityGroupNames" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheSecurityGroupNames"></a>

```csharp
public string[] CacheSecurityGroupNames { get; set; }
```

- *Type:* string[]

A list of security group names to associate with this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#cache_security_group_names ElasticacheCacheCluster#cache_security_group_names}

---

##### `CacheSubnetGroupName`<sup>Optional</sup> <a name="CacheSubnetGroupName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.cacheSubnetGroupName"></a>

```csharp
public string CacheSubnetGroupName { get; set; }
```

- *Type:* string

The name of the subnet group to be used for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#cache_subnet_group_name ElasticacheCacheCluster#cache_subnet_group_name}

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.clusterName"></a>

```csharp
public string ClusterName { get; set; }
```

- *Type:* string

A name for the cache cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#cluster_name ElasticacheCacheCluster#cluster_name}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

The version number of the cache engine to be used for this cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#engine_version ElasticacheCacheCluster#engine_version}

---

##### `IpDiscovery`<sup>Optional</sup> <a name="IpDiscovery" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.ipDiscovery"></a>

```csharp
public string IpDiscovery { get; set; }
```

- *Type:* string

The Ip Discovery parameter for cachecluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#ip_discovery ElasticacheCacheCluster#ip_discovery}

---

##### `LogDeliveryConfigurations`<sup>Optional</sup> <a name="LogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.logDeliveryConfigurations"></a>

```csharp
public IResolvable|ElasticacheCacheClusterLogDeliveryConfigurations[] LogDeliveryConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations">ElasticacheCacheClusterLogDeliveryConfigurations</a>[]

Specifies the destination, format and type of the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#log_delivery_configurations ElasticacheCacheCluster#log_delivery_configurations}

---

##### `NetworkType`<sup>Optional</sup> <a name="NetworkType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.networkType"></a>

```csharp
public string NetworkType { get; set; }
```

- *Type:* string

The network type parameter for cachecluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#network_type ElasticacheCacheCluster#network_type}

---

##### `NotificationTopicArn`<sup>Optional</sup> <a name="NotificationTopicArn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.notificationTopicArn"></a>

```csharp
public string NotificationTopicArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#notification_topic_arn ElasticacheCacheCluster#notification_topic_arn}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

The port number on which each of the cache nodes accepts connections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#port ElasticacheCacheCluster#port}

---

##### `PreferredAvailabilityZone`<sup>Optional</sup> <a name="PreferredAvailabilityZone" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredAvailabilityZone"></a>

```csharp
public string PreferredAvailabilityZone { get; set; }
```

- *Type:* string

The EC2 Availability Zone in which the cluster is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#preferred_availability_zone ElasticacheCacheCluster#preferred_availability_zone}

---

##### `PreferredAvailabilityZones`<sup>Optional</sup> <a name="PreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredAvailabilityZones"></a>

```csharp
public string[] PreferredAvailabilityZones { get; set; }
```

- *Type:* string[]

A list of the Availability Zones in which cache nodes are created.

The order of the zones in the list is not important.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#preferred_availability_zones ElasticacheCacheCluster#preferred_availability_zones}

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.preferredMaintenanceWindow"></a>

```csharp
public string PreferredMaintenanceWindow { get; set; }
```

- *Type:* string

Specifies the weekly time range during which maintenance on the cluster is performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#preferred_maintenance_window ElasticacheCacheCluster#preferred_maintenance_window}

---

##### `SnapshotArns`<sup>Optional</sup> <a name="SnapshotArns" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotArns"></a>

```csharp
public string[] SnapshotArns { get; set; }
```

- *Type:* string[]

A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#snapshot_arns ElasticacheCacheCluster#snapshot_arns}

---

##### `SnapshotName`<sup>Optional</sup> <a name="SnapshotName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotName"></a>

```csharp
public string SnapshotName { get; set; }
```

- *Type:* string

The name of a Redis snapshot from which to restore data into the new node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#snapshot_name ElasticacheCacheCluster#snapshot_name}

---

##### `SnapshotRetentionLimit`<sup>Optional</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; set; }
```

- *Type:* double

The number of days for which ElastiCache retains automatic snapshots before deleting them.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#snapshot_retention_limit ElasticacheCacheCluster#snapshot_retention_limit}

---

##### `SnapshotWindow`<sup>Optional</sup> <a name="SnapshotWindow" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.snapshotWindow"></a>

```csharp
public string SnapshotWindow { get; set; }
```

- *Type:* string

The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#snapshot_window ElasticacheCacheCluster#snapshot_window}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.tags"></a>

```csharp
public IResolvable|ElasticacheCacheClusterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags">ElasticacheCacheClusterTags</a>[]

A list of tags to be added to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#tags ElasticacheCacheCluster#tags}

---

##### `TransitEncryptionEnabled`<sup>Optional</sup> <a name="TransitEncryptionEnabled" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.transitEncryptionEnabled"></a>

```csharp
public bool|IResolvable TransitEncryptionEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#transit_encryption_enabled ElasticacheCacheCluster#transit_encryption_enabled}

---

##### `VpcSecurityGroupIds`<sup>Optional</sup> <a name="VpcSecurityGroupIds" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfig.property.vpcSecurityGroupIds"></a>

```csharp
public string[] VpcSecurityGroupIds { get; set; }
```

- *Type:* string[]

One or more VPC security groups associated with the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#vpc_security_group_ids ElasticacheCacheCluster#vpc_security_group_ids}

---

### ElasticacheCacheClusterConfigurationEndpoint <a name="ElasticacheCacheClusterConfigurationEndpoint" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterConfigurationEndpoint {

};
```


### ElasticacheCacheClusterLogDeliveryConfigurations <a name="ElasticacheCacheClusterLogDeliveryConfigurations" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterLogDeliveryConfigurations {
    ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails DestinationDetails = null,
    string DestinationType = null,
    string LogFormat = null,
    string LogType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.destinationDetails">DestinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a></code> | Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.destinationType">DestinationType</a></code> | <code>string</code> | Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.logFormat">LogFormat</a></code> | <code>string</code> | Valid values are either json or text. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.logType">LogType</a></code> | <code>string</code> | Valid value is either slow-log, which refers to slow-log or engine-log. |

---

##### `DestinationDetails`<sup>Optional</sup> <a name="DestinationDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.destinationDetails"></a>

```csharp
public ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails DestinationDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a>

Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#destination_details ElasticacheCacheCluster#destination_details}

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.destinationType"></a>

```csharp
public string DestinationType { get; set; }
```

- *Type:* string

Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#destination_type ElasticacheCacheCluster#destination_type}

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.logFormat"></a>

```csharp
public string LogFormat { get; set; }
```

- *Type:* string

Valid values are either json or text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#log_format ElasticacheCacheCluster#log_format}

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

Valid value is either slow-log, which refers to slow-log or engine-log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#log_type ElasticacheCacheCluster#log_type}

---

### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails {
    ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails CloudwatchLogsDetails = null,
    ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails KinesisFirehoseDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails">CloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | The configuration details of the CloudWatch Logs destination. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails">KinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | The configuration details of the Kinesis Data Firehose destination. |

---

##### `CloudwatchLogsDetails`<sup>Optional</sup> <a name="CloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails.property.cloudwatchLogsDetails"></a>

```csharp
public ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails CloudwatchLogsDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

The configuration details of the CloudWatch Logs destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#cloudwatch_logs_details ElasticacheCacheCluster#cloudwatch_logs_details}

---

##### `KinesisFirehoseDetails`<sup>Optional</sup> <a name="KinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails.property.kinesisFirehoseDetails"></a>

```csharp
public ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails KinesisFirehoseDetails { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

The configuration details of the Kinesis Data Firehose destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#kinesis_firehose_details ElasticacheCacheCluster#kinesis_firehose_details}

---

### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails {
    string LogGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup">LogGroup</a></code> | <code>string</code> | The name of the CloudWatch Logs log group. |

---

##### `LogGroup`<sup>Optional</sup> <a name="LogGroup" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails.property.logGroup"></a>

```csharp
public string LogGroup { get; set; }
```

- *Type:* string

The name of the CloudWatch Logs log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#log_group ElasticacheCacheCluster#log_group}

---

### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails {
    string DeliveryStream = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | The name of the Kinesis Data Firehose delivery stream. |

---

##### `DeliveryStream`<sup>Optional</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; set; }
```

- *Type:* string

The name of the Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#delivery_stream ElasticacheCacheCluster#delivery_stream}

---

### ElasticacheCacheClusterRedisEndpoint <a name="ElasticacheCacheClusterRedisEndpoint" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterRedisEndpoint {

};
```


### ElasticacheCacheClusterTags <a name="ElasticacheCacheClusterTags" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#key ElasticacheCacheCluster#key}. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#value ElasticacheCacheCluster#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#key ElasticacheCacheCluster#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_cache_cluster#value ElasticacheCacheCluster#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheCacheClusterConfigurationEndpointOutputReference <a name="ElasticacheCacheClusterConfigurationEndpointOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterConfigurationEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpoint">ElasticacheCacheClusterConfigurationEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpointOutputReference.property.internalValue"></a>

```csharp
public ElasticacheCacheClusterConfigurationEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterConfigurationEndpoint">ElasticacheCacheClusterConfigurationEndpoint</a>

---


### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup">ResetLogGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroup` <a name="ResetLogGroup" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.resetLogGroup"></a>

```csharp
private void ResetLogGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput">LogGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup">LogGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogGroupInput`<sup>Optional</sup> <a name="LogGroupInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroupInput"></a>

```csharp
public string LogGroupInput { get; }
```

- *Type:* string

---

##### `LogGroup`<sup>Required</sup> <a name="LogGroup" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.logGroup"></a>

```csharp
public string LogGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---


### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream">ResetDeliveryStream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeliveryStream` <a name="ResetDeliveryStream" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.resetDeliveryStream"></a>

```csharp
private void ResetDeliveryStream()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput">DeliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream">DeliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeliveryStreamInput`<sup>Optional</sup> <a name="DeliveryStreamInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStreamInput"></a>

```csharp
public string DeliveryStreamInput { get; }
```

- *Type:* string

---

##### `DeliveryStream`<sup>Required</sup> <a name="DeliveryStream" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.deliveryStream"></a>

```csharp
public string DeliveryStream { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---


### ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference <a name="ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails">PutCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails">PutKinesisFirehoseDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails">ResetCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails">ResetKinesisFirehoseDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudwatchLogsDetails` <a name="PutCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails"></a>

```csharp
private void PutCloudwatchLogsDetails(ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putCloudwatchLogsDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---

##### `PutKinesisFirehoseDetails` <a name="PutKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails"></a>

```csharp
private void PutKinesisFirehoseDetails(ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.putKinesisFirehoseDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---

##### `ResetCloudwatchLogsDetails` <a name="ResetCloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resetCloudwatchLogsDetails"></a>

```csharp
private void ResetCloudwatchLogsDetails()
```

##### `ResetKinesisFirehoseDetails` <a name="ResetKinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.resetKinesisFirehoseDetails"></a>

```csharp
private void ResetKinesisFirehoseDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails">CloudwatchLogsDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails">KinesisFirehoseDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput">CloudwatchLogsDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput">KinesisFirehoseDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogsDetails`<sup>Required</sup> <a name="CloudwatchLogsDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetails"></a>

```csharp
public ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference CloudwatchLogsDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetailsOutputReference</a>

---

##### `KinesisFirehoseDetails`<sup>Required</sup> <a name="KinesisFirehoseDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetails"></a>

```csharp
public ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference KinesisFirehoseDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetailsOutputReference</a>

---

##### `CloudwatchLogsDetailsInput`<sup>Optional</sup> <a name="CloudwatchLogsDetailsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.cloudwatchLogsDetailsInput"></a>

```csharp
public IResolvable|ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails CloudwatchLogsDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsCloudwatchLogsDetails</a>

---

##### `KinesisFirehoseDetailsInput`<sup>Optional</sup> <a name="KinesisFirehoseDetailsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.kinesisFirehoseDetailsInput"></a>

```csharp
public IResolvable|ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails KinesisFirehoseDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsKinesisFirehoseDetails</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a>

---


### ElasticacheCacheClusterLogDeliveryConfigurationsList <a name="ElasticacheCacheClusterLogDeliveryConfigurationsList" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterLogDeliveryConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.get"></a>

```csharp
private ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations">ElasticacheCacheClusterLogDeliveryConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheCacheClusterLogDeliveryConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations">ElasticacheCacheClusterLogDeliveryConfigurations</a>[]

---


### ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference <a name="ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.putDestinationDetails">PutDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetDestinationDetails">ResetDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationDetails` <a name="PutDestinationDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.putDestinationDetails"></a>

```csharp
private void PutDestinationDetails(ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.putDestinationDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a>

---

##### `ResetDestinationDetails` <a name="ResetDestinationDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetDestinationDetails"></a>

```csharp
private void ResetDestinationDetails()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetDestinationType"></a>

```csharp
private void ResetDestinationType()
```

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetLogFormat"></a>

```csharp
private void ResetLogFormat()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.resetLogType"></a>

```csharp
private void ResetLogType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationDetails">DestinationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput">DestinationDetailsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logFormat">LogFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations">ElasticacheCacheClusterLogDeliveryConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationDetails`<sup>Required</sup> <a name="DestinationDetails" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationDetails"></a>

```csharp
public ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference DestinationDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetailsOutputReference</a>

---

##### `DestinationDetailsInput`<sup>Optional</sup> <a name="DestinationDetailsInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationDetailsInput"></a>

```csharp
public IResolvable|ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails DestinationDetailsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails">ElasticacheCacheClusterLogDeliveryConfigurationsDestinationDetails</a>

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationTypeInput"></a>

```csharp
public string DestinationTypeInput { get; }
```

- *Type:* string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logFormatInput"></a>

```csharp
public string LogFormatInput { get; }
```

- *Type:* string

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logFormat"></a>

```csharp
public string LogFormat { get; }
```

- *Type:* string

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheCacheClusterLogDeliveryConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterLogDeliveryConfigurations">ElasticacheCacheClusterLogDeliveryConfigurations</a>

---


### ElasticacheCacheClusterRedisEndpointOutputReference <a name="ElasticacheCacheClusterRedisEndpointOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterRedisEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpoint">ElasticacheCacheClusterRedisEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpointOutputReference.property.internalValue"></a>

```csharp
public ElasticacheCacheClusterRedisEndpoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterRedisEndpoint">ElasticacheCacheClusterRedisEndpoint</a>

---


### ElasticacheCacheClusterTagsList <a name="ElasticacheCacheClusterTagsList" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.get"></a>

```csharp
private ElasticacheCacheClusterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags">ElasticacheCacheClusterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsList.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheCacheClusterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags">ElasticacheCacheClusterTags</a>[]

---


### ElasticacheCacheClusterTagsOutputReference <a name="ElasticacheCacheClusterTagsOutputReference" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheCacheClusterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags">ElasticacheCacheClusterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheCacheClusterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheCacheCluster.ElasticacheCacheClusterTags">ElasticacheCacheClusterTags</a>

---



