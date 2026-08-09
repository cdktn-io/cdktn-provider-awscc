# `elasticacheServerlessCache` Submodule <a name="`elasticacheServerlessCache` Submodule" id="@cdktn/provider-awscc.elasticacheServerlessCache"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheServerlessCache <a name="ElasticacheServerlessCache" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache awscc_elasticache_serverless_cache}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCache(Construct Scope, string Id, ElasticacheServerlessCacheConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig">ElasticacheServerlessCacheConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig">ElasticacheServerlessCacheConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits">PutCacheUsageLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putEndpoint">PutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putReaderEndpoint">PutReaderEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetCacheUsageLimits">ResetCacheUsageLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetDailySnapshotTime">ResetDailySnapshotTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetFinalSnapshotName">ResetFinalSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetMajorEngineVersion">ResetMajorEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetReaderEndpoint">ResetReaderEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotArnsToRestore">ResetSnapshotArnsToRestore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotRetentionLimit">ResetSnapshotRetentionLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetUserGroupId">ResetUserGroupId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCacheUsageLimits` <a name="PutCacheUsageLimits" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits"></a>

```csharp
private void PutCacheUsageLimits(ElasticacheServerlessCacheCacheUsageLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putCacheUsageLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>

---

##### `PutEndpoint` <a name="PutEndpoint" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putEndpoint"></a>

```csharp
private void PutEndpoint(ElasticacheServerlessCacheEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a>

---

##### `PutReaderEndpoint` <a name="PutReaderEndpoint" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putReaderEndpoint"></a>

```csharp
private void PutReaderEndpoint(ElasticacheServerlessCacheReaderEndpoint Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putReaderEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putTags"></a>

```csharp
private void PutTags(IResolvable|ElasticacheServerlessCacheTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags">ElasticacheServerlessCacheTags</a>[]

---

##### `ResetCacheUsageLimits` <a name="ResetCacheUsageLimits" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetCacheUsageLimits"></a>

```csharp
private void ResetCacheUsageLimits()
```

##### `ResetDailySnapshotTime` <a name="ResetDailySnapshotTime" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetDailySnapshotTime"></a>

```csharp
private void ResetDailySnapshotTime()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetFinalSnapshotName` <a name="ResetFinalSnapshotName" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetFinalSnapshotName"></a>

```csharp
private void ResetFinalSnapshotName()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetMajorEngineVersion` <a name="ResetMajorEngineVersion" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetMajorEngineVersion"></a>

```csharp
private void ResetMajorEngineVersion()
```

##### `ResetReaderEndpoint` <a name="ResetReaderEndpoint" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetReaderEndpoint"></a>

```csharp
private void ResetReaderEndpoint()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSnapshotArnsToRestore` <a name="ResetSnapshotArnsToRestore" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotArnsToRestore"></a>

```csharp
private void ResetSnapshotArnsToRestore()
```

##### `ResetSnapshotRetentionLimit` <a name="ResetSnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetSnapshotRetentionLimit"></a>

```csharp
private void ResetSnapshotRetentionLimit()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUserGroupId` <a name="ResetUserGroupId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.resetUserGroupId"></a>

```csharp
private void ResetUserGroupId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheServerlessCache resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheServerlessCache.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheServerlessCache.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheServerlessCache.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheServerlessCache.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ElasticacheServerlessCache resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheServerlessCache to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheServerlessCache that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheServerlessCache to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimits">CacheUsageLimits</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference">ElasticacheServerlessCacheCacheUsageLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference">ElasticacheServerlessCacheEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.fullEngineVersion">FullEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpoint">ReaderEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference">ElasticacheServerlessCacheReaderEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList">ElasticacheServerlessCacheTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimitsInput">CacheUsageLimitsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTimeInput">DailySnapshotTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpointInput">EndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.finalSnapshotNameInput">FinalSnapshotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersionInput">MajorEngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpointInput">ReaderEndpointInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.serverlessCacheNameInput">ServerlessCacheNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestoreInput">SnapshotArnsToRestoreInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimitInput">SnapshotRetentionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags">ElasticacheServerlessCacheTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupIdInput">UserGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTime">DailySnapshotTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersion">MajorEngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.serverlessCacheName">ServerlessCacheName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestore">SnapshotArnsToRestore</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupId">UserGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CacheUsageLimits`<sup>Required</sup> <a name="CacheUsageLimits" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimits"></a>

```csharp
public ElasticacheServerlessCacheCacheUsageLimitsOutputReference CacheUsageLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference">ElasticacheServerlessCacheCacheUsageLimitsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpoint"></a>

```csharp
public ElasticacheServerlessCacheEndpointOutputReference Endpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference">ElasticacheServerlessCacheEndpointOutputReference</a>

---

##### `FullEngineVersion`<sup>Required</sup> <a name="FullEngineVersion" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.fullEngineVersion"></a>

```csharp
public string FullEngineVersion { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ReaderEndpoint`<sup>Required</sup> <a name="ReaderEndpoint" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpoint"></a>

```csharp
public ElasticacheServerlessCacheReaderEndpointOutputReference ReaderEndpoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference">ElasticacheServerlessCacheReaderEndpointOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.tags"></a>

```csharp
public ElasticacheServerlessCacheTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList">ElasticacheServerlessCacheTagsList</a>

---

##### `CacheUsageLimitsInput`<sup>Optional</sup> <a name="CacheUsageLimitsInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.cacheUsageLimitsInput"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheCacheUsageLimits CacheUsageLimitsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>

---

##### `DailySnapshotTimeInput`<sup>Optional</sup> <a name="DailySnapshotTimeInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTimeInput"></a>

```csharp
public string DailySnapshotTimeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.endpointInput"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheEndpoint EndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a>

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `FinalSnapshotNameInput`<sup>Optional</sup> <a name="FinalSnapshotNameInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.finalSnapshotNameInput"></a>

```csharp
public string FinalSnapshotNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `MajorEngineVersionInput`<sup>Optional</sup> <a name="MajorEngineVersionInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersionInput"></a>

```csharp
public string MajorEngineVersionInput { get; }
```

- *Type:* string

---

##### `ReaderEndpointInput`<sup>Optional</sup> <a name="ReaderEndpointInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.readerEndpointInput"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheReaderEndpoint ReaderEndpointInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a>

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `ServerlessCacheNameInput`<sup>Optional</sup> <a name="ServerlessCacheNameInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.serverlessCacheNameInput"></a>

```csharp
public string ServerlessCacheNameInput { get; }
```

- *Type:* string

---

##### `SnapshotArnsToRestoreInput`<sup>Optional</sup> <a name="SnapshotArnsToRestoreInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestoreInput"></a>

```csharp
public string[] SnapshotArnsToRestoreInput { get; }
```

- *Type:* string[]

---

##### `SnapshotRetentionLimitInput`<sup>Optional</sup> <a name="SnapshotRetentionLimitInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimitInput"></a>

```csharp
public double SnapshotRetentionLimitInput { get; }
```

- *Type:* double

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.tagsInput"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags">ElasticacheServerlessCacheTags</a>[]

---

##### `UserGroupIdInput`<sup>Optional</sup> <a name="UserGroupIdInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupIdInput"></a>

```csharp
public string UserGroupIdInput { get; }
```

- *Type:* string

---

##### `DailySnapshotTime`<sup>Required</sup> <a name="DailySnapshotTime" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.dailySnapshotTime"></a>

```csharp
public string DailySnapshotTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `FinalSnapshotName`<sup>Required</sup> <a name="FinalSnapshotName" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.finalSnapshotName"></a>

```csharp
public string FinalSnapshotName { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MajorEngineVersion`<sup>Required</sup> <a name="MajorEngineVersion" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.majorEngineVersion"></a>

```csharp
public string MajorEngineVersion { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `ServerlessCacheName`<sup>Required</sup> <a name="ServerlessCacheName" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.serverlessCacheName"></a>

```csharp
public string ServerlessCacheName { get; }
```

- *Type:* string

---

##### `SnapshotArnsToRestore`<sup>Required</sup> <a name="SnapshotArnsToRestore" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotArnsToRestore"></a>

```csharp
public string[] SnapshotArnsToRestore { get; }
```

- *Type:* string[]

---

##### `SnapshotRetentionLimit`<sup>Required</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; }
```

- *Type:* double

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `UserGroupId`<sup>Required</sup> <a name="UserGroupId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.userGroupId"></a>

```csharp
public string UserGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCache.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheServerlessCacheCacheUsageLimits <a name="ElasticacheServerlessCacheCacheUsageLimits" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheCacheUsageLimits {
    ElasticacheServerlessCacheCacheUsageLimitsDataStorage DataStorage = null,
    ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond EcpuPerSecond = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.dataStorage">DataStorage</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a></code> | The cached data capacity of the Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.ecpuPerSecond">EcpuPerSecond</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a></code> | The ECPU per second of the Serverless Cache. |

---

##### `DataStorage`<sup>Optional</sup> <a name="DataStorage" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.dataStorage"></a>

```csharp
public ElasticacheServerlessCacheCacheUsageLimitsDataStorage DataStorage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>

The cached data capacity of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#data_storage ElasticacheServerlessCache#data_storage}

---

##### `EcpuPerSecond`<sup>Optional</sup> <a name="EcpuPerSecond" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits.property.ecpuPerSecond"></a>

```csharp
public ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond EcpuPerSecond { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>

The ECPU per second of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#ecpu_per_second ElasticacheServerlessCache#ecpu_per_second}

---

### ElasticacheServerlessCacheCacheUsageLimitsDataStorage <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorage" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheCacheUsageLimitsDataStorage {
    double Maximum = null,
    double Minimum = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.maximum">Maximum</a></code> | <code>double</code> | The maximum cached data capacity of the Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.minimum">Minimum</a></code> | <code>double</code> | The minimum cached data capacity of the Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.unit">Unit</a></code> | <code>string</code> | The unit of cached data capacity of the Serverless Cache. |

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.maximum"></a>

```csharp
public double Maximum { get; set; }
```

- *Type:* double

The maximum cached data capacity of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

The minimum cached data capacity of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The unit of cached data capacity of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#unit ElasticacheServerlessCache#unit}

---

### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond {
    double Maximum = null,
    double Minimum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.maximum">Maximum</a></code> | <code>double</code> | The maximum ECPU per second of the Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.minimum">Minimum</a></code> | <code>double</code> | The minimum ECPU per second of the Serverless Cache. |

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.maximum"></a>

```csharp
public double Maximum { get; set; }
```

- *Type:* double

The maximum ECPU per second of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#maximum ElasticacheServerlessCache#maximum}

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond.property.minimum"></a>

```csharp
public double Minimum { get; set; }
```

- *Type:* double

The minimum ECPU per second of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#minimum ElasticacheServerlessCache#minimum}

---

### ElasticacheServerlessCacheConfig <a name="ElasticacheServerlessCacheConfig" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Engine,
    string ServerlessCacheName,
    ElasticacheServerlessCacheCacheUsageLimits CacheUsageLimits = null,
    string DailySnapshotTime = null,
    string Description = null,
    ElasticacheServerlessCacheEndpoint Endpoint = null,
    string FinalSnapshotName = null,
    string KmsKeyId = null,
    string MajorEngineVersion = null,
    ElasticacheServerlessCacheReaderEndpoint ReaderEndpoint = null,
    string[] SecurityGroupIds = null,
    string[] SnapshotArnsToRestore = null,
    double SnapshotRetentionLimit = null,
    string[] SubnetIds = null,
    IResolvable|ElasticacheServerlessCacheTags[] Tags = null,
    string UserGroupId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.engine">Engine</a></code> | <code>string</code> | The engine name of the Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.serverlessCacheName">ServerlessCacheName</a></code> | <code>string</code> | The name of the Serverless Cache. This value must be unique. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.cacheUsageLimits">CacheUsageLimits</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a></code> | The cache capacity limit of the Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dailySnapshotTime">DailySnapshotTime</a></code> | <code>string</code> | The daily time range (in UTC) during which the service takes automatic snapshot of the Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.description">Description</a></code> | <code>string</code> | The description of the Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a></code> | The address and the port. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>string</code> | The final snapshot name which is taken before Serverless Cache is deleted. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The ID of the KMS key used to encrypt the cluster. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.majorEngineVersion">MajorEngineVersion</a></code> | <code>string</code> | The major engine version of the Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.readerEndpoint">ReaderEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a></code> | The address and the port. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | One or more Amazon VPC security groups associated with this Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotArnsToRestore">SnapshotArnsToRestore</a></code> | <code>string[]</code> | The ARN's of snapshot to restore Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotRetentionLimit">SnapshotRetentionLimit</a></code> | <code>double</code> | The snapshot retention limit of the Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The subnet id's of the Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags">ElasticacheServerlessCacheTags</a>[]</code> | An array of key-value pairs to apply to this Serverless Cache. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.userGroupId">UserGroupId</a></code> | <code>string</code> | The ID of the user group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

The engine name of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#engine ElasticacheServerlessCache#engine}

---

##### `ServerlessCacheName`<sup>Required</sup> <a name="ServerlessCacheName" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.serverlessCacheName"></a>

```csharp
public string ServerlessCacheName { get; set; }
```

- *Type:* string

The name of the Serverless Cache. This value must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#serverless_cache_name ElasticacheServerlessCache#serverless_cache_name}

---

##### `CacheUsageLimits`<sup>Optional</sup> <a name="CacheUsageLimits" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.cacheUsageLimits"></a>

```csharp
public ElasticacheServerlessCacheCacheUsageLimits CacheUsageLimits { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>

The cache capacity limit of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#cache_usage_limits ElasticacheServerlessCache#cache_usage_limits}

---

##### `DailySnapshotTime`<sup>Optional</sup> <a name="DailySnapshotTime" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.dailySnapshotTime"></a>

```csharp
public string DailySnapshotTime { get; set; }
```

- *Type:* string

The daily time range (in UTC) during which the service takes automatic snapshot of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#daily_snapshot_time ElasticacheServerlessCache#daily_snapshot_time}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#description ElasticacheServerlessCache#description}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.endpoint"></a>

```csharp
public ElasticacheServerlessCacheEndpoint Endpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a>

The address and the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#endpoint ElasticacheServerlessCache#endpoint}

---

##### `FinalSnapshotName`<sup>Optional</sup> <a name="FinalSnapshotName" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.finalSnapshotName"></a>

```csharp
public string FinalSnapshotName { get; set; }
```

- *Type:* string

The final snapshot name which is taken before Serverless Cache is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#final_snapshot_name ElasticacheServerlessCache#final_snapshot_name}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The ID of the KMS key used to encrypt the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#kms_key_id ElasticacheServerlessCache#kms_key_id}

---

##### `MajorEngineVersion`<sup>Optional</sup> <a name="MajorEngineVersion" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.majorEngineVersion"></a>

```csharp
public string MajorEngineVersion { get; set; }
```

- *Type:* string

The major engine version of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#major_engine_version ElasticacheServerlessCache#major_engine_version}

---

##### `ReaderEndpoint`<sup>Optional</sup> <a name="ReaderEndpoint" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.readerEndpoint"></a>

```csharp
public ElasticacheServerlessCacheReaderEndpoint ReaderEndpoint { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a>

The address and the port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#reader_endpoint ElasticacheServerlessCache#reader_endpoint}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

One or more Amazon VPC security groups associated with this Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#security_group_ids ElasticacheServerlessCache#security_group_ids}

---

##### `SnapshotArnsToRestore`<sup>Optional</sup> <a name="SnapshotArnsToRestore" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotArnsToRestore"></a>

```csharp
public string[] SnapshotArnsToRestore { get; set; }
```

- *Type:* string[]

The ARN's of snapshot to restore Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#snapshot_arns_to_restore ElasticacheServerlessCache#snapshot_arns_to_restore}

---

##### `SnapshotRetentionLimit`<sup>Optional</sup> <a name="SnapshotRetentionLimit" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.snapshotRetentionLimit"></a>

```csharp
public double SnapshotRetentionLimit { get; set; }
```

- *Type:* double

The snapshot retention limit of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#snapshot_retention_limit ElasticacheServerlessCache#snapshot_retention_limit}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The subnet id's of the Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#subnet_ids ElasticacheServerlessCache#subnet_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.tags"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags">ElasticacheServerlessCacheTags</a>[]

An array of key-value pairs to apply to this Serverless Cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#tags ElasticacheServerlessCache#tags}

---

##### `UserGroupId`<sup>Optional</sup> <a name="UserGroupId" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheConfig.property.userGroupId"></a>

```csharp
public string UserGroupId { get; set; }
```

- *Type:* string

The ID of the user group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#user_group_id ElasticacheServerlessCache#user_group_id}

---

### ElasticacheServerlessCacheEndpoint <a name="ElasticacheServerlessCacheEndpoint" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheEndpoint {

};
```


### ElasticacheServerlessCacheReaderEndpoint <a name="ElasticacheServerlessCacheReaderEndpoint" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheReaderEndpoint {

};
```


### ElasticacheServerlessCacheTags <a name="ElasticacheServerlessCacheTags" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#key ElasticacheServerlessCache#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/elasticache_serverless_cache#value ElasticacheServerlessCache#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximumInput">MaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximumInput"></a>

```csharp
public double MaximumInput { get; }
```

- *Type:* double

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheCacheUsageLimitsDataStorage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>

---


### ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMaximum"></a>

```csharp
private void ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximumInput">MaximumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimumInput">MinimumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum">Maximum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimum">Minimum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximumInput"></a>

```csharp
public double MaximumInput { get; }
```

- *Type:* double

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimumInput"></a>

```csharp
public double MinimumInput { get; }
```

- *Type:* double

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.maximum"></a>

```csharp
public double Maximum { get; }
```

- *Type:* double

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.minimum"></a>

```csharp
public double Minimum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>

---


### ElasticacheServerlessCacheCacheUsageLimitsOutputReference <a name="ElasticacheServerlessCacheCacheUsageLimitsOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheCacheUsageLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage">PutDataStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond">PutEcpuPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetDataStorage">ResetDataStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetEcpuPerSecond">ResetEcpuPerSecond</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataStorage` <a name="PutDataStorage" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage"></a>

```csharp
private void PutDataStorage(ElasticacheServerlessCacheCacheUsageLimitsDataStorage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putDataStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>

---

##### `PutEcpuPerSecond` <a name="PutEcpuPerSecond" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond"></a>

```csharp
private void PutEcpuPerSecond(ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.putEcpuPerSecond.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>

---

##### `ResetDataStorage` <a name="ResetDataStorage" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetDataStorage"></a>

```csharp
private void ResetDataStorage()
```

##### `ResetEcpuPerSecond` <a name="ResetEcpuPerSecond" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.resetEcpuPerSecond"></a>

```csharp
private void ResetEcpuPerSecond()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage">DataStorage</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference">ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond">EcpuPerSecond</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorageInput">DataStorageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecondInput">EcpuPerSecondInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataStorage`<sup>Required</sup> <a name="DataStorage" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorage"></a>

```csharp
public ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference DataStorage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference">ElasticacheServerlessCacheCacheUsageLimitsDataStorageOutputReference</a>

---

##### `EcpuPerSecond`<sup>Required</sup> <a name="EcpuPerSecond" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecond"></a>

```csharp
public ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference EcpuPerSecond { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecondOutputReference</a>

---

##### `DataStorageInput`<sup>Optional</sup> <a name="DataStorageInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.dataStorageInput"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheCacheUsageLimitsDataStorage DataStorageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsDataStorage">ElasticacheServerlessCacheCacheUsageLimitsDataStorage</a>

---

##### `EcpuPerSecondInput`<sup>Optional</sup> <a name="EcpuPerSecondInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.ecpuPerSecondInput"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond EcpuPerSecondInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond">ElasticacheServerlessCacheCacheUsageLimitsEcpuPerSecond</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheCacheUsageLimits InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheCacheUsageLimits">ElasticacheServerlessCacheCacheUsageLimits</a>

---


### ElasticacheServerlessCacheEndpointOutputReference <a name="ElasticacheServerlessCacheEndpointOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheEndpoint">ElasticacheServerlessCacheEndpoint</a>

---


### ElasticacheServerlessCacheReaderEndpointOutputReference <a name="ElasticacheServerlessCacheReaderEndpointOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheReaderEndpointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpointOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheReaderEndpoint InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheReaderEndpoint">ElasticacheServerlessCacheReaderEndpoint</a>

---


### ElasticacheServerlessCacheTagsList <a name="ElasticacheServerlessCacheTagsList" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.get"></a>

```csharp
private ElasticacheServerlessCacheTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags">ElasticacheServerlessCacheTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsList.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags">ElasticacheServerlessCacheTags</a>[]

---


### ElasticacheServerlessCacheTagsOutputReference <a name="ElasticacheServerlessCacheTagsOutputReference" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheServerlessCacheTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags">ElasticacheServerlessCacheTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheServerlessCacheTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheServerlessCache.ElasticacheServerlessCacheTags">ElasticacheServerlessCacheTags</a>

---



