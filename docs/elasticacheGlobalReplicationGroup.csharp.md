# `elasticacheGlobalReplicationGroup` Submodule <a name="`elasticacheGlobalReplicationGroup` Submodule" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticacheGlobalReplicationGroup <a name="ElasticacheGlobalReplicationGroup" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group awscc_elasticache_global_replication_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheGlobalReplicationGroup(Construct Scope, string Id, ElasticacheGlobalReplicationGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig">ElasticacheGlobalReplicationGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig">ElasticacheGlobalReplicationGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putMembers">PutMembers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putRegionalConfigurations">PutRegionalConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled">ResetAutomaticFailoverEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType">ResetCacheNodeType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheParameterGroupName">ResetCacheParameterGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngine">ResetEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion">ResetEngineVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalNodeGroupCount">ResetGlobalNodeGroupCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription">ResetGlobalReplicationGroupDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupIdSuffix">ResetGlobalReplicationGroupIdSuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetRegionalConfigurations">ResetRegionalConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMembers` <a name="PutMembers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putMembers"></a>

```csharp
private void PutMembers(IResolvable|ElasticacheGlobalReplicationGroupMembers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putMembers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>[]

---

##### `PutRegionalConfigurations` <a name="PutRegionalConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putRegionalConfigurations"></a>

```csharp
private void PutRegionalConfigurations(IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.putRegionalConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>[]

---

##### `ResetAutomaticFailoverEnabled` <a name="ResetAutomaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetAutomaticFailoverEnabled"></a>

```csharp
private void ResetAutomaticFailoverEnabled()
```

##### `ResetCacheNodeType` <a name="ResetCacheNodeType" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheNodeType"></a>

```csharp
private void ResetCacheNodeType()
```

##### `ResetCacheParameterGroupName` <a name="ResetCacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetCacheParameterGroupName"></a>

```csharp
private void ResetCacheParameterGroupName()
```

##### `ResetEngine` <a name="ResetEngine" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngine"></a>

```csharp
private void ResetEngine()
```

##### `ResetEngineVersion` <a name="ResetEngineVersion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetEngineVersion"></a>

```csharp
private void ResetEngineVersion()
```

##### `ResetGlobalNodeGroupCount` <a name="ResetGlobalNodeGroupCount" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalNodeGroupCount"></a>

```csharp
private void ResetGlobalNodeGroupCount()
```

##### `ResetGlobalReplicationGroupDescription` <a name="ResetGlobalReplicationGroupDescription" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupDescription"></a>

```csharp
private void ResetGlobalReplicationGroupDescription()
```

##### `ResetGlobalReplicationGroupIdSuffix` <a name="ResetGlobalReplicationGroupIdSuffix" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetGlobalReplicationGroupIdSuffix"></a>

```csharp
private void ResetGlobalReplicationGroupIdSuffix()
```

##### `ResetRegionalConfigurations` <a name="ResetRegionalConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.resetRegionalConfigurations"></a>

```csharp
private void ResetRegionalConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticacheGlobalReplicationGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheGlobalReplicationGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheGlobalReplicationGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheGlobalReplicationGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ElasticacheGlobalReplicationGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ElasticacheGlobalReplicationGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticacheGlobalReplicationGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticacheGlobalReplicationGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ElasticacheGlobalReplicationGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId">GlobalReplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.members">Members</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList">ElasticacheGlobalReplicationGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurations">RegionalConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput">AutomaticFailoverEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput">CacheNodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupNameInput">CacheParameterGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineInput">EngineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput">EngineVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCountInput">GlobalNodeGroupCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput">GlobalReplicationGroupDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput">GlobalReplicationGroupIdSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.membersInput">MembersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurationsInput">RegionalConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType">CacheNodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCount">GlobalNodeGroupCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription">GlobalReplicationGroupDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix">GlobalReplicationGroupIdSuffix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GlobalReplicationGroupId`<sup>Required</sup> <a name="GlobalReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupId"></a>

```csharp
public string GlobalReplicationGroupId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.members"></a>

```csharp
public ElasticacheGlobalReplicationGroupMembersList Members { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList">ElasticacheGlobalReplicationGroupMembersList</a>

---

##### `RegionalConfigurations`<sup>Required</sup> <a name="RegionalConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurations"></a>

```csharp
public ElasticacheGlobalReplicationGroupRegionalConfigurationsList RegionalConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `AutomaticFailoverEnabledInput`<sup>Optional</sup> <a name="AutomaticFailoverEnabledInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabledInput"></a>

```csharp
public bool|IResolvable AutomaticFailoverEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheNodeTypeInput`<sup>Optional</sup> <a name="CacheNodeTypeInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeTypeInput"></a>

```csharp
public string CacheNodeTypeInput { get; }
```

- *Type:* string

---

##### `CacheParameterGroupNameInput`<sup>Optional</sup> <a name="CacheParameterGroupNameInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupNameInput"></a>

```csharp
public string CacheParameterGroupNameInput { get; }
```

- *Type:* string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineInput"></a>

```csharp
public string EngineInput { get; }
```

- *Type:* string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersionInput"></a>

```csharp
public string EngineVersionInput { get; }
```

- *Type:* string

---

##### `GlobalNodeGroupCountInput`<sup>Optional</sup> <a name="GlobalNodeGroupCountInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCountInput"></a>

```csharp
public double GlobalNodeGroupCountInput { get; }
```

- *Type:* double

---

##### `GlobalReplicationGroupDescriptionInput`<sup>Optional</sup> <a name="GlobalReplicationGroupDescriptionInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescriptionInput"></a>

```csharp
public string GlobalReplicationGroupDescriptionInput { get; }
```

- *Type:* string

---

##### `GlobalReplicationGroupIdSuffixInput`<sup>Optional</sup> <a name="GlobalReplicationGroupIdSuffixInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffixInput"></a>

```csharp
public string GlobalReplicationGroupIdSuffixInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.membersInput"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupMembers[] MembersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>[]

---

##### `RegionalConfigurationsInput`<sup>Optional</sup> <a name="RegionalConfigurationsInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.regionalConfigurationsInput"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurations[] RegionalConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>[]

---

##### `AutomaticFailoverEnabled`<sup>Required</sup> <a name="AutomaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.automaticFailoverEnabled"></a>

```csharp
public bool|IResolvable AutomaticFailoverEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CacheNodeType`<sup>Required</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheNodeType"></a>

```csharp
public string CacheNodeType { get; }
```

- *Type:* string

---

##### `CacheParameterGroupName`<sup>Required</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.cacheParameterGroupName"></a>

```csharp
public string CacheParameterGroupName { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `GlobalNodeGroupCount`<sup>Required</sup> <a name="GlobalNodeGroupCount" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalNodeGroupCount"></a>

```csharp
public double GlobalNodeGroupCount { get; }
```

- *Type:* double

---

##### `GlobalReplicationGroupDescription`<sup>Required</sup> <a name="GlobalReplicationGroupDescription" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupDescription"></a>

```csharp
public string GlobalReplicationGroupDescription { get; }
```

- *Type:* string

---

##### `GlobalReplicationGroupIdSuffix`<sup>Required</sup> <a name="GlobalReplicationGroupIdSuffix" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.globalReplicationGroupIdSuffix"></a>

```csharp
public string GlobalReplicationGroupIdSuffix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticacheGlobalReplicationGroupConfig <a name="ElasticacheGlobalReplicationGroupConfig" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheGlobalReplicationGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|ElasticacheGlobalReplicationGroupMembers[] Members,
    bool|IResolvable AutomaticFailoverEnabled = null,
    string CacheNodeType = null,
    string CacheParameterGroupName = null,
    string Engine = null,
    string EngineVersion = null,
    double GlobalNodeGroupCount = null,
    string GlobalReplicationGroupDescription = null,
    string GlobalReplicationGroupIdSuffix = null,
    IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurations[] RegionalConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.members">Members</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>[]</code> | The replication groups that comprise the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled">AutomaticFailoverEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | AutomaticFailoverEnabled. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType">CacheNodeType</a></code> | <code>string</code> | The cache node type of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheParameterGroupName">CacheParameterGroupName</a></code> | <code>string</code> | Cache parameter group name to use for the new engine version. This parameter cannot be modified independently. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engine">Engine</a></code> | <code>string</code> | The engine of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion">EngineVersion</a></code> | <code>string</code> | The engine version of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalNodeGroupCount">GlobalNodeGroupCount</a></code> | <code>double</code> | Indicates the number of node groups in the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription">GlobalReplicationGroupDescription</a></code> | <code>string</code> | The optional description of the Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix">GlobalReplicationGroupIdSuffix</a></code> | <code>string</code> | The suffix name of a Global Datastore. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.regionalConfigurations">RegionalConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>[]</code> | Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.members"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupMembers[] Members { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>[]

The replication groups that comprise the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#members ElasticacheGlobalReplicationGroup#members}

---

##### `AutomaticFailoverEnabled`<sup>Optional</sup> <a name="AutomaticFailoverEnabled" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.automaticFailoverEnabled"></a>

```csharp
public bool|IResolvable AutomaticFailoverEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

AutomaticFailoverEnabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#automatic_failover_enabled ElasticacheGlobalReplicationGroup#automatic_failover_enabled}

---

##### `CacheNodeType`<sup>Optional</sup> <a name="CacheNodeType" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheNodeType"></a>

```csharp
public string CacheNodeType { get; set; }
```

- *Type:* string

The cache node type of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#cache_node_type ElasticacheGlobalReplicationGroup#cache_node_type}

---

##### `CacheParameterGroupName`<sup>Optional</sup> <a name="CacheParameterGroupName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.cacheParameterGroupName"></a>

```csharp
public string CacheParameterGroupName { get; set; }
```

- *Type:* string

Cache parameter group name to use for the new engine version. This parameter cannot be modified independently.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#cache_parameter_group_name ElasticacheGlobalReplicationGroup#cache_parameter_group_name}

---

##### `Engine`<sup>Optional</sup> <a name="Engine" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engine"></a>

```csharp
public string Engine { get; set; }
```

- *Type:* string

The engine of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#engine ElasticacheGlobalReplicationGroup#engine}

---

##### `EngineVersion`<sup>Optional</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.engineVersion"></a>

```csharp
public string EngineVersion { get; set; }
```

- *Type:* string

The engine version of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#engine_version ElasticacheGlobalReplicationGroup#engine_version}

---

##### `GlobalNodeGroupCount`<sup>Optional</sup> <a name="GlobalNodeGroupCount" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalNodeGroupCount"></a>

```csharp
public double GlobalNodeGroupCount { get; set; }
```

- *Type:* double

Indicates the number of node groups in the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#global_node_group_count ElasticacheGlobalReplicationGroup#global_node_group_count}

---

##### `GlobalReplicationGroupDescription`<sup>Optional</sup> <a name="GlobalReplicationGroupDescription" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupDescription"></a>

```csharp
public string GlobalReplicationGroupDescription { get; set; }
```

- *Type:* string

The optional description of the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#global_replication_group_description ElasticacheGlobalReplicationGroup#global_replication_group_description}

---

##### `GlobalReplicationGroupIdSuffix`<sup>Optional</sup> <a name="GlobalReplicationGroupIdSuffix" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.globalReplicationGroupIdSuffix"></a>

```csharp
public string GlobalReplicationGroupIdSuffix { get; set; }
```

- *Type:* string

The suffix name of a Global Datastore.

Amazon ElastiCache automatically applies a prefix to the Global Datastore ID when it is created. Each AWS Region has its own prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#global_replication_group_id_suffix ElasticacheGlobalReplicationGroup#global_replication_group_id_suffix}

---

##### `RegionalConfigurations`<sup>Optional</sup> <a name="RegionalConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupConfig.property.regionalConfigurations"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurations[] RegionalConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>[]

Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#regional_configurations ElasticacheGlobalReplicationGroup#regional_configurations}

---

### ElasticacheGlobalReplicationGroupMembers <a name="ElasticacheGlobalReplicationGroupMembers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheGlobalReplicationGroupMembers {
    string ReplicationGroupId = null,
    string ReplicationGroupRegion = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupId">ReplicationGroupId</a></code> | <code>string</code> | Regionally unique identifier for the member i.e. ReplicationGroupId. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>string</code> | The AWS region of the Global Datastore member. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.role">Role</a></code> | <code>string</code> | Indicates the role of the member, primary or secondary. |

---

##### `ReplicationGroupId`<sup>Optional</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupId"></a>

```csharp
public string ReplicationGroupId { get; set; }
```

- *Type:* string

Regionally unique identifier for the member i.e. ReplicationGroupId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#replication_group_id ElasticacheGlobalReplicationGroup#replication_group_id}

---

##### `ReplicationGroupRegion`<sup>Optional</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.replicationGroupRegion"></a>

```csharp
public string ReplicationGroupRegion { get; set; }
```

- *Type:* string

The AWS region of the Global Datastore member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#replication_group_region ElasticacheGlobalReplicationGroup#replication_group_region}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Indicates the role of the member, primary or secondary.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#role ElasticacheGlobalReplicationGroup#role}

---

### ElasticacheGlobalReplicationGroupRegionalConfigurations <a name="ElasticacheGlobalReplicationGroupRegionalConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheGlobalReplicationGroupRegionalConfigurations {
    string ReplicationGroupId = null,
    string ReplicationGroupRegion = null,
    IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations[] ReshardingConfigurations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupId">ReplicationGroupId</a></code> | <code>string</code> | The replication group id of the Global Datastore member. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>string</code> | The AWS region of the Global Datastore member. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.reshardingConfigurations">ReshardingConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>[]</code> | A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster. |

---

##### `ReplicationGroupId`<sup>Optional</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupId"></a>

```csharp
public string ReplicationGroupId { get; set; }
```

- *Type:* string

The replication group id of the Global Datastore member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#replication_group_id ElasticacheGlobalReplicationGroup#replication_group_id}

---

##### `ReplicationGroupRegion`<sup>Optional</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.replicationGroupRegion"></a>

```csharp
public string ReplicationGroupRegion { get; set; }
```

- *Type:* string

The AWS region of the Global Datastore member.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#replication_group_region ElasticacheGlobalReplicationGroup#replication_group_region}

---

##### `ReshardingConfigurations`<sup>Optional</sup> <a name="ReshardingConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations.property.reshardingConfigurations"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations[] ReshardingConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>[]

A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#resharding_configurations ElasticacheGlobalReplicationGroup#resharding_configurations}

---

### ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations {
    string NodeGroupId = null,
    string[] PreferredAvailabilityZones = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.nodeGroupId">NodeGroupId</a></code> | <code>string</code> | Unique identifier for the Node Group. This is either auto-generated by ElastiCache (4-digit id) or a user supplied id. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>string[]</code> | A list of preferred availability zones for the nodes of new node groups. |

---

##### `NodeGroupId`<sup>Optional</sup> <a name="NodeGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.nodeGroupId"></a>

```csharp
public string NodeGroupId { get; set; }
```

- *Type:* string

Unique identifier for the Node Group. This is either auto-generated by ElastiCache (4-digit id) or a user supplied id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#node_group_id ElasticacheGlobalReplicationGroup#node_group_id}

---

##### `PreferredAvailabilityZones`<sup>Optional</sup> <a name="PreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations.property.preferredAvailabilityZones"></a>

```csharp
public string[] PreferredAvailabilityZones { get; set; }
```

- *Type:* string[]

A list of preferred availability zones for the nodes of new node groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticache_global_replication_group#preferred_availability_zones ElasticacheGlobalReplicationGroup#preferred_availability_zones}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticacheGlobalReplicationGroupMembersList <a name="ElasticacheGlobalReplicationGroupMembersList" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheGlobalReplicationGroupMembersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.get"></a>

```csharp
private ElasticacheGlobalReplicationGroupMembersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersList.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupMembers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>[]

---


### ElasticacheGlobalReplicationGroupMembersOutputReference <a name="ElasticacheGlobalReplicationGroupMembersOutputReference" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheGlobalReplicationGroupMembersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupId">ResetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupRegion">ResetReplicationGroupRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReplicationGroupId` <a name="ResetReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupId"></a>

```csharp
private void ResetReplicationGroupId()
```

##### `ResetReplicationGroupRegion` <a name="ResetReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetReplicationGroupRegion"></a>

```csharp
private void ResetReplicationGroupRegion()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupIdInput">ReplicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegionInput">ReplicationGroupRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupId">ReplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReplicationGroupIdInput`<sup>Optional</sup> <a name="ReplicationGroupIdInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupIdInput"></a>

```csharp
public string ReplicationGroupIdInput { get; }
```

- *Type:* string

---

##### `ReplicationGroupRegionInput`<sup>Optional</sup> <a name="ReplicationGroupRegionInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegionInput"></a>

```csharp
public string ReplicationGroupRegionInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupId"></a>

```csharp
public string ReplicationGroupId { get; }
```

- *Type:* string

---

##### `ReplicationGroupRegion`<sup>Required</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.replicationGroupRegion"></a>

```csharp
public string ReplicationGroupRegion { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupMembers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupMembers">ElasticacheGlobalReplicationGroupMembers</a>

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsList <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsList" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheGlobalReplicationGroupRegionalConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.get"></a>

```csharp
private ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>[]

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.putReshardingConfigurations">PutReshardingConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupId">ResetReplicationGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupRegion">ResetReplicationGroupRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReshardingConfigurations">ResetReshardingConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReshardingConfigurations` <a name="PutReshardingConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.putReshardingConfigurations"></a>

```csharp
private void PutReshardingConfigurations(IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.putReshardingConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>[]

---

##### `ResetReplicationGroupId` <a name="ResetReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupId"></a>

```csharp
private void ResetReplicationGroupId()
```

##### `ResetReplicationGroupRegion` <a name="ResetReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReplicationGroupRegion"></a>

```csharp
private void ResetReplicationGroupRegion()
```

##### `ResetReshardingConfigurations` <a name="ResetReshardingConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.resetReshardingConfigurations"></a>

```csharp
private void ResetReshardingConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurations">ReshardingConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupIdInput">ReplicationGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegionInput">ReplicationGroupRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurationsInput">ReshardingConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupId">ReplicationGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegion">ReplicationGroupRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReshardingConfigurations`<sup>Required</sup> <a name="ReshardingConfigurations" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurations"></a>

```csharp
public ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList ReshardingConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList</a>

---

##### `ReplicationGroupIdInput`<sup>Optional</sup> <a name="ReplicationGroupIdInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupIdInput"></a>

```csharp
public string ReplicationGroupIdInput { get; }
```

- *Type:* string

---

##### `ReplicationGroupRegionInput`<sup>Optional</sup> <a name="ReplicationGroupRegionInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegionInput"></a>

```csharp
public string ReplicationGroupRegionInput { get; }
```

- *Type:* string

---

##### `ReshardingConfigurationsInput`<sup>Optional</sup> <a name="ReshardingConfigurationsInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.reshardingConfigurationsInput"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations[] ReshardingConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>[]

---

##### `ReplicationGroupId`<sup>Required</sup> <a name="ReplicationGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupId"></a>

```csharp
public string ReplicationGroupId { get; }
```

- *Type:* string

---

##### `ReplicationGroupRegion`<sup>Required</sup> <a name="ReplicationGroupRegion" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.replicationGroupRegion"></a>

```csharp
public string ReplicationGroupRegion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurations</a>

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get"></a>

```csharp
private ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>[]

---


### ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference <a name="ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetNodeGroupId">ResetNodeGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetPreferredAvailabilityZones">ResetPreferredAvailabilityZones</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNodeGroupId` <a name="ResetNodeGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetNodeGroupId"></a>

```csharp
private void ResetNodeGroupId()
```

##### `ResetPreferredAvailabilityZones` <a name="ResetPreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.resetPreferredAvailabilityZones"></a>

```csharp
private void ResetPreferredAvailabilityZones()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupIdInput">NodeGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZonesInput">PreferredAvailabilityZonesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupId">NodeGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZones">PreferredAvailabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeGroupIdInput`<sup>Optional</sup> <a name="NodeGroupIdInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupIdInput"></a>

```csharp
public string NodeGroupIdInput { get; }
```

- *Type:* string

---

##### `PreferredAvailabilityZonesInput`<sup>Optional</sup> <a name="PreferredAvailabilityZonesInput" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZonesInput"></a>

```csharp
public string[] PreferredAvailabilityZonesInput { get; }
```

- *Type:* string[]

---

##### `NodeGroupId`<sup>Required</sup> <a name="NodeGroupId" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.nodeGroupId"></a>

```csharp
public string NodeGroupId { get; }
```

- *Type:* string

---

##### `PreferredAvailabilityZones`<sup>Required</sup> <a name="PreferredAvailabilityZones" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.preferredAvailabilityZones"></a>

```csharp
public string[] PreferredAvailabilityZones { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.elasticacheGlobalReplicationGroup.ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations">ElasticacheGlobalReplicationGroupRegionalConfigurationsReshardingConfigurations</a>

---



